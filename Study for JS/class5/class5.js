// 利用new创建数组
//var arr = new Array();

// 利用数组字面量创建数组

var arr1 = [1, 2, 3, 'ac', 'ss', 'dd', 'cb'];
// console.log(arr1[0]); //1
// console.log(arr1[3]); //ac
for (var i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}

var arr = [1, 24, 2, 4, 56, 78, 99, 13];
var sum = 0;
var average = 0;
for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
}
average = sum / arr.length;
console.log(sum);
console.log(average);
// 求最大值
var max = 0;
for (var i = 0; i < arr.length; i++) {
    max >= arr[i] ? max = max : max = arr[i];

}
console.log(max);

//分割字符串
var arr2 = ['red', 'blue', 'pink', 'green'];
var str = '';
var sep = '|';
for (var i = 0; i < arr2.length; i++) {
    str += arr2[i] + sep;
}
console.log(str);

//通过修改length长度来实现数组扩容的目的
var arr3 = ['red', 'blue', 'pink', 'green'];
for (var i = 0; i < arr3.length; i++) {
    console.log(arr3[i]);
}
console.log('-----------------------');
arr3.length = 8;
for (var i = 0; i < arr3.length; i++) {
    console.log(arr3[i]);
}

// 通过修改数组索引新增数组元素
var arr4 = ['red', 'blue', 'pink', 'green'];
arr4[4] = 'black';
for (var i = 0; i < arr4.length; i++) {
    console.log(arr4[i]);
}
console.log('-----------------------');
//替换原来的元素
arr4[0] = 'yellow';
for (var i = 0; i < arr4.length; i++) {
    console.log(arr4[i]);
}

var arr5 = [2, 4, 11, 15, 3, 9, 21, 7, 49];
var newArr = [];
for (var i = 0; i < arr5.length; i++) {
    if (arr5[i] > 10) {
        newArr[newArr.length] = arr5[i];
    }
}
console.log(newArr);