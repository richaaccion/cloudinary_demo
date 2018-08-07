var cloudinary = require('cloudinary');
var config = require('./config');

var cloudinaryWrapper = function() {
	this.config = config;
}

cloudinaryWrapper.prototype.init = function() {
	this.setConfig();
}

cloudinaryWrapper.prototype.setConfig = function(config) {
	cloudinary.config(config);
}

cloudinaryWrapper.prototype.getProperties = function(propName) {
	return this.config[propName] || "invalid_property";
}

cloudinaryWrapper.prototype.getConfig = function() {
	return this.config;
}

cloudinaryWrapper.prototype.addSource = function(sourceName) {
	this.config.sources.push(sourceName);
	this.setConfig(this.config);
}

module.exports = new cloudinaryWrapper();