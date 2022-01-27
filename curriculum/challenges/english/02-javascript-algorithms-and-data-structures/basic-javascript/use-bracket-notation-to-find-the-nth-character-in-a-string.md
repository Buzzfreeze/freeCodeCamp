---
id: bd7123c9c450eddfaeb5bdef
title: Use Bracket Notation to Find the Nth Character in a String
challengeType: 1
videoUrl: 'https://scrimba.com/c/cWPVJua'
forumTopicId: 18343
dashedName: use-bracket-notation-to-find-the-nth-character-in-a-string
---

# --description--

คุณยังสามารถใช้ <dfn>bracket notation</dfn> เพื่ออ้างอิงหรือรับค่าตัวอักษรที่ตำแหน่งอื่นภายใน string ได้

จำได้ใช่ไหมว่าคอมพิวเตอร์จะเริ่มนับตำแหน่งจาก `0` ดังนั้นตัวอักษรตัวแรกจึงนับเป็นตัวอัษรที่ตำแหน่งศูนย์

ตัวอย่าง:

```js
var firstName = "Ada";
var secondLetterOfFirstName = firstName[1];
```

ตัวแปร `secondLetterOfFirstName` จะเป็น string ซึ่งมีค่าเป็น `d`

# --instructions--

มาลองกำหนดค่าของตัวแปร `thirdLetterOfLastName` ให้มีค่าเท่ากับตัวอักษรตัวที่สามของตัวแปร `lastName` โดยใช้ bracket notation

**Hint:** ถ้าติดปัญหาหรือไม่เข้าใจให้ลองดูที่ตัวอย่างด้านบน

# --hints--

ตัวแปร `thirdLetterOfLastName` ต้องมีค่าเป็น `v`

```js
assert(thirdLetterOfLastName === 'v');
```

ต้องใช้ bracket notation

```js
assert(code.match(/thirdLetterOfLastName\s*?=\s*?lastName\[.*?\]/));
```

# --seed--

## --after-user-code--

```js
(function(v){return v;})(thirdLetterOfLastName);
```

## --seed-contents--

```js
// เตรียมข้อมูล
var lastName = "Lovelace";

// แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
var thirdLetterOfLastName = lastName; // แก้ไขบรรทัดนี้
```

# --solutions--

```js
var lastName = "Lovelace";
var thirdLetterOfLastName = lastName[2];
```
