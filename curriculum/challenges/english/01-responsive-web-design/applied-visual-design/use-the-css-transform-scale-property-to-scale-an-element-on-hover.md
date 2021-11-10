---
id: 587d78a5367417b2b2512ada
title: Use the CSS Transform scale Property to Scale an Element on Hover
challengeType: 0
videoUrl: 'https://scrimba.com/c/cyLPJuM'
forumTopicId: 301077
dashedName: use-the-css-transform-scale-property-to-scale-an-element-on-hover
---

# --description--

`transform` property มี function ให้ใช้งานที่หลากหลายซึ่งทำให้คุณสามารถทำการปรับขนาด, ย้ายที่, หมุน, และทำให้เอียง ให้ element ของคุณ (ยังมี function อื่นอีก)
เมื่อคุณใช้มันพร้อมกับ pseudo-classes เช่น `:hover` ที่เป็นตัวระบุสถานะหนึ่งของ element, 
`transform` property จะสามารถเพวกการ interact ให้กับ element

นี่คือตัวอย่างในการปรับขนาดให้ paragraph element มีขนาดใหญ่ขึ้น 2.1 เท่าของขนาดดั้งเดิมของมันเมื่อผู้ใช้ได้ทำการ hovers พวกมัน:

```css
p:hover {
  transform: scale(2.1);
}
```

**Note:** การใช้ transform กับ `div` element จะส่งผลกับ child element ที่ถูกเก้บไว้ใน  div.

# --instructions--

จงเพิ่ม CSS rule ให้กับ `hover` state ของ `div` และจงใช้ `transform` property เพื่อปรับขนาดของ `div` element ให้ใหญ่ขึ้น 1.1 เท่าของขนาดดั้งเดิมของมันเมื่อผู้ใช้ได้ทำการ hovers พวกมัน

# --hints--

ขนาดของ `div` element ควรใหญ่ขึ้น 1.1 เท่าของขนาดดั้งเดิมของมันเมื่อผู้ใช้ได้ทำการ hovers พวกมัน

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
    margin:  50px auto;
    background: linear-gradient(
      53deg,
      #ccfffc,
      #ffcccf
    );
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
    margin:  50px auto;
    background: linear-gradient(
      53deg,
      #ccfffc,
      #ffcccf
    );
  }
  div:hover {
    transform: scale(1.1);
  }
</style>
<div></div>
```
