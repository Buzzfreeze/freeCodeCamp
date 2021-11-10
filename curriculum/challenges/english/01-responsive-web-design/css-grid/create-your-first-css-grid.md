---
id: 5a858944d96184f06fd60d61
title: Create Your First CSS Grid
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cqwREC4'
forumTopicId: 301129
dashedName: create-your-first-css-grid
---

# --description--

จงเปลี่ยน HTML element ให้กลายเป็น grid container โยการกำหนดค่า `display` property ของมันให้เป็น`grid`
นี่จะทำให้คุณสามาถใช้ property อื่น ๆ ที่เกี่ยวของกับ CSS Grid ได้

**Note:** สำหรับ CSS Grid, parent element ถูกเรียกโดย <dfn>container</dfn> และ children ของพวกมันจะถูกเรียกเป็น <dfn>items</dfn>.

# --instructions--

จงเปลี่ยน display ของ div ที่มี `container` class ให้เป็น `grid`

# --hints--

`container` class ควรมี`display` property ที่มีค่าเป็น `grid`

```js
assert(code.match(/.container\s*?{[\s\S]*display\s*?:\s*?grid\s*?;[\s\S]*}/gi));
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
<style>.container {display: grid;}</style>
```
