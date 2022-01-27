---
id: 587d78ab367417b2b2512af2
title: Use the flex-direction Property to Make a Row
challengeType: 0
videoUrl: "https://scrimba.com/p/pVaDAv/cBEkbfJ"
forumTopicId: 301110
dashedName: use-the-flex-direction-property-to-make-a-row
---

# --description--

การเพิ่ม `display: flex` จะเปลี่ยน element ให้กลายเป็น flex container
ซึ่งจะทำให้เราเรียง child ของ element นั้นให้เป็น row หรือ column ได้
ซึ่งคุณจะเรียง child element ได้โดยระบุ property `flex-direction` ให้กับ parent element และกำหนดให้มีค่าเป็น row หรือ column

การใช้ row จะเป็นการเรียง child เป็นแถวในแนวนอน
ส่วนการใช้ column จะเป้นการเรียง child ในแนวตั้ง

`flex-direction` ก็รับค่าอื่นได้อีกคือ `row-reverse` และ `column-reverse`

**Note:** ค่าเริ่มต้นของ property `flex-direction` คือ `row`

# --instructions--

ให้เพิ่ม CSS property `flex-direction` ให้กับ `#box-container`
โดยให้กำหนดค่าเป็น `row-reverse`

# --hints--

`#box-container` ต้องมี property `flex-direction` โดยมีค่าเป็น `row-reverse`

```js
assert($("#box-container").css("flex-direction") == "row-reverse");
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
