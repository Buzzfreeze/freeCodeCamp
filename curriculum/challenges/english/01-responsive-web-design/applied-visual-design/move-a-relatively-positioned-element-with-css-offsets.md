---
id: 587d781e367417b2b2512aca
title: Move a Relatively Positioned Element with CSS Offsets
challengeType: 0
videoUrl: 'https://scrimba.com/c/c9bQEA4'
forumTopicId: 301065
dashedName: move-a-relatively-positioned-element-with-css-offsets
---

# --description--

CSS offsets ของ `top` หรือ `bottom`,และ `left` หรือ `right` จะบอก browser ว่าควรเลื่อน item ออกมาไกลแค่ไหนโดยอิงจากตำแหน่งที่มันเคยอยู่มาก่อน ใน normal flow ของ documen
คุณสามารถวาง element ให้ห่างจากจุดที่กำหนดได้ โดยมันจะย้าย element ออกจากด้านอ้างอิงซึ่งเป็นด้านตรงข้าม
ตามที่คุณได้เห็นในแบบฝึกหัดที่แล้ว การใช้ `top` offset จะเลื่อน `h2` มาข้างล่าง
เช่นเดียวกัน การใช้ `left` offset จะเลื่อน item ที่ทางขวา

# --instructions--

จงใช้ CSS offsets เพื่อเลื่อน `h2` ไปทางขวา 15 pixels และขึ้นไปอีก 10 pixel

# --hints--

คุณควรใช้ CSS offset เพื่อกำหนดตำแหน่งโดยการอิงจากตำแหน่งเดิมของ `h2` ซึ่งกำหนดให้ขึ้นไปด้านบน 10px
หรือก็คือจงเลื่อนมาออกจาก `bottom` ของตำแหน่งที่มันเคยอยู่มา 10 px

```js
assert($('h2').css('bottom') == '10px');
```

คุณควรใช้ CSS offset เพื่อกำหนดตำแหน่งโดยการอิงจากตำแหน่งเดิมของ `h2` ซึ่งกำหนดให้ไปทางขวา 15px
หรือก็คือเลื่อนจาก `left` ของตำแหน่งที่มันเคยอยู่มา 15 px

```js
assert($('h2').css('left') == '15px');
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
