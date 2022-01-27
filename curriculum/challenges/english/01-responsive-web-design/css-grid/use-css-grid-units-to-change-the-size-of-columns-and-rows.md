---
id: 5a9036ee38fddaf9a66b5d34
title: Use CSS Grid units to Change the Size of Columns and Rows
challengeType: 0
videoUrl: "https://scrimba.com/p/pByETK/cvE8phd"
forumTopicId: 301134
dashedName: use-css-grid-units-to-change-the-size-of-columns-and-rows
---

# --description--

คุณสามารถใช้หน่วยแบบ absolute และ relative (เช่น `px` หรือ `em`) ใน CSS Grid เพื่อกำหนดขนาดของแถวและคอลัมน์ได้

คุณสามารถใช้หน่วยแบบนี้ได้:

`fr`: จะกำหนดขนาดของ row หรือ column เป็นขนาดตามอัตราส่วนของพื้นที่ที่เหลืออยู่

`auto`: จะกำหนดขนาดของ row หรือ column ให้เป็นขนาดของข้อมูลใน element นั้นๆ โดยอัตโนมัติ

`%`: จะกำหนดขนาดของ row หรือ column เป็นเปอร์เซ็นต์ของ container

โค้ดนี้จะทำให้เกิดผลลัพธ์แบบในหน้า preview (ลองดูหน้าต่างด้านขวา):

```css
grid-template-columns: auto 50px 10% 2fr 1fr;
```

ตัวอย่างด้านบนนี้จะสร้างคอลัมน์ 5 อัน
คอลัมน์แรกจะกว้างเท่ากับข้อมูลภายในคอลัมน์นั้น
คอลัมน์ที่สองกว้าง 50px
คอลัมน์ที่สามกว้าง 10% ของ container
และพื้นที่ส่วนที่เหลือจะถูกแบ่งเป็นสามส่วน
คอลัมน์ที่สี่จะกินพื้นที่สองในสามส่วนนั้น
และคอลัมน์ที่ห้าจะกินพื้นที่หนึ่งในสามส่วนนั้น

# --instructions--

ให้สร้างกริดที่มี 3 คอลัมน์ โดยแต่ละคอลัมน์ต้องมีความกว้างตามลำดับ ดังนี้ 1fr, 100px, และ 2fr

# --hints--

คลาส `container` ต้องมีค่าของ property `grid-template-columns` เป็น `1fr 100px 2fr`

```js
assert(
  code.match(
    /.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?1fr\s*?100px\s*?2fr\s*?;[\s\S]*}/gi
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

    grid-template-columns: auto 50px 10% 2fr 1fr;

    /* แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น */
    grid-template-rows: 50px 50px;
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
    grid-template-columns: 1fr 100px 2fr;
  }
</style>
```
