# 源码分析

## 国际化的命名规范

1. 今天会取名，明天
    取类名
    - .weui-btn
        btn 组件名 70%都是由框架提供的，基础类
        weui 项目前缀 tb tm 项目组
2. css 知识点
    - 元素分为行内元素和块级元素 inline block inline-block
    - 元素在页面上的占位，由内容（wh）padding border margin position 盒子模型  
3. 面向对象的css
   - 一个元素有多个类
        .weui-btn Block 基础类
        .weui-btn_primary Modifier 多态
4. npm i -g liver-server
        liver-server web 服务器
5. 结构 
   结构套路 移动端页面 超越项目
   .page>.page__hd+.page__bd
   weui 项目组
   BEM  搭积木
   Block 块
   Element 子元素 __两个下划线
   Modifier 装饰 _一个下划线
        .zfb-tabbar__item
        .zfb-tabbar__item_on

