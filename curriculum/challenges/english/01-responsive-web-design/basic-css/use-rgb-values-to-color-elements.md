---
id: bad87fee1348bd9aede08718
title: Use RGB values to Color Elements
challengeType: 0
videoUrl: "https://scrimba.com/c/cRkp2fr"
forumTopicId: 18369
dashedName: use-rgb-values-to-color-elements
---

# --description--

อีกวิธีหนึ่งที่จะระบุสีใน CSS คือการใช้ค่า `RGB`

ค่า `RGB` ของสีดำจะเป็นแบบนี้:

```css
rgb(0, 0, 0)
```

ค่า `RGB` ของสีขาวจะเป็นแบบนี้:

```css
rgb(255, 255, 255)
```

แทนที่จะใช้เลขฐานสิบหก 6 หลักเหมือนที่คุณใช้กับ hex code

`RGB` จะใช้ระบุความสว่างของแต่ละสี โดยใช้เลขที่อยู่ระหว่าง 0 ถึง 255

ถ้าคุณลองคำนวณดู ใน hex code สีๆหนึ่งจะใช้เลขฐานสิบหก 2 ตัว ทำให้สีๆหนึ่งมีค่าทั้งหมด 16 x 16 ซึ่งเท่ากับ 256 ค่า
ดังนั้น `RGB` ซึ่งจะเริ่มนับจาก 0 ก็จะมีจำนวนสีเท่ากับ hex code

ลองดูตัวอย่างของการเปลี่ยนพื้นหลังของ `body` ให้เป็นสีส้มโดยใช้ RGB code

```css
body {
  background-color: rgb(255, 165, 0);
}
```

# --instructions--

ให้เปลี่ยน hex code ในสีพื้นหลังของ `body` element เป็น RGB ของสีดำ: `rgb(0, 0, 0)`

# --hints--

`body` element ควรมีพื้นหลังสีดำ

```js
assert($("body").css("background-color") === "rgb(0, 0, 0)");
```

ต้องใช้ `rgb` เพื่อทำให้ `body` element มีสีพื้นหลังเป็นสีดำ

```js
assert(code.match(/rgb\s*\(\s*0\s*,\s*0\s*,\s*0\s*\)/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: #f00;
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
