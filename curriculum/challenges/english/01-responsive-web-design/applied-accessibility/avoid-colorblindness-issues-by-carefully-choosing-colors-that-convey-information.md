---
id: 587d778f367417b2b2512aad
title: >-
  Avoid Colorblindness Issues by Carefully Choosing Colors that Convey
  Information
challengeType: 0
videoUrl: "https://scrimba.com/c/c437as3"
forumTopicId: 301011
dashedName: >-
  avoid-colorblindness-issues-by-carefully-choosing-colors-that-convey-information
---

# --description--

ตาบอดสีนั้นมีหลายประเภท
ซึ่งสามารถเป็นได้ตั้งแต่แยกสีที่ใกล้เคียงกันได้ยาก ไปถึงไม่สามารถเห็นสีได้เลย
อาการที่พบได้บ่อยที่สุดคือ เซลล์รับสีเขียวทำงานได้ไม่ดี

ถ้าเราใช้สีของพื้นหน้าและพื้นหลัง เป็นสีที่ใกล้กัน
คนที่ตาบอดสีอาจจะไม่สามารถบอกความแตกต่างของสองสีนั้นได้
วิธีการดูสีที่ใกล้กันสามารถดูได้จากวงล้อสี และควรหลีกเลี่ยงการจับคู่สีแบบนี้เมื่อใช้กับเนื้อหาที่มีความสำคัญ

**Note:**
บนอินเตอร์เน็ตจะมีเครื่องมือเลือกสีหลายตัวที่จะแสดงให้เห็นว่าสีที่เราเลือก เมื่อนำมาไว้ด้วยกันจะแสดงผลให้คนที่เป็นตาบอดสีเห็นในรูปแบบไหน
เราสามารถใช้เครื่องมือนี้คู่กับเครื่องมือในการคำนวณอัตราส่วนของคอนทราสต์ได้

# --instructions--

Camper Cat กำลังลองเปลี่ยน style ของปุ่มที่มีความสำคัญอยู่
แต่ `background-color` ที่เป็นสีเหลือง (`#FFFF33`) และ `color` ของข้อความ ที่เป็นสีเขียว (`#33FF33`) นั้นมีความใกล้เคียงกันมากบนวงล้อสี และจะทำให้คนตาบอดสีแยกสีนี้ได้ยาก (สองสีนี้มีความสว่างใกล้กัน ทำให้มีอัตราส่วนคอนทราสต์ต่ำกว่าเกณฑ์)
ให้เปลี่ยน `color` ของข้อความให้เป็นสีน้ำเงินเข้ม (`#003366`) เพื่อแก้ปัญหาทั้งสองนี้

# --hints--

ต้องเปลี่ยน`color` ของข้อความใน `button` ให้เป็นสีน้ำเงินเข้ม

```js
assert($("button").css("color") == "rgb(0, 51, 102)");
```

# --seed--

## --seed-contents--

```html
<head>
  <style>
    button {
      color: #33ff33;
      background-color: #ffff33;
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
      background-color: #ffff33;
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
