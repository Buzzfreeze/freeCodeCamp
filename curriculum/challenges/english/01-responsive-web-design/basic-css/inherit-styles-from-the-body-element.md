---
id: bad87fee1348bd9aedf08746
title: Inherit Styles from the Body Element
challengeType: 0
videoUrl: 'https://scrimba.com/c/c9bmdtR'
forumTopicId: 18204
dashedName: inherit-styles-from-the-body-element
---

# --description--

ตอนนี้เราได้พิสูจน์แล้วว่า HTML page ทุกหน้ามี `body` element อันหนึ่งและ `body` element นั้นสามารถถูกตกแต่งด้วย CSS

จงจำไว้ว่า คุณสามารถตกแต่ง `body` element ของคุณได้เหมือนกับ HTML element ตัวอื่น ๆ และ element ตัวอื่น ๆ ของคุณจะสืบถอด style ของ `body` element

# --instructions--

ขั้นแรก จงสร้าง `h1` element ที่มีข้อความเขียนว่ว `Hello World`

หลังจากนั้น เรามากำหนดให้ element ทั้งหมดที่อยู่ในหน้าเว็บของคุณมีสี `green` โดยการเพิ่ม `color: green;` ให้กับ style declaration ของ `body` element

สุดท้าย จงกำหนดให้ `body` element มี font-family เป็น `monospace` โดยการเพิ่ม `font-family: monospace;` ให้กับ style declaration ของ `body` element

# --hints--

คุณควรสร้าง `h1` element.

```js
assert($('h1').length > 0);
```

`h1` element ควรมีข้อความ `Hello World`

```js
assert(
  $('h1').length > 0 &&
    $('h1')
      .text()
      .match(/hello world/i)
);
```

`h1` element ควรมีแท็กปิด

```js
assert(
  code.match(/<\/h1>/g) &&
    code.match(/<h1/g) &&
    code.match(/<\/h1>/g).length === code.match(/<h1/g).length
);
```

`body` element ควรมี `color` property ที่เป็น `green`

```js
assert($('body').css('color') === 'rgb(0, 128, 0)');
```

`body` element ควรมี `font-family` property เป็น `monospace`.

```js
assert(
  $('body')
    .css('font-family')
    .match(/monospace/i)
);
```

`h1` element ควรจะ inherit (สืบถอด) ฟ้อนต์ `monospace` มาจาก `body` element

```js
assert(
  $('h1').length > 0 &&
    $('h1')
      .css('font-family')
      .match(/monospace/i)
);
```

`h1` element ควรจะ inherit (สืบถอด) สีเขียวมากจาก `body` element

```js
assert($('h1').length > 0 && $('h1').css('color') === 'rgb(0, 128, 0)');
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
