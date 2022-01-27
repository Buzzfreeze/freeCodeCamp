---
id: 5a94fe0569fb03452672e45c
title: Divide the Grid Into an Area Template
challengeType: 0
forumTopicId: 301130
dashedName: divide-the-grid-into-an-area-template
---

# --description--

คุณสามารถจับ cell ในกริดของคุณให้เป็น <dfn>area (พื้นที่)</dfn> และคุณก็จะกำหนดชื่อให้กับพื้นที่นั้นได้

ในการทำแบบนี้ คุณจะต้องใช้ property `grid-template-areas` ที่ container แบบนี้:

```css
grid-template-areas:
  "header header header"
  "advert content content"
  "advert footer footer";
```

โค้ดด้านบนจะจับกลุ่ม cell ของกริดให้เป็น 4 ส่วน คือ `header`, `advert`, `content`, และ `footer`
แต่ละคำที่เราละบุไปใน property นี้ จะหมายถึง 1 cell และข้อความในเครื่องหมายคำพูด จะนับเป็น 1 row

# --instructions--

ให้เปลี่ยน template เพื่อให้ row ล่างสุดเป็น เป็น area ที่มีชื่อว่า `footer` ทั้งหมดทุก cell

ตอนนี้คุณจะยังไม่เห็นความเปลี่ยนแปลงจากการกำหนด area
เดี๋ยวเราค่อยดูการทำงานของ area ใบแบบทดสอบถัดไป

# --hints--

คลาส `container` ต้องมีค่าของ property `grid-template-areas` คล้ายกับในตัวอย่างที่เรามีให้ แต่ area ของแถวล่างสุด ต้องมีค่าเป็น `footer` ทั้งหมด

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
    grid-template-areas:
    /* แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น */
      "header header header"
      "advert content content"
      "advert footer footer";
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
