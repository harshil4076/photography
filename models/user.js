const mongoose = require("mongoose");
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    } 
});

 UserSchema.pre('save', async function(next){
     try{
        if(!this.isModified("password")){
            return next();
        }
        let hashedPassword = await bcrypt.hash(this.password, 10);
        this.password = hashedPassword;
        return next();
     }catch(err){
        return next(err);
     }
 } );

 UserSchema.methods.comparePassword = async function(candidatePassword, next){
     try{
        let isMatch = await bcrypt.compare(candidatePassword, this.password);
      console.log(isMatch);
        
        return isMatch;
     }catch(err){
        return next(err);
     }
 }

module.exports = mongoose.model("User", UserSchema);