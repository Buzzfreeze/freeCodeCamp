---
id: 5a9036ee38fddaf9a66b5d37
title: Add Gaps Faster with grid-gap
challengeType: 0
videoUrl: "https://scrimba.com/p/pByETK/ca2qVtv"
forumTopicId: 301118
dashedName: add-gaps-faster-with-grid-gap
---

# --description--

`grid-gap` เป็น property ลัดที่ใช้กำหนดค่าของทั้ง `grid-row-gap` และ `grid-column-gap` ได้พร้อมกัน

ถ้าเรากำหนดค่าให้ `grid-gap` เป็นค่าเดียว ช่องว่างระหว่างแถวและช่องว่างระหว่างคอลัมน์จะเป็นค่าเดียวกัน
และถ้าคุณกำหนดค่าให้ `grid-gap` สองค่า จะใช้ค่าแรกเป็นช่องว่างระหว่างแถว และอีกค่าเป็นช่องว่างระหว่างคอลัมน์

# --instructions--

ให้ใช้ `grid-gap` เพื่อทำให้เกิดช่องว่างระหว่างแถวสูง `10px` และช่องว่างระหว่างคอลัมน์กว้าง `20px`

# --hints--

คลาส `container` ต้องมีค่าของ property `grid-gap` ที่กำหนดให้ช่องว่างระหว่างแถวสูง `10px` และช่องว่างระหว่างคอลัมน์กว้าง `20px`

```js
assert(
  code.match(
    /.container\s*?{[\s\S]*grid-gap\s*?:\s*?10px\s+?20px\s*?;[\s\S]*}/gi
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
    grid-gap: 10px 20px;
  }
</style>
```
