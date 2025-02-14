---
id: bd7123c9c444eddfaeb5bdef
title: Declare String Variables
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2QvWU6'
forumTopicId: 17557
dashedName: declare-string-variables
---

# --description--

ก่อนหน้านี้ เราได้ประกาศตัวแปรโดยใช้โค้ดด้านล่างนี้

```js
var myName = "your name";
```

`"your name"` เรียกว่า <dfn>string</dfn> <dfn>literal</dfn> โดย string literal (หรือเรียกสั้นๆ ว่า string) เป็นชุดตัวอักษรที่อยู่ในเครื่องหมายคำพูดที่เป็น single quotes (`''`) หรือ double quotes (`""`) ซึ่งชุดตัวอักษรจะมีความยาวได้ตั้งแต่ 0 ตัวอักษรขึ้นไป

# --instructions--

จงสร้างตัวแปร string 2 ตัว คือ `myFirstName` และ `myLastName` แล้วกำหนดค่าเป็นชื่อและนามสกุลของคุณตามลำดับ
# --hints--

`myFirstName` ควรเป็น string ที่มีอย่างน้อย 1 ตัวอักษร

```js
assert(
  (function () {
    if (
      typeof myFirstName !== 'undefined' &&
      typeof myFirstName === 'string' &&
      myFirstName.length > 0
    ) {
      return true;
    } else {
      return false;
    }
  })()
);
```

`myLastName` ควรเป็น string ที่มีอย่างน้อย 1 ตัวอักษร

```js
assert(
  (function () {
    if (
      typeof myLastName !== 'undefined' &&
      typeof myLastName === 'string' &&
      myLastName.length > 0
    ) {
      return true;
    } else {
      return false;
    }
  })()
);
```

# --seed--

## --after-user-code--

```js
if(typeof myFirstName !== "undefined" && typeof myLastName !== "undefined"){(function(){return myFirstName + ', ' + myLastName;})();}
```

## --seed-contents--

```js

```

# --solutions--

```js
var myFirstName = "Alan";
var myLastName = "Turing";
```
