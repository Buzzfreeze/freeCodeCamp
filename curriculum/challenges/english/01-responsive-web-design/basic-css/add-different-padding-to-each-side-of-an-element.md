---
id: bad87fee1348bd9aedf08824
title: Add Different Padding to Each Side of an Element
challengeType: 0
videoUrl: "https://scrimba.com/c/cB7mwUw"
forumTopicId: 16634
dashedName: add-different-padding-to-each-side-of-an-element
---

# --description--

บางครั้ง คุณอาจจะอยากให้ `padding` แต่ละด้านไม่เท่ากัน

คุณสามารถควบคุม `padding` ของแต่ละด้านแยกกันได้ โดยใช้ property `padding-top`, `padding-right`, `padding-bottom`, และ `padding-left`

# --instructions--

ให้กำหนดค่าของ `padding` ของกล่องสีน้ำเงิน โดยให้ด้านบนและด้านซ้ายมีค่าเป็น `40px` และ ด้านล่างและด้านขวามีค่าเป็น `20px`

# --hints--

คลาส `blue-box` ต้องมี `padding` ด้านบนเป็น `40px`

```js
assert($(".blue-box").css("padding-top") === "40px");
```

คลาส `blue-box` ต้องมี `padding` ด้านขวาเป็น `20px`

```js
assert($(".blue-box").css("padding-right") === "20px");
```

คลาส `blue-box` ต้องมี `padding` ด้านล่างเป็น `20px`

```js
assert($(".blue-box").css("padding-bottom") === "20px");
```

คลาส `blue-box` ต้องมี `padding` ด้านซ้ายเป็น `40px`

```js
assert($(".blue-box").css("padding-left") === "40px");
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
    padding-top: 40px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 40px;
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
    padding-top: 40px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 40px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding-top: 40px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 40px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```
