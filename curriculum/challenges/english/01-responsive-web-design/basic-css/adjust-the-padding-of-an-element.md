---
id: bad88fee1348bd9aedf08825
title: Adjust the Padding of an Element
challengeType: 0
videoUrl: 'https://scrimba.com/c/cED8ZC2'
forumTopicId: 301083
dashedName: adjust-the-padding-of-an-element
---

# --description--

ตอนนี้ เรามาพักเรื่อ Cat Photo App ไปก่อนซักพัก แล้วหันมาเรียนเกี่ยวกับ styling HTML ดีกว่า

คุณอาจจะเห็นมันแล้ว HTML element ทั้งหมดเป็นสี่เหลี่ยม

3 property สำคัญที่ควบคุมช่องว่างที่ล้อมรอบแต่ละ HTML element: `padding`, `border`, และ `margin`.

`padding` ของ element ควบคุณขนาดของช่องว่างระหว่าง content ของ element และ `border` ของมัน

ตอนนีพวกเราสามารถเห็นได้ว่ากล่องสีฟ้าและกล่องสีแดงในอยู่ในกล่องสีเหลือง 
จงจำไว้ว่ากล่องสีแดงนั้นมี `padding` มากกว่ากล่องสีฟ้า

เมื่อคุณเพิ่ม `padding` ของกล่องสีฟ้า มันจะเพิ่มระยะห่าง (`padding`) ระหว่างข้อความและขอบที่ล้อมรอบมัน 

# --instructions--

จงเปลี่ยน `padding` ของกล่องสีฟ้าให้ตรงกับกล่องสีแดง

# --hints--

`blue-box` class ควรกำหนดให้ element มี `20px` เป็น `padding`

```js
assert($('.blue-box').css('padding-top') === '20px');
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
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 10px;
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
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 20px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```
