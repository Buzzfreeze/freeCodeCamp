---
id: 587d78ae367417b2b2512afd
title: Use the flex-basis Property to Set the Initial Size of an Item
challengeType: 0
videoUrl: "https://scrimba.com/p/pVaDAv/c3d9nCa"
forumTopicId: 301108
dashedName: use-the-flex-basis-property-to-set-the-initial-size-of-an-item
---

# --description--

property `flex-basis` จะระบุขนาดเริ่มต้นของ item ก่อน item นั้นจะโดน CSS ปรับขนาดโดยใช้ `flex-shrink` หรือ `flex-grow`

property `flex-basis` จะรับค่าเป็นหน่วยเหมือนกับ property ที่ใช้กำหนดขนาดอื่นๆ (`px`, `em`, `%`, ฯลฯ)
โดยถ้าใช้ค่าเป็น `auto` ขนาดของ item นี้ก็จะขึ้นอยู่กับข้อมูลภายใน

# --instructions--

ให้กำหนดขนาดเริ่มต้นของกล่องโดยใช้ `flex-basis`
ให้เพิ่ม CSS property `flex-basis` ให้กับทั้ง `#box-1` และ `#box-2`
โดยกำหนดให้ `#box-1` มีค่าเป็น `10em` และให้ `#box-2` มีค่าเป็น `20em`

# --hints--

`#box-1` ต้องมี property `flex-basis`

```js
assert($("#box-1").css("flex-basis") != "auto");
```

property `flex-basis` ของ `#box-1` ต้องมีค่าเป็น `10em`

```js
assert(code.match(/#box-1\s*?{\s*?.*?\s*?.*?\s*?flex-basis:\s*?10em;/g));
```

`#box-2` ต้องมี property `flex-basis`

```js
assert($("#box-2").css("flex-basis") != "auto");
```

property `flex-basis` ของ `#box-1` ต้องมีค่าเป็น `20em`

```js
assert(code.match(/#box-2\s*?{\s*?.*?\s*?.*?\s*?flex-basis:\s*?20em;/g));
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
    flex-basis: 10em;
  }

  #box-2 {
    background-color: orangered;
    height: 200px;
    flex-basis: 20em;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```
