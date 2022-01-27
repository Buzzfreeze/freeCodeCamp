---
id: 5a9036e138fddaf9a66b5d33
title: Add Rows with grid-template-rows
challengeType: 0
videoUrl: "https://scrimba.com/p/pByETK/cbp9Pua"
forumTopicId: 301119
dashedName: add-rows-with-grid-template-rows
---

# --description--

ในแบบทดสอบที่แล้ว คุณได้สร้างกริดที่กำหนดจำนวนของ row โดยอัตโนมัติ
ถ้าคุณอยากกำหนดจำนวน row เอง ให้ใช้ property `grid-template-rows`
ซึ่ง property นี้ก็จะใช้เหมือนกับ `grid-template-columns` ที่เราได้เรียนมาแล้ว

# --instructions--

ให้เพิ่ม 2 row ใน grid โดยให้แต่ละ row สูง `50px`

# --hints--

คลาส `container` ต้องมีค่าของ property `grid-template-rows` เป็น `50px 50px`

```js
assert(
  code.match(
    /.container\s*?{[\s\S]*grid-template-rows\s*?:\s*?50px\s*?50px\s*?;[\s\S]*}/gi
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
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 100px 100px 100px;
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
    grid-template-rows: 50px 50px;
  }
</style>
```
