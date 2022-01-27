---
id: 587d78a5367417b2b2512ada
title: Use the CSS Transform scale Property to Scale an Element on Hover
challengeType: 0
videoUrl: "https://scrimba.com/c/cyLPJuM"
forumTopicId: 301077
dashedName: use-the-css-transform-scale-property-to-scale-an-element-on-hover
---

# --description--

property `transform` มีฟังก์ชันหลายตัวที่ทำได้ทั้งการปรับขนาด, ขยับ, หมุน, ปรับองศา ฯลฯ ให้กับ element ของคุณ
เมื่อคุณใช้ property นี้พร้อมกับ pseudo-classes เช่น `:hover` ที่เป็นตัวระบุสถานะหนึ่งของ element แล้ว
property `transform` จะสามารถเพิ่มการตอบสนองให้กับ element ได้

ในตัวอย่างด้านล่างนี้ p element จะมีขนาดใหญ่ขึ้น 2.1 เท่าเมื่อนำเมาส์ไปชี้:

```css
p:hover {
  transform: scale(2.1);
}
```

**Note:** การใช้ transform กับ `div` element จะส่งผลกับ child ของ div นั้นด้วย

# --instructions--

ให้เพิ่ม CSS rule ให้กับ `hover` state ของ `div`
และให้ใช้ property `transform` เพื่อปรับขนาดของ `div` ให้ใหญ่ขึ้น 1.1 เท่า เมื่อนำเมาส์ไปชี้

# --hints--

ขนาดของ `div` element ควรใหญ่ขึ้น 1.1 เมื่อนำเมาส์ไปชี้

```js
assert(code.match(/div:hover\s*?{\s*?transform:\s*?scale\(1\.1\);/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  div {
    width: 70%;
    height: 100px;
    margin: 50px auto;
    background: linear-gradient(53deg, #ccfffc, #ffcccf);
  }
</style>

<div></div>
```

# --solutions--

```html
<style>
  div {
    width: 70%;
    height: 100px;
    margin: 50px auto;
    background: linear-gradient(53deg, #ccfffc, #ffcccf);
  }
  div:hover {
    transform: scale(1.1);
  }
</style>
<div></div>
```
