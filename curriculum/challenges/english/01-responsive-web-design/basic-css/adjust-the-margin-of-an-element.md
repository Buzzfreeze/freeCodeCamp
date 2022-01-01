---
id: bad87fee1348bd9aedf08822
title: Adjust the Margin of an Element
challengeType: 0
videoUrl: 'https://scrimba.com/c/cVJarHW'
forumTopicId: 16654
dashedName: adjust-the-margin-of-an-element
---

# --description--

`margin` ของ element จะควบคุมขนาดของช่องว่างระหว่าง `border` ของ element และ element รอบ ๆ

ตอนนี้ พวกเราสามารถเห็นได้ว่ากล่องสีฟ้าและกล่องสีแดในอยู่ในกล่องสีเหลือง
จงจำไว้ว่ากล่องสีแดงนั้นมี `margin` ที่ใหญ่กว่าของกล่องสีฟ้า ซึ่งทำให้กล่องสีฟ้าดูเล็กกว่า

เมื่อคุณเพิ่ม `margin` ของกล่องสีฟ้า มันจะเพิ่มระยะระหว่างขอบมันกับ element ที่อยู่รอบ ๆ

# --instructions--

จงเปลี่ยน `margin` ของกล่องสีฟ้าเพื่อให้มันตรงกับ margin ของสีแดง

# --hints--

`blue-box` class ควรกำหนดให้ element มี `20px` เป็นค่า `margin`

```js
assert($('.blue-box').css('margin-top') === '20px');
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
