// 声明变量
var age;
//赋值
age = 11;
//输出
console.log(age);
console.log("hello!");
//变量的初始化
var a = 18; // 声明变量同时赋值为18
console.log(a);

// var myname = prompt('输入姓名');
// alert(myname);

var b = 'hello';
var c = 'world';
var d = b + c;
console.log(d);

var str;
var variable = undefined;
console.log(str);
console.log(variable);
console.log(variable + 'pink');
console.log(variable + 1);

var s = null;
console.log(s);
console.log(s + 'pink');
console.log(s + 1);

var n = 10;
console.log(typeof n); //number

var my = 'myname';
console.log(typeof my); //string

//数字转换成字符串
//利用toString()
var e = 10;
var temp1 = e.toString();
console.log(typeof temp1);
//利用String()实现
console.log(String(e));
//利用+拼接字符串
console.log(e + '');

//转换成数字型
//parseInt(str) 得到整数
var age = '18.5';
console.log(parseInt(age)); //18
//parseFloat(str)
console.log(parseFloat(age)); //18.5
//Number()
console.log(Number(age)); //18.5 
//js 隐式转换（- * /）
console.log(age - 0); //18.5

//除以下五种之外全转换成true
console.log(Boolean(''));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(null));
console.log(Boolean(undefined));