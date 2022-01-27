---
id: 5a90375238fddaf9a66b5d3b
title: Align an Item Vertically using align-self
challengeType: 0
videoUrl: "https://scrimba.com/p/pByETK/cmzd4fz"
forumTopicId: 301123
dashedName: align-an-item-vertically-using-align-self
---

# --description--

คุณสามารถใช้ property `align-self` เพื่อเรียง item ในแนวตั้งได้เช่นกัน

property นี้จะรับค่าเหมือนกับ `justify-self` ที่เราเรียนไปในแบบทดสอบที่แล้ว

# --instructions--

ให้เรียง item ที่มีคลาสเป็น `item3` ให้อยู่ด้านล่าง โดยใช้ `justify-self` เป็น `end`

# --hints--

คลาส `item3` ต้องมีค่าของ property `align-self` เป็น `end`

```js
assert(code.match(/.item3\s*?{[\s\S]*align-self\s*?:\s*?end\s*?;[\s\S]*}/gi));
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
    /* แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น */

    /* แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น */
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
  .item3 {
    align-self: end;
  }
</style>
```
