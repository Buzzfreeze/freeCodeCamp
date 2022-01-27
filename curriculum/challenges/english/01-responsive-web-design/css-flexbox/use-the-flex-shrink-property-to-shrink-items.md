---
id: 587d78ad367417b2b2512afb
title: Use the flex-shrink Property to Shrink Items
challengeType: 0
videoUrl: "https://scrimba.com/p/pVaDAv/cd3PBfr"
forumTopicId: 301113
dashedName: use-the-flex-shrink-property-to-shrink-items
---

# --description--

property ที่เราได้เรียนไปทั้งหมดในแบบทดสอบที่ผ่านมา เป็น property ที่จะใช้กับ flex container (parent ของ flex item)
คราวนี้เราจะมาเรียน property ที่ใช้กับ flex item บ้าง

property ตัวแรกก็คือ `flex-shrink`
ซึ่งจะใช้ย่อขนาดของ item ถ้า flex container มีขนาดเล็กเกินไป
โดย item จะถูกย่อลงถ้าความกว้างของ parent container น้อยกว่ากว่า flex item ที่อยู่ด้านใน

`flex-shrink` จะรับค่าเป็นตัวเลข ซึ่งยิ่งถ้าเลขมาก จะยิ่งย่อขนาดมากเมื่อเทียบกับ flex item ตัวอื่นๆ ใน parent เดียวกัน (property นี้จะมีค่าเริ่มต้นเป็น `1`)

เช่น ถ้าเรามี item สองตัวอยู่ใน container โดยตัวหนึ่งมี `flex-shrink` เป็น `1` และอีกตัวหนึ่งมี `flex-shrink` เป็น `3` ตัวที่มี `flex-shrink` เป็น `3` จะย่อขนาดลงเป็นสามเท่า ของตัวอื่น

# --instructions--

ให้เพิ่ม CSS property `flex-shrink` ให้กับทั้ง `#box-1` และ `#box-2`
โดยให้ `#box-1` มีค่าเป็น `1` และ `#box-2` มีค่าเป็น `2`

# --hints--

`#box-1` ต้องมีค่าของ property `flex-shrink` เป็น `1`

```js
assert($("#box-1").css("flex-shrink") == "1");
```

`#box-2` ต้องมีค่าของ property `flex-shrink` เป็น `2`

```js
assert($("#box-2").css("flex-shrink") == "2");
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
    width: 100%;
    height: 200px;
  }

  #box-2 {
    background-color: orangered;
    width: 100%;
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
    width: 100%;
    height: 200px;
    flex-shrink: 1;
  }

  #box-2 {
    background-color: orangered;
    width: 100%;
    height: 200px;
    flex-shrink: 2;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```
