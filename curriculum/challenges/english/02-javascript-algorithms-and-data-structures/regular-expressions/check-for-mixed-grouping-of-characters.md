---
id: 5c3dda8b4d8df89bea71600f
title: Check For Mixed Grouping of Characters
challengeType: 1
forumTopicId: 301339
dashedName: check-for-mixed-grouping-of-characters
---

# --description--

ถ้าเราอยากใช้ Regular Expression เพื่อเช็คกลุ่มอักษรที่วางเรียงกันอยู่ เราจะใช้วงเล็บ `()` ในการเช็ค

เช่น ถ้าเราอยากหาคำว่า `Penguin` หรือ `Pumpkin` ใน string เราจะใช้ regex `/P(engu|umpk)in/g` ได้

แล้วเราก็จะดูได้ว่า match หรือไม่โดยใช้ method `test()` เหมือนเดิม

```js
let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
testRegex.test(testStr);
```

จากตัวอย่างด้านบน method `test` จะคืนค่ามาเป็น `true`

# --instructions--

ให้เปลี่ยน regex ให้ match ทั้งชื่อ `Franklin Roosevelt` และ `Eleanor Roosevelt` แบบ case sensitive โดยจะอนุญาตให้มีชื่อกลางได้

แล้วให้แก้โค้ด เพื่อให้ regex ที่คุณสร้าง เช็ค `myString` แล้วคืนค่า `true` หรือ `false` ตามผลลัพธ์ในการ match regex

# --hints--

เมื่อ `test` regex `myRegex` กับ string `Franklin D. Roosevelt` ต้องได้ค่าเป็น `true`

```js
myRegex.lastIndex = 0;
assert(myRegex.test('Franklin D. Roosevelt'));
```

เมื่อ `test` regex `myRegex` กับ string `Eleanor Roosevelt` ต้องได้ค่าเป็น `true`

```js
myRegex.lastIndex = 0;
assert(myRegex.test('Eleanor Roosevelt'));
```

เมื่อ `test` regex `myRegex` กับ string `Franklin Rosevelt`  ต้องได้ค่าเป็น`false`

```js
myRegex.lastIndex = 0;
assert(!myRegex.test('Franklin Rosevelt'));
```

เมื่อ `test` regex `myRegex` กับ string `Frank Roosevelt`  ต้องได้ค่าเป็น`false`

```js
myRegex.lastIndex = 0;
assert(!myRegex.test('Frank Roosevelt'));
```

ต้องใช้ method `.test()` เพื่อตรวจสอบ regex

```js
assert(code.match(/myRegex.test\(\s*myString\s*\)/));
```

`result` ต้องมีค่าเป็น `true`

```js
assert(result === true);
```

# --seed--

## --seed-contents--

```js
let myString = "Eleanor Roosevelt";
let myRegex = /False/; // แก้บรรทัดนี้
let result = false; // แก้บรรทัดนี้
// ถ้าผ่านบทเรียนนี้แล้วให้ลองเล่นกับโค้ดชุดนี้ดู เพื่อให้เข้าใจมากขึ้นว่าการใช้กลุ่มตัวอักษรทำงานอย่างไร
```

# --solutions--

```js
let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor).*Roosevelt/;
let result = myRegex.test(myString);
```
