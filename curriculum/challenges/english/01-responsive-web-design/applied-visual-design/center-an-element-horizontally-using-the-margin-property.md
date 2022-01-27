---
id: 587d78a3367417b2b2512ad0
title: Center an Element Horizontally Using the margin Property
challengeType: 0
videoUrl: "https://scrimba.com/c/cyLJqU4"
forumTopicId: 301043
dashedName: center-an-element-horizontally-using-the-margin-property
---

# --description--

วิธีการจัดตำแหน่งอีกอย่างที่ควรรู้ ก็คือการทำให้ block element อยู่ตรงกลางในแนวนอน
วิธีหนึ่งที่ใช้ได้ คือการกำหนดให้ `margin` ของ element ให้เป็น auto

เราใช้วิธีนี้กับรูปภาพได้เช่นกัน ซึ่งปกติแล้วโดยเริ่มต้นรูปภาพจะเป็น element แบบ inline แต่ก็เปลี่ยนเป็น block element ได้ ถ้าคุณกำหนด property `display` ให้เป็น `block`

# --instructions--

ทำให้ `div` อยู่ตรงกลาง โดยการเพิ่ม property `margin` โดยให้มีค่าเป็น `auto`

# --hints--

`margin` ของ `div` ต้องมีค่าเป็น `auto`

```js
assert(new __helpers.CSSHelp(document).getStyle("div")?.margin === "auto");
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
