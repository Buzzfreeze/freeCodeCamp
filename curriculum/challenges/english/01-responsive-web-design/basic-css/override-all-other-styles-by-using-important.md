---
id: bad87fee1348bd9aedf07756
title: Override All Other Styles by using Important
challengeType: 0
videoUrl: 'https://scrimba.com/c/cm24rcp'
forumTopicId: 18249
dashedName: override-all-other-styles-by-using-important
---

# --description--

เย้! เราพึ่งพิสูจน์ได้ว่า inline style จะมีความสำคัญมากกว่าการประกาศ CSS ทั้งหมดใน `style` element

แต่เดี๋ยวก่อน ยังมีอีกวิธีที่จะเขียนทับ CSS ได้
โดยวิธีนี้จะถือว่ามีความสำคัญสูงสุด และจะเขียนทับ CSS ทุกรูปแบบที่เราได้เรียนมาแล้วเลย
แต่ก่อนที่เราจะได้ลองทำ เรามาคุยกันเรื่องสาเหตุที่จะต้องเขียนทับ CSS กันก่อนดีกว่า

หลายๆครั้ง คุณจะได้ใช้ CSS library
ซึ่ง library พวกนี้อาจจะบังเอิญเขียนทับ CSS ของคุณ ดังนั้นถ้าคุณอยากให้มั่นใจได้ว่า CSS ที่คุณได้เขียนไว้ให้กับ element ของคุณจะไม่ถูกเขียนทับ คุณจะต้องใช้ `!important`

กลับมาที่การประกาศคลาส `pink-text`
ยังจำได้ใช่ไหมว่าคลาส `pink-text` นั้นถูกเขียนได้ทับโดย คลาสที่ประกาศทีหลัง, CSS ที่ประกาศตาม id, และ inline style

# --instructions--

เรามาเพิ่มคีย์เวิร์ด `!important` ให้กับ `color` ของ `pink-text` element เพื่อทำให้มั่นใจได้ 100% ว่า `h1` element ของคุณจะเป็นสีชมพู

วิธีการใช้ `!important` จะเป็นแบบนี้:

```css
color: red !important;
```

# --hints--

`h1` element ต้องมีคลาสชื่อ `pink-text`

```js
assert($('h1').hasClass('pink-text'));
```

`h1` element ต้องมีคลาสชื่อ `blue-text`

```js
assert($('h1').hasClass('blue-text'));
```

`h1` element ต้องมี `id` เป็น `orange-text`

```js
assert($('h1').attr('id') === 'orange-text');
```

`h1` element ต้องมี inline style เป็น `color: white`

```js
assert(code.match(/<h1.*style/gi) && code.match(/<h1.*style.*color\s*?:/gi));
```

การประกาศคลาส `pink-text` ต้องมีคีย์เวิร์ด `!important` เพื่อเขียนทับการประกาศตัวอื่น ๆ

```js
assert(code.match(/\.pink-text\s*?\{[\s\S]*?color:.*pink.*!important\s*;?[^\.]*\}/g));
```

`h1` element ต้องมี `color` เป็น `pink`

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
    color: pink !important;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 id="orange-text" class="pink-text blue-text" style="color: white">Hello World!</h1>
```
