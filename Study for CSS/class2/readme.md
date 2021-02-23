# CSS 学习第二课 ———— CSS基础选择器

1. 选择器的作用

 - 选择器就是根据不同的需求把不同的表签选出来这就是选择器的作用。

2. 选择器种类

    - 标签选择器
    
            <head>    
                <style>
                    p {
                        color: rgb(13, 238, 43);
                    }  
                    div {
                        color: rgb(240, 15, 210);
                    }
                </style>
            </head>
            <body>
                <p>男生</p>
                <p>男生</p>
                <p>男生</p>
                <div>女生</div>
                <div>女生</div>
                <div>女生</div>
            </body>
        
        - 优点：能快速为页面中同类型的标签统一设置样式。
        - 缺点：不能差异化样式，只能选择全部当前样式。
  
    - 类选择器

            <head>
                <style>
                    .red {
                        color: red;
                    }
                </style>
            </head>

            <body>
                <ul>
                    <li class="red">123</li>
                    <li>123</li>
                    <li class="red">123</li>
                    <li>123</li>
                    <li>123</li>
                </ul>
            </body>

        - 类选择器使用“.”（英文点号）进行标识，后面紧跟类名（自命名）
        - 可以理解为给这个标签起了一个名字
        - 长名字或词语可以使用中横线来为选择器命名
        - 取名要有意义
    - id 选择器
  
            <head>
                <style>
                    #green {
                        background-color: greenyellow;
                    }
                </style>
            </head>

            <body>
                <div id="green">女生</div>
            </body>

        - 只能调用一次
    - 通配符选择器

             * {
                 属性： 属性值；
              } 
        
        - 无需调用，自动选择所有样式
