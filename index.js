require("dotenv").config();
const express = require("express")
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '/client/build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});


const port = process.env.PORT || 3001;
app.listen(port, process.env.IP, function(){

	console.log("Photography has started" + port);
})