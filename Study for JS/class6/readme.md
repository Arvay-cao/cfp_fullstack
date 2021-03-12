# JS 学习第六课 ———— 函数

1. 函数的使用

    - 声明函数
    - 调用函数

            // 函数的使用
            // 1.声明函数
            function sayHi() {
                console.log('hi~~~');
            }
            // 2.调用函数
            sayHi();
        - function 声明函数的关键字
        - 函数是做某件事，函数名一般为动词
        - 函数不调用，自己不会执行

2. 函数的参数

    - 形参 接收实参
    - 实参  

            function name(形参1，形参2) {
                //语句
            }
            name(实参1，实参2);

            function getSum(a, b) {
                var sum = 0;
                for (var i = a; i <= b; i++) {
                    sum += i;
                }
                console.log(sum);
            }
            getSum(1, 4);

    - 形参和实参个数不匹配的问题

        - 如果个数一致，正常输出结果
        - 实参个数大于形参，多余的实参不参加运算
        - 实参个数小于形参，输出NAN

3. 函数返回值

        function name(形参1，形参2) {
                return 需要返回的结果;
            }

        function sum(n, m) {
            return n + m;
        }
        console.log(sum(1, 2));

    - 当返回值有多个时返回最后一个，如需返回多个可借助数组。
    - 函数没有return，则返回undefined 

4. arguements

    - arguements存储了所有的实参

            function fn() {
                console.log(arguments);
            }
            fn(1, 2, 3);
            // [Arguments] { '0': 1, '1': 2, '2': 3 }

    - arguments 展示形式是一个伪数组 因此可以遍历
        - 具有length属性
        - 按索引方式储存数据
        - 不具有数组的push，pop等方法。

5. 函数的两种声明方式

    - 利用关键字 function 声明 （命名函数）
    - 利用函数表达式声明 (匿名函数) 

            var 变量名 =function () {}
            //调用
            变量名();