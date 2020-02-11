var mongoose = require("mongoose");

var imagesSchema = new mongoose.Schema({
    category:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category"
            },
    name: String,
    image: String,
    description: String
},
{
    timestamps: true
}
);

module.exports = mongoose.model("Images", imagesSchema);