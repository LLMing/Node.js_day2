/**
 * Created by llming on 2017/3/14.
 */

function People(name, sex, age) {
    this.name = name;
    this.sex = sex;
    this.age = age;
}

People.prototype = {
    sayHello : function () {
        console.log(this.name+this.sex+this.age);
    }
};

//此时,People就被视为构造函数,可以用new来实例化
module.exports = People;