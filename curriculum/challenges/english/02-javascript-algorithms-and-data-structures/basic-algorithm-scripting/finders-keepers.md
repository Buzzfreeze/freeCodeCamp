---
id: a6e40f1041b06c996f7b2406
title: Finders Keepers
challengeType: 5
forumTopicId: 16016
dashedName: finders-keepers
---

# --description--

แบบทดสอบนี้ให้สร้างฟังก์ชัน `findElement` ที่รับค่าเป็น array `arr` และฟังก์ชัน `func` 
โดยให้ฟังก์ชัน `findElement` คืนค่าเป็น element แรกของ array `arr` ที่นำไปทดสอบโดยเอาไปเข้าฟังก์ชัน `func` แล้วได้ค่าเป็น `true` 

เช่น ถ้าให้ array มี element `x` `y` `z` จากนั้นให้ทดสอบโดยเรียกใช้ `func(x)` ถ้าได้ค่าเป็น `true` เราก็จะต้องคืนค่า element `x` ออกมาโดยไม่ต้องเรียกใช้ `func(y)` แต่ถ้าเรียกใช้ `func(x)` แล้วได้ `false` ก็ให้ทดสอบ element อื่นต่อ แต่ถ้าทดสอบครบแล้วไม่มี element ไหนเลยที่เป็น `true` ก็ให้คืนค่าเป็น `undefined` แทน

# --hints--

การเรียกใช้ฟังก์ชัน `findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })` ต้องได้ค่าเป็น `8`

```js
assert.strictEqual(
  findElement([1, 3, 5, 8, 9, 10], function (num) {
    return num % 2 === 0;
  }),
  8
);
```

การเรียกใช้ฟังก์ชัน `findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })` ต้องได้ค่าเป็น `undefined`

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
