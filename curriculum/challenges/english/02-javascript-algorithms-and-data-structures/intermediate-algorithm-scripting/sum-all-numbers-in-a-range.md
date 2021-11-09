---
id: a3566b1109230028080c9345
title: Sum All Numbers in a Range
challengeType: 5
forumTopicId: 16083
dashedName: sum-all-numbers-in-a-range
---

# --description--

เรามี array ที่มีตัวเลข 2 ตัวให้คุณส่งเข้าไปในฟังก์ชัน จงคำนวณผลรวมของตัวเลขทั้งสองบวกด้วยเลขทั้งหมดที่อยู่ระหว่างเลข 2 ตัวนั้น โดยตัวเลขน้อยไม่จำเป็นต้องมาก่อนตัวเลขมาก

ตัวอย่างเช่น `sumAll([4,1])` ควรคืนค่าเป็น `10` เพราะผลรวมของเลขตั้งแต่ 1 ถึง 4 มีค่าเท่ากับ `10`

# --hints--

`sumAll([1, 4])` ควรคืนค่าเป็น number

```js
assert(typeof sumAll([1, 4]) === 'number');
```

`sumAll([1, 4])` ควรคืนค่าเป็น 10

```js
assert.deepEqual(sumAll([1, 4]), 10);
```

`sumAll([4, 1])` ควรคืนค่าเป็น 10

```js
assert.deepEqual(sumAll([4, 1]), 10);
```

`sumAll([5, 10])` ควรคืนค่าเป็น 45

```js
assert.deepEqual(sumAll([5, 10]), 45);
```

`sumAll([10, 5])` ควรคืนค่าเป็น 45

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
