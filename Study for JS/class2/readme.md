# JS 学习第二课 ———— 变量  数据类型

1. 变量的使用： 声明  赋值

    // 声明变量
    var age;
    //赋值
    age = 11;
    //输出
    console.log(age);

2. 变量的初始化

    var age = 18;// 声明变量同时赋值为18

3. 变量命名规范

    - 由字母(A-Z a-z)、 数字(0-9)、 下划线(_)、美元符号($)组成,如: usrAge, num01, _name
    - 严格区分大小写. var app;和var App;是两个变量
    - 不能以数字开头。18age 是错误的
    - 不能是关键字保留字。例如:var、 for、 while
    - 变量名必须有意义。MMD BBD nl一age
    - 遵守驼峰命名法。首字母小写,后面单词的首字母需要大写。myFirstName
    - 推荐翻译网站:有道 爱词霸

4. 数据类型

JS 的变量数据类型是只有程序运行过程中，根据等号右边的值来确定

JS 是动态语言 变量的数据类型是可以变化的

- 简单数据类型
    - Number 数值型 

            var num =10 ;
            var PI = 3.14 ;
            * Infinity 无穷大
            * -Infinity 无穷小
            * NaN Not a number 非数字

    - Boolean

        var flag = true ;
        console.log(flag + 1);

    - String

            var a = '她说:\n我们不合适';
        - 字符串的长度

                var a = 'jshiowloxdlw';
                alert(a.length);
        - 字符串的拼接

                字符串 + 任何类型 = 拼接之后的新字符串
                var b = 'hello';
                var c = 'world';
                var d = b + c;
                console.log(d);

                helloworld
        
    - Undefined 和 Null

            var str;
            var variable = undefined;
            console.log(str);
            console.log(variable);
            console.log(variable + 'pink');
            console.log(variable + 1);

            undefined
            undefined
            undefinedpink
            NaN

            var s = null;
            console.log(s);
            console.log(s + 'pink');
            console.log(s + 1);

            null
            nullpink
            1
5. 检测数据类型

        var n = 10;
        console.log(typeof n); //number

        var my = 'myname';
        console.log(typeof my);//string

6. 数据类型的转换

    - 转换成字符串类型

        - toString()
        - String()
        - 加号拼接字符串    
    
                //数字转换成字符串
                //利用toString()
                var e = 10;
                var temp1 = e.toString();
                console.log(typeof temp1);
                //利用String()实现
                console.log(String(e));
                //利用+拼接字符串
                console.log(e + '');

    - 转换成数字型

        - parseInt(str)
        - parseFloat(str)
        - Number()
        - js 隐式转换（- * /）

                //转换成数字型
                //parseInt(str) 得到整数
                var age = '18.5';
                console.log(parseInt(age)); //18
                //parseFloat(str)
                console.log(parseFloat(age)); //18.5
                //Number()
                console.log(Number(age)); //18.5 
                //js 隐式转换（- * /）
                console.log(age - 0);//18.5            

    - 转换成布尔型

        - Boolean();

                //除以下五种之外全转换成true
                console.log(Boolean(''));
                console.log(Boolean(0));
                console.log(Boolean(NaN));
                console.log(Boolean(null));
                console.log(Boolean(undefined));