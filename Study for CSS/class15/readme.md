# CSS 学习第十五课 ———— CSS高级技巧

1. 精灵图

    为了有效地减少服务器接收和发送请求的次数，提高页面的加载速度，出现了 CSS 精灵技术（也称CSS Sprites、CSS 雪碧）。

    核心原理：将网页中的一些小背景图像整合到一张大图中 ，这样服务器只需要一次请求就可以了。

    - 使用精灵图核心：
        - 精灵技术主要针对于背景图片使用。就是把多个小背景图片整合到一张大图片中。
        - 这个大图片也称为 sprites 精灵图 或者 雪碧图
        - 移动背景图片位置， 此时可以使用 background-position 。
        - 移动的距离就是这个目标图片的 x 和 y 坐标。注意网页中的坐标有所不同
        - 因为一般情况下都是往上往左移动，所以数值是负值。
        - 使用精灵图的时候需要精确测量，每个小背景图片的大小和位置。

    - 使用精灵图核心总结：
        - 精灵图主要针对于小的背景图片使用。
        - 主要借助于背景位置来实现---background-position 。
        - 一般情况下精灵图都是负值。（千万注意网页中的坐标： x轴右边走是正值，左边走是负值， y轴同理。）

2. 字体图标

    - 字体图标使用场景： 主要用于显示网页中通用、常用的一些小图标
    - 精灵图是有诸多优点的，但是缺点很明显
        - 图片文件还是比较大的。
        - 图片本身放大和缩小会失真。
        - 一旦图片制作完毕想要更换非常复杂。
    - 此时，有一种技术的出现很好的解决了以上问题，就是字体图标 iconfont。
    - 字体图标可以为前端工程师提供一种方便高效的图标使用方式，展示的是图标，本质属于字体。
    - 字体图标的优点
        - 轻量级：一个图标字体要比一系列的图像要小。一旦字体加载了，图标就会马上渲染出来，减少了服务器请求
        - 灵活性：本质其实是文字，可以很随意的改变颜色、产生阴影、透明效果、旋转等
        - 兼容性：几乎支持所有的浏览器，请放心使用

    - 字体图标是一些网页常见的小图标，我们直接网上下载即可。 因此使用可以分为：

        - 字体图标的下载
        - 字体图标的引入 （引入到我们html页面中）

                @font-face {
                    font-family: 'icomoon';
                    src: url('fonts/icomoon.eot?7kkyc2');
                    src: url('fonts/icomoon.eot?7kkyc2#iefix') format('embedded-opentype'),
                    url('fonts/icomoon.ttf?7kkyc2') format('truetype'),
                    url('fonts/icomoon.woff?7kkyc2') format('woff'),
                    url('fonts/icomoon.svg?7kkyc2#icomoon') format('svg');
                    font-weight: normal;
                    font-style: normal;
                }


        - 字体图标的追加 （以后添加新的小图标）

                如果工作中，原来的字体图标不够用了，我们需要添加新的字体图标到原来的字体文件中。
                把压缩包里面的 selection.json 从新上传，然后选中自己想要新的图标，从新下载压缩包，并替换原来的文件即可。

        - 推荐下载网站：
            - icomoon 字库 http://icomoon.io 推荐指数 ★★★★★
            - 阿里 iconfont 字库 http://www.iconfont.cn/ 推荐指数 ★★★★★

3. CSS三角

        width: 0;
        height: 0;
        line-height: 0;
        font-size: 0;
        border: 10px solid transparent;
        border-bottom-color: rgb(181, 187, 187);

4. CSS 用户界面样式

    - 鼠标样式 cursor

            li {cursor: pointer; }
        - 设置或检索在对象上移动的鼠标指针采用何种系统预定义的光标形状。

        |   属性值    |    描述    |
        | :---------: | :--------: |
        |   default   | 小白、默认 |
        |   pointer   |    小手    |
        |    move     |    移动    |
        |    text     |    文本    |
        | not-allowed |    禁止    |

    - 取消表单轮廓和防止拖拽文本
      - 轮廓线 outline

            input { outline: none; }

      - 防止拖拽文本域 

            textarea { resize: none; }

5. vertical-align 属性应用

    - 图片、表单和文字对齐
       - vertical-align 属性使用场景： 经常用于设置图片或者表单(行内块元素）和文字垂直对齐
       - 用于设置一个元素的垂直对齐方式，但是它只针对于行内元素或者行内块元素有效。
       - 语法

           vertical-align : baseline | top | middle | bottom 

    - 解决图片底部默认空白缝隙问题
      - bug：图片底侧会有一个空白缝隙，原因是行内块元素会和文字的基线对齐。
      - 主要解决方法
          - 给图片添加 vertical-align:middle | top| bottom 等。 （提倡使用的）
          - 把图片转换为块级元素 display: block;

6. 溢出文字用省略号代替

    - 单行文本溢出

            /*1. 先强制一行内显示文本*/
            white-space: nowrap; （ 默认 normal 自动换行）
            /*2. 超出的部分隐藏*/
            overflow: hidden;
            /*3. 文字用省略号替代超出的部分*/
            text-overflow: ellipsis;

    - 多行文本溢出

            overflow: hidden;
            text-overflow: ellipsis;
            /* 弹性伸缩盒子模型显示 */
            display: -webkit-box;
            /* 限制在一个块元素显示的文本的行数 */
            -webkit-line-clamp: 2;
            /* 设置或检索伸缩盒对象的子元素的排列方式 */
            -webkit-box-orient: vertical;

7. 常见技巧

    - margin负值的运用

        - 让每个盒子margin 往左侧移动 -1px 正好压住相邻盒子边框
        - 鼠标经过某个盒子的时候，提高当前盒子的层级即可（如果没有有定位，则加相对定位（保留位置），如果有定位，则加z-index）

    - 文字围绕浮动元素

        - 浮动最初是为了文字环绕

    - 行内块的巧妙运用

        - 把这些链接盒子转换为行内块， 之后给父级指定 text-align:center;
        - 利用行内块元素中间有缝隙，并且给父级添加 text-align:center; 行内块元素会水平会居中

    - CSS三角强化

            width: 0;
            height: 0;
            border-color: transparent red transparent transparent;
            border-style: solid;
            border-width: 22px 8px 0 0;

8. CSS 初始化

    - 不同浏览器对有些标签的默认值是不同的，为了消除不同浏览对HTML文本呈现的差异，照顾浏览器的兼容，我们需要对CSS 初始化
    - 简单理解： CSS初始化是指重设浏览器的样式。 (也称为CSS reset）每个网页都必须首先进行 CSS初始化。这里我们以 京东CSS初始化代码为例。

        Unicode编码字体：
        把中文字体的名称用相应的Unicode编码来代替，这样就可以有效的避免浏览器解释CSS代码时候出现乱码
        的问题。
        比如：
        黑体 \9ED1\4F53
        宋体 \5B8B\4F53
        微软雅黑 \5FAE\8F6F\96C5\9ED1