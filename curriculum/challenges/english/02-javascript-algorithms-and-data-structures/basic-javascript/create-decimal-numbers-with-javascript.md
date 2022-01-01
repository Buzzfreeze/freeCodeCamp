---
id: cf1391c1c11feddfaeb4bdef
title: Create Decimal Numbers with JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/ca8GEuW'
forumTopicId: 16826
dashedName: create-decimal-numbers-with-javascript
---

# --description--

เราสามารถเก็บตัวเลขทศนิยมไว้ในตัวแปรได้เช่นกัน โดยตัวเลขทศนิยมอาจถูกเรียกว่าเป็นตัวเลข <dfn>floating point</dfn> หรือ <dfn>floats</dfn> ก็ได้

**หมายเหตุ:** จำนวนจริงบางจำนวนจะไม่สามารถแสดงเป็น <dfn>floating point</dfn> ได้อย่างถูกต้อง ซึ่งอาจทำให้เกิดข้อผิดพลาดในการปัดเศษได้ [อ่านรายละเอียดได้ที่นี่](https://en.wikipedia.org/wiki/Floating-point_arithmetic#Accuracy_problems)

# --instructions--

จงสร้างตัวแปร `myDecimal` และกำหนดค่าเป็นเลขที่มีเศษทศนิยม (เช่น `5.7`)

# --hints--

ตัวแปร `myDecimal` ควรเป็นตัวเลข 


```js
assert(typeof myDecimal === 'number');
```

ตัวแปร `myDecimal` ควรมีเศษทศนิยม

```js
assert(myDecimal % 1 != 0);
```

# --seed--

## --after-user-code--

```js
(function(){if(typeof myDecimal !== "undefined"){return myDecimal;}})();
```

## --seed-contents--

```js
var ourDecimal = 5.7;

// แก้ไขโค้ดใต้บรรทัดนี้เท่านัั้น
```

# --solutions--

```js
var myDecimal = 9.9;
```
