---
id: a6e40f1041b06c996f7b2406
title: Finders Keepers
challengeType: 5
forumTopicId: 16016
dashedName: finders-keepers
---

# --description--

แบบทดสอบนี้ให้สร้างฟังก์ชันที่อ่านค่าจาก array `arr` และคืนค่าเป็น element แรกใน array ที่ผ่าน 'truth test' ซึ่งหมายความว่า หากส่ง element `x` ใน array เข้า `func(x)` แล้วมี element ที่ได้ค่า `true` ออกมา ก็แสดงว่าผ่าน 'truth test' แต่หากไม่มี element ใดเลยที่ผ่าน ก็จะได้ค่า `undefined` ออกมา

# --hints--

`findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })` ควรได้ผลลัพธ์คือ `8`.

```js
assert.strictEqual(
  findElement([1, 3, 5, 8, 9, 10], function (num) {
    return num % 2 === 0;
  }),
  8
);
```

`findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })` ควรได้ผลลัพธ์คือ `undefined`.

```js
assert.strictEqual(
  findElement([1, 3, 5, 9], function (num) {
    return num % 2 === 0;
  }),
  undefined
);
```

# --seed--

## --seed-contents--

```js
function findElement(arr, func) {
  let num = 0;
  return num;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
```

# --solutions--

```js
function findElement(arr, func) {
  return arr.filter(func)[0];
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
```
