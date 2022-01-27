---
id: 5a94fdf869fb03452672e45b
title: Align All Items Vertically using align-items
challengeType: 0
videoUrl: "https://scrimba.com/p/pByETK/ckzPeUv"
forumTopicId: 301121
dashedName: align-all-items-vertically-using-align-items
---

# --description--

เราจะใช้ property `align-items` กับ grid container เพื่อเรียง item ในกริดของเราในแนวตั้ง

# --instructions--

ให้ใช้ property `align-items` เพื่อย้าย item ทั้งหมดไปที่จุดล่างสุดของแต่ละ cell

# --hints--

คลาส `container` ต้องมีค่าของ property `align-items` เป็น `end`

```js
assert(
  code.match(/.container\s*?{[\s\S]*align-items\s*?:\s*?end\s*?;[\s\S]*}/gi)
);
```

# --seed--

## --seed-contents--

```html
<style>
  .item1 {
    background: LightSkyBlue;
  }
  .item2 {
    background: LightSalmon;
  }
  .item3 {
    background: PaleTurquoise;
  }
  .item4 {
    background: LightPink;
  }
  .item5 {
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
    grid-gap: 10px;
    /* แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น */

    /* แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น */
  }
</style>

<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>
```

# --solutions--

```html
<style>
  .container {
    align-items: end;
  }
</style>
```
