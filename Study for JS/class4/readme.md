# JS 学习第四课 ———— 流程控制

流程控制分为三种：顺序结构 分支结构 循环结构

1. 顺序流程控制

    顺序结构是程序中最简单的、最基本的流程控制，程序会按照代码的先后顺序依次执行。

2. 分支流程控制

    - if
        - 双分支语句

        如果if条件表达式结果为真 则执行语句1

        如果if条件表达式结果为假 则执行语句2


            if (条件语句) {
                //执行语句1
            }
            else{
                //执行语句2
            }

        - 多分支语句

                if (条件表达式1) {
                    //语句1
                } else if (条件表达式2) {
                    //语句2
                } else if (条件表达式3) {
                    //语句3
                } else {
                    //语句4
                }

        - 三元表达式

            条件表达式 ？ 表达式1 ： 表达式2

            如果条件表达式结果为真 则 返回 表达式1的值
            如果条件表达式结果为假 则 返回 表达式2的值

            var a = 10;
            a > 5 ? '是的' : '不是的';

    - switch

        - switch是一种多分支语句， 针对变量设置一系列的特定值的选项

                switch (表达式) {
                    case value1:
                        语句一;
                        break;
                    case value2:
                        语句2;
                        break;
                    ...
                    default:
                        语句N;
                }

                var a = 10;
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

3. 循环流程控制

    - for 循环

            for (var i = 1; i <= 100; i++) {
                    console.log("这是for循环");
                }

    - while 循环

            while (条件表达式) {
                //循环体
            }

    - do while 循环

            do {
                //循环体
            }while(条件表达式)

            //先执行一次循环在判断，如果条件表达式为真则继续循环


    - continue

        立即跳出本次循环，继续下一次循环

    - break

        终止循环

