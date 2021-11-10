---
id: 5a90374338fddaf9a66b5d3a
title: Align an Item Horizontally using justify-self
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cJbpKHq'
forumTopicId: 301122
dashedName: align-an-item-horizontally-using-justify-self
---

# --description--

ใน CSS Grid, เนื้อหาสำหรับแต่ละจะอยู่ในกล่องที่ถูกเรียกว่า <dfn>cell</dfn>
คุณสามารถจัดเรียงตำแหน่งของเนื้อหาภายใน cell ของมันในแนวนอนได้โดยการใช้ `justify-self` property กับ grid item
โดยค่าเริ่มต้น property นี้มีค่าเป็น `stretch`, โดยจะทำให้เนื้อหากระจายเต็ความกว้างของ cell
CSS Grid property อันนี้รับค่าอื่นด้วยเช่นกัน:

`start`: aligns the content at the left of the cell,

`center`: aligns the content in the center of the cell,

`end`: aligns the content at the right of the cell.

# --instructions--

จงใช้ `justify-self` property เพื่อจัดให้ item ที่มีคลาส `item2` อยู่ตรงกลาง

# --hints--

`item2` class ควรมี `justify-self` property อันหนึ่งที่มีค่าเป็น `center`

```js
assert(
  code.match(/.item2\s*?{[\s\S]*justify-self\s*?:\s*?center\s*?;[\s\S]*}/gi)
);
```

# --seed--

## --seed-contents--

```html
<style>
  .item1{background: LightSkyBlue;}

  .item2 {
    background: LightSalmon;
    /* Only change code below this line */

    
    /* Only change code above this line */
  }

  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}
  .item5{background:PaleGreen;}

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
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
<style>.item2 {justify-self: center;}</style>
```
