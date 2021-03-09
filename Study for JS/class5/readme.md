# Js 学习第五课 ———— 数组

1. 数组的概念

    一组数据的集合。每个数据被称作元素，数组中可以存放任何类型的元素

2. 创建数组

    - 利用new创建数组
    - 利用数组字面量创建数组

            // 利用new创建数组
            var arr = new Array();

            // 利用数组字面量创建数组
            var arr = [];
            var arr1 = [1, 2, 3, 'ac', 'ss', 'cb'];

3. 获取数组中的元素

        var arr1 = [1, 2, 3, 'ac', 'ss', 'dd', 'cb'];
        console.log(arr1[0]);//1
        console.log(arr1[3]);//ac

4. 遍历数组

        var arr1 = [1, 2, 3, 'ac', 'ss', 'dd', 'cb'];

        for (var i = 0; i < arr1.length; i++) {
            console.log(arr1[i]);
        }

        - 求和与平均数

        var arr = [1, 24, 2, 4, 56, 78, 99, 13];
        var sum = 0;
        var average = 0;
        for (var i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        average = sum / arr.length;
        console.log(sum);
        console.log(average);

        - 求最大值
        var arr = [1, 24, 2, 4, 56, 78, 99, 13];
        var max = 0;
        for (var i = 0; i < arr.length; i++) {
            max >= arr[i] ? max = max : max = arr[i];

        }
        console.log(max);

5. 数组新增元素

    - 通过修改length长度来实现数组扩容的目的

            var arr3 = ['red', 'blue', 'pink', 'green'];
            for (var i = 0; i < arr3.length; i++) {
                console.log(arr3[i]);
            }
            console.log('-----------------------');
            arr3.length = 8;
            for (var i = 0; i < arr3.length; i++) {
                console.log(arr3[i]);
            }
        
    - 通过修改数组索引新增数组元素

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

6. 冒泡排序

    冒泡排序是一种算法，把一系列的数据按顺序进行排列显示。
    


