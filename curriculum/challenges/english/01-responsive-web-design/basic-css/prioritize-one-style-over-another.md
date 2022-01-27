---
id: bad87fee1348bd9aedf08756
title: Prioritize One Style Over Another
challengeType: 0
videoUrl: 'https://scrimba.com/c/cZ8wnHv'
forumTopicId: 18258
dashedName: prioritize-one-style-over-another
---

# --description--

บางครั้ง ค่าของ style ของ HTML element อาจขัดแย้งกัน

เช่น เราไม่สามารถกำหนดให้ `h1` มีค่าของ `color` เป็น `green` หรือ `pink` พร้อมๆกันได้

เรามาลองสร้างคลาสที่เปลี่ยน `color` เป็น `pink` กัน 
แล้วมาดูกันว่าข้อความจะใช้สีชมพูจากตลาสใหม่ของเรา หรือว่าจะใช้ `color: green;` จาก CSS property ของ `body`

# --instructions--

ให้สร้าง CSS class ที่ชื่อ `pink-text` เพื่อทำให้สีของข้อความเป็นสีชมพู

และให้กำหนดคลาสของ `h1` element เป็น `pink-text`

# --hints--

`h1` element ต้องมีคลาสเป็น `pink-text`

```js
assert($('h1').hasClass('pink-text'));
```

แท็ก `<style>` ต้องมี CSS class ชื่อ `pink-text` ที่มีค่าของ `color` เป็น `pink`

```js
assert(code.match(/\.pink-text\s*\{\s*color\s*:\s*.+\s*;?\s*\}/g));
```

ตัวอักษรใน `h1` ต้องเป็นสีชมพู

```js
assert($('h1').css('color') === 'rgb(255, 192, 203)');
```

# --seed--

## --seed-contents--

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

# --solutions--

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  .pink-text {
    color: pink;
  }
</style>
<h1 class="pink-text">Hello World!</h1>
```
