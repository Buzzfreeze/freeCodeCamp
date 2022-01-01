---
id: 587d7db3367417b2b2512b8e
title: Using the Test Method
challengeType: 1
forumTopicId: 301369
dashedName: using-the-test-method
---

# --description--

เราใช้ regular expression (regex) ในการเขียนโปรแกรมเพื่อหาข้อความใน string โดยสร้าง pattern ที่ใช้หาข้อความที่ตรงกับ pattern นั้น

เช่น ถ้าเราอยากหาคำว่า `the` ใน string `The dog chased the cat` เราจะใช้ regex `/the/` เพื่อหาได้ จะเห็นว่าใน regex เราไม่ต้องใช้ quote (`""` หรือ `''`) ก็ได้

เราใช้ regex ใน JavaScript ได้หลายวิธี วิธีนึงคือการเช็ค regex โดยใช้ method `.test()` ซึ่ง method `.test()` จะนำ regex มาเช็คกับ string (ที่อยู่ในวงเล็บ) แล้วคืนค่า `true` ถ้าเจอว่ามี pattern ของเราใน string (การที่ regex เจอ pattern ของเราใน string จะเรียกว่าการ `match`) และคืนค่าเป็น `false` ถ้าไม่เจอ

```js
let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);
```

ในตัวอย่างด้านบน method `test` จะคืนค่าเป็น `true`

# --instructions--

จงใช้ regex `myRegex` กับ string `myString` โดยใช้ method `.test()`

# --hints--

เราควรใช้ `.test()` เพื่อเช็ค regex

```js
assert(code.match(/myRegex.test\(\s*myString\s*\)/));
```

ต้องได้ผลลัพธ์เป็น `true`

```js
assert(result === true);
```

# --seed--

## --seed-contents--

```js
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex; // แก้บรรทัดนี้
```

# --solutions--

```js
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // แก้บรรทัดนี้
```
