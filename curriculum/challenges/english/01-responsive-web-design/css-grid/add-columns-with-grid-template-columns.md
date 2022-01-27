---
id: 5a9036d038fddaf9a66b5d32
title: Add Columns with grid-template-columns
challengeType: 0
videoUrl: "https://scrimba.com/p/pByETK/c7NzDHv"
forumTopicId: 301117
dashedName: add-columns-with-grid-template-columns
---

# --description--

การสร้างแค่ grid ก็ไม่ได้ทำให้เกิดอะไรขึ้นมา คุณจึงจำเป็นต้องกำหนดโครงสร้างของ grid ด้วย

เราจะใช้ property `grid-template-columns` กับ grid container เพื่อเพิ่มคอลัมน์ลงใน grid

ลองดูตัวอย่าง:

```css
.container {
  display: grid;
  grid-template-columns: 50px 50px;
}
```

ตัวอย่างด้านบนจะทำให้ grid ของคุณมีคอลัมน์สองคอลัมน์ ที่กว้าง 50 px

จำนวนของ parameter ใน property `grid-template-columns` จะใช้บอกจำนวนคอลัมน์ภายใน grid และค่าของ parameter จะเป็นความกว้างของคอลัมน์

# --instructions--

ให้ทำให้ grid container มี 3 คอลัมน์ โดยที่แต่ละคอลัมน์กว้าง `100px`

# --hints--

คลาส `container` ต้องมี property `grid-template-columns` ที่มีค่าเป็น `100px 100px 100px`

```js
assert(
  code.match(
    /.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?100px\s*?100px\s*?100px\s*?;[\s\S]*}/gi
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
    grid-template-columns: 100px 100px 100px;
  }
</style>
```
