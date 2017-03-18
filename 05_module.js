/**
 * Created by llming on 2017/3/14.
 */
/*
    模块,引用了一个类,test中的People.js
 */
var People = require("./test/People.js");

var xiaoming = new People("小明","男","23");
xiaoming.sayHello();