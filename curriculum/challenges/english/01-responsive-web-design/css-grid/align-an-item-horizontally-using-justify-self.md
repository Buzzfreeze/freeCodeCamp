---
id: 5a90374338fddaf9a66b5d3a
title: Align an Item Horizontally using justify-self
challengeType: 0
videoUrl: "https://scrimba.com/p/pByETK/cJbpKHq"
forumTopicId: 301122
dashedName: align-an-item-horizontally-using-justify-self
---

# --description--

ใน CSS Grid เนื้อหาของแต่ละ item จะอยู่ในกล่องที่ถูกเรียกว่า <dfn>cell</dfn>

คุณสามารถจัดเรียงตำแหน่งในแนวนอนของเนื้อหาภายใน cell ได้โดยใช้ property `justify-self` กับ grid item

โดยค่าเริ่มต้นของ property จะเป็น `stretch` ซึ่งจะทำให้เนื้อหายืดเต็ม cell

property นี้จะรับค่าได้ดังนี้:

`start`: เรียงเนื้อหาไว้ทางซ้ายของ cell

`center`: เรียงเนื้อหาไว้ตรงกลาง cell

`end`: เรียงเนื้อหาไว้ทางขวาของ cell

# --instructions--

ให้ใช้ property `justify-self` เพื่อจัดให้ item ที่มีคลาสเป็น `item2` อยู่ตรงกลาง

# --hints--

คลาส `item2` ต้องมีค่าของ property `justify-self` เป็น `center`

```js
assert(
  code.match(/.item2\s*?{[\s\S]*justify-self\s*?:\s*?center\s*?;[\s\S]*}/gi)
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
    /* แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น */

    /* แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น */
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
  .item2 {
    justify-self: center;
  }
</style>
```
