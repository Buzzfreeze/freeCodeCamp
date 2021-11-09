---
id: 587d7b83367417b2b2512b37
title: Understanding the Differences between the freeCodeCamp and Browser Console
challengeType: 1
forumTopicId: 301193
dashedName: understanding-the-differences-between-the-freecodecamp-and-browser-console
---

# --description--

คุณอาจสังเกตว่า แบบทดสอบของ freeCodeCamp มี console ของตัวเองด้วย ซึ่ง console นี้มีลักษณะต่างกับ browser console เล็กน้อย

มี methods จำนวนมากที่ใช้กับ `console` เพื่อแสดงผล เช่น `log`, `warn` และ `clear` แต่สำหรับ freeCodeCamp console จะแสดงข้อความ `log` เท่านั้น ในขณะที่ browser console จะแสดงได้ทุกข้อความ เมื่อคุณเปลี่ยนแปลงโค้ด console จะรันให้โดยอัตโนมัติและแสดง log ขึ้นมา และ freeCodeCamp console จะถูกเคลียร์ทุกครั้งที่รันโค้ด

# --instructions--

ขั้นตอนแรก ให้เปิด browser console เพื่อคุณจะได้เห็นหน้าแสดง log วิธีการคือ คลิกขวาที่ freeCodeCamp navigation bar ตรงด้านบนของหน้าจอ แล้วคลิก `inspect` จากนั้นคลิกที่ `console` tab ในหน้าจอ

แล้วใช้คำสั่ง `console.log` เพื่อแสดง log ของตัวแปร `output` จากนั้นให้ดู log ที่หน้า console ทั้งสอง แล้วใช้คำสั่ง `console.clear` เพื่อทำการเคลียร์ browser console จากนั้นให้ดูความแตกต่างในหน้า console ทั้งสอง

# --hints--

คุณควรใช้ `console.log()` เพื่อพิมพ์ `output` variable

```js
assert(__helpers.removeWhiteSpace(code).match(/console\.log\(output\)/));
```

คุณควรใช้ `console.clear()` เพื่อเคลียร์ browser console

```js
assert(
  __helpers
    .removeWhiteSpace(code)
    .match(/console.clear\(\)/)
);
```

คุณควรเคลียร์ console หลังจากแสดง log

```js
assert(
  __helpers
    .removeWhiteSpace(code)
    .match(/console\.log\(output\)[\s\S]*console.clear\(\)/)
);
```

# --seed--

## --seed-contents--

```js
let output = "Get this to show once in the freeCodeCamp console and not at all in the browser console";

```

# --solutions--

```js
let output = "Get this to show once in the freeCodeCamp console and not at all in the browser console";

console.log(output);
console.clear();
```
