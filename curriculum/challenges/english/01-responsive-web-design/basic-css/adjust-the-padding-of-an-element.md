---
id: bad88fee1348bd9aedf08825
title: Adjust the Padding of an Element
challengeType: 0
videoUrl: "https://scrimba.com/c/cED8ZC2"
forumTopicId: 301083
dashedName: adjust-the-padding-of-an-element
---

# --description--

ตอนนี้ เรามาพักเรื่อง Cat Photo App ไปก่อนซักพัก แล้วมาเรียนเกี่ยวกับ styling HTML กันดีกว่า

คุณอาจจะเห็นแล้วว่า HTML element จริงๆแล้วก็เป็นแค่สี่เหลี่ยม

property สำคัญ 3 ตัวที่ควบคุมช่องว่างที่ล้อมรอบ HTML element คือ `padding`, `border`, และ `margin`

`padding` จะใช้ควบคุมขนาดของช่องว่างระหว่าง content และ `border` ของ element

ตอนนี้เราจะเห็นได้ว่ากล่องสีน้ำเงินและกล่องสีแดงในอยู่ในกล่องสีเหลือง
ให้สังเกตว่ากล่องสีแดงมี `padding` มากกว่ากล่องสีน้ำเงิน (ในตัวอย่างนี้ content ของทั้งสองกล่องคือข้อความที่เป็นคำว่า padding)

เมื่อคุณเพิ่ม `padding` ของกล่องสีน้ำเงิน จะทำให้ระยะห่าง (`padding`) ระหว่างข้อความและเส้นขอบเพิ่มขึ้น

# --instructions--

ให้เปลี่ยน `padding` ของกล่องสีน้ำเงินให้เท่ากับกล่องสีแดง

# --hints--

`padding` ของคลาส `blue-box` ต้องมีค่าเป็น `20px`

```js
assert($(".blue-box").css("padding-top") === "20px");
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
