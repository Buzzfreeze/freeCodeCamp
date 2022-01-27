---
id: bad87fee1248bd9aedf08824
title: Add Different Margins to Each Side of an Element
challengeType: 0
videoUrl: "https://scrimba.com/c/cg4RWh4"
forumTopicId: 16633
dashedName: add-different-margins-to-each-side-of-an-element
---

# --description--

บางครั้ง คุณอาจจะอยากให้ `margin` แต่ละด้านไม่เท่ากัน

คุณสามารถควบคุม `margin` ของแต่ละด้านแยกกันได้ โดยใช้ property `margin-top`, `margin-right`, `margin-bottom`, และ `margin-left`

# --instructions--

ให้กำหนดค่าของ `margin` ของกล่องสีน้ำเงิน โดยให้ด้านบนและด้านซ้าย มีค่าเป็น `40px` และ ด้านล่างและด้านขวา มีค่าเป็น `20px`

# --hints--

คลาส `blue-box` ต้องมี `margin` ด้านบนเป็น `40px`

```js
assert($(".blue-box").css("margin-top") === "40px");
```

คลาส `blue-box` ต้องมี `margin` ด้านขวาเป็น `20px`

```js
assert($(".blue-box").css("margin-right") === "20px");
```

คลาส `blue-box` ต้องมี `margin` ด้านล่างเป็น `20px`

```js
assert($(".blue-box").css("margin-bottom") === "20px");
```

คลาส `blue-box` ต้องมี `margin` ด้านซ้ายเป็น `40px`

```js
assert($(".blue-box").css("margin-left") === "40px");
```

# --seed--

## --seed-contents--

```html
<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 10px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    margin-top: 40px;
    margin-right: 20px;
    margin-bottom: 20px;
    margin-left: 40px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```

# --solutions--

```html
<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 10px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    margin-top: 40px;
    margin-right: 20px;
    margin-bottom: 20px;
    margin-left: 40px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    margin-top: 40px;
    margin-right: 20px;
    margin-bottom: 20px;
    margin-left: 40px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```
