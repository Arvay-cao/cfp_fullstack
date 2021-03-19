# CSS 学习第十六课 ———— HTML5 和 CSS3 提高

1. HTML 新特性

    HTML5 的新增特性主要是针对于以前的不足，增加了一些新的标签、新的表单和新的表单属性等

    - HTML 新增语义化标签

            <header>：头部标签
            <nav>：导航标签
            <article>：内容标签
            <section>：定义文档某个区域
            <aside>：侧边栏标签
            <footer>：尾部标签

        - 注意：
          - 这种语义化标准主要是针对搜索引擎的
          - 这些新标签页面中可以使用多次
          - 在 IE9 中，需要把这些元素转换为块级元素
          - 其实，我们移动端更喜欢使用这些标签
          - HTML5 还增加了很多其他标签，我们后面再慢慢学

    - HTML5 新增的多媒体标签

            音频：<audio> 
            视频：<video> 

        - 当前 video 元素支持三种视频格式(MP4\WebM\Ogg)： 尽量使用 mp4格式
          - 语法

                <video src="文件地址" controls="controls"></video>

                <video controls="controls" width="300">
                <source src="move.ogg" type="video/ogg" >
                <source src="move.mp4" type="video/mp4" >
                您的浏览器暂不支持 <video> 标签播放视频
                </ video >

        - 音频 audio  元素支持三种格式(MP3 \Wav \Ogg) 尽量使用 mp3格式
          - 语法

                <audio src="文件地址" controls="controls"></audio>

                < audio controls="controls" >
                <source src="happy.mp3" type="audio/mpeg" >
                <source src="happy.ogg" type="audio/ogg" >
                您的浏览器暂不支持 <audio> 标签。
                </ audio> 

    - HTML5 新增的 input 类型

        | 属性值        | 说明                        |
        | :------------ | :-------------------------- |
        | type="email"  | 限制用户输入必须为Email类型 |
        | type-"url"    | 限制用户输入必须为URL类型   |
        | type="date"   | 限制用户输入必须为日期类型  |
        | type="time"   | 限制用户输入必须为时间类型  |
        | type="month"  | 限制用户输入必须为月类型    |
        | type="week"   | 限制用户输入必须为周类型    |
        | type="number' | 限制用户输入必须为数字类型  |
        | type="tel"    | 手机号码                    |
        | type="search" | 搜索框                      |
        | type="color"  | 生成一个颜色选择表单        |

    - HTML5 新增 input 属性

        | 属性         | 值        | 说明                                                                                                                                                                                      |
        | :----------- | :-------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
        | required     | required  | 表单拥有该属性表示其内容不能为空，必填                                                                                                                                                    |
        | placeholder  | 提示文本  | 表单的提示信息，存在默认值将不显示                                                                                                                                                        |
        | autofocus    | autofocus | 自动聚焦属性，页面加载完成自动聚焦到指定表单                                                                                                                                              |
        | autocomplete | off/ on   | 当用户在字段开始键入时，浏览器基于之前键入过的值，应该显示出在字段中填写的选项。默认已经打开，如autocomplete="on"，关闭autocomplete ="off" 需要放在表单内，同时加上name属性，同时成功提交 |
        | multiple     | multiple  | 可以多选文件提交                                                                                                                                                                          |

