---
id: cf1391c1c11feddfaeb4bdef
title: Create Decimal Numbers with JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/ca8GEuW'
forumTopicId: 16826
dashedName: create-decimal-numbers-with-javascript
---

# --description--

เราสามารถเก็บตัวเลขทศนิยมไว้ในตัวแปรได้เช่นกัน ตัวเลขทศนิยมบางครั้งเรียกว่าตัวเลข <dfn>floating point</dfn> หรือ <dfn>floats</dfn>.

**หมายเหตุ:** ไม่ใช่จำนวนจริงทั้งหมดที่สามารถแสดง <dfn>floating point</dfn> ได้อย่างถูกต้อง ด้วยเหตุนี้อาจทำให้เกิดข้อผิดพลาดในการปัดเศษ [อ่านรายละเอียดที่นี่](https://en.wikipedia.org/wiki/Floating-point_arithmetic#Accuracy_problems)

# --instructions--

Create a variable `myDecimal` and give it a decimal value with a fractional part (e.g. `5.7`).

จงสร้างตัวแปร `myDecimal` และกำหนดเป็นเลขที่มีเศษทศนิยม (เช่น `5.7`)

# --hints--

`myDecimal` ควรเป็นตัวเลข 


```js
assert(typeof myDecimal === 'number');
```

`myDecimal` ควรมีทศนิยม

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

// Only change code below this line
```

# --solutions--

```js
var myDecimal = 9.9;
```
