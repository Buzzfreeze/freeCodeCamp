---
id: bd7123c9c549eddfaeb5bdef
title: Use Bracket Notation to Find the First Character in a String
challengeType: 1
videoUrl: 'https://scrimba.com/c/ca8JwhW'
forumTopicId: 18341
dashedName: use-bracket-notation-to-find-the-first-character-in-a-string
---

# --description--

<dfn>Bracket notation</dfn> เป็นวิธีอ่านค่าตัวอักษรที่ตำแหน่ง (index) ที่ระบุของ string

ส่วนใหญ่แล้ว ภาษาในการเขียนโปรแกรมสมัยใหม่ เช่น JavaScript จะเริ่มนับตำแหน่งที่ 0 ซึ่งเรียกว่า <dfn>Zero-based</dfn> indexing ซึ่งจะต่างจากมนุษย์ที่ปกติเวลานับจะเริ่มจาก 1

ตัวอย่างเช่น ตัวอักษรที่ตำแหน่งที่ 0 ในคำว่า `Charles` คือ `C` ดังนั้นหาก `var firstName = "Charles"` คุณสามารถอ่านค่าตัวอักษรตัวแรกของ string ได้โดยใช้ `firstName[0]`

ตัวอย่าง:

```js
var firstName = "Charles";
var firstLetter = firstName[0];
```

ตัวแปร `firstLetter` จะเป็น string ซึ่งมีค่าเท่ากับ `C`

# --instructions--

จงใช้ bracket notation ในการหาตัวอักษรแรกของตัวแปร `lastName` และนำมากำหนดค่าให้กับตัวแปร `firstLetterOfLastName`

**Hint:** ถ้าเจอปัญหาหรือทำไม่ได้ ให้ลองดูที่ตัวอย่างด้านบน

# --hints--

ตัวแปร `firstLetterOfLastName` ควรมีค่าเป็น `L`

```js
assert(firstLetterOfLastName === 'L');
```

ต้องใช้ bracket notation

```js
assert(code.match(/firstLetterOfLastName\s*?=\s*?lastName\[.*?\]/));
```

# --seed--

## --after-user-code--

```js
(function(v){return v;})(firstLetterOfLastName);
```

## --seed-contents--

```js
// เตรียมข้อมูล
var firstLetterOfLastName = "";
var lastName = "Lovelace";

// แก้โค้ดใต้บรรทัดนี้เท่านั้น
firstLetterOfLastName = lastName; // แก้บรรทัดนี้
```

# --solutions--

```js
var firstLetterOfLastName = "";
var lastName = "Lovelace";

// แก้โค้ดใต้บรรทัดนี้เท่านั้น
firstLetterOfLastName = lastName[0];
```
