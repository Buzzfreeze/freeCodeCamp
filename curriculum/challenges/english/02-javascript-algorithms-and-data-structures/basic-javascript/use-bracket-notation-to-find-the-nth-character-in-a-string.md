---
id: bd7123c9c450eddfaeb5bdef
title: Use Bracket Notation to Find the Nth Character in a String
challengeType: 1
videoUrl: 'https://scrimba.com/c/cWPVJua'
forumTopicId: 18343
dashedName: use-bracket-notation-to-find-the-nth-character-in-a-string
---

# --description--

# - คุณยังสามารถใช้ <dfn>bracket notation</dfn> เพื่ออ้างอิงหรือรับค่าตัวอักษรที่ตำแหน่งอื่นภายใน string ได้

จำไว้ว่าคอมพิวเตอร์เริ่มนับจาก `0` ดังนั้นอักขระตัวแรกจึงเป็นอักขระตัวที่ศูนย์

ตัวอย่าง:

```js
var firstName = "Ada";
var secondLetterOfFirstName = firstName[1];
```

`secondLetterOfFirstName` ควรมีค่า string `d`

# --instructions--

มาลองกำหนด `thirdLetterOfLastName` ให้มีค่าเท่ากับอักขระตัวที่สามของตัวแปร `lastName` โดยใช้ bracket notation

**Hint:** ลองดูตัวอย่างด้านบน ถ้าคุณติดปัญหา

# --hints--

ตัวแปร `thirdLetterOfLastName` ควรมีค่า `v`

```js
assert(thirdLetterOfLastName === 'v');
```

คุณควรใช้ bracket notation

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
// Setup
var lastName = "Lovelace";

// Only change code below this line
var thirdLetterOfLastName = lastName; // Change this line
```

# --solutions--

```js
var lastName = "Lovelace";
var thirdLetterOfLastName = lastName[2];
```
