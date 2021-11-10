---
id: 5a94fe0569fb03452672e45c
title: Divide the Grid Into an Area Template
challengeType: 0
forumTopicId: 301130
dashedName: divide-the-grid-into-an-area-template
---

# --description--

คุณสามารถจับกลุ่มช่องต่าง ๆ ในกริดของคุณให้เป็นY <dfn>area</dfn> 
จงกำหนดชื่อให้กับพื้นที่นั้น
จงทำมันโดยใช้ `grid-template-areas` ที่ container แบบนี้:

```css
grid-template-areas:
  "header header header"
  "advert content content"
  "advert footer footer";
```

โค้ดด้านบนจะจับกลุ่มช่องเล็ก ๆ ของกริดให้เป็น 4 ส่วน; `header`, `advert`, `content`, และ `footer`
ทุก ๆ คำทขะแสดงเป็นช่อง ๆ หนึ่ง และทุก ๆ เครื่องหมายคำพูดคู่หนึ่งจะเป็น 1 แถว

# --instructions--

จงเปลี่ยน template เพื่อที่พื้นที่ `footer` จะครอบคลุมแถวล่างสุดทั้งหมด
การกำหนดพื้นที่จะยังไม่มีผลอะไรที่มองเห็นได้ในตอนนี้
หลังจากนี้ คุณจะทำให้ item ใช้พื้นที่เพื่อดูการทำงานของมัน

# --hints--

`container` class ควรมี`grid-template-areas` property อันหนึ่งที่คล้ายกับตัวอย่าง แต่มีพื้นที่ `footer`ครอบคลุมแถวล่างสุดทั้งหมด

```js
assert(
  __helpers
    .removeCssComments(code)
    .match(
      /.container\s*?{[\s\S]*grid-template-areas\s*?:\s*?"\s*?header\s*?header\s*?header\s*?"\s*?"\s*?advert\s*?content\s*?content\s*?"\s*?"\s*?footer\s*?footer\s*?footer\s*?"\s*?;[\s\S]*}/gi
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
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
    grid-template-areas:
    /* Only change code below this line */
      "header header header"
      "advert content content"
      "advert footer footer";
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
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;

    grid-template-areas:
      "header header header"
      "advert content content"
      "footer footer footer";
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
