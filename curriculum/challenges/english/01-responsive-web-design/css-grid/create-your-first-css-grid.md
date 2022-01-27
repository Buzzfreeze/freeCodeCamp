---
id: 5a858944d96184f06fd60d61
title: Create Your First CSS Grid
challengeType: 0
videoUrl: "https://scrimba.com/p/pByETK/cqwREC4"
forumTopicId: 301129
dashedName: create-your-first-css-grid
---

# --description--

การเปลี่ยน HTML element ให้กลายเป็น grid container ทำได้ง่ายๆ โดยการกำหนดค่า property `display` ให้เป็น `grid`

การทำให้ element เป็น grid จะทำให้คุณใช้ property อื่น ๆ ของ CSS Grid ได้

**Note:** ใน CSS Grid เราจะเรียก parent element ว่าเป็น <dfn>container</dfn> และเรียก child ว่าเป็น <dfn>item</dfn>

# --instructions--

ให้เปลี่ยน display ของ div ที่มีคลาสเป็น `container` ให้เป็น `grid`

# --hints--

คลาส `container` ต้องมีค่าของ property `display` เป็น `grid`

```js
assert(code.match(/.container\s*?{[\s\S]*display\s*?:\s*?grid\s*?;[\s\S]*}/gi));
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
    width: 100%;
    background: LightGray;
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
    display: grid;
  }
</style>
```
