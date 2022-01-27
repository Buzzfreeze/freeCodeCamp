---
id: 5a9036ee38fddaf9a66b5d36
title: Create a Row Gap using grid-row-gap
challengeType: 0
videoUrl: "https://scrimba.com/p/pByETK/cPbJ2Cv"
forumTopicId: 301125
dashedName: create-a-row-gap-using-grid-row-gap
---

# --description--

การเพิ่มช่องว่างระหว่างแถว ก็จะคล้ายๆกับการเพิ่มช่องว่างระหว่างคอลัมน์ แต่คุณต้องเปลี่ยนไปใช้ property `grid-row-gap` แทน

# --instructions--

ให้กำหนดขนาดช่องว่างระหว่างแถวของ grid เป็น `5px`

# --hints--

คลาส `container` ต้องมีค่าของ property `grid-row-gap` เป็น `5px`

```js
assert(
  code.match(/.container\s*?{[\s\S]*grid-row-gap\s*?:\s*?5px\s*?;[\s\S]*}/gi)
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
    grid-row-gap: 5px;
  }
</style>
```
