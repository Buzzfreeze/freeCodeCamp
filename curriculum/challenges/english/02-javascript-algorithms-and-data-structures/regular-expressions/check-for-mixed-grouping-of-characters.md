---
id: 5c3dda8b4d8df89bea71600f
title: Check For Mixed Grouping of Characters
challengeType: 1
forumTopicId: 301339
dashedName: check-for-mixed-grouping-of-characters
---

# --description--

บางกรณีเราต้องการเช็คกลุ่มของตัวอักษรด้วย Regular Expression ซึ่งสามารถทำได้ โดยการใช้วงเล็บ `()`

ถ้าคุณต้องการค้นหาคำว่า `Penguin` หรือ `Pumpkin` ใน string คุณสามารถใช้ Regular Expression: `/P(engu|umpk)in/g`

จากนั้น ตรวจสอบว่ากลุ่ม string ที่ต้องการหาอยู่ใน string ทดสอบหรือไม่ โดยการใช้ `test()` method

```js
let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
testRegex.test(testStr);
```

`test` method ในที่นี้ควรคืนค่า `true`

# --instructions--

จงปรับแก้ regex เพื่อให้ match กับชื่อ `Franklin Roosevelt` หรือ `Eleanor Roosevelt` แบบ case sensitive โดยให้มีชื่อกลางได้ (middle name)

จากนั้นให้ปรับแก้โค้ด เพื่อให้ regex ที่คุณสร้าง เช็ค `myString` แล้วคืนค่า `true` หรือ `false` ทั้งนี้ขึ้นกับ regex ว่า match หรือไม่

# --hints--

regex ของคุณ `myRegex` ควรคืนค่า `true` สำหรับ string `Franklin D. Roosevelt`

```js
myRegex.lastIndex = 0;
assert(myRegex.test('Franklin D. Roosevelt'));
```

regex ของคุณ `myRegex` ควรคืนค่า `true` สำหรับ string `Eleanor Roosevelt`

```js
myRegex.lastIndex = 0;
assert(myRegex.test('Eleanor Roosevelt'));
```

regex ของคุณ `myRegex` ควรคืนค่า `false` สำหรับ string `Franklin Rosevelt`

```js
myRegex.lastIndex = 0;
assert(!myRegex.test('Franklin Rosevelt'));
```

regex ของคุณ `myRegex` ควรคืนค่า `false` สำหรับ string `Frank Roosevelt`

```js
myRegex.lastIndex = 0;
assert(!myRegex.test('Frank Roosevelt'));
```

คุณควรใช้ `.test()` เพื่อทดสอบ regex

```js
assert(code.match(/myRegex.test\(\s*myString\s*\)/));
```

ผลลัพธ์ของคุณควรเป็น `true`

```js
assert(result === true);
```

# --seed--

## --seed-contents--

```js
let myString = "Eleanor Roosevelt";
let myRegex = /False/; // Change this line
let result = false; // Change this line
// After passing the challenge experiment with myString and see how the grouping works
```

# --solutions--

```js
let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor).*Roosevelt/;
let result = myRegex.test(myString);
```
