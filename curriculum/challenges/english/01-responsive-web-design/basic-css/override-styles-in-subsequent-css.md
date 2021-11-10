---
id: bad87fee1348bd9aedf04756
title: Override Styles in Subsequent CSS
challengeType: 0
videoUrl: 'https://scrimba.com/c/cGJDQug'
forumTopicId: 18253
dashedName: override-styles-in-subsequent-css
---

# --description--

`pink-text` class ได้เขียนทับ CSS declaration ของ `body` element!

พวกเราพึ่งพิสูจน์ว่า class สามารถเขียนทับ  CSS ของ `body` element
ดังนั้น คำถามช่วงคิดข้อต่อไปคือ มีอะไรที่เราสามารถทำเพื่อเขียนทับ `pink-text` class ของเราได้บ้าง?

# --instructions--

จงสร้าง CSS class อันใหม่ที่ชื่อ  `blue-text` และจงกำหนดให้ element นี้มีสีฟ้า
จงเช็คให้มั่นใจว่ามันอยู่ต่อจาก declaration ของ `pink-text` class 
Apply the `blue-text` class to your `h1` element in addition to your `pink-text` class, and let's see which one wins.

การใส่ class attribute หลายอัน ๆ ให้กับ HTML element นั้นทำได้ด้วยช่องไฟช่องหนึ่งระหว่างพวกมันแบบนี้:

```html
class="class1 class2"
```

**Note:** มันไม่ใช่ปัญหาไม่ว่าลำดับของ class ที่ถูกลิสต์ไว้ใน HTML element จะเป็นยังไง.

อย่างไรก็ตาม ลำดับของ `class` declarations ใน `<style>` section เป้นสิ่งสำคัญ
declaration อันที่สองจะมีความสำคัญก่อนอันแรก เพราะ `.blue-text` นั้นถูกประาศที่หลัง มันคือเขียนทับ attributes ของ `.pink-text`

# --hints--

`h1` elementควรมี class `pink-text`.

```js
assert($('h1').hasClass('pink-text'));
```

Your `h1` element should have the class `blue-text`.

```js
assert($('h1').hasClass('blue-text'));
```

Both `blue-text` and `pink-text` should belong to the same `h1` element.

```js
assert($('.pink-text').hasClass('blue-text'));
```

Your `h1` element should be blue.

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
