/**
 * Created by llming on 2017/3/16.
 */

/*
 post请求的解析,formidable升级版
 上传图片文件名是当前时间201731619590611111.jpg
 */
var http = require("http");
var util = require("util");
var querystring = require("querystring");
var formidable = require("formidable");
var fs = require("fs");
var sd = require("silly-datetime");
var path = require("path");

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
            //获取时间
            var ttt = sd.format(new Date(),"YYYYMMDDHHmmss");
            var ran = parseInt(Math.random()*89999+10000);
            var extname = path.extname(files.image.name);
            var oldpath = __dirname + "/" + files.image.path;
            //新的路径由三个部分组成:时间戳,随机数,拓展名
            var newpath = __dirname + "/uploads/" + ttt + ran+extname;

            //改名
            fs.rename(oldpath,newpath,function (err) {
               if(err){
                   throw Error("改名失败");
               }
                //所有的文本域,单选框,都在fields存放
                res.writeHead(200,{"Content-Type":"text/plain"});
                //所有的文件域,都在files存放
                res.write("received upload:\n\n");
                res.end(util.inspect({fields:fields,files:files}));
            });
        });
    }else if(req.url == "/"){
        //呈递aa.html页面
        fs.readFile("./test/aa.html",function (err, data) {
            res.writeHead(200,{"Content-Type" : "text/html;charset=UTF8"});
            res.end(data);
        });
    }
});

server.listen(3000,"127.0.0.1");