---
id: bd7123c9c452eddfaeb5bdef
title: Use Bracket Notation to Find the Nth-to-Last Character in a String
challengeType: 1
videoUrl: 'https://scrimba.com/c/cw4vkh9'
forumTopicId: 18344
dashedName: use-bracket-notation-to-find-the-nth-to-last-character-in-a-string
---

# --description--

สามารถนำหลักการในการดึงตัวอักษรสุดท้ายของ string มาใช้กับการดึงตัวอักษรตัวที่ n นับจากตัวสุดท้ายได้ (Nth-to-last)

เช่น คุณสามารถดึงตัวอักษรตัวที่สามนับจากตัวสุดท้าย (third-to-last) ของ string `var firstName = "Augusta"` ได้ โดยใช้โค้ด `firstName[firstName.length - 3]`


ตัวอย่าง:

```js
var firstName = "Augusta";
var thirdToLastLetter = firstName[firstName.length - 3];
```

ตัวแปร `thirdToLastLetter` จะเป็น string ซึ่งมีค่าเป็น `s`

# --instructions--

จงใช้ <dfn>bracket notation</dfn> ในการหาตัวอักษรตัวที่สองนับจากตัวสุดท้ายในตัวแปร string ชื่อ `lastName`

**Hint:** ถ้าติดปัญหาหรือไม่เข้าใจให้ลองดูที่ตัวอย่างด้านบน

# --hints--

ตัวแปร `secondToLastLetterOfLastName` ต้องมีค่าเป็นตัวอักษร `c`

```js
assert(secondToLastLetterOfLastName === 'c');
```

คุณควรใช้ `.length` เพื่อหาตัวอักษรตัวที่สองนับจากตัวสุดท้าย

```js
assert(code.match(/\.length/g).length > 0);
```

# --seed--

## --after-user-code--

```js
(function(v){return v;})(secondToLastLetterOfLastName);
```

## --seed-contents--

```js
// เตรียมข้อมูล
var lastName = "Lovelace";

// แก้ไขโค้ดใต้บรรทัดนี้
var secondToLastLetterOfLastName = lastName; // แก้ไขบรรทัดนี้
```

# --solutions--

```js
var lastName = "Lovelace";
var secondToLastLetterOfLastName = lastName[lastName.length - 2];
```
