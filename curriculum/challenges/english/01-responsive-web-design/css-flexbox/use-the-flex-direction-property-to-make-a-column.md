---
id: 587d78ac367417b2b2512af4
title: Use the flex-direction Property to Make a Column
challengeType: 0
videoUrl: "https://scrimba.com/p/pVaDAv/cZmWeA4"
forumTopicId: 301109
dashedName: use-the-flex-direction-property-to-make-a-column
---

# --description--

ในแบบทดสอบสองอันที่ผ่านมา เราได้กำหนดค่าของ property `flex-direction` ให้เป็น `row` ไปแล้ว
และเราก็สามารถใช้ property นี้เรียง child element เป็น column ที่ซ้อนกันอยู่ได้

# --instructions--

ให้เพิ่ม CSS property `flex-direction` ให้กับ `#box-container`
และให้กำหนดค่าเป็น `column`

# --hints--

`#box-container` ต้องมีค่าของ property `flex-direction` เป็น `column`

```js
assert($("#box-container").css("flex-direction") == "column");
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
    flex-direction: column;
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
