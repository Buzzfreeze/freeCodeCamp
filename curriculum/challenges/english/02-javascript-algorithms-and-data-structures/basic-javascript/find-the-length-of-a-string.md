---
id: bd7123c9c448eddfaeb5bdef
title: Find the Length of a String
challengeType: 1
videoUrl: 'https://scrimba.com/c/cvmqEAd'
forumTopicId: 18182
dashedName: find-the-length-of-a-string
---

# --description--

คุณสามารถหาความยาวของค่า `String` ได้โดยการเขียน `.length` หลังตัวแปร string หรือ string literal

```js
console.log("Alan Peter".length);
```

ค่า `10` ควรแสดงใน console

ยกตัวอย่างเช่น ถ้าเราสร้างตัวแปร `var firstName = "Ada"` เราสามารถหาความยาวของ string `Ada` โดยใช้ `firstName.length` 


# --instructions--

จงใช้ `.length` property ในการนับจำนวนตัวอักษรของตัวแปร `lastName` และกำหนดค่าให้กับ `lastNameLength`

# --hints--

คุณไม่ควรแก้ไขการประกาศตัวแปรในส่วน `// Setup`

```js
assert(
  code.match(/var lastNameLength = 0;/) &&
    code.match(/var lastName = "Lovelace";/)
);
```

`lastNameLength` ควรเท่ากับ 8

```js
assert(typeof lastNameLength !== 'undefined' && lastNameLength === 8);
```

คุณควรได้ความยาว `lastName` โดยใช้ `.length` เช่น `lastName.length`

```js
assert(code.match(/=\s*lastName\.length/g) && !code.match(/lastName\s*=\s*8/));
```

# --seed--

## --seed-contents--

```js
// Setup
var lastNameLength = 0;
var lastName = "Lovelace";

// Only change code below this line

lastNameLength = lastName;
```

# --solutions--

```js
var lastNameLength = 0;
var lastName = "Lovelace";
lastNameLength = lastName.length;
```
