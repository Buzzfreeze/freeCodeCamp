---
id: 5a9036e138fddaf9a66b5d33
title: Add Rows with grid-template-rows
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cbp9Pua'
forumTopicId: 301119
dashedName: add-rows-with-grid-template-rows
---

# --description--

กริดที่คุณได้สร้างไปใน challenge ที่แล้วจะกำหนดจำนวนของแถวโดยอัตโนมัติ
เพื่อที่จะปรับเปลี่ยนเป็นแถว ๆ ไป, จงใช้ `grid-template-rows` property ในแบบเดียวกับที่คุรใช้ `grid-template-columns` ใน challenge ที่แล้ว

# --instructions--

จงเพิ่มแถว 2 แถวให้กับกริดโดยให้แต่ละอันสูง  `50px` 

# --hints--

`container` class ควรมี `grid-template-rows` property อันหนึ่งที่มี `50px` 2 อัน

```js
assert(
  code.match(
    /.container\s*?{[\s\S]*grid-template-rows\s*?:\s*?50px\s*?50px\s*?;[\s\S]*}/gi
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
    grid-template-columns: 100px 100px 100px;
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
<style>.container {grid-template-rows: 50px 50px;}</style>
```
