---
id: 587d7dab367417b2b2512b6f
title: Use the some Method to Check that Any Elements in an Array Meet a Criteria
challengeType: 1
forumTopicId: 301314
dashedName: use-the-some-method-to-check-that-any-elements-in-an-array-meet-a-criteria
---

# --description--

`some` method ทำงานร่วมกับ array เพื่อตรวจสอบว่า มี element ใน array ผ่านเงื่อนไขหนึ่งๆ หรือไม่ หากมี element ผ่านเงื่อนไข ก็จะคืนค่า Boolean เป็น `true` แต่หากไม่มี element ผ่านเงื่อนไขเลย ก็จะคืนค่า `false`

ตัวอย่างต่อไปนี้เป็นโค้ดที่ตรวจสอบว่า มี element ใน `numbers` array ที่มีค่าน้อยกว่า 10 หรือไม่

```js
var numbers = [10, 50, 8, 220, 110, 11];
numbers.some(function(currentValue) {
  return currentValue < 10;
});
```

`some` ควรคืนค่าเป็น `true`.

# --instructions--

จงใช้ `some` method ภายในฟังก์ชัน `checkPositive` เพื่อตรวจสอบว่า มี element ใน `arr` ที่มีค่าเป็นบวกหรือไม่ โดยฟังก์ชันนี้ควรคืนค่าเป็น Boolean

# --hints--

โค้ดของคุณควรใช้ `some` method

```js
assert(code.match(/\.some/g));
```

`checkPositive([1, 2, 3, -4, 5])` ควรคืนค่าเป็น `true`.

```js
assert(checkPositive([1, 2, 3, -4, 5]));
```

`checkPositive([1, 2, 3, 4, 5])` ควรคืนค่าเป็น `true`.

```js
assert(checkPositive([1, 2, 3, 4, 5]));
```

`checkPositive([-1, -2, -3, -4, -5])` ควรคืนค่าเป็น `false`.

```js
assert(!checkPositive([-1, -2, -3, -4, -5]));
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
  return arr.some(elem => elem > 0);
  // Only change code above this line
}
checkPositive([1, 2, 3, -4, 5]);
```
