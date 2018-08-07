var express = require('express');

var cloudinaryWrapper = require('./cloudinaryWrapper');

cloudinaryWrapper.init();

var app = express();


function startApp() {
	app.listen(3002);

	app.use(function (req, res, next) {

	    // Website you wish to allow to connect
	    res.setHeader('Access-Control-Allow-Origin', '*');

	    // Request methods you wish to allow
	    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

	    // Request headers you wish to allow
	    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

	    // Set to true if you need the website to include cookies in the requests sent
	    // to the API (e.g. in case you use sessions)
	    res.setHeader('Access-Control-Allow-Credentials', true);

	    // Pass to next layer of middleware
	    next();
	});

	app.get("/cloudname", (req, res) => {
		res.send(cloudinaryWrapper.getProperties('cloud_name'));
	});

	app.get("/addsource", (req, res) => {
		cloudinaryWrapper.addSource("google_photos");
		res.send("added successfully!");
	});	

	app.get("/getconfig", (req, res) => {
		res.send(cloudinaryWrapper.getConfig());
	})
}

// function initCloudinary() {
// 	cloudinary.config({
// 		cloud_name: 'dcyeezw84',
// 		api_key: '291542359784845',
// 		api_secret: 'mwEJLIuDQc3WzCAcAs9BMgYE7B0'
// 	});
// }

// function uploadCloudinary() {
// 	cloudinary.uploader.upload("./businessman.jpg", (result) => {
// 		console.log("file uploaded");
// 		console.log(result);
// 	});
// }

// initCloudinary();

// uploadCloudinary();

startApp();