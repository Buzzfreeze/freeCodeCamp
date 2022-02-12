---
id: a3f503de51cfab748ff001aa
title: Pairwise
challengeType: 5
forumTopicId: 301617
dashedName: pairwise
---

# --description--

ถ้ามีอาร์เรย์ `arr` ให้หาคู่ของค่าในอาร์เรย์ที่บวกกันแล้วได้ค่าเป็น `arg` แล้วคืนค่าเป็นผลรวมของ Index ของเลขนั้น

คุณสามารถใช้คู่ที่มีค่าเท่ากันได้ แต่ต้องมี index ต่างกัน

เมื่อมีการใช้ตัวเลขนั้นแล้ว จะไม่สามารถนำกลับมาใช้ใหม่เพื่อจับคู่กับตัวอื่นได้อีก
ถ้ามีตัวเลขที่ซ้ำกัน ต้องใช้ตัวเลขที่มี index ที่ต่ำที่สุดในการจับคู่

เช่น `pairwise([1, 1, 2], 3)` จะได้คู่คือ `[2, 1]`
โดยใช้ 1 ที่ index 0 ไม่ใช่ 1 ที่ index 1 เนื่องจาก 0+2 &lt; 1+2

ตัวอย่าง:
`pairwise([7, 9, 11, 13, 15], 20)` จะได้คำตอบเป็น `6` โดยคู่ที่รวมกันแล้วได้ 20 คือ `[7, 13]` และ `[9, 11]`

จากนั้นเราจะสามารถเขียน index ของอาร์เรย์และค่าของอาร์เรย์ได้ตามตารางนี้


<div style='margin-left: 2em;'>

| Index | 0 | 1 | 2  | 3  | 4  |
| ----- | - | - | -- | -- | -- |
| Value | 7 | 9 | 11 | 13 | 15 |

</div>

และเราจะทำการบวกค่าของ index

<div style='margin-left: 2em;'>

7 + 13 = 20 → มี index เป็น 0 + 3 = 3  
9 + 11 = 20 → มี index เป็น 1 + 2 = 3  
3 + 3 = 6 → คืนค่าเป็น `6`

</div>

# --hints--

`pairwise([1, 4, 2, 3, 0, 5], 7)` ควรได้ผลลัพธ์เป็น 11

```js
assert.deepEqual(pairwise([1, 4, 2, 3, 0, 5], 7), 11);
```

`pairwise([1, 3, 2, 4], 4)` ควรได้ผลลัพธ์เป็น 1

```js
assert.deepEqual(pairwise([1, 3, 2, 4], 4), 1);
```

`pairwise([1, 1, 1], 2)` ควรได้ผลลัพธ์เป็น 1

```js
assert.deepEqual(pairwise([1, 1, 1], 2), 1);
```

`pairwise([0, 0, 0, 0, 1, 1], 1)` ควรได้ผลลัพธ์เป็น 10

```js
assert.deepEqual(pairwise([0, 0, 0, 0, 1, 1], 1), 10);
```

`pairwise([], 100)` ควรได้ผลลัพธ์เป็น 0

```js
assert.deepEqual(pairwise([], 100), 0);
```

# --seed--

## --seed-contents--

```js
function pairwise(arr, arg) {
  return arg;
}

pairwise([1,4,2,3,0,5], 7);
```

# --solutions--

```js
function pairwise(arr, arg) {
  var sum = 0;
  arr.forEach(function(e, i, a) {
    if (e != null) {
      var diff = arg-e;
      a[i] = null;
      var dix = a.indexOf(diff);
      if (dix !== -1) {
        sum += dix;
        sum += i;
        a[dix] = null;
      }
    }
  });
  return sum;
}

pairwise([1,4,2,3,0,5], 7);
```
