---
id: 587d7dab367417b2b2512b6e
title: Use the every Method to Check that Every Element in an Array Meets a Criteria
challengeType: 1
forumTopicId: 301312
dashedName: use-the-every-method-to-check-that-every-element-in-an-array-meets-a-criteria
---

# --description--

`every` method ทำงานร่วมกับ array เพื่อตรวจสอบว่า ทุกๆ element ใน array ผ่านเงื่อนไขหนึ่งๆ หรือไม่ หากทุก element ผ่านเงื่อนไข ก็จะคืนค่า Boolean เป็น `true` แต่หากมีบาง element ไม่ผ่านเงื่อนไข ก็จะคืนค่า `false`

ตัวอย่างต่อไปนี้เป็นโค้ดที่ตรวจสอบว่า ทุก element ใน `numbers` array มีค่าน้อยกว่า 10 หรือไม่

```js
var numbers = [1, 5, 8, 0, 10, 11];
numbers.every(function(currentValue) {
  return currentValue < 10;
});
```

ในที่นี้ `every` method ควรคืนค่า `false`

# --instructions--

จงใช้ `every` method ภายในฟังก์ชัน `checkPositive` เพื่อตรวจสอบว่า ทุก element ใน `arr` มีค่าเป็นบวกหรือไม่ โดยฟังก์ชันนี้ควรคืนค่าเป็น Boolean

# --hints--

โค้ดของคุณควรใช้ `every` method

```js
assert(code.match(/\.every/g));
```

`checkPositive([1, 2, 3, -4, 5])` ควรคืนค่าเป็น `false`.

```js
assert.isFalse(checkPositive([1, 2, 3, -4, 5]));
```

`checkPositive([1, 2, 3, 4, 5])` ควรคืนค่าเป็น `true`.

```js
assert.isTrue(checkPositive([1, 2, 3, 4, 5]));
```

`checkPositive([1, -2, 3, -4, 5])` ควรคืนค่าเป็น `false`.

```js
assert.isFalse(checkPositive([1, -2, 3, -4, 5]));
```

# --seed--

## --seed-contents--

```js
function checkPositive(arr) {
  // Only change code below this line


  // Only change code above this line
}
checkPositive([1, 2, 3, -4, 5]);
```

# --solutions--

```js
function checkPositive(arr) {
  // Only change code below this line
  return arr.every(num => num > 0);
  // Only change code above this line
}
checkPositive([1, 2, 3, -4, 5]);
```
