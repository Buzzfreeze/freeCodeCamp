---
id: 587d7b8d367417b2b2512b59
title: Import a Default Export
challengeType: 1
forumTopicId: 301205
dashedName: import-a-default-export
---

# --description--

ในบทเรียนที่แล้ว คุณได้เรียนรู้เกี่ยวกับ `export default` และการใช้งาน อย่างไรก็ตาม ในการนำเข้า default export คุณต้องใช้ syntax `import` ที่ต่างออกไป ในตัวอย่างต่อไปนี้ `add` คือ default export ของไฟล์ `math_functions.js` นี่คือวิธีการนำเข้า:

```js
import add from "./math_functions.js";
```

syntax มีความต่างกันที่เดียว กล่าวคือ ค่า import `add` ไม่ได้ล้อมรอบด้วยวงเล็บปีกกา (`{}`) แต่ `add` เป็นเพียงชื่อตัวแปรสำหรับ default export ของไฟล์ `math_functions.js` คุณสามารถใช้ชื่อใดก็ได้ที่นี่เมื่อนำเข้า default

# --instructions--

ในโค้ดต่อไปนี้ จง import default export จากไฟล์ `math_functions.js` ซึ่งอยู่ในไดเรกทอรีเดียวกันกับไฟล์นี้ โดยให้ตั้งชื่อการนำเข้าเป็น `subtract`

# --hints--

คุณควร import `subtract` จาก `math_functions.js` อย่างเหมาะสม

```js
assert(code.match(/import\s+subtract\s+from\s+('|")\.\/math_functions\.js\1/g));
```

# --seed--

## --seed-contents--

```js
  
// Only change code above this line

subtract(7,4);
```

# --solutions--

```js
import subtract from "./math_functions.js";

subtract(7,4);
```
