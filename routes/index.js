var express = require('express');
var sqlite3 = require('sqlite3');
var router = express.Router();

var selectLink = 'select * from main where status=1';

/* GET home page. */
router.get('/', function(req, res, next) {
  var db = new sqlite3.Database('./data/database.db', function(){
    db.all(selectLink, function(err, response){
      if(!err){
        console.log('查询正常');
			  res.render('index', { 
			  	title: 'Express', 
			  	siteName : 'api管理系统',
			  	list : response
			  });
     	} else {
        console.log('错误');
        console.log(err);  
      } 
    });
  });
});



function guidGenerator() {
  var S4 = function() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  return (S4() + S4() + S4() + S4() + S4() + S4() + S4() + S4());
}



var addNewApiResult = {
  status:'error',
  list:[]
};
  //addNewApiResultObj{
  //  uuid : '',
  //  link : '',
  //  insertTime : '',
  //  outline : '',
  //  editCount : 0,
  //  param: []
  //};


//添加api
//addNewApi
router.post('/action/addNewApi', function (req, res) {
  var query = req.body;
  console.log(query);
  if(!query.link){
    res.send(addNewApiResult);
  }else{
    var insertLink = 'insert into main (uuid, link) values("' + guidGenerator() +
      '", "' + query.link + '")';

    var db = new sqlite3.Database('./data/database.db', function(){
      db.run(insertLink, function(){
        db.all(selectLink, function(err, response){
          if(!err){
            console.log('查询正常');
            res.send({
              status : 'success',
              list : response
            });
          }
          else {
            console.log('查询失败');
            console.log(err);
            res.send({
              status : 'error',
              list : []
            });
          }
        });
      });
    });
  }
});

  // 删除sql
  // function createDleteSql(uuidStr){
  //   var sql = 'delete from main where ';
  //   var uuidArr = uuidStr.split(',');
  //   for (var i = 0; i < uuidArr.length; i++) {
  //     sql += 'uuid="' + uuidArr[i] +'"';
  //   }
  //   return sql;
  // }
//删除或还原
router.post('/action/toggleApi', function (req, res) {
  function createSql (uuidStr, status){
    status = (status=='1' || status==1)?1:0;
    var sql = 'update main set status = ' + status + ' where';
    var uuidArr = uuidStr.split(',');
    for (var i = 0; i < uuidArr.length; i++) {
      sql += ' uuid="' + uuidArr[i] +'"';
    }
    console.log(sql);
    return sql;
  }

  var query = req.body;
  console.log(query);
  if(!query.uuids){
    res.send({
      status : 'error',
      message : query
    });
  }else{

    var db = new sqlite3.Database('./data/database.db', function(){
      db.run(createSql(query.uuids, query.status), function(){
        db.all(selectLink, function(err, response){
          if(!err){
            console.log('查询正常');
            res.send({
              status : 'success',
              list : response
            });
          } else {
            console.log('查询失败');
            console.log(err);
            res.send({
              status : 'error',
              list : []
            });
          }
        });
      });
    });


  }

});

module.exports = router;
