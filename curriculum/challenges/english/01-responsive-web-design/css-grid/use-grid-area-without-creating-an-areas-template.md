---
id: 5a94fe2669fb03452672e45e
title: Use grid-area Without Creating an Areas Template
challengeType: 0
videoUrl: "https://scrimba.com/p/pByETK/c6N7VhK"
forumTopicId: 301135
dashedName: use-grid-area-without-creating-an-areas-template
---

# --description--

คุณสามารถใช้ property `grid-area` ที่ได้เรียนไปในแบบทดสอบที่แล้วในรูปแบบอื่นได้

ถ้ากริดของคุณไม่ได้กำหนดค่าของ areas template ไว้ คุณสามารถสร้างพื้นที่สมมุติสำหรับวาง item ได้โดยใช้วิธีด้านล่างนี้:

```css
item1 {
  grid-area: 1/1/2/4;
}
```

ตัวอย่างนี้จะใช้เลขของ line ที่เราได้เรียนไปแล้ว
โดยความหมายของตัวเลขนี้จะหมายความดังนี้:

```css
grid-area: จุดเริ่มต้นของ line แนวนอน / จุดเริ่มต้นของ line แนวตั้ง / จุดสิ้นสุดของ line แนวนอน / จุดสิ้นสุดของ line แนวตั้ง;
```

ดังนั้น item ในตัวอย่างจะกินพื้นที่ แถวที่อยู่ระหว่างเส้นที่ 1 และเส้นที่ 2 และคอลัมน์ที่อยู่ระหว่างเส้นที่ 1 ถึง 4

# --instructions--

ให้ใช้ property `grid-area` เพื่อวาง element ที่มีคลาสเป็น `item5` ไว้ระหว่าง line แนวนอนเส้นที่ 3 และ 4 และระหว่าง line แนวตั้งเส้นที่ 1 - 4

# --hints--

คลาส `item5` ต้องมีค่าของ property `grid-area` เป็นค่าที่ทำให้ item นี้กินพื้นที่ตั้งแต่ line แนวนอนเส้นที่ 3 ไปจนถึงเส้นที่ 4 และตั้งแต่ line แนวตั้งเส้นที่ 1 ไปจนถึงเส้นที่ 4

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
    /* แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น */

    /* แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น */
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
<style>
  .item5 {
    grid-area: 3/1/4/4;
  }
</style>
```
