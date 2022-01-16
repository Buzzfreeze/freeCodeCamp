---
id: 587d7dab367417b2b2512b6f
title: Use the some Method to Check that Any Elements in an Array Meet a Criteria
challengeType: 1
forumTopicId: 301314
dashedName: use-the-some-method-to-check-that-any-elements-in-an-array-meet-a-criteria
---

# --description--

เราจะใช้ method `some` กับ array เพื่อดูว่ามี element ไหนใน array ผ่านเงื่อนไขที่เราระบุหรือไม่
ถ้ามี element ผ่านเงื่อนไข (ถึงจะแค่ element เดียวก็ตาม) ก็จะคืนค่า Boolean เป็น `true` แต่ถ้าไม่มี element ผ่านเงื่อนไขเลย ก็จะคืนค่าเป็น `false` แทน

ตัวอย่างด้านล่างเป็นโค้ดที่ดูว่า มี element ไหนใน array `numbers` ที่มีค่าน้อยกว่า 10 หรือไม่

```js
var numbers = [10, 50, 8, 220, 110, 11];
numbers.some(function(currentValue) {
  return currentValue < 10;
});
```

method `some` จะคืนค่าเป็น `true`

# --instructions--

จงใช้ method `some` ในฟังก์ชัน `checkPositive` เพื่อดูว่า มี element ไหนใน `arr` ที่มีค่าเป็นบวกหรือไม่ โดยฟังก์ชันนี้ควรคืนค่าเป็น Boolean

# --hints--

โค้ดของคุณควรใช้ `some` method

```js
assert(code.match(/\.some/g));
```

การเรียกใช้ฟังก์ชัน `checkPositive([1, 2, 3, -4, 5])` ต้องได้ค่าเป็น `true`

```js
assert(checkPositive([1, 2, 3, -4, 5]));
```

การเรียกใช้ฟังก์ชัน `checkPositive([1, 2, 3, 4, 5])` ต้องได้ค่าเป็น `true`

```js
assert(checkPositive([1, 2, 3, 4, 5]));
```

การเรียกใช้ฟังก์ชัน `checkPositive([-1, -2, -3, -4, -5])` ต้องได้ค่าเป็น `false`

```js
assert(!checkPositive([-1, -2, -3, -4, -5]));
```

# --seed--

## --seed-contents--

```js
function checkPositive(arr) {
  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น


  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
}
checkPositive([1, 2, 3, -4, 5]);
```

# --solutions--

```js
function checkPositive(arr) {
  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
  return arr.some(elem => elem > 0);
  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
}
checkPositive([1, 2, 3, -4, 5]);
```
