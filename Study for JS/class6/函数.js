// 函数的使用
// 1.声明函数
function sayHi() {
    console.log('hi~~~');
}
// 2.调用函数
sayHi();

// 1-100 sum
function getSum(a, b) {
    var sum = 0;
    for (var i = a; i <= b; i++) {
        sum += i;
    }
    console.log(sum);
}
getSum(1, 4);

function sum(n, m) {
    return n + m;
}
console.log(sum(1, 2));
//求数组最大值
function getMax(arr) {
    var max = arr[0];
    for (var i = 1; i <= arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
var q = getMax([5, 2, 99, 101, 67, 77])
console.log(q);

function fn() {
    console.log(arguments);
}
fn(1, 2, 3);
// [Arguments] { '0': 1, '1': 2, '2': 3 }

// 翻转数组
function reverse(arr) {
    var newArr = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        newArr[newArr.length] = arr[i];
    }
    return newArr;
}
var re = reverse([1, 2, 3, 4, 5, 6]);
console.log(re);

//冒泡排序
function sort(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
var c = sort([3, 56, 7, 8, 45, 77, 98, 12]);
console.log(c);

//利用函数表达式声明
var 变量名 = function name() {

}