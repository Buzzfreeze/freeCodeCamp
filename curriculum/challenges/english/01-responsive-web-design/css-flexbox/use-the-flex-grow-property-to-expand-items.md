---
id: 587d78ae367417b2b2512afc
title: Use the flex-grow Property to Expand Items
challengeType: 0
videoUrl: "https://scrimba.com/p/pVaDAv/c2p78cg"
forumTopicId: 301111
dashedName: use-the-flex-grow-property-to-expand-items
---

# --description--

เรามี property ที่ตรงข้ามกับ `flex-shrink` ด้วย ซึ่งก็คือ `flex-grow`

ถ้ายังจำได้ `flex-shrink` จะควบคุมขนาดของ item เมื่อ container ถูกย่อให้เล็กลง
คราวนี้ `flex-grow` จะควบคุมขนาดของ item เมื่อ parent container ถูกขยายให้ใหญ่ขึ้น

ลองดูตัวอย่างที่คล้ายกับแบบทดสอบที่แล้ว

ุถ้ามี item ที่มี `flex-grow` เป็น `1` และมี item อีกตัวที่มี `flex-grow` เป็น `3` ตัวที่มีค่าเป็น `3` จะมีขนาดใหญ่ขึ้นสามเท่าของตัวที่มีค่าเป็น `1`

# --instructions--

ให้เพิ่ม CSS property `flex-grow` ให้กับทั้ง `#box-1` และ `#box-2`
โดยกำหนดให้ `#box-1` มีค่าเป็น `1` และ `#box-2` มีค่าเป็น `2`

# --hints--

`#box-1` ต้องมีค่าของ property `flex-grow` เป็น `1`

```js
assert($("#box-1").css("flex-grow") == "1");
```

`#box-2` ต้องมีค่าของ property `flex-grow` เป็น `2`

```js
assert($("#box-2").css("flex-grow") == "2");
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
    height: 200px;
  }

  #box-2 {
    background-color: orangered;
    height: 200px;
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
  }

  #box-1 {
    background-color: dodgerblue;
    height: 200px;
    flex-grow: 1;
  }

  #box-2 {
    background-color: orangered;
    height: 200px;
    flex-grow: 2;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```
