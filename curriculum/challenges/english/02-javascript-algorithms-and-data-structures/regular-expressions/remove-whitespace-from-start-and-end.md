---
id: 587d7dbb367417b2b2512bac
title: Remove Whitespace from Start and End
challengeType: 1
forumTopicId: 301362
dashedName: remove-whitespace-from-start-and-end
---

# --description--

หลายๆครั้งเราจะไม่อยากได้ whitespace ที่อยู่หน้าและหลัง string 
ปกติแล้วก่อนที่เราจะทำอะไรกับ string ก็ต้องนำ whitespace ที่อยู่หน้าและหลัง string ออกไปก่อน


# --instructions--

จงเขียน regex โดยใช้ string method ที่เหมาะสมในการนำ whitespace ที่อยู่หน้าและหลัง string ออก

**Note:** ถึงแม้ว่าเราจะมี method `String.prototype.trim()` ที่ใช้ในการลบ whitespace ที่อยู่หน้าและหลังออก แต่คุณต้องทำแบบทดสอบนี้โดยการใช้ regular expression นะ

# --hints--

`result` ต้องมีค่าเป็น string `Hello, World!`

```js
assert(result === 'Hello, World!');
```

ห้ามใช้ `String.prototype.trim()` method

```js
assert(!code.match(/\.?[\s\S]*?trim/));
```

ห้ามกำหนดค่า string ให้กับตัวแปร `result` โดยตรง

```js
assert(!code.match(/result\s*=\s*["'`].*?["'`]/));
```

ค่าของตัวแปร `hello` ต้องไม่เปลี่ยน

```js
assert(hello === '   Hello, World!  ');
```

# --seed--

## --seed-contents--

```js
let hello = "   Hello, World!  ";
let wsRegex = /change/; // แก้บรรทัดนี้
let result = hello; // แก้บรรทัดนี้
```

# --solutions--

```js
let hello = "   Hello, World!  ";
let wsRegex = /^(\s+)(.+[^\s])(\s+)$/;
let result = hello.replace(wsRegex, '$2');
```
