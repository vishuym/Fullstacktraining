
var MongoClient=require('mongodb').MongoClient;
var dburl='mongodb://localhost:27017/meanhotel';

var _connection =null;

	var open=function(){
		MongoClient.connect(dburl,function(err,db){

			if(err){

				console.log("DB Connection Failed");
			}
			_connection=db;
			console.log("DB Connection Open",db);

		});
	//set _connection

	};

	var get =function(){
		return _connection;
	};

	module.exports ={

		open : open,
		get : get

	};