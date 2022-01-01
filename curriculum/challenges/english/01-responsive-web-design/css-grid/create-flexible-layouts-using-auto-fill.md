---
id: 5a94fe5469fb03452672e461
title: Create Flexible Layouts Using auto-fill
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cmzdycW'
forumTopicId: 301126
dashedName: create-flexible-layouts-using-auto-fill
---

# --description--

repeat function มาพร้อมกับตัวเลือกที่ชื่อว่า <dfn>auto-fill</dfn>
สิ่งนี้ทำให้คุณสามารถเพิ่มแถวหรือคอลัมน์ตามขนาดที่คุณต้องการได้อัตโนมัติดโดยขึ้นกับขนาดของ container
คุณสามารถสร้าง layouts ที่ค่อนข้างยืดหยุ่นได้เมื่อใช้ `auto-fill` (ปรับให้เต็มแบบ auto) ร่วมกับ `minmax` แบบนี้ตามตัวอย่างด้านล่าง:

```css
repeat(auto-fill, minmax(60px, 1fr));
```

เมื่อ container เปลี่ยนขนาดของมัน, setup อันนี้จะค่อยเพิ่มคอลัมน์กว้าง 60px ไปเรื่อย ๆ
**Note:** ถ้า container ของคุณใส่ item ทั้งหมดไม่ได้ใน 1 แถว, มันจะถูกผลักมาขึ้นแถวใหม่

# --instructions--

อธิยายตัวอย่างด้านบน
ในกริดอันแรก, จงใช้ `auto-fill` ที่มี `repeat` เพื่อทำให้กริดเต็มไปด้วยคอลัมน์ที่มีความกว้างต่ำสุดที่ `60px` และสูงสุดที่ `1fr`
หลังจากนั้น จงปรับขนาดของหน้า preview เพื่อให้เห็นสิ่งที่ auto-fill ทำ

# --hints--

`container` class ควรมี `grid-template-columns` property อันหนึ่งที่มี `repeat` และ `auto-fill` โดยมันจะทำให้กริดเต็มไปด้วยคอลัม์ที่มีความกว้างต่ำสุดที่ `60px` และสูงสุดที่ `1fr`

```js
assert(
  code.match(
    /.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?repeat\s*?\(\s*?auto-fill\s*?,\s*?minmax\s*?\(\s*?60px\s*?,\s*?1fr\s*?\)\s*?\)\s*?;[\s\S]*}/gi,
  ),
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
    /* Only change code below this line */

    grid-template-columns: repeat(3, minmax(60px, 1fr));

    /* Only change code above this line */
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
    /* Only change code below this line */

    grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));

    /* Only change code above this line */
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
