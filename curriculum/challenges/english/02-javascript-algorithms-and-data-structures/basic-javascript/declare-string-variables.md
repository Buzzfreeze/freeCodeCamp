---
id: bd7123c9c444eddfaeb5bdef
title: Declare String Variables
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2QvWU6'
forumTopicId: 17557
dashedName: declare-string-variables
---

# --description--

ก่อนหน้านี้ เราได้เขียนโค้ด

```js
var myName = "your name";
```

`"your name"` เรียกว่า <dfn>string</dfn> <dfn>literal</dfn> สาเหตุที่เรียกว่า string เพราะเป็นชุดตัวอักษรตั้งแต่ 0 ตัวขึ้นไป อยู่ในเครื่องหมายคำพูดที่เป็น single quotes หรือ double quotes

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
