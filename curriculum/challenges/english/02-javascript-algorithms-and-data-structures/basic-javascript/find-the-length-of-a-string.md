---
id: bd7123c9c448eddfaeb5bdef
title: Find the Length of a String
challengeType: 1
videoUrl: 'https://scrimba.com/c/cvmqEAd'
forumTopicId: 18182
dashedName: find-the-length-of-a-string
---

# --description--

คุณหาความยาวของ `string` ได้โดยการพิมพ์ `.length` หลังตัวแปรที่เป็น string หรือเป็น string literal

```js
console.log("Alan Peter".length);
```

console จะแสดงผลเป็น `10`

เช่น ถ้าเราสร้างตัวแปร `var firstName = "Ada"` เราสามารถหาความยาวของ string `Ada` ได้โดยใช้ `firstName.length` 


# --instructions--

จงใช้ property `.length` ในการนับจำนวนตัวอักษรของตัวแปร `lastName` และนำไปกำหนดค่าให้กับตัวแปร `lastNameLength`

# --hints--

คุณไม่ควรแก้ไขการประกาศตัวแปรในส่วน `// เตรียมข้อมูล`

```js
assert(
  code.match(/var lastNameLength = 0;/) &&
    code.match(/var lastName = "Lovelace";/)
);
```

ตัวแปร `lastNameLength` ควรมีค่าเท่ากับ 8

```js
assert(typeof lastNameLength !== 'undefined' && lastNameLength === 8);
```

คุณต้องหาความยาวของตัวแปร `lastName` โดยใช้ `.length` เช่น `lastName.length`

```js
assert(code.match(/=\s*lastName\.length/g) && !code.match(/lastName\s*=\s*8/));
```

# --seed--

## --seed-contents--

```js
// เตรียมข้อมูล
var lastNameLength = 0;
var lastName = "Lovelace";

// แก้โค้ดใต้บรรทัดนี้เท่านั้น

lastNameLength = lastName;
```

# --solutions--

```js
var lastNameLength = 0;
var lastName = "Lovelace";
lastNameLength = lastName.length;
```
