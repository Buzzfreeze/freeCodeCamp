---
id: 587d78ae367417b2b2512afe
title: Use the flex Shorthand Property
challengeType: 0
videoUrl: "https://scrimba.com/p/pVaDAv/cbpW2tE"
forumTopicId: 301112
dashedName: use-the-flex-shorthand-property
---

# --description--

เรามีทางลัดที่ใช้กำหนด property หลายตัวได้ในบรรทัดเดียวมาสอน

เราสามารถกำหนดค่าของ `flex-grow`, `flex-shrink`, และ `flex-basis` ได้พร้อมกัน โดยใช้ property `flex` แค่ตัวเดียว

เช่น `flex: 1 0 10px;` จะกำหนดค่าให้ item ตามนี้ `flex-grow: 1;`, `flex-shrink: 0;`, และ `flex-basis: 10px;`

โดยค่าเริ่มต้นของ property นี้คือ `flex: 0 1 auto;`

# --instructions--

ให้เพิ่ม CSS property `flex` ให้กับทั้ง `#box-1` และ `#box-2`
โดยกำหนดให้ `#box-1` มี `flex-grow` เป็น `2`, `flex-shrink` เป็น `2`, และ `flex-basis` เป็น `150px`
และกำหนดให้ `#box-2` มี `flex-grow` เป็น `1`, `flex-shrink` เป็น `1`, และ `flex-basis` เป็น `150px`

ค่าเหล่านี้จะทำให้ `#box-1` ขยายจนมีขนาดเป็นสองเท่าของ `#box-2` เมื่อ container มีขนาดมากกว่า 300px
และหดลงมากกว่า `#box-2` สองเท่าเมื่อ container มีขนาดเล็กกว่าา 300px

โดย 300px นี้ เป็นขนาดรวมของ `flex-basis` ของทั้ง 2 กล่อง

# --hints--

`#box-1` ต้องมีค่าของ property `flex` property เป็น `2 2 150px`

```js
assert(
  $("#box-1").css("flex-grow") == "2" &&
    $("#box-1").css("flex-shrink") == "2" &&
    $("#box-1").css("flex-basis") == "150px"
);
```

`#box-2` ต้องมีค่าของ property `flex` property เป็น `1 1 150px`

```js
assert(
  $("#box-2").css("flex-grow") == "1" &&
    $("#box-2").css("flex-shrink") == "1" &&
    $("#box-2").css("flex-basis") == "150px"
);
```

ต้องใช้ property `flex` เพื่อกำหนดค่าให้ `#box-1` และ `#box-2`

```js
assert(code.match(/flex:\s*?\d\s+?\d\s+?150px;/g).length == 2);
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
    flex: 2 2 150px;
    height: 200px;
  }

  #box-2 {
    background-color: orangered;
    flex: 1 1 150px;
    height: 200px;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```
