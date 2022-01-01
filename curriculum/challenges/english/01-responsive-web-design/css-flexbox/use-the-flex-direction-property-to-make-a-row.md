---
id: 587d78ab367417b2b2512af2
title: Use the flex-direction Property to Make a Row
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cBEkbfJ'
forumTopicId: 301110
dashedName: use-the-flex-direction-property-to-make-a-row
---

# --description--

การเพิ่ม `display: flex` ให้กับ element หนึ่งทำให้มันกลายเป็น flex container
สิ่งนี้จะทำให้เราสามารถเรียง children ของ element นั้นให้เป็น row หรือ column ได้
คุณทำแบบนี้ได้โดยการเพิ่ม `flex-direction` property ให้กับ parent item และกำหนดค่าให้มันเป็น row หรือ column
การสร้าง row ขึ้นมาหนึ่งอันจะเป็นการเรียง children เป็นแถวในแนวนอน
ส่วนการสร้าง column ก้จะเป้นการเรียง children ในแนวตั้ง

วิธีการอื่นสำหรับ `flex-direction` คือ `row-reverse` และ `column-reverse`

**Note:** ค่าเริ่มต้นของ `flex-direction` property คือ `row`

# --instructions--

จงเพิ่ม CSS property `flex-direction` ให้กับ `#box-container` element
และจงกำหนดให้มันมีค่าเป็น `row-reverse`

# --hints--

`#box-container` element ควรมี `flex-direction` property อันหนึ่งที่มีค่าเป็น `row-reverse`

```js
assert($('#box-container').css('flex-direction') == 'row-reverse');
```

# --seed--

## --seed-contents--

```html
<style>
  #box-container {
    display: flex;
    height: 500px;
  }
  #box-1 {
    background-color: dodgerblue;
    width: 50%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 50%;
    height: 50%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```

# --solutions--

```html
<style>
  #box-container {
    display: flex;
    height: 500px;
    flex-direction: row-reverse;
  }
  #box-1 {
    background-color: dodgerblue;
    width: 50%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 50%;
    height: 50%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```
