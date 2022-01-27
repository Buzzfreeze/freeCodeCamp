---
id: 5a94fe4469fb03452672e460
title: Limit Item Size Using the minmax Function
challengeType: 0
videoUrl: "https://scrimba.com/p/pByETK/cD97RTv"
forumTopicId: 301131
dashedName: limit-item-size-using-the-minmax-function
---

# --description--

ยังมีฟังก์ชันอีกตัวหนึ่งที่เอาไว้ใช้กับ `grid-template-columns` และ `grid-template-rows` โดยฟังก์ชันนี้ชื่อว่า `minmax`
ฟังก์ชันนี้จะใช้เพื่อจำกัดขนาดของ item เมื่อ container ของกริดมีการเปลี่ยนแปลงขนาด

ในการใช้งานฟังก์ชันนี้ คุณต้องระบุขนาดของ item ที่คุณยอมรับได้
ลองดูตัวอย่าง:

```css
grid-template-columns: 100px minmax(50px, 200px);
```

ในโค้ดด้านบน `grid-template-columns` ถูกกำหนดให้สร้าง 2 คอลัมน์ โดยคอลัมน์แรกมีความกว้าง 100px และคอลัมน์ที่สองจะต้องกว้างอย่างน้อย 50px (min) และไม่เกิน 200px (max)

# --instructions--

ให้ใช้ฟังก์ชัน `minmax` แทนที่ `1fr` ในฟังก์ชัน `repeat` โดยกำหนดให้คอลัมน์ต้องกว้างอย่างน้อย `90px` และกว้างไม่เกิน `1fr`
ให้ลองปรับขนาดของหน้าต่าง preview เพื่อดูว่า cell เปลี่ยนขนาดไปอย่างไร

# --hints--

คลาส `container` ต้องมีค่าของ property `grid-template-columns` ที่สร้างคอลัมน์ขึ้นมา 3 คอลัมน์ โดยกำหนดให้คอลัมน์ต้องกว้างอย่างน้อย `90px` และไม่เกิน `1fr`

```js
assert(
  code.match(
    /.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?repeat\s*?\(\s*?3\s*?,\s*?minmax\s*?\(\s*?90px\s*?,\s*?1fr\s*?\)\s*?\)\s*?;[\s\S]*}/gi
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
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    /* แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น */

    grid-template-columns: repeat(3, 1fr);

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
```

# --solutions--

```html
<style>
  .container {
    grid-template-columns: repeat(3, minmax(90px, 1fr));
  }
</style>
```
