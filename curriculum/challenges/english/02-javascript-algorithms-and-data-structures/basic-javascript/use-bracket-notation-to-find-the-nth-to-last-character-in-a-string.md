---
id: bd7123c9c452eddfaeb5bdef
title: Use Bracket Notation to Find the Nth-to-Last Character in a String
challengeType: 1
videoUrl: 'https://scrimba.com/c/cw4vkh9'
forumTopicId: 18344
dashedName: use-bracket-notation-to-find-the-nth-to-last-character-in-a-string
---

# --description--

คุณสามารถนำหลักการดึงอักขระตัวสุดท้ายของ string มาใช้กับการดึงอักขระตัวที่ Nth-to-last (ตัวที่ Nth จากสุดท้าย) ได้

ตัวอย่างเช่น คุณสามารถดึงตัวอักษรที่สามจากตัวสุดท้าย (third-to-last) ของ string `var firstName = "Augusta"` โดยใช้  `firstName[firstName.length - 3]`


Example:

```js
var firstName = "Augusta";
var thirdToLastLetter = firstName[firstName.length - 3];
```

`thirdToLastLetter` ควรมีค่า string `s`

# --instructions--

จงใช้ <dfn>bracket notation</dfn> ในการหาตัวอักษรที่สองจากตัวสุดท้ายใน string `lastName`

**Hint:** ลองดูตัวอย่างด้านบน ถ้าคุณติดปัญหา

# --hints--

`secondToLastLetterOfLastName` ควรมีตัวอักษร `c`

```js
assert(secondToLastLetterOfLastName === 'c');
```

คุณควรใช้ `.length` เพื่อให้ได้ค่าตัวอักษรที่สองจากท้ายสุด

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
// Setup
var lastName = "Lovelace";

// Only change code below this line
var secondToLastLetterOfLastName = lastName; // Change this line
```

# --solutions--

```js
var lastName = "Lovelace";
var secondToLastLetterOfLastName = lastName[lastName.length - 2];
```
