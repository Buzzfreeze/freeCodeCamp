---
id: 5a90373638fddaf9a66b5d39
title: Use grid-row to Control Spacing
challengeType: 0
videoUrl: "https://scrimba.com/p/pByETK/c9WBLU4"
forumTopicId: 301137
dashedName: use-grid-row-to-control-spacing
---

# --description--

คุณสามารถทำให้ item กินพื้นที่หลายๆแถวได้เหมือนกัน
โดยคุณจะต้องกำหนด line เริ่มและสิ้นสุดของ item ของคุณ โดยใช้ property `grid-row`

# --instructions--

ให้กำหนดค่าให้ element ที่มีคลาสเป็น `item5` กินพื้นที่สองแถวล่าง

# --hints--

คลาส `item5` ต้องมีการกำหนดค่าของ property `grid-row`

```js
assert(
  __helpers.removeWhiteSpace($("style").text()).match(/\.item5{.*grid-row:.*}/g)
);
```

คลาส `item5` ต้องมีค่าของ property `grid-row` ที่ทำให้ element นี้กินพื้นที่ 2 แถวล่างของ grid

```js
const rowStart = getComputedStyle($(".item5")[0]).gridRowStart;
const rowEnd = getComputedStyle($(".item5")[0]).gridRowEnd;
const result = rowStart.toString() + rowEnd.toString();
const correctResults = [
  "24",
  "2-1",
  "2span 2",
  "2span2",
  "span 2-1",
  "-12",
  "span 2span 2",
  "span 2auto",
  "autospan 2"
];
assert(correctResults.includes(result));
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
    grid-column: 2 / 4;
    /* แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น */

    /* แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น */
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
    grid-column: 2 / 4;
    grid-row: 2 / 4;
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
