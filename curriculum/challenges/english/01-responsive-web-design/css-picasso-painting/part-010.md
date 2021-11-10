---
id: 60b69a66b6ddb80858c51580
title: Part 10
challengeType: 0
dashedName: part-10
---

# --description--

`z-index` property นั้นถูกใช้เพื่อสร้าง "layers" ให้กับ HTML element
ถ้าคุณคุ้นเคยกับเครื่องมือสำหรับ image editing, คุณอาจจะได้ทำงานกับ layer มาอยู่แล้ว
ซึ่งนี่มันก็มีแนวคิดที่คล้ายกัน

Element ที่มี `z-index` สูงกว่าจะปรากฏ layer ที่อยู่บน element ที่มี `z-index`ต่ำกว่า
สิ่งนี้สามารถใช้ร่วมกับการจัดตำแหน่งในบทเรียนที่เรียนเพื่อสร้าง effect ที่แตกต่างกัน

เนื่องจาก `back-wall` element จำเป็นต้องปรากฏข้างหลัง "behind" element อื่น ๆ คุณจะต้องสร้างและกำหนดให้ `back-wall` element มีค่า `z-index` เท่ากับ `-1`

# --hints--

`#back-wall` selector ควรมีค่า `z-index` property เท่ากับ `-1`

```js
assert(new __helpers.CSSHelp(document).getStyle('#back-wall')?.zIndex === '-1');
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>freeCodeCamp Picasso Painting</title>
    <link rel="stylesheet" type="text/css" href="./styles.css" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css">
  </head>
  <body>
    <div id="back-wall"></div>
  </body>
</html>
```

```css
body {
  background-color: rgb(184, 132, 46);
}

#back-wall {
  background-color: #8B4513;
  width: 100%;
  height: 60%;
  position: absolute;
  top: 0;
  left: 0;
  --fcc-editable-region--

  --fcc-editable-region--
}
```
