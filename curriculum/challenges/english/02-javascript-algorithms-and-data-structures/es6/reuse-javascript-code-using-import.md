---
id: 587d7b8c367417b2b2512b55
title: Reuse JavaScript Code Using import
challengeType: 1
forumTopicId: 301208
dashedName: reuse-javascript-code-using-import
---

# --description--

การ `import` จะให้คุณเลือกว่าจะใช้ส่วนไหนของไฟล์ หรือโมดูลไหน จากตัวอย่างในบทเรียนที่แล้ว เราได้ export ฟังก์ชัน `add` จากไฟล์ `math_functions.js` แล้ว คราวนี้เราจะมาดูการ import ฟังก์ชันนั้นไปใช้ในไฟล์อื่นกัน:

```js
import { add } from './math_functions.js';
```

คำสั่ง `import` จะหาฟังก์ชัน `add` ใน `math_functions.js` และ import มาเฉพาะฟังก์ชันที่คุณต้องใช้ แล้วก็จะไม่สนใจส่วนที่เหลือ โดยการใช้ `./` จะบอกให้คำสั่ง import ให้ค้นหาไฟล์ `math_functions.js` ในโฟลเดอร์เดียวกันกับไฟล์ปัจจุบัน  
ถ้าเราใช้การ import ในรุปแบบนี้เราจำเป็นต้องระบุ relative file path (`./`) และนามสกุลไฟล์ (`.js`)

คุณสามารถ import ข้อมูลมากกว่าหนึ่งตัวจากไฟล์ได้ โดยเพิ่มลงในคำสั่ง `import` ตามตัวอย่างนี้:

```js
import { add, subtract } from './math_functions.js';
```

# --instructions--

ให้เขียนคำสั่ง `import` ให้ถูกต้อง เพื่อให้ไฟล์ปัจจุบันใช้ฟังก์ชัน `uppercaseString` และ `lowercaseString` ที่คุณ export ออกมาในบทเรียนก่อนหน้านี้ได้ ฟังก์ชันสองตัวนี้อยู่ในไฟล์ชื่อ `string_functions.js` ซึ่งอยู่ในโฟลเดอร์เดียวกันกับไฟล์ปัจจุบัน

# --hints--

ต้อง import `uppercaseString` 

```js
assert(
  code.match(
    /import\s*{\s*(uppercaseString[^}]*|[^,]*,\s*uppercaseString\s*)}\s+from\s+('|")\.\/string_functions\.js\2/g
  )
);
```

ต้อง import `lowercaseString` 

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
  
// แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น

uppercaseString("hello");
lowercaseString("WORLD!");
```

# --solutions--

```js
import { uppercaseString, lowercaseString } from './string_functions.js';

uppercaseString("hello");
lowercaseString("WORLD!");
```
