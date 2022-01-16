---
id: 587d7b83367417b2b2512b37
title: Understanding the Differences between the freeCodeCamp and Browser Console
challengeType: 1
forumTopicId: 301193
dashedName: understanding-the-differences-between-the-freecodecamp-and-browser-console
---

# --description--

คุณอาจเห็นแล้วว่าเว็บของเรามี console ของตัวเองด้วย ซึ่ง console นี้จะต่างจาก console ของ browser เล็กน้อย

JavaScript มี method หลายตัวที่ใช้แสดงผลบน `console` ได้ เช่น `log`, `warn` และ `clear` แต่ console ของเราจะแสดงข้อความจากการ `log` เท่านั้น แต่ console ของ browser จะแสดงข้อความออกมาได้ทุกประเภท เมื่อคุณแก้ไขโค้ด console ของเราจะรันใหม่โดยอัตโนมัติและแสดง log ขึ้นมา และ console ของเราจะถูกเคลียร์ทุกครั้งที่โค้ดถูกรันใหม่

# --instructions--

ขั้นแรก ให้เปิด console browser เพื่อที่คุณจะได้เห็น log โดยจะเปิด console ได้จากการคลิกขวาที่แถบเมนู ตรงด้านบนของหน้าจอ แล้วคลิก `inspect` จากนั้นคลิกที่ tab `console` ในหน้าจอ (หรือกด `F12` ก็ได้)

แล้วใช้คำสั่ง `console.log(output)` ใน console ของเราเพื่อแสดง log ของตัวแปร `output` จากนั้นให้ดู log ที่หน้า console ทั้งสอง แล้วใช้คำสั่ง `console.clear()` เพื่อทำการล้าง console ของ browser จากนั้นให้ดูความแตกต่างของ console ทั้งสองหน้า

# --hints--

คุณควรใช้ `console.log()` เพื่อแสดงผลตัวแปร `output`

```js
assert(__helpers.removeWhiteSpace(code).match(/console\.log\(output\)/));
```

คุณควรใช้ `console.clear()` เพื่อเคลียร์ console ของ browser

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
