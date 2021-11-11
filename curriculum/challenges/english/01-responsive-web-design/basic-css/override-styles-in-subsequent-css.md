---
id: bad87fee1348bd9aedf04756
title: Override Styles in Subsequent CSS
challengeType: 0
videoUrl: 'https://scrimba.com/c/cGJDQug'
forumTopicId: 18253
dashedName: override-styles-in-subsequent-css
---

# --description--

`pink-text` class ได้เขียนทับ CSS declaration ของ `body` element ไปแล้ว!

พวกเราพึ่งพิสูจน์ได้ว่า class สามารถเขียนทับ CSS ของ `body` element ได้
ดังนั้น คำถามชวนคิดข้อต่อไปคือ มีอะไรที่เราสามารถทำเพื่อเขียนทับ `pink-text` class ของเราได้บ้าง?

# --instructions--

จงสร้าง CSS class อันใหม่ที่ชื่อ `blue-text` และจงกำหนดให้ element นี้มีสีน้ำเงิน
จงเช็คให้มั่นใจว่ามันอยู่ต่อจาก declaration ของ `pink-text` class 
จงใช้ `blue-text` class กับ `h1` element ด้วยกันกับ `pink-text` class, และเรามาดูกันว่าใครจะชนะ

การใส่ class attribute หลายอัน ๆ ให้กับ HTML element นั้นทำได้ด้วยช่องไฟช่องหนึ่งระหว่างพวกมันแบบนี้:

```html
class="class1 class2"
```

**Note:** มันไม่ใช่ปัญหาไม่ว่าลำดับของ class ที่ถูกลิสต์ไว้ใน HTML element จะเป็นยังไง.

อย่างไรก็ตาม ลำดับของ `class` declarations ใน `<style>` section เป็นสิ่งสำคัญ
declaration อันที่สองจะมีความสำคัญกว่าอันแรก เพราะ `.blue-text` นั้นถูกประกาศที่หลัง มันจะเขียนทับ attributes ของ `.pink-text`

# --hints--

`h1` element ควรมีคลาสชื่อ `pink-text`.

```js
assert($('h1').hasClass('pink-text'));
```

`h1` element ควรมีคลาสชื่อ `blue-text`.

```js
assert($('h1').hasClass('blue-text'));
```

ทั้ง `blue-text` และ `pink-text` ควรอยู่ใน `h1` element อันเดียวกัน

```js
assert($('.pink-text').hasClass('blue-text'));
```

`h1` element ควรเป็นสีน้ำเงิน

```js
assert($('h1').css('color') === 'rgb(0, 0, 255)');
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
</style>
<h1 class="pink-text">Hello World!</h1>
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
</style>
<h1 class="pink-text blue-text">Hello World!</h1>
```
