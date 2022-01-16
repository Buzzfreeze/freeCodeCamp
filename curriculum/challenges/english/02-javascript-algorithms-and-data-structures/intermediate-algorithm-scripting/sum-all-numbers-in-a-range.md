---
id: a3566b1109230028080c9345
title: Sum All Numbers in a Range
challengeType: 5
forumTopicId: 16083
dashedName: sum-all-numbers-in-a-range
---

# --description--

ในแบบทดสอบนี้เราจะส่ง array ที่มีตัวเลข 2 ตัวเข้าไปในฟังก์ชัน ให้คำนวณผลรวมของทั้งหมดที่อยู่ระหว่างเลข 2 ตัวนั้น (รวมเลขสองตัวใน array ด้วย) 
โดยใน array ที่ส่งเข้าไปนี้ เลขตัวน้อยจะไม่ได้อยู่ก่อนเลขตัวหน้าเสมอไป

เช่น `sumAll([4,1])` ต้องได้ค่าเป็น `10` เพราะผลรวมของเลขตั้งแต่ 1 ถึง 4 (1 + 2 + 3 + 4) มีค่าเท่ากับ `10`

# --hints--

การเรียกใช้ฟังก์ชัน `sumAll([1, 4])` ต้องได้ค่าเป็น number

```js
assert(typeof sumAll([1, 4]) === 'number');
```

การเรียกใช้ฟังก์ชัน `sumAll([1, 4])` ต้องได้ค่าเป็น 10

```js
assert.deepEqual(sumAll([1, 4]), 10);
```

การเรียกใช้ฟังก์ชัน `sumAll([4, 1])` ต้องได้ค่าเป็น 10

```js
assert.deepEqual(sumAll([4, 1]), 10);
```

การเรียกใช้ฟังก์ชัน `sumAll([5, 10])` ต้องได้ค่าเป็น 45

```js
assert.deepEqual(sumAll([5, 10]), 45);
```

การเรียกใช้ฟังก์ชัน `sumAll([10, 5])` ต้องได้ค่าเป็น 45

```js
assert.deepEqual(sumAll([10, 5]), 45);
```

# --seed--

## --seed-contents--

```js
function sumAll(arr) {
  return 1;
}

sumAll([1, 4]);
```

# --solutions--

```js
function sumAll(arr) {
  var sum = 0;
  arr.sort(function(a,b) {return a-b;});
  for (var i = arr[0]; i <= arr[1]; i++) {
    sum += i;
  }
  return sum;
}
```
