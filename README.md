# marquee

移动端marquee效果插件

## 最新版本

**0.0.1**

## 依赖库

无

## example:

``` html
<body>
    
    <style>
        .marquee-wrap {
            height: 35px;
            line-height: 35px;
            font-size: 14px;
            color: #333;
            position: relative;
            overflow: hidden;
        }
    </style>

    <div class="marquee-wrap">
        <ul id="marquee">
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>

    <script>
        marquee.init(document.getElementById("marquee"));
    </script>
    
</body>



