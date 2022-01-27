---
id: 5a94fe1369fb03452672e45d
title: Place Items in Grid Areas Using the grid-area Property
challengeType: 0
videoUrl: "https://scrimba.com/p/pByETK/cRrqmtV"
forumTopicId: 301132
dashedName: place-items-in-grid-areas-using-the-grid-area-property
---

# --description--

หลังจากที่คุณสร้าง area template ให้กับ grid container ของคุณตามแบบทดสอบที่ผ่านมาไปแล้ว
คุณสามารถเพิ่ม item ลงใน area ที่คุณสร้างไว้ได้ โดยการระบุชื่อของ area ของคุณ

วิธีการคือ คุณต้องใช้ property `grid-area`

ลองดูตัวอย่าง:

```css
.item1 {
  grid-area: header;
}
```

ตัวอย่างด้านบนนี้จะทำให้ grid ของคุณรู้ว่าคลาส `item1` อยู่ใน area ที่ชื่อ `header`
จากตัวอย่างนี้ item ที่มีคลาสเป็น `item1` จะกินพื้นที่ row บนสุดทั้งแถว เพราะว่าเราได้เขียนให้ row บนสุดทั้งแถวเป็น header

# --instructions--

ให้วาง element ที่มีคลาสเป็น `item5` ไว้ใน area ชื่อ `footer` โดยใช้ property `grid-area`

# --hints--

คลาส `item5` ต้องมีค่าของ property `grid-area` เป็น `footer`

```js
assert(
  __helpers
    .removeCssComments(code)
    .match(/.item5\s*?{[\s\S]*grid-area\s*?:\s*?footer\s*?;[\s\S]*}/gi)
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
    grid-template-areas:
      "header header header"
      "advert content content"
      "footer footer footer";
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
  .item5 {
    grid-area: footer;
  }
</style>
```
