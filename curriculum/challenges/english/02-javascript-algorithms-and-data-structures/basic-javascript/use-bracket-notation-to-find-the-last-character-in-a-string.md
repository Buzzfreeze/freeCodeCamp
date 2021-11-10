---
id: bd7123c9c451eddfaeb5bdef
title: Use Bracket Notation to Find the Last Character in a String
challengeType: 1
videoUrl: 'https://scrimba.com/c/cBZQGcv'
forumTopicId: 18342
dashedName: use-bracket-notation-to-find-the-last-character-in-a-string
---

# --description--

เพื่อให้ได้ตัวอักษรตัวสุดท้ายของ string คุณสามารถนำความยาวของ string มาลบด้วยหนึ่ง

ยกตัวอย่างเช่น ถ้า `var firstName = "Ada"` คุณสามารถหาตัวอักษรสุดท้ายของ string โดยใช้ `firstName[firstName.length - 1]`

ตัวอย่าง:

```js
var firstName = "Ada";
var lastLetter = firstName[firstName.length - 1];
```

`lastLetter` ควรมีค่า string `a`

# --instructions--

จงใช้ <dfn>bracket notation</dfn> เพื่อหาอักขระสุดท้ายในตัวแปร `lastName`

**Hint:** ลองดูตัวอย่างด้านบน ถ้าคุณติดปัญหา

# --hints--

`lastLetterOfLastName` ควรเป็นตัวอักษร `e`

```js
assert(lastLetterOfLastName === 'e');
```

คุณควรใช้ `.length` เพื่อให้ได้ตัวอักษรสุดท้าย

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
// Setup
var lastName = "Lovelace";

// Only change code below this line
var lastLetterOfLastName = lastName; // Change this line
```

# --solutions--

```js
var lastName = "Lovelace";
var lastLetterOfLastName = lastName[lastName.length - 1];
```
