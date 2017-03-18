/**
 * Created by llming on 2017/3/16.
 */
/*
    post请求的解析
 */
var http = require("http");
var querystring = require("querystring");

//创建服务器
var server = http.createServer(function (req, res) {
    //如果访问地址是doPost,并且请求类型是Post
   if(req.url == "/doPost" && req.method.toLowerCase() == "post"){
        var alldata = "";
        //下面是post请求接收的固定写法
        req.addListener("data",function (chunk) {
            console.log(chunk);
            alldata += chunk;
        });

        req.addListener("end",function () {
           var dataString = alldata.toString();
            //将datastring转化为一个对象
            var dataObj = querystring.parse(dataString);
            console.log(dataObj);
            console.log(dataObj.name);
            console.log(dataObj.sex);
           res.end("success");
        });
   }
});

server.listen(3000,"127.0.0.1");