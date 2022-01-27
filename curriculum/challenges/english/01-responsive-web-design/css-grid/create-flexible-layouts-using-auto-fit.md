---
id: 5a94fe6269fb03452672e462
title: Create Flexible Layouts Using auto-fit
challengeType: 0
videoUrl: "https://scrimba.com/p/pByETK/c3dPph8"
forumTopicId: 301127
dashedName: create-flexible-layouts-using-auto-fit
---

# --description--

`auto-fit` ก็จะทำงานคล้ายๆ `auto-fill` แต่จะต่างกันเรื่องเดียว

คือเมื่อขนาดของ container เกินกว่าขนาดของทุก item รวมกัน `auto-fill` จะพยายามเพิ่มแถวหรือคอลัมน์ใหม่มาเรื่อย ๆ และจะดันให้ item ของคุณไปอยู่ด้านข้าง
ในขณะที่ `auto-fit` จะบีบแถวและคอลัมน์ที่ไม่มีข้อมูล และยืด item ของคุณให้มีขนาดที่พอดีกับ container

**Note:** ถ้า container ของคุณไม่ใหญ่พอที่จะเก็บ item ได้หมดในแถวเดียว container จะผลัก item ที่เกินลงมาอีกแถวหรือคอลัมน์หนึ่ง

# --instructions--

ในกริดอันที่สอง ให้ใช้ `auto-fit` กับฟังก์ชัน `repeat` เพื่อสร้างคอลัมน์ที่กว้างอย่างน้อย `60px` แต่ไม่เกิน `1fr` ลงในกริด

เมื่อทำเสร็จแล้ว ให้ลองปรับขนาดของหน้า preview เพื่อดูการทำงานของ auto-fill และ auto-fit

# --hints--

คลาส `container2` ต้องกำหนดค่าของ property `grid-template-columns` โดยใช้ `repeat` และ `auto-fit` ที่จะทำให้เกิดคอลัมน์ที่กว้างอย่างน้อย `60px` และไม่เกิน `1fr`

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
  .item1 {
    background: LightSkyBlue;
  }
  .item2 {
    background: LightSalmon;
  }
  .item3 {
    background: PaleTurquoise;
  }
  .item4 {
    background: LightPink;
  }
  .item5 {
    background: PaleGreen;
  }

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
    /* แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น */

    grid-template-columns: repeat(3, minmax(60px, 1fr));

    /* แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น */
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
<style>
  .container {
    grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
  }
  .container2 {
    grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
  }
</style>
```
