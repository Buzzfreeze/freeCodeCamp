---
id: 587d7dab367417b2b2512b6e
title: Use the every Method to Check that Every Element in an Array Meets a Criteria
challengeType: 1
forumTopicId: 301312
dashedName: use-the-every-method-to-check-that-every-element-in-an-array-meets-a-criteria
---

# --description--

เราจะใช้ method `every` กับ array เพื่อหาว่า element ทุกตัวใน array ผ่านเงื่อนไขที่เราระบุหรือไม่ 
ถ้าทุก element ผ่านเงื่อนไข ก็จะคืนค่า Boolean เป็น `true` แต่ถ้ามีบาง element ไม่ผ่านเงื่อนไข ก็จะคืนค่า `false`

ตัวอย่างต่อไปนี้เป็นโค้ดที่ตรวจสอบว่า ทุก element ใน `numbers` array มีค่าน้อยกว่า 10 หรือไม่

```js
var numbers = [1, 5, 8, 0, 10, 11];
numbers.every(function(currentValue) {
  return currentValue < 10;
});
```

ในตัวอย่างนี้ method `every` จะได้ค่าเป็น `false`

# --instructions--

จงใช้ method `every` ในฟังก์ชัน `checkPositive` เพื่อหาว่า ทุก element ใน `arr` มีค่าเป็นบวกหรือไม่ โดยฟังก์ชันนี้ต้องคืนค่าเป็น Boolean

# --hints--

ต้องใช้ method `every` ในโค้ด

```js
assert(code.match(/\.every/g));
```

การเรียกใช้ฟังก์ชัน `checkPositive([1, 2, 3, -4, 5])` ต้องได้ค่าเป็น `false`

```js
assert.isFalse(checkPositive([1, 2, 3, -4, 5]));
```

การเรียกใช้ฟังก์ชัน `checkPositive([1, 2, 3, 4, 5])` ต้องได้ค่าเป็น `true`

```js
assert.isTrue(checkPositive([1, 2, 3, 4, 5]));
```

การเรียกใช้ฟังก์ชัน `checkPositive([1, -2, 3, -4, 5])` ต้องได้ค่าเป็น `false`

```js
assert.isFalse(checkPositive([1, -2, 3, -4, 5]));
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
  return arr.every(num => num > 0);
  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
}
checkPositive([1, 2, 3, -4, 5]);
```
