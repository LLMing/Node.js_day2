/**
 * Created by llming on 2017/3/14.
 */
/*
    复习最简单的创建http服务器
 */
var http = require("http");


var server = http.createServer(function (req,res) {
    //设置响应头
    res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"});
    //每次接受请求之后做的事情
    res.end("Success!你好,LLMing");
});

server.listen(3000,"127.0.0.1");