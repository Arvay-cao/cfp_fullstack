# CSS 学习第六课 ———— emmet语法

1. 快速生成HTML结构语法
   
    - 生成标签直接输入标签名按tab键即可比如div 然后tab键.就可以生成div标签
    - 如果想要生成多个相同标签加上 * 就可以了比如 div*3  就可以快速生成3个div
    - 如果有父子级关系的标签.可以用> 比如 ul> li就可以了
    - 如果有兄弟关系的标签,用 + 就可以了比如 div+p
    - 如果生成带有类名或者id名字的，直接写 .demo 或者  #two tab 键就可以了
    - 如果生成的div类名是有顺序的，可以用自增符号$ 例如 .demo$*5
    - 如果想要在生成标签内部写内容可以用{}表示 例如 div{nihaoya}*5

2. 快速生成css样式语法

    css基本采取简写形式
    - w200 回车 生成width :200px;
    - ih26 回车 生成line-height: 26px;

3. 快速格式化代码

    右键格式化文档（shift+alt+f）


# CSS 学习第七课 ———— css的复合选择器

1. 什么是复合选择器

在css中，可以根据选择器的类型把选择器分为 基础选择器 和 复合选择器 ，复合选择器是建立在基础选择器之上，对基础选择器进行组合形成的。

2. 后代选择器（重要）

只选择 ol 里的 li

     <style>
        ol li {
            color: red;
        }
        
        .nav li a {
            color: green;
        }
    </style>

    <ol>
        <li>我是ol 的孩子</li>
        <li>我是ol 的孩子</li>
        <li>我是ol 的孩子</li>
        <li>我是ol 的孩子</li>
    </ol>
    <ul class="nav">
        <li>我是ul 的孩子</li>
        <li>我是ul 的孩子</li>
        <li>我是ul 的孩子</li>
        <li><a href="">我是ul 的孩子</a></li>
    </ul>
    <ul>
        <li>我是ul 的孩子</li>
        <li>我是ul 的孩子</li>
        <li>我是ul 的孩子</li>
        <li>我是ul 的孩子</li>
    </ul>

3. 子元素选择器

子元素选择器 只能作为某元素的近一级元素。简单理解就是选亲儿子元素

    div>a {
            color: rgb(185, 14, 148);
            text-decoration: none;
        }

     <div>
        <a href="">这是儿子</a>
        <p>
            <a href="">这是孙子</a>
        </p>
    </div>

4. 并集选择器

并集选择器 可以选择多组标签，同时为他们定义相同的样式。

      h1,
        h2 {
            color: rgb(89, 11, 216);
        }

         <h1>你啊你</h1>
        <h2>哈哈哈哈</h2>

5. 伪类选择器

    - 链接伪类选择器

        - a:link  //选择所有未被访问的链接
        - a:visited  //选择所有已被访问的链接
        - a:hover  //选择鼠标指针位于其上的链接
        - a:active  //选择活动链接（鼠标按下未弹起的链接）
        - 为了保证伪类选择器有效 LVHA 的顺序不要改变


                 a:link {
                    color: #000;
                    text-decoration: none;
                }
                
                a:visited {
                    color: blue;
                }
                
                a:hover {
                    color: pink;
                }
                
                a:active {
                    color: goldenrod;
                }

    - focus伪类选择器

        选取获得焦点的表单元素

                input:focus {
                    background-color: rgb(197, 230, 245);
                }