---
id: bad87fee1348bd9aedf06756
title: Override Class Declarations with Inline Styles
challengeType: 0
videoUrl: 'https://scrimba.com/c/cGJDRha'
forumTopicId: 18252
dashedName: override-class-declarations-with-inline-styles
---

# --description--

และแล้วเราก็พิสูจน์ได้ว่า id declaration จะเขียนทับ class declaration, ไม่ว่ามันจถูกประกาศที่ไหนใน `style` element CSS ก็ตาม

ยังมีวิธีอื่นที่จะเขียนทับ CSS อยู่อีก
คุณยังจำ inline styles ได้ไหม?

# --instructions--

จงใช้ inline style เพื่อทำให้ `h1` element เป็นสีขาว
จงจำไว้ว่า inline styles มีหน้าตาเช่นนี้:

```html
<h1 style="color: green;"></h1>
```

ไม่ต้องสนใจ `blue-text` และ `pink-text` class ใน `h1` element.

# --hints--

`h1` element ควรมีคลาส `pink-text`.

```js
assert($('h1').hasClass('pink-text'));
```

`h1` element ควรมีคลาส `blue-text`.

```js
assert($('h1').hasClass('blue-text'));
```

`h1` element ควรมี id เป็น `orange-text`.

```js
assert($('h1').attr('id') === 'orange-text');
```

`h1` element ควรมี inline style อันหนึ่ง

```js
assert(document.querySelector('h1[style]'));
```

`h1` element ควรเป็นสีขาว

```js
assert($('h1').css('color') === 'rgb(255, 255, 255)');
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
  #orange-text {
    color: orange;
  }
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 id="orange-text" class="pink-text blue-text">Hello World!</h1>
```

# --solutions--

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  #orange-text {
    color: orange;
  }
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 id="orange-text" class="pink-text blue-text" style="color: white">Hello World!</h1>
```
