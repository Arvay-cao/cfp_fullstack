# CSS学习第十二课 ———— 圆角边框 盒子阴影 文字阴影

1. 圆角边框

        border-radius: 20px;

    - 参数值可以为数值或百分比的形式
    - 如果是正方形，想要设置为一个圆，把数值修改为高度或者宽度的一半即可，或者直接写为 50%
    - 该属性是一个简写属性，可以跟四个值，分别代表左上角、右上角、右下角、左下角
    - 分开写：

            border-top-left-radius
            border-top-right-radius
            border-bottom-right-radius
            border-bottom-left-radius

    - 兼容性 ie9+ 浏览器支持, 但是不会影响页面布局,可以放心使用.

2. 盒子阴影

        box-shadow: h-shadow v-shadow blur spread color inset; 
        box-shadow: 10px 10px 10px -4px rgba(0, 0, 0, .3);

   - h-shadow 必需。水平阴影的位置。允许负值。
   - V-shadow 必需。垂直阴影的位置。允许负值。
   - blur 可选。模糊距离。
   - spread 可选。阴影的尺寸。
   - color 可选。阴影的颜色。请参阅CSS颜色值。
   - inset 可选。将外部阴影(outset)改为内部阴影。

3. 文字阴影

        text-shadow: h-shadow v-shadow blur color;

   - h-shadow 必需。水平阴影的位置。允许负值。
   - V-shadow 必需。垂直阴影的位置。允许负值。
   - blur 可选。模糊距离。
   - color 可选。阴影的颜色。请参阅CSS颜色值。