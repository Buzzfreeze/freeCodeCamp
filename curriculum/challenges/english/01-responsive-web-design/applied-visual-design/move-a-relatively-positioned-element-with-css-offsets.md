---
id: 587d781e367417b2b2512aca
title: Move a Relatively Positioned Element with CSS Offsets
challengeType: 0
videoUrl: "https://scrimba.com/c/c9bQEA4"
forumTopicId: 301065
dashedName: move-a-relatively-positioned-element-with-css-offsets
---

# --description--

CSS offset ที่เป็น `top` หรือ `bottom` และ `left` หรือ `right` จะบอกเบราว์เซอร์ว่า ต้องขยับ element ออกมาไกลแค่ไหนโดยอิงจากตำแหน่งเดิมของ element นั้นใน normal flow ของหน้าเว็บ

ในการขยับ element นั้น จะเป็นการขยับออกจากจุดอ้างอิง เช่น การใช้ `top` จะเลื่อน `h2` ลง หรือการใช้ `left` จะเลื่อน `h2` ไปทางขวา

# --instructions--

ให้ใช้ CSS offset เพื่อเลื่อน `h2` ไปทางขวา 15 pixel และเลื่อนขึ้นไปอีก 10 pixel

# --hints--

ต้องใช้ CSS offset เพื่อกำหนดตำแหน่งโดยการอิงจากตำแหน่งเดิมของ `h2` โดยให้เลื่อน element ขึ้นไปด้านบน 10px ซึ่งจะทำได้โดยการกำหนดค่าของ `bottom` ให้เป็น 10 px

```js
assert($("h2").css("bottom") == "10px");
```

ต้องใช้ CSS offset เพื่อกำหนดตำแหน่งโดยการอิงจากตำแหน่งเดิมของ `h2` โดยให้เลื่อน element ไปด้านขวา 15px ซึ่งจะทำได้โดยการกำหนดค่าของ `left` ให้เป็น 15 px

```js
assert($("h2").css("left") == "15px");
```

# --seed--

## --seed-contents--

```html
<head>
  <style>
    h2 {
      position: relative;
    }
  </style>
</head>
<body>
  <h1>On Being Well-Positioned</h1>
  <h2>Move me!</h2>
  <p>I still think the h2 is where it normally sits.</p>
</body>
```

# --solutions--

```html
<head>
  <style>
    h2 {
      position: relative;
      left: 15px;
      bottom: 10px;
    }
  </style>
</head>
<body>
  <h1>On Being Well-Positioned</h1>
  <h2>Move me!</h2>
  <p>I still think the h2 is where it normally sits.</p>
</body>
```
