var mongoose = require("mongoose");

var imagesSchema = new mongoose.Schema({
    category: String,
    name: String,
    image: String,
    description: String
});

module.exports = mongoose.model("Images", imagesSchema);