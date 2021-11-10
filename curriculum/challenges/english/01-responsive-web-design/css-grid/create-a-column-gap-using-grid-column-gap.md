---
id: 5a9036ee38fddaf9a66b5d35
title: Create a Column Gap Using grid-column-gap
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cVZ8vfD'
forumTopicId: 301124
dashedName: create-a-column-gap-using-grid-column-gap
---

# --description--

จถึงตอนนี้ในกริดที่คุณสร้างขึ้นมา, ทุกคอลัมน์ได้ทุกบีบให้ชิดกัน
บางครั้ง คุณก็ต้องการช่องว่างระหว่างคอลัมน์
จงใช้  `grid-column-gap` property เพื่อที่จะเพิ่มช่องว่างระหว่างคอลัมน์ ดังต่อไปนี้:

```css
grid-column-gap: 10px;
```

โค้ดนี้จะสร้างช่องว่างระหว่างคอลัมน์ขนาด 10px ให้กับทุกคอลัมน์

# --instructions--

จงกำหนดให้คอลัมน์ในกริดมีขนาดช่องว่างกว้าง `20px` 

# --hints--

`container` class ควรมี `grid-column-gap` property อันหนึ่งที่มีค่า `20px`

```js
assert(
  code.match(
    /.container\s*?{[\s\S]*grid-column-gap\s*?:\s*?20px\s*?;[\s\S]*}/gi
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
<style>.container {grid-column-gap: 20px;}</style>
```
