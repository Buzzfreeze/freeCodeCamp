---
id: 587d778f367417b2b2512aad
title: >-
  Avoid Colorblindness Issues by Carefully Choosing Colors that Convey
  Information
challengeType: 0
videoUrl: 'https://scrimba.com/c/c437as3'
forumTopicId: 301011
dashedName: >-
  avoid-colorblindness-issues-by-carefully-choosing-colors-that-convey-information
---

# --description--

ตาบอดสีนั้นมีหลายประเภท มันสามารถเป็นได้ตั้งแต่แยกสีที่ใกล้เคียงกับได้ยากจนไปถึงไม่สามารถเห็นสีอะไรได้เลย
อาการที่พบได้บ่อยที่สุดคือ เซลล์รับสีเขียวทำงานได้ไม่ดี

ยกตัวอย่างเช่น ถ้ามีสีเขียวเฉดใกล้ ๆ กันเป็นสีพื้นหน้าและพื้นหลังของเนื้อหาของคุณ, คนที่ตาบอดสีอาจจะไม่สามารถบอกความแตกต่างของมันได้
สีที่ใกล้เคียงกันสามารถดูได้จากวงล้อสี และการจับคู่แบบนี้ควรหลีกเลี่ยงเมื่อใช้กับเนื้อหาที่มีความสำคัญ

**Note:** บางเครื่องมือเลือกสีในอินเตอร์เน็ตจะมีตัวอย่างการแสดงผลของสีในแต่ละกลุ่มอาการของโรคตาบอดสีให้เห็น เราสามารถใช้มันควบคู่กับเครื่องคิด contrast ratio ได้

# --instructions--

Camper Cat กำลังทดสอบ styles ที่แตกต่างกันสำหรับปุ่มที่มีความสำคัญ
แต่ว่าสีเหลือง (`#FFFF33`) `background-color`และสีเขียว (`#33FF33`) สำหรับ `color` ของข้อความนั้นมีความใกล้เคียงกันมากบนวงล้อสีและยากที่จะแยกด้วยตาเปล่าในกลุ่มคนที่ตาบอดสี (ความสว่างที่ใกล้เคียงกันของสองสีนี้ยังมีค่contrast ratio ที่ไม่ผ่านเกณฑ์)จงเปลี่ยน`color` ของข้อความให้เป็นสีน้ำเงินเข้ม (`#003366`) เพื่อแก้ปัญหาทั้งสองอย่าง

# --hints--

โค้ดของคุณควรเปลี่ยน`color` ของข้อความสำหรับ `button` ให้เป็น น้ำเงินเข้ม

```js
assert($('button').css('color') == 'rgb(0, 51, 102)');
```

# --seed--

## --seed-contents--

```html
<head>
  <style>
  button {
    color: #33FF33;
    background-color: #FFFF33;
    font-size: 14px;
    padding: 10px;
  }
  </style>
</head>
<body>
  <header>
    <h1>Danger!</h1>
  </header>
  <button>Delete Internet</button>
</body>
```

# --solutions--

```html
<head>
  <style>
    button {
      color: #003366;
      background-color: #FFFF33;
      font-size: 14px;
      padding: 10px;
    }
  </style>
</head>
<body>
  <header>
    <h1>Danger!</h1>
  </header>
  <button>Delete Internet</button>
</body>
```
