---
id: 5a94fe7769fb03452672e463
title: Use Media Queries to Create Responsive Layouts
challengeType: 0
videoUrl: "https://scrimba.com/p/pByETK/cMbqeHk"
forumTopicId: 301138
dashedName: use-media-queries-to-create-responsive-layouts
---

# --description--

เราสามารถใช้ CSS Grid เพื่อทำให้เว็บมีความเป็น responsive มากขึ้นได้ง่ายๆ โดยใช้ media query เพื่อทำการเรียงพื้นที่กริดใหม่
เพื่อเปลี่ยนขนาดของกริด และเพื่อเปลี่ยนการวางตัวของ item ใหม่

ลองดูในหน้า preview

เมื่อความกว้างของ viewport มีค่าเกิน 300px จำนวนของคอลัมน์จะเพิ่มขึ้นจาก 1 เป็น 2
และพื้นที่ advert ก็จะย้ายไปอยู่ถ้าด้านซ้ายมือทั้งหมด

# --instructions--

จงทำให้ เมื่อความกว้างของ viewport มากกว่าหรือเท่ากับ `400px` จะทำให้พื้นที่ header กินพื้นที่แถวบนสุดทั้งแถว ส่วนพื้นที่ footer ก็จะกินพื้นที่แถวล่างสุดทั้งแถว

# --hints--

เมื่อ viewport กว้างมากกว่าหรือเท่ากับ `400px` คลาส `container` จะต้องมีค่าของ property `grid-template-areas` เปลี่ยนไป โดยจะต้องทำให้ header กินพื้นที่แถวบนสุดทั้งแถวและ footer กินพื้นที่แถวล่างสุดทั้งแถว
และ advert ก็ต้องไปกินพื้นที่คอลัมน์ซ้ายของแถวกลาง ส่วน content ก็ต้องไปกินพื้นที่คอลัมน์ขวาของแถวกลาง

```js
assert(
  __helpers
    .removeCssComments(code)
    .match(
      /@media\s*?\(\s*?min-width\s*?:\s*?400px\s*?\)[\s\S]*.container\s*?{[\s\S]*grid-template-areas\s*?:\s*?"\s*?header\s*?header\s*?"\s*?"\s*?advert\s*?content\s*?"\s*?"\s*?footer\s*?footer\s*?"\s*?;[\s\S]*}/gi
    )
);
```

# --seed--

## --seed-contents--

```html
<style>
  .item1 {
    background: LightSkyBlue;
    grid-area: header;
  }

  .item2 {
    background: LightSalmon;
    grid-area: advert;
  }

  .item3 {
    background: PaleTurquoise;
    grid-area: content;
  }

  .item4 {
    background: lightpink;
    grid-area: footer;
  }

  .container {
    font-size: 1.5em;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 50px auto 1fr auto;
    grid-gap: 10px;
    grid-template-areas:
      "header"
      "advert"
      "content"
      "footer";
  }

  @media (min-width: 300px) {
    .container {
      grid-template-columns: auto 1fr;
      grid-template-rows: auto 1fr auto;
      grid-template-areas:
        "advert header"
        "advert content"
        "advert footer";
    }
  }

  @media (min-width: 400px) {
    .container {
      grid-template-areas:
      /* แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น */
        "advert header"
        "advert content"
        "advert footer";
      /* แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น */
    }
  }
</style>

<div class="container">
  <div class="item1">header</div>
  <div class="item2">advert</div>
  <div class="item3">content</div>
  <div class="item4">footer</div>
</div>
```

# --solutions--

```html
<style>
  .item1 {
    background: LightSkyBlue;
    grid-area: header;
  }

  .item2 {
    background: LightSalmon;
    grid-area: advert;
  }

  .item3 {
    background: PaleTurquoise;
    grid-area: content;
  }

  .item4 {
    background: lightpink;
    grid-area: footer;
  }

  .container {
    font-size: 1.5em;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 50px auto 1fr auto;
    grid-gap: 10px;
    grid-template-areas:
      "header"
      "advert"
      "content"
      "footer";
  }

  @media (min-width: 300px) {
    .container {
      grid-template-columns: auto 1fr;
      grid-template-rows: auto 1fr auto;
      grid-template-areas:
        "advert header"
        "advert content"
        "advert footer";
    }
  }

  @media (min-width: 400px) {
    .container {
      grid-template-areas:
        "header header"
        "advert content"
        "footer footer";
    }
  }
</style>

<div class="container">
  <div class="item1">header</div>
  <div class="item2">advert</div>
  <div class="item3">content</div>
  <div class="item4">footer</div>
</div>
```
