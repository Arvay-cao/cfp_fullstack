# CSS 学习第五课 ———— CSS的三种引入方式

1. 内部样式表

在HTML内部写样式，只控制当前HTML页面

    <style>
        div {
            color: rgb(136, 31, 136);
            text-decoration: solid;
        }
        
        h1 {
            text-align: center;
            text-decoration: underline;
        }
        
        p {
            text-indent: 2em;
            line-height: 26px;
        }
    </style>

2. 行内样式表
   
在元素标签内部的style属性中设置css样式

     <h2 style="color: brown;">不好啦！着火了</h2>

3. 外部样式表

将样式单独写到一个css文件里

    <link rel="stylesheet" href="12.css">