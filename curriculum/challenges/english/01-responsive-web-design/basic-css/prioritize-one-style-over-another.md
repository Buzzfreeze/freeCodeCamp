---
id: bad87fee1348bd9aedf08756
title: Prioritize One Style Over Another
challengeType: 0
videoUrl: 'https://scrimba.com/c/cZ8wnHv'
forumTopicId: 18258
dashedName: prioritize-one-style-over-another
---

# --description--

บางครั้ง HTML element ของคุณอาจจะได้รับ style หลาย ๆ แบบที่แตกต่างกับอีกอันหนึ่ง

ยกตัวอย่างเช่น, `h1` element ไม่สามารถสีทั้งสีเขียวและชมพูได้ในเวลาเดียวกัน

เรามาดูสิ่งที่จะเกิดขึ้นเมื่อเราสร้าง class ที่ทำให้ตัวอักษรเป็นสีชมพู และเพิ่มมันให้กับ element หนึ่ง
class ของเราจะเขียนทับ `color: green;` CSS property ของ `body` element หรือเปล่า ?

# --instructions--

จงสร้าง CSS class ที่ชื่อ `pink-text` ที่จะกำหนดให้ element มีสีชมพู

จงกำหนดให้ `h1` element มีคลาสที่ชื่อ`pink-text`.

# --hints--

`h1` element ควรมี class `pink-text`

```js
assert($('h1').hasClass('pink-text'));
```

Your `<style>` should have a `pink-text` CSS class that changes the `color`.

```js
assert(code.match(/\.pink-text\s*\{\s*color\s*:\s*.+\s*;?\s*\}/g));
```

Your `h1` element should be pink.

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
