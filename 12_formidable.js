/**
 * Created by llming on 2017/3/16.
 */
/*
 post请求的解析,formidable
 */
var http = require("http");
var util = require("util");
var querystring = require("querystring");
var formidable = require("formidable");

//创建服务器
var server = http.createServer(function (req, res) {
    //如果访问地址是doPost,并且请求类型是Post
    if(req.url == "/doPost" && req.method.toLowerCase() == "post"){
        //Creates a new incoming form
        var form = new formidable.IncomingForm();
        //设置文件上传的地址
        form.uploadDir = "./uploads";
        //执行里面的毁掉函数的时候,表单已经全部执行完毕了
        form.parse(req,function (err, fields, files) {
            console.log(fields);
            console.log(files);
            //所有的文本域,单选框,都在fields存放
            res.writeHead(200,{"Content-Type":"text/plain"});
            //所有的文件域,都在files存放
            res.write("received upload:\n\n");
            res.end(util.inspect({fields:fields,files:files}));
        });
    }
});

server.listen(3000,"127.0.0.1");