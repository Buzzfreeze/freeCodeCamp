---
id: 5a94fe6269fb03452672e462
title: Create Flexible Layouts Using auto-fit
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/c3dPph8'
forumTopicId: 301127
dashedName: create-flexible-layouts-using-auto-fit
---

# --description--

`auto-fit` ทำงานเกือบจะเหมือนกับ `auto-fill`
ความแตกต่างเดียวของมันคือเมื่อขนาดของ container เกินกว่าขนาดรวมของทุก items, `auto-fill` จะพยายามเพิ่มแถวหรือคอลัมน์ใหม่มาเรื่อย ๆ และพวกมันจะดันให้ item ของคุณไปด้านข้าง ในขณะที่ `auto-fit` จะลบพวกแถวและคอลัมน์เปล่าของคุณและยืด item ของคุณให้มีขนาดที่พอดีกับ container

**Note:** ถ้า container ของคุณไม่มีทางพอดีกับ items ได้ภายในแถวเดียว มันจะผลัก item ที่เกินลงมาอีกแถวหรือคอลัมน์หนึ่ง 

# --instructions--

ในกริดอันที่สอง, จงใช้ `auto-fit` ที่มี `repeat` เพื่อทำให้กริดเต็มไปด้วยคอลัมน์ที่มีความกว้างอย่างต่ำที่ `60px` และความกว้างมากสุดที่ `1fr`
หลัวจากนั้น จงปรับขนาดของหน้า preview เพื่อให้เห็นความแตกต่าง 

# --hints--

`container2` class ควรมี`grid-template-columns` property อันหนึ่งที่มี `repeat` และ `auto-fit`
สิ่งนี้จะช่วยทำให้กริดของคุณเต็มไปด้วยคอลัมน์ที่มีความกว้างอย่างต่ำ `60px` และความกว้างมากสุดที่ `1fr`

```js
assert(
  code.match(
    /.container2\s*?{[\s\S]*grid-template-columns\s*?:\s*?repeat\s*?\(\s*?auto-fit\s*?,\s*?minmax\s*?\(\s*?60px\s*?,\s*?1fr\s*?\)\s*?\)\s*?;[\s\S]*}/gi
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
    min-height: 100px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }

  .container2 {
    font-size: 40px;
    min-height: 100px;
    width: 100%;
    background: Silver;
    display: grid;
    /* Only change code below this line */

    grid-template-columns: repeat(3, minmax(60px, 1fr));

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
<div class="container2">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>
```

# --solutions--

```html
<style>.container {grid-template-columns: repeat( auto-fill, minmax(60px, 1fr));} .container2 {grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));}</style>
```
