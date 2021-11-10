---
id: 5a94fe2669fb03452672e45e
title: Use grid-area Without Creating an Areas Template
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/c6N7VhK'
forumTopicId: 301135
dashedName: use-grid-area-without-creating-an-areas-template
---

# --description--

`grid-area` property ที่คุณได้เรียนไปแล้วใน challenge ล่าสุดสามารถใช้เพื่อการอื่นได้
ถ้ากริดของคุณไม่มี areas template เพื่อใช้ในการอ้างอิง, คุณสามารถสร้างพื้นที่สมมุติสำหรับวาง item ได้ดังนี้:

```css
item1 { grid-area: 1/1/2/4; }
```

นี่คือการใช้ลำดับของเส้นที่คุณได้เรียนไปแล้วก่อนหน้านี้เพื่อกำหนดตำแหน่งที่ item อันนี้จะอยู่
ลำดับในตัวอย่างข้างมันมีความหมายดังนี้:

```css
grid-area: horizontal line to start at / vertical line to start at / horizontal line to end at / vertical line to end at;
```

ดังนั้น item ในตัวอย่างจะกินพื้นที่ แถวที่อยู่ระหว่างเส้นที่ 1 และเส้นที่ 2 และคอลัมน์ที่อยู่ระหว่างเส้นที่ 1 ถึง 4

# --instructions--

โดยใช้ `grid-area` property, จงวาง element ที่มี `item5` class ระหว่างเส้นแนวนอนที่ 3 และ 4 แล้วก็เส้นแนวตั้งที่ 1 - 4

# --hints--

`item5` class ควรมี `grid-area` property อันหนึ่งเพื่อทำให้มันกินพื้นที่ทั้งหมดระหว่างเส้นแนวนอนที่ 3 และ 4 แล้วก็เส้นแนวตั้งที่ 1 - 4

```js
assert(
  code.match(
    /.item5\s*?{[\s\S]*grid-area\s*?:\s*?3\s*?\/\s*?1\s*?\/\s*?4\s*?\/\s*?4\s*?;[\s\S]*}/gi
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

  .item5 {
    background: PaleGreen;
    /* Only change code below this line */


    /* Only change code above this line */
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
<style>.item5 {grid-area: 3/1/4/4;}</style>
```
