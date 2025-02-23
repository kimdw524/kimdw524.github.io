---
date: '2025-02-23 23:50:00'
title: 'transition이 발생하지 않는 이유'
slug: 'trigger-transition'
tags: ['JavaScript', 'CSS']
---

```javascript
<html>
  <head>
    <style>
      .box {
        width: 100px;
        height: 100px;

        background-color: green;
      }
    </style>
    <script>
      function test() {
        const $box = document.querySelector(".box");

        $box.style.backgroundColor = "red";
        $box.style.transition = "all 0.2s";
        $box.style.backgroundColor = "blue";
      }
    </script>
  </head>
  <body>
    <div class="box">box</div>
    <button onClick="test()">Button</button>
  </body>
</html>
```

위와 같은 코드가 있다. Button을 클릭하여 `test()` 함수를 호출했을 때 box의 background-color가 어떻게 transition 될까?

개발자는 red → blue로 transition이 일어나는 걸 의도했겠지만 결과는 green → blue로 transition이 된다.
