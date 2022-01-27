---
id: bad87fee1348bd9aedf08822
title: Adjust the Margin of an Element
challengeType: 0
videoUrl: "https://scrimba.com/c/cVJarHW"
forumTopicId: 16654
dashedName: adjust-the-margin-of-an-element
---

# --description--

`margin` จะควบคุมขนาดช่องว่างระหว่าง `border` ของ element กับ element ที่อยู่รอบๆ

ตอนนี้ เราจะเห็นว่ากล่องสีฟ้าและกล่องสีแดงอยู่ในกล่องสีเหลือง
กล่องสีแดงมี `margin` ที่มากกว่าของกล่องสีฟ้า ทำให้กล่องสีแดงดูเล็กกว่า

ถ้าคุณเพิ่ม `margin` ของกล่องสีฟ้า ระยะห่างระหว่างเส้นขอบกับ element ที่อยู่รอบๆ ก็จะเพิ่มขึ้นด้วย

# --instructions--

ให้เปลี่ยน `margin` ของกล่องสีฟ้าให้เท่ากับ `margin` ของกล่องสีแดง

# --hints--

`margin` ของคลาส `blue-box` ต้องมีค่าเป็น `20px`

```js
assert($(".blue-box").css("margin-top") === "20px");
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
    margin: 20px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 20px;
    margin: 10px;
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
    padding: 20px;
    margin: 20px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 20px;
    margin: 20px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```
