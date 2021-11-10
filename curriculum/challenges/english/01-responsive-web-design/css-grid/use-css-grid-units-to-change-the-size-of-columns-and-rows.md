---
id: 5a9036ee38fddaf9a66b5d34
title: Use CSS Grid units to Change the Size of Columns and Rows
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cvE8phd'
forumTopicId: 301134
dashedName: use-css-grid-units-to-change-the-size-of-columns-and-rows
---

# --description--

คุณสามารถใช้หน่วย absolute และ relative เช่น `px` and `em` ใน CSS Grid เพื่อกำหนดขนาดของแถวและคอลัมน์
คุณสามารถใช้ได้แบบนี้:

`fr`: sets the column or row to a fraction of the available space,

`auto`: sets the column or row to the width or height of its content automatically,

`%`: adjusts the column or row to the percent width of its container.

นี่คือโค้ดที่สร้างผลลัพท์ในหน้า preview:

```css
grid-template-columns: auto 50px 10% 2fr 1fr;
```

snippet อันนี้จะสร้างคอลัมน์ 5 อัน
คอลัมน์แรกให้กว้างเท่ากับ content,
คอลัมน์ที่สองกว้าง 50px, 
คอลัมน์ที่สามกว้าง 10% ของ container ของมัน รวมถึงสองอันที่เหลือด้วย
ส่วนคอลัมน์ที่สี่หรือห้าจะให้พื้นที่ที่เหลือ โดยมันถูกแบบ่งเป็นสามส่วน สองส่วนแรกให้คอลัมย์ที่สี่ และอีกส่วนให้คอลัมน์ที่ห้า

# --instructions--

จงสร้างกริดที่มี 3 คอลัมน์โดยแต่ละอันมีความกว้างตามลำดับดังนี้: 1fr, 100px, and 2fr.

# --hints--

`container` class ควรมี `grid-template-columns` property อันหนึ่งที่มี 3 คอลัมน์โดยแต่ละอันมีความกว้างดังนี้: `1fr, 100px, and 2fr`.

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
  .d1{background:LightSkyBlue;}
  .d2{background:LightSalmon;}
  .d3{background:PaleTurquoise;}
  .d4{background:LightPink;}
  .d5{background:PaleGreen;}

  .container {
    font-size: 40px;
    width: 100%;
    background: LightGray;
    display: grid;
    /* Only change code below this line */

    grid-template-columns: auto 50px 10% 2fr 1fr;

    /* Only change code above this line */
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
<style>.container {grid-template-columns: 1fr 100px 2fr;}</style>
```
