# CSS 学习第十一课 ———— 盒子模型

页面三大核心： 盒子模型、浮动、定位。

1. 网页布局过程：
     - 先准备好相关的网页元素，网页元素基本都是盒子 Box 。
     - 利用 CSS 设置好盒子样式，然后摆放到相应位置。
     -  往盒子里面装内容.
2. 网页布局的核心本质： 就是利用 CSS 摆盒子。
3. 盒子模型（Box Model）组成
     - 边框（border）
       - 边框的宽度
       - 边框样式
       - 边框颜色
               border-width: 4px;
               border-style: solid;
               border-color: cadetblue;
               //简化写法 没有顺序要求
               border: 5px solid royalblue;
               //边框分开写法：
               border-top: 1px solid red; 
                /* 表示相邻边框合并在一起 */
               border-collapse:collapse; 
               
       - 边框样式 border-style 可以设置如下值：
           - none：没有边框即忽略所有边框的宽度（默认值）
           - solid：边框为单实线(最为常用的)
           - dashed：边框为虚线 
           - dotted：边框为点线
     - 内边距（padding）
           padding-left: 20px;
           padding-top: 20px;
           padding-bottom: 20px;
           padding-right: 20px;
           /* 复合写法 */
           /* 上下左右内边距都是20px */
           padding: 20px;
           /* 上下边距是5px，左右边距是10px */
           padding: 5px 10px;
           /* 上边距是5px，左右边距是10px，下边距是20px */
           padding: 5px 10px 20px;
           /* 上边距是5px，右边距是10px，下边距是20px，左边距是30px 顺时针*/
           padding: 5px 10px 20px 30px;
     - 外边距（margin）
           /* 外边距 */
           margin-top: 20px;
           margin-bottom: 20px;
           /*复合写法与内边距相同*/
         
         -  外边距合并
            -  相邻块元素垂直外边距的合并 （解决方案： 尽量只给一个盒子添加 margin 值）
            -  嵌套块元素垂直外边距的塌陷
                  - 可以为父元素定义上边框。
                  - 可以为父元素定义上内边距。
                  - 可以为父元素添加 overflow:hidden。
         - 清除内外边距

                * {
                    padding:0; /* 清除内边距 */
                    margin:0; /* 清除外边距 */
                    }

     - 实际内容（content）

4. ps基本操作

   - 文件->打开 ：可以打开我们要测量的图片
   - Ctrl+R：可以打开标尺，或者 视图 ->标尺
   - 右击标尺，把里面的单位改为像素 
   - Ctrl+ 加号(+)可以放大视图， Ctrl+ 减号(-)可以缩小视图
   - 按住空格键，鼠标可以变成小手，拖动 PS 视图
   - 用选区拖动 可以测量大小
   - Ctrl+ D 可以取消选区，或者在旁边空白处点击一下也可以取消选区