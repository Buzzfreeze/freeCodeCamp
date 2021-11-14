---
id: 587d78a6367417b2b2512adc
title: Use the CSS Transform Property skewY to Skew an Element Along the Y-Axis
challengeType: 0
videoUrl: 'https://scrimba.com/c/c2MZ2uB'
forumTopicId: 301075
dashedName: use-the-css-transform-property-skewy-to-skew-an-element-along-the-y-axis
---

# --description--

กำหนดให้ `skewX()` function ทำให้ element ที่เลือกไว้เอียงไปด้วยแกน X ตามองศาที่กำหนดให้
มันคงเดาได้ไม่ยากหากจะบอกว่า `skewY()` property ทำให้ element ไว้เอียงไปด้วยแกน Y ตามองศาที่กำหนดให้

# --instructions--

จงทำให้ element ที่มี id เป็น `top` เอียง -10 องศาไปตามแกน Y โดยการใช้ `transform` property.

# --hints--

element ที่มี id เป็น `top` ควรถูกทำให้เอียง -10 องศาไปตามแกน Y

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
