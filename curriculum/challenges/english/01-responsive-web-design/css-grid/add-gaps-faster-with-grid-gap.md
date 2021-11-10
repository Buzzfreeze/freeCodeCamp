---
id: 5a9036ee38fddaf9a66b5d37
title: Add Gaps Faster with grid-gap
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/ca2qVtv'
forumTopicId: 301118
dashedName: add-gaps-faster-with-grid-gap
---

# --description--

`grid-gap` เป็น shorthand property อันหนึ่งสำหรับ `grid-row-gap` และ `grid-column-gap` ที่เราได้ใช้ไปแล้วในสอง challenges ก่อนหน้า โดย `grid-gap` นั้นค่อนข้างที่จะใช้ง่ายกว่า
ถ้า `grid-gap` มีค่าอยู่ค่าเดียว, มันจะสร้างช่องว่างระหว่างแถวและคอลัมน์ทั้งหมดออกมาขนาดหนึ่ง
อย่างไรก็ตาม ถ้ามันมี 2 ค่า, มันจะใช้ค่าแรกเป็นระยะห่างระหว่างแถว และอีกค่าเป็นระยะห่างระหว่างคอลัมน์

# --instructions--

จงใช้ `grid-gap` เพื่อทำให้เกิดช่องว่างระหว่างแถวขนาด `10px` และช่องว่างระหว่างคอลัมน์ขนาด `20px` 
# --hints--

`container` class ควรมี `grid-gap` property อันหนึ่งที่ทำให้เกิดช่องว่างระหว่างแถวขนาด `10px` และช่องว่างระหว่างคอลัมน์ขนาด `20px` 

```js
assert(
  code.match(
    /.container\s*?{[\s\S]*grid-gap\s*?:\s*?10px\s+?20px\s*?;[\s\S]*}/gi
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
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    /* Only change code below this line */

    
    /* Only change code above this line */
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
<style>.container {grid-gap: 10px 20px;}</style>
```
