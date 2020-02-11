var mongoose = require('mongoose');

var categorySchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model("Category", categorySchema);