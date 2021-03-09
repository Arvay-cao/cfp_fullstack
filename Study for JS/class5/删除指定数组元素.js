//原数组上操作
var arr = [2, 0, 6, 1, 77, 0, 52, 0, 25, 7];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
        for (var j = i; j < arr.length; j++) {
            arr[j] = arr[j + 1];
        }
        arr.length -= 1;
    }
}
console.log(arr);


//利用新数组
var arr = [2, 0, 6, 1, 77, 0, 52, 0, 25, 7];
var newArr = [];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
        newArr[newArr.length] = arr[i];
    }
}
console.log(newArr);