var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var passport = require("passport");
var LocalStrategy = require("passport-local");
var User = require("./models/user");
var Images = require("./models/images");
var methodOverride = require("method-override");



var url = process.env.DATABASEURL || "mongodb://localhost:27017/hk_photo" 
mongoose.connect(url, { useNewUrlParser: true });


app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine" , "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));

app.use(require("express-session")({
	secret:"Lets take a picture",
	resave: false,
	saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/", function(req, res){
    Images.find({}, function(err,images){
        if(err){
            console.log(err);
        }
        else{
            res.render("landing.ejs", {images:images});
        }

    });
    
});
app.get("/contact", function(req, res){
    res.render("contact.ejs")
});



//auth registration
app.get("/register", function(req, res){
    res.render("register.ejs")
});

app.post("/register", function(req, res){
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            console.log(err);
        }
        passport.authenticate("local")(req, res, function(){
            console.log(user.username);
            res.redirect("/admin");
        });

    });
});

//auth login logic
app.get("/login", function(req, res){
    
    res.render("login.ejs")
});
app.post("/login",passport.authenticate("local", {
    failureRedirect: "./login"
}), function(req,res){
    res.redirect("/admin");
});
app.get("/logout", function(req,res){
	req.logout();
	
	res.redirect("/admin");

});
// admin
app.get("/admin", function(req, res){
    
    res.render("admin.ejs",{currentUser:req.user});
});
app.get("/newimage",isLoggedIn, function(req, res){
    res.render("newimage.ejs",{currentUser:req.user});
});

app.post("/newimage",isLoggedIn, function(req,res){
var category = req.body.category;
    name = req.body.name;
    image= req.body.image;
    description= req.body.description;
var newImage = {category:category , name:name, image:image, description:description};
Images.create(newImage , function(err, newlyCreated){
if(err){
    console.log(err);
}
console.log(newlyCreated);
res.redirect("/newimage");
});
});

app.get("/displayimages",isLoggedIn, function(req, res){
    Images.find({}, function(err,images){
        if(err){
            console.log(err);
        }
        else{
            res.render("displayimages.ejs", {images:images , currentUser:req.user});
        }

    });

});

app.get("/displayimages/:id", isLoggedIn, function(req,res){
    Images.findById(req.params.id, function(err,foundImage){
        if(err){
            console.log(err);
        }
        else{
            console.log(foundImage);
            res.render("openimage.ejs", {image:foundImage, currentUser:req.user});
        }

    });});

app.delete("/displayimages/:id", isLoggedIn, function(req,res){
    Images.findByIdAndDelete(req.params.id, function(err){
        console.log(err);

    });
    res.redirect("/displayimages");
});

function isLoggedIn(req, res, next){
if (req.isAuthenticated()){
    return next();
    }
    res.redirect("/login");
}

var port = process.env.PORT || 3000;
app.listen(port, process.env.IP, function(){

	console.log("Photography has started" + port);
})