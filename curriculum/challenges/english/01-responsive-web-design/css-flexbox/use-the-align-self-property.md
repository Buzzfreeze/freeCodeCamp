---
id: 587d78af367417b2b2512b00
title: Use the align-self Property
challengeType: 0
videoUrl: "https://scrimba.com/p/pVaDAv/cMbvzfv"
forumTopicId: 301107
dashedName: use-the-align-self-property
---

# --description--

property สุดท้ายของ flex item ที่เราจะเรียนคือ `align-self`
ซึ่ง property นี้จะทำให้เราปรับการเรียงของ item แต่ละตัวได้ แทนที่จะปรับรวมทุก item ที่อยู่ใน container เดียวกัน

property นี้มีประโยชน์เพราะเราจะใช้ `float`, `clear`, และ `vertical-align` กับ flex item ไม่ได้

`align-self` จะรับค่าเหมือนกับ `align-items` และจะใช้ค่านี้แทนค่าของ `align-items` ที่กำหนดไว้ใน container

# --instructions--

ให้เพิ่ม CSS property `align-self` ให้กับทั้ง `#box-1` และ `#box-2`
โดยกำหนดให้ `#box-1` มีค่าเป็น `center` และ `#box-2` มีค่าเป็น `flex-end`

# --hints--

`#box-1` ต้องมีค่าของ propery `align-self` เป็น `center`

```js
assert($("#box-1").css("align-self") == "center");
```

`#box-2` ต้องมีค่าของ propery `align-self` เป็น `flex-end`

```js
assert($("#box-2").css("align-self") == "flex-end");
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
    width: 200px;
  }

  #box-2 {
    background-color: orangered;

    height: 200px;
    width: 200px;
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
    align-self: center;
    height: 200px;
    width: 200px;
  }

  #box-2 {
    background-color: orangered;
    align-self: flex-end;
    height: 200px;
    width: 200px;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```
