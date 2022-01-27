---
id: bad87fee1348bd9aedf08746
title: Inherit Styles from the Body Element
challengeType: 0
videoUrl: "https://scrimba.com/c/c9bmdtR"
forumTopicId: 18204
dashedName: inherit-styles-from-the-body-element
---

# --description--

ตอนนี้เราได้พิสูจน์แล้วว่า HTML page ทุกหน้ามี `body` element อยู่จริงๆ และเราสามารถตกแต่ง `body` element ด้วย CSS ได้ด้วย

ให้จำไว้ว่า คุณสามารถตกแต่ง `body` element ของคุณได้เหมือนกับ HTML element ทั่วไปเลย
และ element ที่อยู่ใน `body` จะได้รับ style ของ `body` element ไปด้วย

การส่งต่อ style จาก parent element สู่ child element แบบนี้ เรียกว่า inheritance

# --instructions--

ขั้นแรก ให้สร้าง `h1` element ที่มีข้อความด้านในเป็น `Hello World`

หลังจากนั้น เรามากำหนดให้ element ทั้งหมดที่อยู่ในหน้าเว็บของคุณมี `color` เป็น `green` โดยการเพิ่ม `color: green;` ในส่วนของ `body` ในแท็ก style

สุดท้าย ให้กำหนดให้ `body` มี font-family เป็น `monospace` โดยการเพิ่ม `font-family: monospace;` ในส่วนของ `body` ในแท็ก style

# --hints--

ต้องเพิ่ม `h1` element ลงในโค้ด

```js
assert($("h1").length > 0);
```

ข้อความใน `h1` element ต้องเป็น `Hello World`

```js
assert(
  $("h1").length > 0 &&
    $("h1")
      .text()
      .match(/hello world/i)
);
```

ต้องมีแท็กปิดของ `h1` element ด้วย

```js
assert(
  code.match(/<\/h1>/g) &&
    code.match(/<h1/g) &&
    code.match(/<\/h1>/g).length === code.match(/<h1/g).length
);
```

`body` ต้องมีค่าของ property `color` เป็น `green`

```js
assert($("body").css("color") === "rgb(0, 128, 0)");
```

`body` ต้องมีค่าของ property `font-family` เป็น `monospace`

```js
assert(
  $("body")
    .css("font-family")
    .match(/monospace/i)
);
```

`h1` ต้อง inherit `font-family:monospace` มาจาก `body`

```js
assert(
  $("h1").length > 0 &&
    $("h1")
      .css("font-family")
      .match(/monospace/i)
);
```

`h1` ต้อง inherit `color:green` มากจาก `body`

```js
assert($("h1").length > 0 && $("h1").css("color") === "rgb(0, 128, 0)");
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: black;
  }
</style>
```

# --solutions--

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
</style>
<h1>Hello World!</h1>
```
