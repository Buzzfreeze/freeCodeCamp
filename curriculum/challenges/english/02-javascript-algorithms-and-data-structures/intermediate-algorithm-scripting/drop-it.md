---
id: a5deed1811a43193f9f1c841
title: Drop it
challengeType: 5
forumTopicId: 16010
dashedName: drop-it
---

# --description--

ให้วนอ่าน element ใน array `arr` ตั้งแต่ element แรก (index 0) แล้วลบ element ออกจาก array ทีละตัว จนกว่าจะมี element ที่ทำให้ฟังก์ชัน `func` ได้ผลลัพธ์เป็น `true`

จากนั้นให้คืนค่าเป็น array ที่มี element ที่เหลืออยู่ แต่ถ้าไม่มี element ที่ทำให้ฟังก์ชัน `func` ได้ผลลัพธ์เป็น `true` ก็ให้คืนค่าเป็น empty array

# --hints--

`dropElements([1, 2, 3, 4], function(n) {return n >= 3;})` ต้องคืนค่าเป็น `[3, 4]`

```js
assert.deepEqual(
  dropElements([1, 2, 3, 4], function (n) {
    return n >= 3;
  }),
  [3, 4]
);
```

`dropElements([0, 1, 0, 1], function(n) {return n === 1;})` ต้องคืนค่าเป็น `[1, 0, 1]`

```js
assert.deepEqual(
  dropElements([0, 1, 0, 1], function (n) {
    return n === 1;
  }),
  [1, 0, 1]
);
```

`dropElements([1, 2, 3], function(n) {return n > 0;})` ต้องคืนค่าเป็น `[1, 2, 3]`

```js
assert.deepEqual(
  dropElements([1, 2, 3], function (n) {
    return n > 0;
  }),
  [1, 2, 3]
);
```

`dropElements([1, 2, 3, 4], function(n) {return n > 5;})` ต้องคืนค่าเป็น `[]`

```js
assert.deepEqual(
  dropElements([1, 2, 3, 4], function (n) {
    return n > 5;
  }),
  []
);
```

`dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;})` ต้องคืนค่าเป็น `[7, 4]`

```js
assert.deepEqual(
  dropElements([1, 2, 3, 7, 4], function (n) {
    return n > 3;
  }),
  [7, 4]
);
```

`dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;})` ต้องคืนค่าเป็น `[3, 9, 2]`

```js
assert.deepEqual(
  dropElements([1, 2, 3, 9, 2], function (n) {
    return n > 2;
  }),
  [3, 9, 2]
);
```

# --seed--

## --seed-contents--

```js
function dropElements(arr, func) {
  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
```

# --solutions--

```js
function dropElements(arr, func) {
  while (arr.length && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}
```
