---
id: 587d7b8c367417b2b2512b55
title: Reuse JavaScript Code Using import
challengeType: 1
forumTopicId: 301208
dashedName: reuse-javascript-code-using-import
---

# --description--

`import` ให้คุณเลือกว่าจะโหลดส่วนใดของไฟล์ หรือโมดูล ในบทเรียนที่แล้ว แสดงตัวอย่างที่ export `add` จากไฟล์ `math_functions.js` ต่อไปนี้คือวิธี นำเข้า (import) เพื่อใช้ในไฟล์อื่น:

```js
import { add } from './math_functions.js';
```

คำสั่ง `import` จะค้นหา `add` ใน `math_functions.js` และนำเข้าเฉพาะฟังก์ชันที่คุณต้องใช้ และไม่สนใจส่วนที่เหลือ โดย `./` บอกคำสั่ง import ให้ค้นหาไฟล์ `math_functions.js` ในโฟลเดอร์เดียวกันกับไฟล์ปัจจุบัน อย่างไรก็ตาม relative file path (`./`) และนามสกุลไฟล์ (`.js`) จำเป็นต้องกำหนด เมื่อใช้ import ในลักษณะนี้

คุณสามารถ import มากกว่าหนึ่งรายการจากไฟล์ โดยเพิ่มลงในคำสั่ง `import` ดังนี้:

```js
import { add, subtract } from './math_functions.js';
```

# --instructions--

จงเพิ่มคำสั่ง `import` ที่เหมาะสม ซึ่งจะทำให้ไฟล์ปัจจุบันใช้ฟังก์ชัน `uppercaseString` และ `lowercaseString` ที่คุณ export ออกมาในบทเรียนก่อนหน้านี้ได้ ฟังก์ชันเหล่านี้อยู่ในไฟล์ชื่อ `string_functions.js` ซึ่งอยู่ในไดเร็กทอรีเดียวกันกับไฟล์ปัจจุบัน

# --hints--

คุณควร import `uppercaseString` 

```js
assert(
  code.match(
    /import\s*{\s*(uppercaseString[^}]*|[^,]*,\s*uppercaseString\s*)}\s+from\s+('|")\.\/string_functions\.js\2/g
  )
);
```

คุณควร import `lowercaseString` 

```js
assert(
  code.match(
    /import\s*{\s*(lowercaseString[^}]*|[^,]*,\s*lowercaseString\s*)}\s+from\s+('|")\.\/string_functions\.js\2/g
  )
);
```

# --seed--

## --seed-contents--

```js
  
// Only change code above this line

uppercaseString("hello");
lowercaseString("WORLD!");
```

# --solutions--

```js
import { uppercaseString, lowercaseString } from './string_functions.js';

uppercaseString("hello");
lowercaseString("WORLD!");
```
