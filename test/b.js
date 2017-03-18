/**
 * Created by llming on 2017/3/14.
 */
var fs = require("fs");

fs.readFile(__dirname+"/a.txt",function (err, data) {
    if(err){throw err;}
    console.log(data.toString());
});