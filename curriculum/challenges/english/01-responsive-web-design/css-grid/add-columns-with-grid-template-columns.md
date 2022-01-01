---
id: 5a9036d038fddaf9a66b5d32
title: Add Columns with grid-template-columns
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/c7NzDHv'
forumTopicId: 301117
dashedName: add-columns-with-grid-template-columns
---

# --description--

การสร้างกริดอย่างง่าย ๆ ไม่ทำให้คุณไปได้ไกลนัก
คุณต้องกำหนดโครงสร้างของกริดด้วย
เพื่อที่จะเพิ่มคอลัมน์อันหนึ่งให้กับกริด จงใช้ `grid-template-columns` property ที่ grid container ตามตัวอย่างด้านล่าง :

```css
.container {
  display: grid;
  grid-template-columns: 50px 50px;
}
```

นี่จะช่วยให้กริดของคุณมีคอลัมน์สองอันที่แต่ละอันมีขนาด 50 px
จำนวนของ parameter ที่ `grid-template-columns` property ใช้บ่งบอกถึงจำนวนของคอลัมน์ภายในกริดและค่าในแต่ละ parameter บ่งบอกถึงขนาดความกว้างของมัน

# --instructions--

จงกำหนดให้ grid container มี 3 คอลัมน์ที่แต่ละอันมีความกว้าง `100px`

# --hints--

`container` class ควรมี `grid-template-columns` property ที่มีค่า `100px` อยู่ 3 ตัว

```js
assert(code.match(/.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?100px\s*?100px\s*?100px\s*?;[\s\S]*}/gi));
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
<style>
  .container {
    grid-template-columns: 100px 100px 100px;
  }
</style>
```
