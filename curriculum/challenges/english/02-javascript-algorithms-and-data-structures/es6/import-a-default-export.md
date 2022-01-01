---
id: 587d7b8d367417b2b2512b59
title: Import a Default Export
challengeType: 1
forumTopicId: 301205
dashedName: import-a-default-export
---

# --description--

ในบทเรียนที่แล้ว เราได้เรียนเรื่อง `export default` และการใช้งานไป แต่ในการ import ตัว default export เราต้องเปลี่ยน syntax `import` 
ในตัวอย่างด้านล่าง เรามี `add` เป็น default export ของไฟล์ `math_functions.js` แล้วเราจะ import ฟังก์ชันนี้ได้ตามนี้:

```js
import add from "./math_functions.js";
```

syntax ของการ import แบบนี้จะไม่ได้ครอบ `add` ปีกกา (`{}`) และ `add` เป็นแค่ชื่อตัวแปรสำหรับ default export ของไฟล์ `math_functions.js` ซึ่งการ default import นั้นเราสามารถตั้งชื่อตัวแปรเป็นชื่ออะไรก็ได้

# --instructions--

ในโค้ดต่อไปนี้ จง import ตัว default export จากไฟล์ `math_functions.js` ซึ่งอยู่ในโฟลเดอร์เดียวกันกับไฟล์นี้ โดยให้ตั้งชื่อตัวแปรที่ import เข้ามาเป็น `subtract`

# --hints--

ต้อง import `subtract` จาก `math_functions.js` เข้ามาให้ถูกต้อง

```js
assert(code.match(/import\s+subtract\s+from\s+('|")\.\/math_functions\.js\1/g));
```

# --seed--

## --seed-contents--

```js
  
// แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น

subtract(7,4);
```

# --solutions--

```js
import subtract from "./math_functions.js";

subtract(7,4);
```
