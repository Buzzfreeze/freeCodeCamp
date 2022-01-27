---
id: 5a94fe3669fb03452672e45f
title: Reduce Repetition Using the repeat Function
challengeType: 0
videoUrl: "https://scrimba.com/p/pByETK/cQvqyHR"
forumTopicId: 301133
dashedName: reduce-repetition-using-the-repeat-function
---

# --description--

ตอนที่คุณใช้ `grid-template-columns` และ `grid-template-rows` เพื่อกำหนดโครงสร้างของกริด คุณจะต้องระบุค่าสำหรับแต่ละ row หรือ column

สมมุติว่าคุณต้องสร้าง grid ที่มีทั้งหมด 100 row ที่มีความสูงเท่า ๆ กัน คุณจะต้องระบุค่าทีละ item ทั้งร้อยตัวซึ่งก็คงจะลำบากมาก
แต่คุณไม่จำเป็นต้องลำบากขนาดนั้นหรอก เพราะว่าเรามีฟังก์ชัน `repeat` ให้ใช้

โดยฟังก์ชันนี้จะให้คุณระบุจำนวนครั้งที่คุณต้องการให้แถวหรือคอลัมน์ถูกสร้างซ้ำ ตามด้วยคอมม่า (`,`) และค่าที่คุณอยากสร้างซ้ำ

ลองดูตัวอย่างการสร้าง grid 100 ที่มี 100 row โดยแต่ละ row มีความสูง 50px:

```css
grid-template-rows: repeat(100, 50px);
```

คุณสามารถใช้ฟังก์ชันนี้ เพื่อสร้างค่าซ้ำได้ทีละหลายๆค่า และก็แทรกค่าที่สร้างนั้นไปในค่าอื่นได้ งงใช่ไหม ลองดูตัวอย่างสิ:

```css
grid-template-columns: repeat(2, 1fr 50px) 20px;
```

ตัวอย่างด้านบนจะทำให้เกิดผลลัพธ์แบบนี้:

```css
grid-template-columns: 1fr 50px 1fr 50px 20px;
```

**Note:** จะมีการสร้าง `1fr 50px` ทั้งหมด 2 ครั้ง และจะตามด้วยค่า `20px`

# --instructions--

ให้แก้ property `grid-template-columns` โดยให้เปลี่ยนไปใช้ฟังก์ชัน `repeat` แทน โดยให้ได้ผลลัพธ์ตามเดิม

# --hints--

คลาส `container` ต้องกำหนดค่าของ property `grid-template-columns` โดยใช้ฟังก์ชัน `repeat` เพื่อสร้าง `1fr` ซ้ำกัน 3 ตัว

```js
assert(
  code.match(
    /.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?repeat\s*?\(\s*?3\s*?,\s*?1fr\s*?\)\s*?;[\s\S]*}/gi
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

    grid-template-columns: 1fr 1fr 1fr;

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
    grid-template-columns: repeat(3, 1fr);
  }
</style>
```
