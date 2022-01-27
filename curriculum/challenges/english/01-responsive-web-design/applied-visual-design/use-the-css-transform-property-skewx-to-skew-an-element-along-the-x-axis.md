---
id: 587d78a6367417b2b2512adb
title: Use the CSS Transform Property skewX to Skew an Element Along the X-Axis
challengeType: 0
videoUrl: 'https://scrimba.com/c/cyLP8Sr'
forumTopicId: 301074
dashedName: use-the-css-transform-property-skewx-to-skew-an-element-along-the-x-axis
---

# --description--

ฟังก์ชันถัดไปของ property `transform` คือ `skewX()` 
ฟังก์ชันนี้จะเป็นการทำให้ element ที่เลือกเอียงไปทางด้านใดด้านหนึ่งตามแกน  X (แนวนอน) โดยจะเอียงตามองศาที่กำหนดให้

โค้ดด้านล่างนี้จะทำให้ p element เอียงไป -32 องศาตามแกน X

```css
p {
  transform: skewX(-32deg);
}
```

# --instructions--

จงทำให้ element ที่มี id เป็น `bottom` เอียงไป 24 องศาตามแกน X โดยใช้ property `transform`

# --hints--

element ที่มี id เป็น `bottom` ต้องเอียงไป 24 องศาตามแกน X

```js
assert(code.match(/#bottom\s*?{\s*?.*?\s*?transform:\s*?skewX\(24deg\);/g));
```

# --seed--

## --seed-contents--

```html
<style>
  div {
    width: 70%;
    height: 100px;
    margin:  50px auto;
  }
  #top {
    background-color: red;
  }
  #bottom {
    background-color: blue;

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
    margin:  50px auto;
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
