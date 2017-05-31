var mongoose = require('mongoose');
var dburl='mongodb://localhost:27017/meanhotel';

mongoose.connect(dburl);


mongoose.connection.on('connected',function(){
console.log('Mongoose Connected to '+ dburl);
});


mongoose.connection.on('disconnected',function(){
console.log('Mongoose Disconnected');
});


mongoose.connection.on('error',function(){
console.log('Mongoose Connection error : '+ err);
});

process.on('SIGINT',function(){

mongoose.connection.close(function(){
	console.log('Mongoose Disconnected through App termination (SGINT)');
	process.exit(0);
	});
});


process.on('SIGTERM',function(){

mongoose.connection.close(function(){
	console.log('Mongoose Disconnected through App termination (SGINT)');
	process.exit(0);
	});
});


process.on('SIGUSR2',function(){

mongoose.connection.close(function(){
	console.log('Mongoose Disconnected through App termination (SGINT)');
	process.kil(process.pid,'SIGUSR2');
	});
});

// Bring in Schemas and models
require('./hotels.model.js');