---
id: 5a94fe7769fb03452672e463
title: Use Media Queries to Create Responsive Layouts
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cMbqeHk'
forumTopicId: 301138
dashedName: use-media-queries-to-create-responsive-layouts
---

# --description--

CSS Grid CSS Grid สามารถเป็นวิธีง่าย ๆ ที่ทำให้เว็บไซต์ของคุณ responsive ได้ดีขึ้นโดยใช้ media query หรือการเรียงพื้นที่กริดใหม่
รวมถึงเปลี่ยนขนาดของกริดและปรับเปลี่ยนการวางตัวของ item ใหม่

ในหน้า preview, เมื่อความกว้างของ viewport width มีค่าเกิน 300px, จำนวนของคอลั่มน์จะเพิ่มขึ้นจาก 1 เป็น 2
พื้นที่ advert ก็จะย้ายไปอยู่ถ้าด้านซ้ายมือทั้งหมด

# --instructions--

เมื่อความกว้างของ viewport มีค่าเท่ากับ `400px` หรือมากกว่านั้นจะทำให้พื้นที่ header กินพื้นที่แถวบนสุดทั้งหมด ส่วนพื้นที่ footer ที่จะกินพื้นที่แถวล่างสุดทั้งหมดเช่นเดียวกัน

# --hints--

เมื่อ viewport มีค่าเท่ากับ `400px` หรือมากกว่านั้น `container` class ควรมี `grid-template-areas` property อันหนึ่งที่ทำให้พื้นที่ header และ footer จะกินพื้นที่แถวบนสุดและล่างสุดตามลำดับ
ส่วนส่วนที่ใช้ advert และ content ก็จะอยู่ที่ด้านซ้ายขวาของแถวตรงกลาง

```js
assert(
  __helpers
    .removeCssComments(code)
    .match(
      /@media\s*?\(\s*?min-width\s*?:\s*?400px\s*?\)[\s\S]*.container\s*?{[\s\S]*grid-template-areas\s*?:\s*?"\s*?header\s*?header\s*?"\s*?"\s*?advert\s*?content\s*?"\s*?"\s*?footer\s*?footer\s*?"\s*?;[\s\S]*}/gi,
    ),
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
      'header'
      'advert'
      'content'
      'footer';
  }

  @media (min-width: 300px) {
    .container {
      grid-template-columns: auto 1fr;
      grid-template-rows: auto 1fr auto;
      grid-template-areas:
        'advert header'
        'advert content'
        'advert footer';
    }
  }

  @media (min-width: 400px) {
    .container {
      grid-template-areas:
      /* Only change code below this line */
        'advert header'
        'advert content'
        'advert footer';
      /* Only change code above this line */
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
      'header'
      'advert'
      'content'
      'footer';
  }

  @media (min-width: 300px) {
    .container {
      grid-template-columns: auto 1fr;
      grid-template-rows: auto 1fr auto;
      grid-template-areas:
        'advert header'
        'advert content'
        'advert footer';
    }
  }

  @media (min-width: 400px) {
    .container {
      grid-template-areas:
        'header header'
        'advert content'
        'footer footer';
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
