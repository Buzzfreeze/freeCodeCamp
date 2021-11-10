---
id: 587d7db3367417b2b2512b8e
title: Using the Test Method
challengeType: 1
forumTopicId: 301369
dashedName: using-the-test-method
---

# --description--

Regular expressions ใช้ในภาษา programming เพื่อค้นหาข้อความใน string โดยสร้าง pattern ที่ใช้หาข้อความที่ตรง (match) กับ pattern นั้น

ถ้าคุณต้องการค้นหาคำว่า `the` ใน string `The dog chased the cat` คุณสามารถใช้ regular expression `/the/` สังเกตว่า ไม่ต้องใช้ quote mark (เครื่องหมายคำพูด) ใน regular expression

JavaScript สามารถใช้งาน regexes ได้หลายวิธี วิธีนึงคือการทดสอบ regex โดยใช้ `.test()` method ซึ่ง `.test()` method นำ regex มาตรวจสอบกับ string (ซึ่งอยู่ภายในวงเล็บ) แล้วคืนค่า `true` หรือ `false` ขึ้นกับว่า pattern ของคุณพบใน string หรือไม่

```js
let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);
```

`test` method ในที่นี้คืนค่า `true`

# --instructions--

จงใช้ regex `myRegex` กับ string `myString` โดยใช้ `.test()` method

# --hints--

คุณควรใช้ `.test()` เพื่อทดสอบ regex

```js
assert(code.match(/myRegex.test\(\s*myString\s*\)/));
```

ผลลัพธ์ควรเป็น `true`

```js
assert(result === true);
```

# --seed--

## --seed-contents--

```js
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex; // Change this line
```

# --solutions--

```js
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line
```
