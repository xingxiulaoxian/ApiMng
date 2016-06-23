var http = require('http')
var fs = require('fs')
var url = require('url')

var port = 9999

var request = require('request')

http
  .createServer(function(req, res){
    var arg = url.parse(req.url, true).query
      console.log(arg)

    if(arg.name == 'yy'){
      fs.createReadStream('./123.jpg')
        .pipe(res)
    }else if(arg.img != undefined){
      request('http://static.mukewang.com/static/img/common/logo.png')
        .pipe(res)
    }else{
      // fs.createReadStream('./index.js')
      //   .pipe(res)
      (function(){
      	var str = '';
      	for(var x in arg){
      		str += ('{'+ x + ':' + arg[x] +'}')
      	}
        res.end(str)
      })()
    }
  })
  .listen(port, function(){
    console.log(port)
  })
