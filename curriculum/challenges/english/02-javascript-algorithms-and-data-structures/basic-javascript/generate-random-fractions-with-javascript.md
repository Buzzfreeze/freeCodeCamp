---
id: cf1111c1c11feddfaeb9bdef
title: Generate Random Fractions with JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cyWJJs3'
forumTopicId: 18185
dashedName: generate-random-fractions-with-javascript
---

# --description--

ตัวเลขสุ่มมีประโยชน์สำหรับการสร้างการทำงานแบบสุ่่ม

JavaScript มี function `Math.random()` ที่สร้างเลขทศนิยมระหว่าง `0` (รวม) ถึง `1` (ไม่รวม) โดย `Math.random()` สามารถคืนค่า `0` แต่ไม่คืนค่า `1`

# - **หมายเหตุ:** เช่นเดียวกับ [Storing Values ​​with the Assignment Operator](/learn/javascript-algorithms-and-data-structures/basic-javascript/storing-values-with-the-assign-operator) การเรียกใช้ฟังก์ชันทั้งหมดจะถูกทำงานก่อนที่จะ `return` เพื่อให้เราสามารถ `return` ค่าของฟังก์ชัน `Math.random()` ได้

# --instructions--

จงแก้ไข `randomFraction` เพื่อคืนค่าตัวเลขสุ่ม แทนที่จะคืนค่า `0`

# --hints--

`randomFraction` ควรคืนค่า random number

```js
assert(typeof randomFraction() === 'number');
```

ตัวเลขที่คืนค่าด้วย `randomFraction` ควรเป็นทศนิยม

```js
assert((randomFraction() + '').match(/\./g));
```

คุณควรใช้  `Math.random` ในการสร้างเลขทศนิยมแบบสุ่ม

```js
assert(code.match(/Math\.random/g).length >= 0);
```

# --seed--

## --after-user-code--

```js
(function(){return randomFraction();})();
```

## --seed-contents--

```js
function randomFraction() {

  // Only change code below this line

  return 0;

  // Only change code above this line
}
```

# --solutions--

```js
function randomFraction() {
  return Math.random();
}
```
