/**
 * Created by llming on 2017/3/14.
 */
/*
   fs模块,读取文件fs.readFile();实现一个静态页面显示
 */
var http = require("http");
var fs = require("fs");
var url = require("url");
var path = require("path");

var server = http.createServer(function (req, res) {
    //必须使用req.url来if判断用户输入的是什么网址
    //输入的网址是127.0.0.1/images/logo.png
    //实际请求的是./static/images/logo.png
    var pathname = url.parse(req.url).pathname;
    //判断此时用户输入的地址是文件夹地址还是文件地址
    if(pathname.indexOf(".") == -1){
        pathname += "/index.html";
    }
    var fileURL = "./" +path.normalize("./static/"+pathname);

    //得到拓展名
    var extname = path.extname(pathname);

    //把文件读出
    fs.readFile(fileURL,function (err, data) {
        if(err){
            //404页面
            res.writeHead(404,{"Content-Type":"text/html;charset=UTF8"});
            res.end("404,页面没有找到");
        }
        //读完之后做的事情
        getMime(extname,function (mime) {
            res.writeHead(200,{"Content-Type":mime});
            res.end(data);
        });
    });
});

server.listen(3000,"127.0.0.1");

function getMime(extname,callback) {
    //读取mime.json文件,得到JSON,根据extname(key),返回对应的value
    //读取文件
    fs.readFile("./mime.json",function (err, data) {
        if(err){
            throw Error("找不到mime.json文件");
        }
        //转换成json
        var mimeJSON = JSON.parse(data);
        var mime = mimeJSON[extname] || "text/plain";
        //执行回调函数
        callback(mime);
    });
}