---
id: 5a90376038fddaf9a66b5d3c
title: Align All Items Horizontally using justify-items
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cJbpECn'
forumTopicId: 301120
dashedName: align-all-items-horizontally-using-justify-items
---

# --description--

บางครั้ง คุณก็ต้องการให้ทุก item ใน CSS Grid เรียงตรงกัน
คุณสามารถใช้ property ที่ได้เรียนไปก่อนหน้านี้จัดเรียงให้พวกมันตรงกันที่ละตัว หรือคุณสามารถจัดเรียงมันทั้งหมดให้ตรงกันตรงกันในแนวนอน (row)ได้ในครั้งเดียวโดยการใช้ `justify-items` กับ grid container ของคุณ
property นี้สามารถรับค่าเดียวกันกับที่เรียนไปใน 2 challenges ก่อนหน้าได้ทั้งหมด
ความแตกต่างก็คือมันจะย้าย **all** items ในกริดของเราไปที่การเรียงตัวที่เราต้องการ

# --instructions--

จงใช้ property นี้เพื่อจัดให้ item ทั้งหมดอยู่ตรงกลางในแนวนอน

# --hints--

`container` class ควรมี `justify-items` property อันหนึ่งที่มีค่าเป็น `center`

```js
assert(code.match(/.container\s*?{[\s\S]*justify-items\s*?:\s*?center\s*?;[\s\S]*}/gi));
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
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
    /* Only change code below this line */

    /* Only change code above this line */
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
  .container {
    justify-items: center;
  }
</style>
```
