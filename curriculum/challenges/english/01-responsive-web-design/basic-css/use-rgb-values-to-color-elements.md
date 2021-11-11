---
id: bad87fee1348bd9aede08718
title: Use RGB values to Color Elements
challengeType: 0
videoUrl: 'https://scrimba.com/c/cRkp2fr'
forumTopicId: 18369
dashedName: use-rgb-values-to-color-elements
---

# --description--

อีกทางหนึ่งที่จะแสดงค่าสีใน CSS คือการใช้ค่า `RGB` 

`RGB` value ของสีดำจะเป็นแบบนี้:

```css
rgb(0, 0, 0)
```

`RGB` value ของสีขาวจะเป็นแบบนี้:

```css
rgb(255, 255, 255)
```

แทนที่จะใช้เลขฐาน 16 เหมือนที่คุณใช้กับ hex code,  `RGB` ทำให้คุรสามารถระบุความสว่างของแต่ละสีได้ด้วยเลขที่อยู่ระหว่าง 0 and 255

ถ้าคุณลองคำนวณดู 2 หลักของสีสีหนึ่งจะเท่ากับ 16 x 16, ซึ่งเท่ากับ 256 ค่า
ดังนั้น `RGB` ซึ่งจะเริ่มนับจาก 0 จะมีจำนวนที่เป็นไปได้เท่ากับ hex code

นี่คือตัวอย่างของการเปลี่ยนพื้นหลังของ `body` ให้เป็นสีส้มโดยใช้ RGB code.

```css
body {
  background-color: rgb(255, 165, 0);
}
```

# --instructions--

จงแทนที่ hex code ในสีพื้นหลังของ `body` element ด้วยค่า RGB สำหรับสีดำ: `rgb(0, 0, 0)`

# --hints--

`body` element ควรมีพื้นหลังสีดำ

```js
assert($('body').css('background-color') === 'rgb(0, 0, 0)');
```

คุรควรใช้ `rgb` เพื่อทำให้ `body` element มีสีพื้นหลังเป็นสีดำ

```js
assert(code.match(/rgb\s*\(\s*0\s*,\s*0\s*,\s*0\s*\)/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: #F00;
  }
</style>
```

# --solutions--

```html
<style>
  body {
    background-color: rgb(0, 0, 0);
  }
</style>
```
