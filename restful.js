var http = require('http');
var equal = require('assert').equal;
 
var username = 'falcon';
var password = '';
var _auth = 'Basic ' + new Buffer(username + ':' + password).toString('base64')
 
var options = {
    host: 'www.cnblogs.com',
    port: 80,
    path: '/buhaiqing/archive/2013/03/30/2990823.html',
    method: 'GET'
};
 
var req = http.request(options, function (res) {
    console.log('STATUS: ' + res.statusCode);
    equal(200, res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
 
    res.on('data',function (chunk) {
         console.log('BODY: ' + chunk);
    });
});
 
req.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});
 
 
req.end();