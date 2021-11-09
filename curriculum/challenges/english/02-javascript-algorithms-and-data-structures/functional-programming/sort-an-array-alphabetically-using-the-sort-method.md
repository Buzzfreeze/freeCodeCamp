---
id: 587d7da9367417b2b2512b69
title: Sort an Array Alphabetically using the sort Method
challengeType: 1
forumTopicId: 18303
dashedName: sort-an-array-alphabetically-using-the-sort-method
---

# --description--

`sort` method เรียงลำดับ elements ของ array ตามเงื่อนไขใน callback function

ตัวอย่าง:

```js
function ascendingOrder(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}
ascendingOrder([1, 5, 2, 3, 4]);
```

ตัวอย่างนี้จะคืนค่าเป็น `[1, 2, 3, 4, 5]`.

```js
function reverseAlpha(arr) {
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? 1 : -1;
  });
}
reverseAlpha(['l', 'h', 'z', 'b', 's']);
```

ตัวอย่างนี้จะคืนค่าเป็น `['z', 's', 'l', 'h', 'b']`.

sorting method ดั้งเดิมของ JavaScript เรียงตามค่า Unicode ซึ่งผลลัพธ์ที่ได้อาจไม่ใช่แบบที่เราต้องการ ดังนั้นจึงแนะนำให้ใช้ callback function เพื่อระบุเงื่อนไขในการเรียง array items แล้วเมื่อ callback function (มักเรียกว่า `compareFunction`) ถูกส่งเข้าไปใน sort method ก็จะทำให้ array elements ถูกเรียงตามผลลัพธ์ของ `compareFunction`: หาก `compareFunction(a,b)` ได้ผลเป็นค่าน้อยกว่า 0 สำหรับ element `a` และ `b` หมายความว่า `a` จะมาก่อน `b` แต่ถ้า `compareFunction(a,b)` ได้ผลเป็นค่ามากกว่า 0 สำหรับ element `a` และ `b` หมายความว่า `b` จะมาก่อน `a` และถ้า `compareFunction(a,b)` ได้ผลเป็นค่าเท่ากับ 0 สำหรับ element `a` และ `b` หมายความว่า `a` และ `b` จะไม่มีการเปลี่ยนแปลง

# --instructions--

จงใช้ `sort` method ในฟังก์ชัน `alphabeticalOrder` เพื่อเรียง elements ของ `arr` ตามลำดับตัวอักษร โดยฟังก์ชันควรคืนค่าเป็น array ที่เรียงลำดับแล้ว

# --hints--

โค้ดของคุณควรใช้ `sort` method

```js
assert(code.match(/\.sort/g));
```

`alphabeticalOrder(["a", "d", "c", "a", "z", "g"])` ควรคืนค่าเป็น `["a", "a", "c", "d", "g", "z"]`.

```js
assert(
  JSON.stringify(alphabeticalOrder(['a', 'd', 'c', 'a', 'z', 'g'])) ===
    JSON.stringify(['a', 'a', 'c', 'd', 'g', 'z'])
);
```

`alphabeticalOrder(["x", "h", "a", "m", "n", "m"])` ควรคืนค่าเป็น `["a", "h", "m", "m", "n", "x"]`.

```js
assert(
  JSON.stringify(alphabeticalOrder(['x', 'h', 'a', 'm', 'n', 'm'])) ===
    JSON.stringify(['a', 'h', 'm', 'm', 'n', 'x'])
);
```

`alphabeticalOrder(["a", "a", "a", "a", "x", "t"])` ควรคืนค่าเป็น `["a", "a", "a", "a", "t", "x"]`.

```js
assert(
  JSON.stringify(alphabeticalOrder(['a', 'a', 'a', 'a', 'x', 't'])) ===
    JSON.stringify(['a', 'a', 'a', 'a', 't', 'x'])
);
```

# --seed--

## --seed-contents--

```js
function alphabeticalOrder(arr) {
  // Only change code below this line

  return arr
  // Only change code above this line
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
```

# --solutions--

```js
function alphabeticalOrder(arr) {
  // Only change code below this line
  return arr.sort();
  // Only change code above this line
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
```
