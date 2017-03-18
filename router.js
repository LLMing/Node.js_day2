/**
 * Created by llming on 2017/3/15.
 */

var showIndex = function (req,res) {
    res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"});
    res.end("我是首页");
};
var showStudent = function (req,res) {
    var id = req.url.substr(9,6);
    res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"});
    res.end("我是学生html页面"+id);
};
var show404 = function (req,res) {
    res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"});
    res.end("这是404页面");
};

exports.showIndex = showIndex;
exports.showStudent = showStudent;
exports.show404 = show404;
