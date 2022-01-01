---
id: 5a94fe1369fb03452672e45d
title: Place Items in Grid Areas Using the grid-area Property
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cRrqmtV'
forumTopicId: 301132
dashedName: place-items-in-grid-areas-using-the-grid-area-property
---

# --description--

หลังจากที่คุณสร้าง area template ให้กับกริด container ของคุณตามที่ได้แสดงไว้ใน challenge ก่อนหน้านี้
คุณสามารถใส่ item ได้ในพื้นที่ที่คุณจัดเตรียมไว้โดยอ้างอิงจากชื่อที่คุณตั้งให้มัน
เพื่อทำเช่นนี้ คุณต้องใช้`grid-area` property กับ item ดังนี้:

```css
.item1 {
  grid-area: header;
}
```

นี่จะช่วยให้กริดรู้ว่าคุณต้องการให้ `item1` class อยู่ในพื้นที่ที่ชื่อ `header`
ในกรณีนี้ item จะคลุมแถวบนสุดทั้งแถวเพราะทั้งแถวนั้นมีชื่อเป็นพื้นที่ header

# --instructions--

จงใส่ element อันหนึ่งที่มี `item5` class ไว้ในะื้นที่ `footer` โดยใช้ `grid-area` property.

# --hints--

class `item5` ควรมี `grid-area` property อันหนึ่งที่มีค่าเป็น`footer`

```js
assert(__helpers.removeCssComments(code).match(/.item5\s*?{[\s\S]*grid-area\s*?:\s*?footer\s*?;[\s\S]*}/gi));
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
    /* Only change code below this line */

    /* Only change code above this line */
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
      'header header header'
      'advert content content'
      'footer footer footer';
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
