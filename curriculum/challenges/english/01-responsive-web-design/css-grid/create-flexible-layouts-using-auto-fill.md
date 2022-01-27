---
id: 5a94fe5469fb03452672e461
title: Create Flexible Layouts Using auto-fill
challengeType: 0
videoUrl: "https://scrimba.com/p/pByETK/cmzdycW"
forumTopicId: 301126
dashedName: create-flexible-layouts-using-auto-fill
---

# --description--

ฟังก์ชัน repeat มีตัวเลือกที่ชื่อว่า <dfn>auto-fill</dfn>
ซึ่งจะทำให้คุณสามารถเพิ่มแถวหรือคอลัมน์ ตามขนาดที่คุณต้องการจำนวนเท่าไหร่ก็ได้โดยอัตโนมัติ โดยจะขึ้นกับขนาดของ container

คุณสามารถสร้าง layout ที่ค่อนข้างยืดหยุ่นได้เมื่อใช้ `auto-fill` ร่วมกับ `minmax`

ลองดูตัวอย่างด้านล่าง:

```css
repeat(auto-fill, minmax(60px, 1fr));
```

ในตัวอย่างด้านบน จะทำให้เมื่อ container เปลี่ยนขนาด จะทำการยืด item ออก เมื่อยืดมากพอที่จะทำให้เพิ่ม item ใหม่ลงไปได้ ก็จะทำการเพิ่มคอลัมน์ที่มีขนาด 60px ลงมาใหม่

**Note:** ถ้า container ของคุณใส่ item ทั้งหมดไม่ได้ในแถวเดียว item ที่เกินมาจะถูกดันมาอยู่ในแถวใหม่

# --instructions--

ในกริดอันแรก ให้ใช้ `auto-fill` ใน `repeat` เพื่อให้สร้างคอลัมน์ที่กว้างอย่างน้อย `60px` และไม่เกิน `1fr`

เมื่อทำเสร็จแล้ว ให้ลองปรับขนาดของหน้า preview เพื่อดูการทำงานของ auto-fill

# --hints--

คลาส `container` ต้องกำหนดค่าของ property `grid-template-columns` โดยใช้ `repeat` และ `auto-fill` ที่จะทำให้เกิดคอลัมน์ที่กว้างอย่างน้อย `60px` และไม่เกิน `1fr`

```js
assert(
  code.match(
    /.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?repeat\s*?\(\s*?auto-fill\s*?,\s*?minmax\s*?\(\s*?60px\s*?,\s*?1fr\s*?\)\s*?\)\s*?;[\s\S]*}/gi
  )
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
    min-height: 100px;
    width: 100%;
    background: LightGray;
    display: grid;
    /* แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น */

    grid-template-columns: repeat(3, minmax(60px, 1fr));

    /* แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น */
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }

  .container2 {
    font-size: 40px;
    min-height: 100px;
    width: 100%;
    background: Silver;
    display: grid;
    grid-template-columns: repeat(3, minmax(60px, 1fr));
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
<div class="container2">
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
  }

  .container {
    font-size: 40px;
    min-height: 100px;
    width: 100%;
    background: LightGray;
    display: grid;
    /* แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น */

    grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));

    /* แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น */
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }

  .container2 {
    font-size: 40px;
    min-height: 100px;
    width: 100%;
    background: Silver;
    display: grid;
    grid-template-columns: repeat(3, minmax(60px, 1fr));
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
<div class="container2">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>
```
