---
id: 5a90376038fddaf9a66b5d3c
title: Align All Items Horizontally using justify-items
challengeType: 0
videoUrl: "https://scrimba.com/p/pByETK/cJbpECn"
forumTopicId: 301120
dashedName: align-all-items-horizontally-using-justify-items
---

# --description--

แล้วถ้าคุณอยากให้ทุก item ใน CSS Grid เรียงเหมือนกันล่ะ?

คุณจะใช้ property ที่เราเรียนไปแล้ว เพื่อเรียง item ทีละตัวก็ได้ หรือใช้ property เดียว เพื่อเรียง item ทั้งหมดในแนวนอนก็ได้ โดยใช้ `justify-items` กับ grid container ของคุณ

property นี้จะรับค่าเหมือนกับ property ที่เราเรียนไปในแบบทดสอบที่แล้ว
ความแตกต่างก็คือ property นี้จะทำให้ **ทุก** item ในกริดของเราเรียงตัวในแบบที่เราต้องการ

# --instructions--

ให้ใช้ property นี้เพื่อเรียงให้ item ทั้งหมดอยู่ตรงกลางในแนวนอน

# --hints--

คลาส `container` ต้องมีค่าของ property `justify-items` เป็น `center`

```js
assert(
  code.match(
    /.container\s*?{[\s\S]*justify-items\s*?:\s*?center\s*?;[\s\S]*}/gi
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
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
    /* แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น */

    /* แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น */
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
    justify-items: center;
  }
</style>
```
