---
id: 587d78ae367417b2b2512afc
title: Use the flex-grow Property to Expand Items
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/c2p78cg'
forumTopicId: 301111
dashedName: use-the-flex-grow-property-to-expand-items
---

# --description--

สิ่งที่ตรงข้ามกับ `flex-shrink` คือ`flex-grow` property
จงจำไว้ว่า `flex-shrink` จะควบคุมขนาดของ item เมื่อ container ถูกย่อให้เล็กลง
`flex-grow` property จะควบคุมขนาดของ item เมื่อ parent container ถูกขยายให้ใหญ่ขึ้น

ใช้ตัวอย่างที่คล้ายกันกับ challenge ที่แล้ว
ุถ้า item หนึ่งมี `flex-grow` ที่มีค่าเป็น `1` และมี `flex-grow` อีกอันที่มีค่าเป็น `3`, ตัวที่มีค่าเป็น `3` จะมีขนาดใหญ่ขึ้นสามเท่าของอีกอัน

# --instructions--

จงเพิ่มCSS property `flex-grow` ให้กับทั้ง `#box-1` และ `#box-2`
จงกำหนดให้ `#box-1` มีค่าเท่ากับ `1` แบะ `#box-2` มีค่าเท่ากับ `2`

# --hints--

`#box-1` element ควรมี `flex-grow` property ที่ถูกกำหนดค่าให้เป็น `1`

```js
assert($('#box-1').css('flex-grow') == '1');
```

The `#box-2` element should have the `flex-grow` property set to a value of `2`.

```js
assert($('#box-2').css('flex-grow') == '2');
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
