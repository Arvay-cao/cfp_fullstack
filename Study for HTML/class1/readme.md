# HTML/CSS 学习第一课

## 网页

1. 什么是网页？

    网站是指在英特网上根据一定的规则，使用HTML等制作的用于展示特定内容相关的网页集合。
    
    网页是网站中的一页，通常是HTML格式的文件，它要通过浏览器来阅读。

    网页是构成网站的基本元素，常以.htm或.html后缀结尾的文件，因此其俗称为HTML文件。


2. 什么是HTML？

    HTML指超文本标记语言（Hyper Text Markup Language），它是一种用来描述网页的语言。

    标记语言是一套标记标签。

    所谓超文本,有2层含义:

    （1）它可以加入图片、声音、动画、多媒体等内容(超越了文本限制）。

    （2）它还可以从一个文件跳转到另一个文件，与世界各地主机的文件连接(超级链接文本).

3. 网页的形成？

    网页是由网页元素组成的，这些元素是利用HTML标签描述出来，然后通过浏览器解析出来显示给用户的。

## HTML常用浏览器

1. 浏览器内核

    浏览器内核（渲染引擎）：负责读取网页内容，整理讯息，计算网页的显示方式并显示页面。

    |   浏览器    |  内核    |  备注  |
    | :--------:  | :-----:   | :---- |
    | IE          | Trident  | IE、猎豹安全、360浏览器、百度浏览器  |
    | firefox     | Gecko    | 火狐浏览器内核  |
    | Stafari     | Webkit   | 苹果浏览器内核  |
    | Chrome/Opera| Blink    | Chrome/Opera浏览器内核。Blink是Webkit的分支|

## Web 标准

web 标准是由W3C组织和其他标准化组织制定得一系列标准的集合。W3C(万维网联盟)是国际最著名的标准化组织。

1. 为什么需要web标准

    浏览器不同，他们显示页面或者排版就有些许差异。遵循Web标准除了可以让不同的开发人员写出的页面更标准、更统一外还有以下优点：

       1. 让Web的发展前景更广阔。
       2. 内容能被更广泛的设备访问。
       3. 更容易被搜索引擎搜索。
       4. 降低网站流量费用。
       5. 使网站更易于维护。
       6. 提高页面浏览速度。
   
2. Web标准的构成
   
    结构、表现、行为。

    |   标准  |  备注  |
    | :----: | :------ |
    | 结构   | 结构用于对网页元素进行整理和分类，现阶段主要用于学的是HTML| 
    | 表现   | 表现用于设置网页元素的版式、颜色、大小等外观样式，主要是CSS| 
    | 行为   | 行为是指网页模型的定义及交互的编写，现阶段主要学的是JS| 
   
    Web标准提出的最佳体验方案：结构、样式、行为相分离。

    简单理解：结构写在HTML文件中，表现写在CSS文件中，行为写到JS文件中。