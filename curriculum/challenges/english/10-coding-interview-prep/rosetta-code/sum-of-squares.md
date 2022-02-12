---
id: 5a23c84252665b21eecc8042
title: Sum of squares
challengeType: 5
forumTopicId: 302334
dashedName: sum-of-squares
---

# --description--
.ให
เขียนฟังก์ชันเพื่อหาผลรวมของกำลังสองของ array ของจำนวนเต็ม

# --hints--

`sumsq` ต้องเป็นฟังก์ชัน

```js
assert(typeof sumsq == 'function');
```

`sumsq([1, 2, 3, 4, 5])` ต้องคืนค่าเป็นตัวเลข

```js
assert(typeof sumsq([1, 2, 3, 4, 5]) == 'number');
```

`sumsq([1, 2, 3, 4, 5])` ต้องคืนค่าเป็น `55`

```js
assert.equal(sumsq([1, 2, 3, 4, 5]), 55);
```

`sumsq([25, 32, 12, 7, 20])` ต้องคืนค่าเป็น `2242`

```js
assert.equal(sumsq([25, 32, 12, 7, 20]), 2242);
```

`sumsq([38, 45, 35, 8, 13])` ต้องคืนค่าเป็น `4927`

```js
assert.equal(sumsq([38, 45, 35, 8, 13]), 4927);
```

`sumsq([43, 36, 20, 34, 24])` ต้องคืนค่าเป็น `5277`

```js
assert.equal(sumsq([43, 36, 20, 34, 24]), 5277);
```

`sumsq([12, 33, 26, 18, 1, 16, 3])` ต้องคืนค่าเป็น `2499`

```js
assert.equal(sumsq([12, 33, 26, 18, 1, 16, 3]), 2499);
```

# --seed--

## --seed-contents--

```js
function sumsq(array) {

}
```

# --solutions--

```js
function sumsq(array) {
  var sum = 0;
  var i, iLen;

  for (i = 0, iLen = array.length; i < iLen; i++) {
    sum += array[i] * array[i];
  }
  return sum;
}
```
