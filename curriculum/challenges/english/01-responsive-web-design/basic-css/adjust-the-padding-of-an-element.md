---
id: bad88fee1348bd9aedf08825
title: Adjust the Padding of an Element
challengeType: 0
videoUrl: 'https://scrimba.com/c/cED8ZC2'
forumTopicId: 301083
dashedName: adjust-the-padding-of-an-element
---

# --description--

ตอนนี้ เรามาพักเรื่อง Cat Photo App ไปก่อนซักพัก แล้วมาเรียนเกี่ยวกับ styling HTML กันดีกว่า

คุณอาจจะเห็นแล้วว่า HTML element ทั้งหมดเป็นสี่เหลี่ยม

3 property สำคัญที่ควบคุมช่องว่างที่ล้อมรอบแต่ละ HTML element คือ `padding`, `border`, และ `margin`.

`padding` ของ element ควบคุมขนาดของช่องว่างระหว่าง content ของ element และ `border` ของมัน

ตอนนี้พวกเราจะเห็นได้ว่ากล่องสีน้ำเงินและกล่องสีแดงในอยู่ในกล่องสีเหลือง 
จงจำไว้ว่ากล่องสีแดงนั้นมี `padding` มากกว่ากล่องสีน้ำเงิน

เมื่อคุณเพิ่ม `padding` ของกล่องสีน้ำเงิน มันจะเพิ่มระยะห่าง (`padding`) ระหว่างข้อความและขอบที่ล้อมรอบมัน 

# --instructions--

จงเปลี่ยน `padding` ของกล่องสีน้ำเงินให้ตรงกับกล่องสีแดง

# --hints--

`blue-box` class ควรกำหนดให้ element มี `padding` เป็น `20px`

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
