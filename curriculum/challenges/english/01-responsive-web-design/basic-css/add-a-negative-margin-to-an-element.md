---
id: bad87fee1348bd9aedf08823
title: Add a Negative Margin to an Element
challengeType: 0
videoUrl: 'https://scrimba.com/c/cnpyGs3'
forumTopicId: 16166
dashedName: add-a-negative-margin-to-an-element
---

# --description--

`margin` ของ element จะควบคุมขนาดช่องว่างระหว่าง `border` ของ element กับ element ที่อยู่รอบๆ

ถ้าคุณกำหนดให้  `margin` ของ element มีค่าเป็นลบ  
element จะมีขนาดใหญ่ขึ้น

# --instructions--

ลงกำหนดค่าของ `margin` ให้เป็นค่าลบเหมือนกับอันที่ใช้กับกล่องแดง

จงเปลี่ยน `margin` ของกล่องฟ้าให้เป็น `-15px`, เพื่อที่มันจะได้ด้านกว้างทั้งหมดของกล่องเหลืองรอบมัน

# --hints--

`blue-box` class ควรกำหนดให้ element มี `-15px` เป็นค่าของ `margin`

```js
assert($('.blue-box').css('margin-top') === '-15px');
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