2. CSS3 的新特性

    - 新增选择器
      - 属性选择器(权重=10)

            input[value]{
                //
            }

        | 选择符        | 简介                                  |
        | :------------ | :------------------------------------ |
        | E[att]        | 选择具有att属性的E元素                |
        | E[att="val"]  | 选择具有att属性且属性值等于val的E元素 |
        | E[att^="val"] | 匹配具有att属性且值以val开头的E元素   |
        | E[att$="val"] | 匹配具有att 属性且值以val结尾的E元素  |
        | E[att*="val"] | 匹配具有att属性且值中含有val的E元素   |

      - 结构伪类选择器

        | 选择符           | 简介                        |
        | :--------------- | :-------------------------- |
        | E:first-child    | 匹配父元素中的第一个子元素E |
        | E:last-child     | 匹配父元素中最后一个E元素   |
        | E:nth-child(n)   | 匹配父元素中的第n个子元素E  |
        | E:first-of-type  | 指定类型E的第一个           |
        | E:last-of-type   | 指定类型E的最后一个         |
        | E:nth-of-type(n) | 指定类型E的第n个            |

        - nth-child（n） 选择某个父元素的一个或多个特定的子元素（重点）
            - n 可以是数字，关键字和公式
            - n 如果是数字，就是选择第 n 个子元素， 里面数字从1开始…
            - n 可以是关键字：even 偶数，odd 奇数
            - n 可以是公式：常见的公式如下 ( 如果n是公式，则从0开始计算，但是第 0 个元素或者超出了元素的个数会被忽略 )

        - nth-child 对父元素里面所有孩子排序选择（序号是固定的） 先找到第n个孩子，然后看看是否和E匹配
        - nth-of-type 对父元素里面指定子元素进行排序选择。 先去匹配E ，然后再根据E 找第n个孩子
        -  类选择器、属性选择器、伪类选择器，权重为 10。

      - 伪元素选择器（重点）

            伪元素选择器可以帮助我们利用CSS创建新标签元素，而不需要HTML标签，从而简化HTML结构

          | 选择符   | 简介                   |
          | :------- | :--------------------- |
          | ::before | 在元素内部前面插入内容 |
          | ::after  | 在元素内部后面插入内容 |


          - before 和 after 创建一个元素，但是属于行内元素
          -  新创建的这个元素在文档树中是找不到的，所以我们称为伪元素
          -  语法： element::before {} 
          -  before 和 after 必须有 content 属性
          -  before 在父元素内容的前面创建元素，after 在父元素内容的后面插入元素
          -  伪元素选择器和标签选择器一样，权重为 1

                   p::before {
                    position: absolute;
                    right: 20px;
                    top: 10px;
                    //字体图标 
                    content: '\e91e';
                    font-size: 20px;
                  }

3. CSS3 新增盒子模型

    CSS3 中可以通过 box-sizing 来指定盒模型，有2个值：即可指定为 content-box、border-box，这样我们计算盒子大小的方式就发生了改变。

    - 可以分成两种情况：
      - box-sizing: content-box 盒子大小为 width + padding + border （以前默认的）
      - box-sizing: border-box 盒子大小为 width
    - 如果盒子模型我们改为了box-sizing: border-box ， 那padding和border就不会撑大盒子了（前提padding和border不会超过width宽度）
                
4. CSS3 其他特性（了解）

    -  图片变模糊
       -  CSS3滤镜filter:
       -  filter CSS属性将模糊或颜色偏移等图形效果应用于元素。
       -   filter: 函数(); 例如： filter: blur(5px); blur模糊处理 数值越大越模糊

    - 计算盒子宽度 width: calc 函数
      - calc() 此CSS函数让你在声明CSS属性值时执行一些计算。  
      - width: calc(100% - 80px);
      - 括号里面可以使用 + - * / 来进行计算。

5. CSS3 过渡（重点）

    - 过渡（transition)是CSS3中具有颠覆性的特征之一，我们可以在不使用 Flash 动画或JavaScript 的情况下，当元素从一种样式变换为另一种样式时为元素添加效果。
    - 过渡动画： 是从一个状态 渐渐的过渡到另外一个状态
    - 可以让我们页面更好看，更动感十足，虽然 低版本浏览器不支持（ie9以下版本） 但是不会影响页面布局。
    - 我们现在经常和 :hover 一起 搭配使用。

            transition: 要过渡的属性 花费时间 运动曲线 何时开始;

        - 属性 ： 想要变化的 css 属性， 宽度高度 背景颜色 内外边距都可以 。如果想要所有的属性都变化过渡， 写一个all 就可以。
        - 花费时间： 单位是 秒（必须写单位） 比如 0.5s 
        - 运动曲线： 默认是 ease （可以省略）
        - 何时开始 ：单位是 秒（必须写单位）可以设置延迟触发时间 默认是 0s （可以省略）
