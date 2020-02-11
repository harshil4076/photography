const express = require('express');
const Images = require("../../models/images");
const Category = require("../../models/category");
const User = require("../../models/user");
const jwt = require("jsonwebtoken");
const { isLoggedin } = require('../../middleware/auth');

const router = express.Router();
//auth registration

router.post("/api/admin/signup", async (req, res) => {
   try{
        let user = await User.create(req.body);
        let { id, username } = user;
        let token = jwt.sign({
           id,
           username
        }, process.env.SECRET_KEY);
        res.status(200).json({ id, username, token})
   }catch(err){
    return res.send(err)
   }
});
router.post("/api/admin/signin", async (req, res) => {
   try{
      let user = await User.findOne({
         username: req.body.username
      });
      let { id, username } = user;
      let isMatch = await user.comparePassword(req.body.password);
      if(isMatch){
         let token = jwt.sign({
            id,
            username
         }, process.env.SECRET_KEY);
         return res.status(200).json({ id, username, token });
      }else{
         res.status(400).text("invalid password")
      }
   }catch(err){
      res.send(err);
   }
});

// adding image Category route

router.post("/api/admin/addcategory", isLoggedin, async function (req, res){
   try{
      let newCategory = await Category.create(req.body);
      let { id, category } = newCategory;
      res.status(200).json({ id, category })
   }catch(err){
      res.send(err);
   }
});

// adding new image

router.post("/api/admin/addimage", isLoggedin, async function (req, res){
   try{
      let newImage = await Images.create(req.body);
      
      res.status(200).json(newImage);
   }
   catch(err){
      res.status(400).json(err);
   }
});

router.get("/api/admin/allimages", isLoggedin, async function (req, res){
   try{
      let images = await Images.find()
         .sort({ createdAt: "desc" });
         // .populate("category", { category: true });
      res.status(200).json(images);
      
   }catch(err){
      res.status(400).json(err)
   }
});
//edit image

router.put("/api/admin/:id/editimage", isLoggedin, async (req, res) => {
   try{
      await Images.findByIdAndUpdate(req.params.id, req.body,{new: true}, function(err, updatedimg ){
         res.status(200).json(updatedimg);   
      });
   }catch(err){
      res.status(400).json(err);
   }
})

//delete image
router.delete("/api/admin/:id/deleteimage", isLoggedin, async (req, res) => {
   try{
      await Images.findByIdAndDelete(req.params.id);
      res.status(200).json({deleted})   
   }catch (err){
      res.json(err);
   }
});


//auth login & logout logic
// router.get("api/login", function(req, res){
//     res.render("login.ejs")
// });
// router.post("/login",passport.authenticate("local", {
//     failureRedirect: "./login"
// }), function(req,res){
//     Category.find
// });
// router.get("/logout", function(req,res){
// 	req.logout();
	
// 	res.redirect("/admin");
// });

// // admin

// router.get("/category", (req, res) => {
//     Category.find({}, (err, category) => {
//         res.send(categoryTemplate(category));
//     })
// });

// router.post("/category", (req, res) => {
//     const newCategory = req.body.category;
//     const category = {
//         category: newCategory
//     }
//     Category.create(category, (err, newCategorry) => {
//         if (err){
//             console.log(err)
//         }else{
//             res.redirect("/category");
//         }
//     })
// });

// router.get("/newimage",isLoggedIn, function(req, res){
//     Category.find({}, (err, Category) => {
//         res.send(newimageTemplate({currentUser:req.user, Category}));
//     })
// });

// router.post("/newimage",isLoggedIn, function(req,res){
// var category = req.body.category;
//     name = req.body.name;
//     image= req.body.image;
//     description= req.body.description;
// var newImage = {category:category , name:name, image:image, description:description};
// Images.create(newImage , function(err, newlyCreated){
// if(err){
//     console.log(err);
// }
// res.redirect("/newimage");
// });
// });

// router.get("/displayimages",isLoggedIn, function(req, res){
//     Images.find({}, function(err,images){
//         if(err){
//             console.log(err);
//         }
//         else{
//             res.render("displayimages.ejs", {images:images , currentUser:req.user});
//         }
//     });
// });

// router.get("/displayimages/:id", isLoggedIn, function(req,res){
//     Images.findById(req.params.id, function(err,foundImage){
//         if(err){
//             console.log(err);
//         }
//         else{
//             res.render("openimage.ejs", {image:foundImage, currentUser:req.user});
//         }
//     });});

// router.delete("/displayimages/:id", isLoggedIn, function(req,res){
//     Images.findByIdAndDelete(req.params.id, function(err){
//         console.log(err);

//     });
//     res.redirect("/displayimages");
// });

// function isLoggedIn(req, res, next){
// if (req.isAuthenticated()){
//     return next();
//     }
//     res.redirect("/login");
// }

module.exports = router;