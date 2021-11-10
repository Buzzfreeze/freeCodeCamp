---
id: 5a94fe4469fb03452672e460
title: Limit Item Size Using the minmax Function
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cD97RTv'
forumTopicId: 301131
dashedName: limit-item-size-using-the-minmax-function
---

# --description--

ยังมี built-in function อีกอันหนึ่งที่เอาไว้ใช้กับ`grid-template-columns` และ `grid-template-rows` ชื่อว่า `minmax`
มันถูกใช้เพื่อจำกัดขนาดของ item เมื่อ container ของกริดมีการเปลี่ยนแปลงขนาด เพื่อทำเช่นนี้ คุณจำเป็นต้องระบุของเขตของขนาด item ที่คุณยอมรับได้ 
นี่คือตัวอย่าง:

```css
grid-template-columns: 100px minmax(50px, 200px);
```

ที่โค้ดด้านบน `grid-template-columns` ถูกกำหนดให้สร้าง 2 คอลัมน์ โดยอันแรกมีความกว้าง 100px และอันที่สองมีความกว้างน้อยสุดที่ 50px และสูงสุดที่ 200px

# --instructions--

การใช้ `minmax` function จะแทนที่ `1fr` ใน `repeat` function ด้วยขนาดคอลัมน์ที่มีความกว้างน้อยสุดที่ `90px` และความกว้างมากสุดที่ `1fr`
จงปรับขนาดของหน้า preview เพื่อให้เห็นความแตกต่าง

# --hints--

`container` class ควรมี `grid-template-columns` property อันหนึ่งที่ถูกกำหนดให้สร้างคอลั่มที่มีความกว้างต่ำสุดที่ `90px` และความกว้างสูงสุดที่ `1fr` ขึ้นมา 3 อัน

```js
assert(
  code.match(
    /.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?repeat\s*?\(\s*?3\s*?,\s*?minmax\s*?\(\s*?90px\s*?,\s*?1fr\s*?\)\s*?\)\s*?;[\s\S]*}/gi
  )
);
```

# --seed--

## --seed-contents--

```html
<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}
  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}
  .item5{background:PaleGreen;}

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    /* Only change code below this line */

    grid-template-columns: repeat(3, 1fr);

    /* Only change code above this line */
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
```

# --solutions--

```html
<style>.container {grid-template-columns: repeat(3, minmax(90px, 1fr));}</style>
```
