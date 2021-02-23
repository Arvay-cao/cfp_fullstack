# CSS 学习第三课 ———— CSS字体属性

1. CSS字体属性
   
   CSS fonts （字体）属性定义字体体系、大小、粗细、和文字样式（如：斜体）

   - 字体体系

        CSS使用font-family属性定义文本体系。

            p {
                pont-family: "微软雅黑"
            }
            div {
                font-family: Arial,"Microsoft yahei","微软雅黑";
            }
    
    - 字体大小

        font-size: 16px;

    - 字体粗细

        font-weight: normal;//相当于数字的400
        font-weight: bold;
        font-weight: bolder;
        font-weight: lighter;
        font-weight: inherit;
        font-weight: initial;
        font-weight: 500;//不用跟单位

    - 文字样式

        font-style: italic;
        font-style: normal;
    
    - 字体的复合属性

        <strong>font: font-style font-weight font-size/line-height font-family;</strong>
        
        font: italic 700 16px/20px 'Microsoft yahei';

        - font-size font-family 不能缺