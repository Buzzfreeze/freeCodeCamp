---
id: 587d7b8c367417b2b2512b57
title: Use * to Import Everything from a File
challengeType: 1
forumTopicId: 301210
dashedName: use--to-import-everything-from-a-file
---

# --description--

สมมติว่าคุณมีไฟล์และต้องการ import ข้อมูลทั้งหมดเข้ามาในไฟล์ปัจจุบัน จะทำได้โดยใช้ syntax `import * as`
ลองดูตัวอย่างการ import ข้อมูลจากไฟล์ `math_functions.js` ที่อยู่ในโฟล์เดอร์เดียวกัน:

```js
import * as myMathModule from "./math_functions.js";
```

คำสั่ง `import` ด้านบน จะสร้าง object ที่ชื่อว่า `myMathModule` ซึ่ง `myMathModule` นี้เป็นแค่ชื่อตัวแปร เราสามารถจะตั้งเป็นชื่ออะไรก็ได้
object `myMathModule` นี้จะมีข้อมูลทุกอย่างที่ export จาก `math_functions.js` มา ทำให้เราเข้าถึงฟังก์ชันต่างๆ ของ `math_functions.js` ได้จาก `myMathModule` เหมือนกับเวลาที่เราเข้าถึง property ของ object ทั่วๆไป 
เราจะใช้ฟังก์ชัน `add` และ `subtract` ที่ import เข้ามา ได้ในรูปแบบนี้:

```js
myMathModule.add(2,3);
myMathModule.subtract(5,3);
```

# --instructions--

โค้ดในไฟล์นี้ต้องใช้ข้อมูลจากไฟล์: `string_functions.js` ซึ่งอยู่ในโฟลเดอร์เดียวกับไฟล์ปัจจุบัน ให้ใช้ syntax `import * as` เพื่อ import ทุกอย่างจากไฟล์เข้ามาใน object ชื่อ `stringFunctions`

# --hints--

ต้องใช้ syntax `import * as` ให้ถูกต้อง

```js
assert(
  code.match(
    /import\s*\*\s*as\s+stringFunctions\s+from\s*('|")\.\/string_functions\.js\1/g
  )
);
```

# --seed--

## --seed-contents--

```js

// แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");
```

# --solutions--

```js
import * as stringFunctions from "./string_functions.js";

// แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");
```
