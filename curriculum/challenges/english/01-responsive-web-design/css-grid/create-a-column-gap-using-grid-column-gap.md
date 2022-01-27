---
id: 5a9036ee38fddaf9a66b5d35
title: Create a Column Gap Using grid-column-gap
challengeType: 0
videoUrl: "https://scrimba.com/p/pByETK/cVZ8vfD"
forumTopicId: 301124
dashedName: create-a-column-gap-using-grid-column-gap
---

# --description--

ตอนนี้ทุกคอลัมน์ใน grid ที่คุณสร้างมาจะอยู่ชิดกันหมดเลย
ถ้าอยากให้แต่ละคอลัมน์มีช่องว่างระหว่างกัน คุณต้องใช้ property `grid-column-gap`  

ลองดูตัวอย่าง:

```css
grid-column-gap: 10px;
```

โค้ดนี้จะสร้างช่องว่างขนาด 10px ระหว่างทุกคอลัมน์

# --instructions--

ให้กำหนดขนาดช่องว่างระหว่างคอลัมน์ของ grid เป็น `20px`

# --hints--

คลาส `container` ต้องมีค่าของ property `grid-column-gap` เป็น `20px`

```js
assert(
  code.match(
    /.container\s*?{[\s\S]*grid-column-gap\s*?:\s*?20px\s*?;[\s\S]*}/gi
  )
);
```

# --seed--

## --seed-contents--

```html
<style>
  .d1 {
    background: LightSkyBlue;
  }
  .d2 {
    background: LightSalmon;
  }
  .d3 {
    background: PaleTurquoise;
  }
  .d4 {
    background: LightPink;
  }
  .d5 {
    background: PaleGreen;
  }

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    /* แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น */

    /* แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น */
  }
</style>

<div class="container">
  <div class="d1">1</div>
  <div class="d2">2</div>
  <div class="d3">3</div>
  <div class="d4">4</div>
  <div class="d5">5</div>
</div>
```

# --solutions--

```html
<style>
  .container {
    grid-column-gap: 20px;
  }
</style>
```
