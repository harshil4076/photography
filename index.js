require("dotenv").config();
const express = require("express")
const app = express();
var http = require('http').createServer(app);
const cors = require("cors")
const path = require('path');
const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
// const adminRoutes = require('./routes/admin/admin');
// const Category = require('./models/category')
const io = require('socket.io')(http);

// const url = process.env.DATABASEURL || "mongodb://localhost:27017/hk_photo" 
// mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '/client/build')));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});

// app.use(adminRoutes);
// getting all category
// app.get("/api/allcategory", async (req, res) => {
// 	try{
// 		let allcategory = await Category.find();
// 		// let { category } = allcategory;
// 		res.status(200).json(allcategory);
// 	}catch(err){
// 		res.send(err);
// 	}
// })

io.on('connection', function(socket){
	console.log('a user connected');
	socket.on('send-chat-message', message => {
		socket.broadcast.emit('chat-message', message? message : "heyyy!!!!")
	})
})

var port = process.env.PORT || 3001;
http.listen(port, process.env.IP, function(){

	console.log("Photography has started" + port);
})