---
id: 587d78a3367417b2b2512ad0
title: Center an Element Horizontally Using the margin Property
challengeType: 0
videoUrl: 'https://scrimba.com/c/cyLJqU4'
forumTopicId: 301043
dashedName: center-an-element-horizontally-using-the-margin-property
---

# --description--

วิธีการจัดตำแหน่งอีกอย่างก็คือการทำให้ block element อยู่ตรงกลางในแนวนอน 
วิธีหนึ่งที่ใช้ในการจัดตำแหน่งแบบนี้คือ การกำหนดให้ `margin` ของมันมีค่า auto

วิธีนี้เหมาะที่จะใช้กับรูปภาพเช่นกัน รูปภาพนั้นเป็น inline element โดยค่าเริ่มต้น
แต่สามารถถูกเปลี่ยนให้เป็น block element เมื่อคุณกำหนดให้ `display` property เป็น `block`

# --instructions--

จงกำหนดให้ `div` ในหน้านี้อยู่ตรงกลางโดยการเพิ่ม `margin` property อันหนึ่งที่มีค่า `auto`

# --hints--

`div` should ควรมี `margin` ที่มีค่าเป็น `auto`

```js
assert(new __helpers.CSSHelp(document).getStyle('div')?.margin === 'auto');
```

# --seed--

## --seed-contents--

```html
<style>
  div {
    background-color: blue;
    height: 100px;
    width: 100px;

  }
</style>
<div></div>
```

# --solutions--

```html
<style>
  div {
    background-color: blue;
    height: 100px;
    width: 100px;
    margin: auto;
  }
</style>
<div></div>
```
