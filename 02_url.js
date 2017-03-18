/**
 * Created by llming on 2017/3/14.
 */
/*
复习requ.url,实现路由
 */
var http = require("http");

var server = http.createServer(function (req,res) {
    //每次接受请求之后做的事情
    if(req.url == "/"){
        res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"});
        res.end("成功");
    }else {
        res.writeHead(404,{"Content-Type":"text/html;charset=UTF8"});
        res.end("未知页面")
    }
});

server.listen(3000,"127.0.0.1");
