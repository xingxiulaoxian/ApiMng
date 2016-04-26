var http = require('http')
var fs = require('fs')
var url = require('url')

var port = 9999

http
  .createServer(function(req, res){
    var arg = url.parse(req.url, true).query
    if(arg.name == 'yy'){
      fs.createReadStream('./123.jpg')
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
  .listen(9999, function(){
    console.log(port)
  })
