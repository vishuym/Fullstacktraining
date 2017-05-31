
var filename= "index.js";

var hello = function(name) {
	// body...

	console.log("Hello "+name);
}

var intro = function() {
	// body...

	console.log("i'm a node file called , "+filename);
}


module.exports ={
hello:hello,
intro:intro

};