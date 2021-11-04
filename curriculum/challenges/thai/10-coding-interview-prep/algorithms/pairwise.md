---
id: a3f503de51cfab748ff001aa
title: Pairwise
challengeType: 5
forumTopicId: 301617
dashedName: pairwise
---

# --description--

โจทย์จะให้อาร์เรย์ "arr" มา และให้หาคู่ของค่าในอาร์เรย์ ที่มีผลรวมเท่ากับ  "arg" แล้วคืนค่าผลรวมของดัชนี(Index) นั้นออกมา

สามารถใช้คู่ที่มีค่าเท่ากันได้ แต่ต้องมีดัชนี(Index) ต่างกัน

เมื่อมีการใช้ตัวนั้นแล้ว จะไม่สามารถนำกลับมาใช้ใหม่เพื่อจับคู่กับตัวอื่นได้ และต้องใช้ค่าดัชนี(Index) ที่ต่ำที่สุด

ตัวอย่างเช่น `pairwise([1, 1, 2], 3)` จะได้คู่คือ `[2, 1]`

โดยใช้ 1 ที่ดัชนี 0  ไม่ใช้ 1 ที่ดัชนี 1  เนื่องจาก 0+2 &lt; 1+2.



ตัวอย่าง `pairwise([7, 9, 11, 13, 15], 20)` จะได้คำตอบเป็น `6` คู่ที่รวมกันแล้วได้ 20 คือ `[7, 13]` และ `[9, 11]`

สามารถเขียนค่าดัชนี(Index) และ ค่าของอาร์เรย์ได้ดังนี้

<div style='margin-left: 2em;'>

| Index | 0 | 1 | 2  | 3  | 4  |
| ----- | - | - | -- | -- | -- |
| Value | 7 | 9 | 11 | 13 | 15 |

</div>

เราจะนำค่า ดัชนี(Index) เพิ่มเข้าไป

<div style='margin-left: 2em;'>

7 + 13 = 20 → Indices 0 + 3 = 3  
9 + 11 = 20 → Indices 1 + 2 = 3  
3 + 3 = 6 → Return `6`

</div>

# --hints--

`pairwise([1, 4, 2, 3, 0, 5], 7)` ควรได้ผลลัพธ์เป็น 11.

```js
assert.deepEqual(pairwise([1, 4, 2, 3, 0, 5], 7), 11);
```

`pairwise([1, 3, 2, 4], 4)` ควรได้ผลลัพธ์เป็น 1.

```js
assert.deepEqual(pairwise([1, 3, 2, 4], 4), 1);
```

`pairwise([1, 1, 1], 2)` ควรได้ผลลัพธ์เป็น 1.

```js
assert.deepEqual(pairwise([1, 1, 1], 2), 1);
```

`pairwise([0, 0, 0, 0, 1, 1], 1)` ควรได้ผลลัพธ์เป็น 10.

```js
assert.deepEqual(pairwise([0, 0, 0, 0, 1, 1], 1), 10);
```

`pairwise([], 100)` ควรได้ผลลัพธ์เป็น 0.

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
