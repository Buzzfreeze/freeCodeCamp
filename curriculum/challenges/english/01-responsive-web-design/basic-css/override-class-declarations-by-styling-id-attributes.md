---
id: bad87fee1348bd8aedf06756
title: Override Class Declarations by Styling ID Attributes
challengeType: 0
videoUrl: 'https://scrimba.com/c/cRkpDhB'
forumTopicId: 18251
dashedName: override-class-declarations-by-styling-id-attributes
---

# --description--

พวกเราพึ่งพิสูจน์ไปว่า browser อ่าน CSS จากบนลงล่างตามลำดับของ declaration
มันหมายความว่า ถ้าเกิดมีความแตกต่างกัน
browser จะใช้ CSS declaration ที่มาที่หลัง
สังเกตว่าถึงพวกเราจะใส่ `blue-text` ก่อน `pink-text` ที่คลาสของ `h1` element, browser ก็จะยังดูที่ลำดับของ declaration ไม่ใช่ลำดับของการเรียกใช้งานอยู่ดี

แต่มันไม่ได้จบเพียงเท่านี้
ยังมีวิธีอื่นที่ทำให้เราสามารถเขียนทับ (overwrite) CSS ได้อีก
คุณยังจำ id attributes ได้ไหม?

มาเขียนทับ `pink-text` และ `blue-text` class กันเถอะ
นอกจากนั้นจงทำให้ `h1` element เป็นสีส้มโดยการกำหนดให้ `h1` element เป็น id หนึ่งและตกแต่ง id นั้น

# --instructions--

จงกำหนดให้ `h1` element มี `id` attribute ทีชื่อ `orange-text`
จำไว้ว่า id styles จะเป็นอย่างนี้:

```html
<h1 id="orange-text"></h1>
```

พักเรื่อง `blue-text` และ `pink-text` class ที่ `h1` element ไว้ก่อน

ตอนนี้ จงสร้าง CSS declaration ให้กับ `orange-text` id ใน `style` element
นี่เป็นตัวอย่างของหน้าตาของมัน:

```css
#brown-text {
  color: brown;
}
```

**Note:** มันไม่เป็นปัญหาไม่ว่าคุณจะประกาศ CSS นี้ข้างบนหรือข้างล่าง `pink-text` class, เนื่องจาก `id` attribute จะมีความสำคัญกว่า

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

มันคือมี `h1` element แค่อันเดียวเท่านั้น

```js
assert($('h1').length === 1);
```

`orange-text` id ควรมี CSS declaration อันหนึ่ง

```js
assert(code.match(/#orange-text\s*{/gi));
```

`h1` should ไม่ควรมี `style` attributes ใด ๆ

```js
assert(!code.match(/<h1.*style.*>/gi));
```

`h1` element ควรเป็นสีส้ม

```js
assert($('h1').css('color') === 'rgb(255, 165, 0)');
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
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 class="pink-text blue-text">Hello World!</h1>
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
  .blue-text {
    color: blue;
  }
  #orange-text {
    color: orange;
  }
</style>
<h1 id="orange-text" class="pink-text blue-text">Hello World!</h1>
```
