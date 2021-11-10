---
id: 587d7dbb367417b2b2512bac
title: Remove Whitespace from Start and End
challengeType: 1
forumTopicId: 301362
dashedName: remove-whitespace-from-start-and-end
---

# --description--

บางครั้ง whitespace ที่อยู่รอบๆ string ก็เป็นสิ่งที่เราไม่ต้องการ ตามปกติแล้ว ก่อนที่เราจะทำอะไรกับ string ก็ต้องนำ whitespace ที่อยู่หน้าและหลัง string ออกไปก่อน


# --instructions--

จงเขียน regex และใช้ string methods ที่เหมาะสมในการนำ whitespace ที่อยู่หน้าและท้าย string ออก

**Note:** แม้ว่า `String.prototype.trim()` method สามารถลบ whitespace ตามที่เราต้องการได้ แต่คุณต้องทำแบบทดสอบนี้โดยการใช้ regular expressions

# --hints--

`result` ควรเท่ากับ string `Hello, World!`

```js
assert(result === 'Hello, World!');
```

คุณไม่ควรใช้ `String.prototype.trim()` method

```js
assert(!code.match(/\.?[\s\S]*?trim/));
```

ตัวแปร `result` ไม่ควรกำหนดค่า string โดยตรง

```js
assert(!code.match(/result\s*=\s*["'`].*?["'`]/));
```

ค่าของตัวแปร `hello` ไม่ควรเปลี่ยน

```js
assert(hello === '   Hello, World!  ');
```

# --seed--

## --seed-contents--

```js
let hello = "   Hello, World!  ";
let wsRegex = /change/; // Change this line
let result = hello; // Change this line
```

# --solutions--

```js
let hello = "   Hello, World!  ";
let wsRegex = /^(\s+)(.+[^\s])(\s+)$/;
let result = hello.replace(wsRegex, '$2');
```
