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
มันหมายความว่า ถ้าเกิดมีความขัดแย้งกัน  browser จะใช้ CSS declaration ที่มาที่หลัง
สังเกตว่าถ้าพวกเราเพิ่ม `blue-text` ก่อน `pink-text` ไว้ใน `h1` element's classes, มันจะยังดูที่ลำดับของ declaration ไม่ใช่ลำดับของการใช้งาน 

แต่เราจะยังไม่จบกับมัน 
มันมีวิธีอื่นที่เราสามารถเขียนทับ CSS ได้. 
คุณยังจำ id attributes ได้ไหม?

มาเขียนทับ `pink-text` และ `blue-text` class กันเถอะ
นอกจากนั้นจงทำให้ `h1` element เป็นสีส้มโดยการกำหนดให้ `h1` element มี id หนึ่งและตกแต่ง id นั้น

# --instructions--

จงกำหนดให้ `h1` element มี `id` attribute ทีชื่อ `orange-text`. จำไว้ว่า id styles จะเป็นอย่างนี้:

```html
<h1 id="orange-text">
```

พอกับ `blue-text` และ `pink-text` class ที่ `h1` element

จงสร้าง CSS declaration ให้กับ `orange-text` id ใน `style` element
นี่เป็นตัวอย่างของหน้าตาของมัน:

```css
#brown-text {
  color: brown;
}
```

**Note:** มันไม่เป็นปัญหาไม่ว่าคุณจะประกาศ CSS นี้ข้างบนหรือข้างล่าง `pink-text` class, เนื่องจาก `id` attribute จะมาก่อนเสมอ

# --hints--

 `h1` element ควรมีคลาส `pink-text`.

```js
assert($('h1').hasClass('pink-text'));
```

Your `h1` element should have the class `blue-text`.

```js
assert($('h1').hasClass('blue-text'));
```

Your `h1` element should have the id of `orange-text`.

```js
assert($('h1').attr('id') === 'orange-text');
```

There should be only one `h1` element.

```js
assert($('h1').length === 1);
```

Your `orange-text` id should have a CSS declaration.

```js
assert(code.match(/#orange-text\s*{/gi));
```

Your `h1` should not have any `style` attributes.

```js
assert(!code.match(/<h1.*style.*>/gi));
```

Your `h1` element should be orange.

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
<h1 id="orange-text"  class="pink-text blue-text">Hello World!</h1>
```
