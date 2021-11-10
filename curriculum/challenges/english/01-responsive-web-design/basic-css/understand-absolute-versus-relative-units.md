---
id: bad82fee1322bd9aedf08721
title: Understand Absolute versus Relative Units
challengeType: 0
videoUrl: 'https://scrimba.com/c/cN66JSL'
forumTopicId: 301089
dashedName: understand-absolute-versus-relative-units
---

# --description--

หลาย ๆ แบบฝึกหัดที่ผ่านมาได้กำหนด margin หรือ padding ของ element หนึ่งด้วย pixels (`px`)
Pixel เป็นหน่วยความยาวประเภทหนึ่ง โดยมันจะบอก browser ถึงขนาดและช่องว่างของมัน
ยนอกเหนือจาก `px`, CSS ยังมีหน่วยความยาวอีกหลายหน่วยที่คุณสามารถใช้ได้

หน่วยความยาว 2 ประเภทหลัก คือ absolute และ relative
หน่วย absolute จะขึ้นกับขนาดจริง ๆ ยกตัวอย่างเช่น `in` และ `mm` ที่หมายถึงนิ้วและมิลลิเมตร 
หน่วย absolute length จะประมาณค่าจริงบนหน้าจอ แต่มันมีความต่างเล้กน้อยขึ้นกับความละเอียดของ screen

หน่วย relative เช่น `em` หรือ `rem`  จะขึ้นกับค่าความยาวอื่น ๆ ยกตัวอย่างเช่น `em` จะขึ้นกับขนาดของฟ้อนต์ของ element'
ถ้าคุณใช้มันเพื่อกำหนด `font-size` property, มันจะสัมพัทธ์กับ `font-size` ของ parent ของมัน

**Note:** มีหลาย relative unit ที่จะขึ้นกับขนาดของ viewport. พวกมันจะถูกกล่าวถึงใน Responsive Web Design Principles section.

# --instructions--
จงเพิ่ม `padding` property ให้กับ element ที่มีคลาส `red-box` และกำหนดให้มันเท่ากับ `1.5em`.

# --hints--

 `red-box` class ควรมี`padding` property.

```js
assert(
  $('.red-box').css('padding-top') != '0px' &&
    $('.red-box').css('padding-right') != '0px' &&
    $('.red-box').css('padding-bottom') != '0px' &&
    $('.red-box').css('padding-left') != '0px'
);
```

Your `red-box` class should give elements 1.5em of `padding`.

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
