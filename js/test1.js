require("../css/style.css");
require("../css/font.css");

const greet = require("./test2")
// 实例化
var hello=new greet.test('jone','28','10000')
var tag = new greet.write("模块1调用模块2的函数")
// 运行
hello.say(); 
tag;