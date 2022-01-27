---
id: 587d78a6367417b2b2512adc
title: Use the CSS Transform Property skewY to Skew an Element Along the Y-Axis
challengeType: 0
videoUrl: "https://scrimba.com/c/c2MZ2uB"
forumTopicId: 301075
dashedName: use-the-css-transform-property-skewy-to-skew-an-element-along-the-y-axis
---

# --description--

เรามีฟังก์ชัน `skewX()` ที่ทำให้ element ที่เลือกไว้เอียงไปตามแกน X ตามองศาที่กำหนดให้
คุณก็น่าจะเดาได้อยู่แล้วว่ามี X ก็ต้องมี Y
โดยเราก็จะมีฟังก์ชัน `skewY()` ที่ทำให้ element ที่เลือกไว้เอียงไปตามแกน Y ตามองศาที่กำหนดให้

# --instructions--

จงทำให้ element ที่มี id เป็น `top` เอียง -10 องศาไปตามแกน Y โดยการใช้ property `transform`

# --hints--

element ที่มี id เป็น `top` ต้องเอียง -10 องศาไปตามแกน Y

```js
assert(code.match(/#top\s*?{\s*?.*?\s*?transform:\s*?skewY\(-10deg\);/g));
```

# --seed--

## --seed-contents--

```html
<style>
  div {
    width: 70%;
    height: 100px;
    margin: 50px auto;
  }
  #top {
    background-color: red;
  }
  #bottom {
    background-color: blue;
    transform: skewX(24deg);
  }
</style>

<div id="top"></div>
<div id="bottom"></div>
```

# --solutions--

```html
<style>
  div {
    width: 70%;
    height: 100px;
    margin: 50px auto;
  }
  #top {
    background-color: red;
    transform: skewY(-10deg);
  }
  #bottom {
    background-color: blue;
    transform: skewX(24deg);
  }
</style>
<div id="top"></div>
<div id="bottom"></div>
```
