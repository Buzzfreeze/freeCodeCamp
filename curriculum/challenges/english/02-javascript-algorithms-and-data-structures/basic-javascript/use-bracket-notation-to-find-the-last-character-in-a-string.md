---
id: bd7123c9c451eddfaeb5bdef
title: Use Bracket Notation to Find the Last Character in a String
challengeType: 1
videoUrl: 'https://scrimba.com/c/cBZQGcv'
forumTopicId: 18342
dashedName: use-bracket-notation-to-find-the-last-character-in-a-string
---

# --description--

ถ้าอยากได้ตัวอักษรตัวสุดท้ายของ string ให้เอาความยาวของ string มาลบหนึ่ง

เช่นถ้ามี `var firstName = "Ada"` จะหาตัวอักษรตัวสุดท้ายของ string ได้โดยใช้ `firstName[firstName.length - 1]`

ตัวอย่าง:

```js
var firstName = "Ada";
var lastLetter = firstName[firstName.length - 1];
```

ตัวแปร `lastLetter` จะเป็น string ซึ่งมีค่าเป็น `a`

# --instructions--

จงใช้ <dfn>bracket notation</dfn> เพื่อหาตัวอักษรตัวสุดท้ายในตัวแปร `lastName`

**Hint:** ถ้าติดปัญหาหรือไม่เข้าใจให้ลองดูที่ตัวอย่างด้านบน

# --hints--

ตัวแปร `lastLetterOfLastName` ต้องมีค่าเป็นตัวอักษร `e`

```js
assert(lastLetterOfLastName === 'e');
```

คุณควรใช้ `.length` เพื่อนำไปหาตัวอักษรสุดท้าย

```js
assert(code.match(/\.length/g).length > 0);
```

# --seed--

## --after-user-code--

```js
(function(v){return v;})(lastLetterOfLastName);
```

## --seed-contents--

```js
// เตรียมข้อมูล
var lastName = "Lovelace";

// แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
var lastLetterOfLastName = lastName; // แก้ไขโค้ดบรรทัดนี้
```

# --solutions--

```js
var lastName = "Lovelace";
var lastLetterOfLastName = lastName[lastName.length - 1];
```
