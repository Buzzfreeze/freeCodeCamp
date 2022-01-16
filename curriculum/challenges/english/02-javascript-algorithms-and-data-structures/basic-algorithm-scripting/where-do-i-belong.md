---
id: a24c1a4622e3c05097f71d67
title: Where do I Belong
challengeType: 5
forumTopicId: 16094
dashedName: where-do-i-belong
---

# --description--

ให้เขียนฟังก์ชันที่รับค่าเป็น array `arr` และตัวเลข `num`
โดยฟังก์ชันจะนำ array `arr` มาเรียงลำดับจากน้อยไปมาก และหา index ที่น้อยที่สุดที่เมื่อแทรก `num` ลงไป แล้วการเรียงลำดับของ element ใน array จะยังคงเป็นน้อยไปมากอยู่เหมือนเดิม

เช่น ถ้าเราเรียกใช้ฟังก์ชัน `getIndexToIns([1,2,3,4], 1.5)` ต้องได้ค่าเป็น `1` เพราะ `1.5` มีค่ามากกว่า `1` (index 0) แต่น้อยกว่า `2` (index 1) ทำให้ถ้าแทรก `1.5` ลงไปแล้ว array `[1,1.5,2,3,4]` ก็ยังจะเป็นการเรียงแบบน้อยไปมากอยู่เหมือนเดิม

อีกตัวอย่างนึงคือการเรียกใช้ฟังก์ชัน `getIndexToIns([20,3,5], 19)` ต้องได้ค่าเป็น `2` เพราะเมื่อเราเรียง array จากน้อยไปมากแล้ว array จะกลายเป็น `[3,5,20]` และ `19` มีค่ามากกว่า `5` (index 1) แต่น้อยกว่า `20` (index 2) 

# --hints--

การเรียกใช้ฟังก์ชัน `getIndexToIns([10, 20, 30, 40, 50], 35)` ต้องได้ค่าเป็น `3`

```js
assert(getIndexToIns([10, 20, 30, 40, 50], 35) === 3);
```

การเรียกใช้ฟังก์ชัน `getIndexToIns([10, 20, 30, 40, 50], 35)` ต้องได้ค่าเป็นตัวเลข

```js
assert(typeof getIndexToIns([10, 20, 30, 40, 50], 35) === 'number');
```

การเรียกใช้ฟังก์ชัน `getIndexToIns([10, 20, 30, 40, 50], 30)` ต้องได้ค่าเป็น `2`

```js
assert(getIndexToIns([10, 20, 30, 40, 50], 30) === 2);
```

การเรียกใช้ฟังก์ชัน `getIndexToIns([10, 20, 30, 40, 50], 30)` ต้องได้ค่าเป็นตัวเลข

```js
assert(typeof getIndexToIns([10, 20, 30, 40, 50], 30) === 'number');
```

การเรียกใช้ฟังก์ชัน `getIndexToIns([40, 60], 50)` ต้องได้ค่าเป็น `1`

```js
assert(getIndexToIns([40, 60], 50) === 1);
```

การเรียกใช้ฟังก์ชัน `getIndexToIns([40, 60], 50)` ต้องได้ค่าเป็นตัวเลข

```js
assert(typeof getIndexToIns([40, 60], 50) === 'number');
```

การเรียกใช้ฟังก์ชัน `getIndexToIns([3, 10, 5], 3)` ต้องได้ค่าเป็น `0`

```js
assert(getIndexToIns([3, 10, 5], 3) === 0);
```

การเรียกใช้ฟังก์ชัน `getIndexToIns([3, 10, 5], 3)` ต้องได้ค่าเป็นตัวเลข

```js
assert(typeof getIndexToIns([3, 10, 5], 3) === 'number');
```

การเรียกใช้ฟังก์ชัน `getIndexToIns([5, 3, 20, 3], 5)` ต้องได้ค่าเป็น `2`

```js
assert(getIndexToIns([5, 3, 20, 3], 5) === 2);
```

การเรียกใช้ฟังก์ชัน `getIndexToIns([5, 3, 20, 3], 5)` ต้องได้ค่าเป็นตัวเลข

```js
assert(typeof getIndexToIns([5, 3, 20, 3], 5) === 'number');
```

การเรียกใช้ฟังก์ชัน `getIndexToIns([2, 20, 10], 19)` ต้องได้ค่าเป็น `2`

```js
assert(getIndexToIns([2, 20, 10], 19) === 2);
```

การเรียกใช้ฟังก์ชัน `getIndexToIns([2, 20, 10], 19)` ต้องได้ค่าเป็นตัวเลข

```js
assert(typeof getIndexToIns([2, 20, 10], 19) === 'number');
```

การเรียกใช้ฟังก์ชัน `getIndexToIns([2, 5, 10], 15)` ต้องได้ค่าเป็น `3`

```js
assert(getIndexToIns([2, 5, 10], 15) === 3);
```

การเรียกใช้ฟังก์ชัน `getIndexToIns([2, 5, 10], 15)` ต้องได้ค่าเป็นตัวเลข

```js
assert(typeof getIndexToIns([2, 5, 10], 15) === 'number');
```

การเรียกใช้ฟังก์ชัน `getIndexToIns([], 1)` ต้องได้ค่าเป็น `0`

```js
assert(getIndexToIns([], 1) === 0);
```

การเรียกใช้ฟังก์ชัน `getIndexToIns([], 1)` ต้องได้ค่าเป็นตัวเลข

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
