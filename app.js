var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http');

var routes = require('./routes/index');
var users = require('./routes/users');
var download = require('./routes/download');

var dataCount = require('./data/dataCount');

var sqlite3 = require('sqlite3');
var app = express();

console.dir(dataCount);
var port = 9000;



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/download', download);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

//转发地址
//https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=yuhfhfhk&secret=hjgkjgjk
var httpReq = http.get({
  host:'www.cnblogs.com'
}, function(res){
<<<<<<< HEAD
  console.log(httpReq);
=======
  //console.log(httpReq)
  res.on('data',function (chunk) {
    console.log('BODY: ' + chunk);
  });
>>>>>>> ed3ab14d50c9530e9f63d1541c2c306669df6a37
});
// request.get({
//     url:'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=yuhfhfhk&secret=hjgkjgjk'
//   }.on('response', function (response) {
//     console.log(respinse);
//     //res.set(response.headers);
//   })
//   .on('error', function (err) {
//     console.log(err);
//     //logger.error(err);
//   })
//   //.pipe(res);
// )

app.listen(port, function () {
  console.log('程序运行在端口' + port);
  console.log('127.0.0.1:' + port);
});


module.exports = app;
