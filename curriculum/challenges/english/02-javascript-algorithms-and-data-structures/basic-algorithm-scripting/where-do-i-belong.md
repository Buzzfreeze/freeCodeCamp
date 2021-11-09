---
id: a24c1a4622e3c05097f71d67
title: Where do I Belong
challengeType: 5
forumTopicId: 16094
dashedName: where-do-i-belong
---

# --description--

แบบทดสอบนี้ให้คืนค่าเป็นเลข index ที่น้อยที่สุด เมื่อนำค่า (argument ที่สอง) มาใส่ใน array (argument แรก) โดย array ต้อง sort (เรียงลำดับจากน้อยไปมาก) ก่อน

ตัวอย่างเช่น `getIndexToIns([1,2,3,4], 1.5)` ควรได้ผลลัพธ์เป็น `1` เพราะ `1.5` มีค่ามากกว่า `1` (index 0) แต่น้อยกว่า `2` (index 1)

เช่นเดียวกันกับ `getIndexToIns([20,3,5], 19)` ควรได้ผลลัพธ์เป็น `2` เพราะเมื่อ array ทำการ sort แล้ว จะได้หน้าตา array เป็น `[3,5,20]` และ `19` มีค่าน้อยกว่า `20` (index 2) และมากกว่า `5` (index 1)

# --hints--

`getIndexToIns([10, 20, 30, 40, 50], 35)` ควรได้ผลลัพธ์เป็น `3`.

```js
assert(getIndexToIns([10, 20, 30, 40, 50], 35) === 3);
```

`getIndexToIns([10, 20, 30, 40, 50], 35)` ควรได้ผลลัพธ์เป็นตัวเลข

```js
assert(typeof getIndexToIns([10, 20, 30, 40, 50], 35) === 'number');
```

`getIndexToIns([10, 20, 30, 40, 50], 30)` ควรได้ผลลัพธ์เป็น `2`.

```js
assert(getIndexToIns([10, 20, 30, 40, 50], 30) === 2);
```

`getIndexToIns([10, 20, 30, 40, 50], 30)` ควรได้ผลลัพธ์เป็นตัวเลข

```js
assert(typeof getIndexToIns([10, 20, 30, 40, 50], 30) === 'number');
```

`getIndexToIns([40, 60], 50)` ควรได้ผลลัพธ์เป็น `1`.

```js
assert(getIndexToIns([40, 60], 50) === 1);
```

`getIndexToIns([40, 60], 50)` ควรได้ผลลัพธ์เป็นตัวเลข

```js
assert(typeof getIndexToIns([40, 60], 50) === 'number');
```

`getIndexToIns([3, 10, 5], 3)` ควรได้ผลลัพธ์เป็น `0`.

```js
assert(getIndexToIns([3, 10, 5], 3) === 0);
```

`getIndexToIns([3, 10, 5], 3)` ควรได้ผลลัพธ์เป็นตัวเลข

```js
assert(typeof getIndexToIns([3, 10, 5], 3) === 'number');
```

`getIndexToIns([5, 3, 20, 3], 5)` ควรได้ผลลัพธ์เป็น `2`.

```js
assert(getIndexToIns([5, 3, 20, 3], 5) === 2);
```

`getIndexToIns([5, 3, 20, 3], 5)` ควรได้ผลลัพธ์เป็นตัวเลข

```js
assert(typeof getIndexToIns([5, 3, 20, 3], 5) === 'number');
```

`getIndexToIns([2, 20, 10], 19)` ควรได้ผลลัพธ์เป็น `2`.

```js
assert(getIndexToIns([2, 20, 10], 19) === 2);
```

`getIndexToIns([2, 20, 10], 19)` ควรได้ผลลัพธ์เป็นตัวเลข

```js
assert(typeof getIndexToIns([2, 20, 10], 19) === 'number');
```

`getIndexToIns([2, 5, 10], 15)` ควรได้ผลลัพธ์เป็น `3`.

```js
assert(getIndexToIns([2, 5, 10], 15) === 3);
```

`getIndexToIns([2, 5, 10], 15)` ควรได้ผลลัพธ์เป็นตัวเลข

```js
assert(typeof getIndexToIns([2, 5, 10], 15) === 'number');
```

`getIndexToIns([], 1)` ควรได้ผลลัพธ์เป็น `0`.

```js
assert(getIndexToIns([], 1) === 0);
```

`getIndexToIns([], 1)` ควรได้ผลลัพธ์เป็นตัวเลข

```js
assert(typeof getIndexToIns([], 1) === 'number');
```

# --seed--

## --seed-contents--

```js
function getIndexToIns(arr, num) {
  return num;
}

getIndexToIns([40, 60], 50);
```

# --solutions--

```js
function getIndexToIns(arr, num) {
  arr = arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) {
      return i;
    }
  }

  return arr.length;
}

getIndexToIns([40, 60], 50);
```
