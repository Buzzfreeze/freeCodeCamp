---
id: bd7123c9c549eddfaeb5bdef
title: Use Bracket Notation to Find the First Character in a String
challengeType: 1
videoUrl: 'https://scrimba.com/c/ca8JwhW'
forumTopicId: 18341
dashedName: use-bracket-notation-to-find-the-first-character-in-a-string
---

# --description--

# - <dfn>Bracket notation</dfn> เป็นวิธีอ้างอิงหรือรับค่าตัวอักษรที่ตำแหน่ง index ภายใน string

ภาษาโปรแกรมสมัยใหม่ส่วนใหญ่ เช่น JavaScript จะไม่เริ่มนับ 1 เหมือนที่มนุษย์นับ แต่จะเริ่มต้นที่ 0 ซึ่งเรียกว่า <dfn>Zero-based</dfn> indexing

ตัวอย่างเช่น อักขระที่ index 0 ในคำว่า `Charles` คือ `C` ดังนั้นหาก `var firstName = "Charles"` คุณสามารถรับค่าตัวอักษรตัวแรกของ string ได้โดยใช้ `firstName[0]`

ตัวอย่าง:

```js
var firstName = "Charles";
var firstLetter = firstName[0];
```

`firstLetter` ควรมีค่าเป็น string `C`

# --instructions--

จงใช้ bracket notation ในการหาตัวอักษรแรกของตัวแปร `lastName` และกำหนดค่าให้กับ `firstLetterOfLastName`

**Hint:** ลองดูตัวอย่างด้านบน ถ้าคุณติดปัญหา

# --hints--

ตัวแปร `firstLetterOfLastName` ควรมีค่า `L`

```js
assert(firstLetterOfLastName === 'L');
```

คุณควรใช้ bracket notation

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
// Setup
var firstLetterOfLastName = "";
var lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName; // Change this line
```

# --solutions--

```js
var firstLetterOfLastName = "";
var lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0];
```
