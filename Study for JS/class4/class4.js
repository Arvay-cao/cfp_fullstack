// var year = prompt('请输入年份');
// if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
//     alert("闰年");

// } else {
//     alert("平年");
// }

var y = prompt("请输入你的成绩");


if (y >= 90) {
    //语句1
    alert("A");
} else if (y >= 80 && y < 90) {
    //语句2
    alert("B");
} else if (y >= 70 && y < 80) {
    //语句3
    alert("C");
} else if (y >= 60 && y < 70) {
    //语句4
    alert("D");
} else {
    //语句5
    alert("E")
}

var a = 10;
a > 5 ? '是的' : '不是的';

switch (a) {
    case 1:
        console.log('1');
        break;
    case 2:
        console.log('2');
        break;
    default:
        console.log('N');
}

for (var i = 1; i <= 100; i++) {
    console.log(i);
}

var str = '';
for (var i = 1; i <= 5; i++) {
    str += '*';
}
console.log(str);


for (var i = 1; i <= 5; i++) {
    console.log('*');
}



for (var i = 1; i <= 10; i++) {
    var ch = '';
    for (var j = 10; j >= i; j--) {
        ch += '*';
    }
    console.log(ch);
}
var m = '';
for (var i = 1; i <= 9; i++) {
    for (var j = 1; j <= i; j++) {
        // m += '*';
        m += j + 'X' + i + '=' + i * j + '\t';

    }
    m += '\n'
}
console.log(m);

var sum = 0;
var num = 1;
while (num <= 100) {
    sum += num;
    num++;
}
console.log(sum);


do {
    //循环体
} while (条件表达式)