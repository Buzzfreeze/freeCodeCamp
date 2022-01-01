---
id: cf1111c1c11feddfaeb9bdef
title: Generate Random Fractions with JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cyWJJs3'
forumTopicId: 18185
dashedName: generate-random-fractions-with-javascript
---

# --description--

เราสามารถใช้การสุ่มตัวเลขเพื่อให้โค้ดทำงานแบบสุ่มได้

JavaScript มีฟังก์ชัน `Math.random()` ที่จะสุ่มเลขทศนิยมระหว่าง `0` ถึง `1` มาให้ โดยฟังก์ชัน `Math.random()` จะไม่สุ่มเลข 1 ออกมาให้ แต่สุ่มเลข 0 ออกมาได้

**หมายเหตุ:** ตามที่เราเรียนมาในเรื่อง [Storing Values ​​with the Assignment Operator](/learn/javascript-algorithms-and-data-structures/basic-javascript/storing-values-with-the-assign-operator) เมื่อเราเรียกใช้ฟังก์ชัน ฟังก์ชันจะทำงานให้เสร็จก่อนที่จะ `return` ค่ากลับมาให้เรา เราจึงสามารถ `return` ค่าของฟังก์ชัน `Math.random()` ได้

# --instructions--

จงแก้ไข `randomFraction` เพื่อคืนค่าตัวเลขที่สุ่มออกมาได้ แทนที่จะคืนค่า `0`

# --hints--

การเรียกใช้ฟังก์ชัน `randomFraction` ต้องคืนค่าออกมาเป็นตัวเลข

```js
assert(typeof randomFraction() === 'number');
```

การเรียกใช้ฟังก์ชัน `randomFraction` ต้องคืนค่าออกมาเป็นทศนิยม

```js
assert((randomFraction() + '').match(/\./g));
```

ต้องใช้ฟังก์ชัน `Math.random` เพื่อสุ่มเลข

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

  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น

  return 0;

  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
}
```

# --solutions--

```js
function randomFraction() {
  return Math.random();
}
```
