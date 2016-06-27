var express = require('express'),
	routes = express.Router(),
	sqlite3 = require('sqlite3');

//添加api
function guidGenerator() {
	var S4 = function() {
		return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
	};
	return (S4() + S4() + S4() + S4() + S4() + S4() + S4() + S4());
}



var addNewApiResult = {
	status:error,
	list:[]
};
	//addNewApiResultObj{
	//	uuid : '',
	//	link : '',
	//	insertTime : '',
	//	outline : '',
	//	editCount : 0,
	//	param: []
	//};


//添加api
//addNewApi
routes.post('/action/addNewApi', function (req, res) {
	var query = req.body;
	console.dir(query);
	if(!query.link){
		res.send(addNewApiResult);
	}else{
		let insertLink = 'insert into main (uuid, link) values("' + guidGenerator() +
			'", "' + query.link + '")';
		let selectLink = 'select * from main';

		let db = new sqlite3.Database('./data/database.db', function(){
			db.run(insertLink, function(){
				db.all(selectLink, function(err, response){
					if(!err){
						console.log('²éÑ¯Õý³££º')
						res.send({
							status : 'success',
							list : response
						});
					}
					else {
						console.log('´íÎó')
						console.log(err);
					}
				})
			})


		})

	}


})

module.exports = router;