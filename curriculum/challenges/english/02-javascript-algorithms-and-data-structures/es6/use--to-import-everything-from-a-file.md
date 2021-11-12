---
id: 587d7b8c367417b2b2512b57
title: Use * to Import Everything from a File
challengeType: 1
forumTopicId: 301210
dashedName: use--to-import-everything-from-a-file
---

# --description--

สมมติว่าคุณมีไฟล์และต้องการนำเข้าเนื้อหาทั้งหมดไปยังไฟล์ปัจจุบัน สามารถทำได้ด้วย syntax `import * as` ต่อไปนี้คือตัวอย่างที่นำเข้าเนื้อหาของไฟล์ชื่อ `math_functions.js` ไปยังไฟล์ในไดเร็กทอรีเดียวกัน:

```js
import * as myMathModule from "./math_functions.js";
```

คำสั่ง `import` ข้างต้น จะสร้าง object ชื่อว่า `myMathModule` นี่เป็นเพียงชื่อตัวแปร คุณสามารถตั้งชื่ออะไรก็ได้ object จะมีการส่งออกทุกอย่างในนั้นจาก `math_functions.js` ดังนั้นคุณจะสามารถเข้าถึงฟังก์ชันต่างๆ ได้เหมือนกับที่คุณทำกับ object property อื่นๆ นี่เป็นวิธีที่คุณสามารถใช้ฟังก์ชัน `add` และ `subtract` ที่ import ได้ด้วยวิธีต่อไปนี้

```js
myMathModule.add(2,3);
myMathModule.subtract(5,3);
```

# --instructions--

โค้ดในไฟล์นี้ต้องการเนื้อหาของไฟล์: `string_functions.js` ซึ่งอยู่ในไดเรกทอรีเดียวกันกับไฟล์ปัจจุบัน จงใช้ syntax `import * as` เพื่อ import ทุกอย่างจากไฟล์ไปยัง object ชื่อ `stringFunctions`

# --hints--

โค้ดของคุณควรใช้ syntax `import * as` อย่างเหมาะสม

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

// Only change code above this line

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");
```

# --solutions--

```js
import * as stringFunctions from "./string_functions.js";

// add code above this line
stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");
```
