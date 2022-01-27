---
id: bad87fee1348bd9aedf08823
title: Add a Negative Margin to an Element
challengeType: 0
videoUrl: "https://scrimba.com/c/cnpyGs3"
forumTopicId: 16166
dashedName: add-a-negative-margin-to-an-element
---

# --description--

`margin` จะควบคุมขนาดช่องว่างระหว่าง `border` ของ element กับ element ที่อยู่รอบๆ

ถ้าคุณกำหนดให้ `margin` ของ element มีค่าติดลบ  
element นั้นจะมีขนาดใหญ่ขึ้น

# --instructions--

ให้กำหนดค่าของ `margin` ให้เป็นค่าลบ เหมือนกับกล่องสีแดง

ให้เปลี่ยน `margin` ของกล่องฟ้าให้เป็น `-15px`

# --hints--

`margin` ของคลาส `blue-box` ต้องเป็น `-15px`

```js
assert($(".blue-box").css("margin-top") === "-15px");
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
    padding: 20px;
    margin: -15px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 20px;
    margin: 20px;
  }
</style>

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
    padding: 20px;
    margin: -15px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 20px;
    margin: 20px;
    margin-top: -15px;
  }
</style>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```
