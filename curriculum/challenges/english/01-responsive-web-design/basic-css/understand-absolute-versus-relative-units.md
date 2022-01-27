---
id: bad82fee1322bd9aedf08721
title: Understand Absolute versus Relative Units
challengeType: 0
videoUrl: "https://scrimba.com/c/cN66JSL"
forumTopicId: 301089
dashedName: understand-absolute-versus-relative-units
---

# --description--

ในหลายๆแบบฝึกหัดที่ผ่านมา เราได้กำหนด margin หรือ padding ของ element โดยใช้ pixel (`px`) มาตลอด

pixel เป็นหน่วยความยาวประเภทหนึ่ง โดยจะใช้บอกเบราว์เซอร์ให้ปรับขนาด หรือช่องว่างตามค่านี้
แต่นอกจาก `px` แล้ว CSS ยังมีหน่วยความยาวอีกหลายหน่วยให้คุณเลือกใช้

หน่วยความยาวถูกแบ่งเป็น 2 ประเภทหลัก คือ absolute และ relative
โดยหน่วย absolute จะขึ้นกับขนาดจริงๆของวัตถุ
เช่น `in` และ `mm` ที่หมายถึงหน่วยนิ้วและมิลลิเมตร
ในการใช้หน่วยความยาวแบบ absolute นั้น พอแสดงผลจริงๆ อาจไม่ตรงกับค่าที่ระบุ เพราะว่าจะขึ้นอยู่กับความละเอียดของจอภาพด้วย

หน่วย relative เช่น `em` หรือ `rem` จะขึ้นกับค่าของวัตถุอื่น เช่น `em` จะขึ้นอยู่กับขนาดฟอนต์ของ element
ถ้าคุณใช้ `em` เพื่อกำหนด property `font-size` คุณจะได้ค่าที่อิงมาจาก `font-size` ของ parent element

**Note:** หน่วยแบบ relative มีอีกหลายหน่วยที่จะอิงกับขนาดของหน้าจอ โดยเราจะสอนคุณในหัวข้อ Responsive Web Design Principles อีกทีหนึ่ง

# --instructions--

ให้เพิ่ม property `padding` ให้กับ element ที่มีคลาสเป็น `red-box` โดยกำหนดให้มีค่าเป็น `1.5em`

# --hints--

คลาส `red-box` ต้องมีการใช้ property `padding`

```js
assert(
  $(".red-box").css("padding-top") != "0px" &&
    $(".red-box").css("padding-right") != "0px" &&
    $(".red-box").css("padding-bottom") != "0px" &&
    $(".red-box").css("padding-left") != "0px"
);
```

คลาส `red-box` ต้องกำหนดให้ element มี `padding` เป็น `1.5em`

```js
assert(code.match(/\.red-box\s*?{[\s\S]*padding\s*:\s*?1\.5em/gi));
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
    padding: 20px 40px 20px 40px;
  }

  .red-box {
    background-color: red;
    margin: 20px 40px 20px 40px;
  }

  .green-box {
    background-color: green;
    margin: 20px 40px 20px 40px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box green-box">padding</h5>
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
    padding: 20px 40px 20px 40px;
  }

  .red-box {
    background-color: red;
    margin: 20px 40px 20px 40px;
    padding: 1.5em;
  }

  .green-box {
    background-color: green;
    margin: 20px 40px 20px 40px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box green-box">padding</h5>
</div>
```
