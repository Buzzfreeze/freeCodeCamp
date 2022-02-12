---
id: 594810f028c0303b75339ad3
title: Vector dot product
challengeType: 5
forumTopicId: 302343
dashedName: vector-dot-product
---

# --description--

เวกเตอร์สามารถมีค่าเป็น (x), (x, y), หรือ (x, y, z) หรือมากกว่านี้ก็ได้

# --instructions--

ให้เขียนฟังก์ชันที่คืนค่าเป็น Dot product ของเวกเตอร์สองตัว และให้คืนค่าเป็น `null` ถ้าเวกเตอร์ที่ระบุไม่ถูกต้อง

# --hints--

`dotProduct` ต้องเป็นฟังก์ชัน

```js
assert.equal(typeof dotProduct, 'function');
```

`dotProduct()` ต้องคืนค่าเป็น `null`

```js
assert.equal(dotProduct(), null);
```

`dotProduct([1], [1])` ต้องคืนค่าเป็น `1`

```js
assert.equal(dotProduct([1], [1]), 1);
```

`dotProduct([1], [1, 2])` ต้องคืนค่าเป็น `null`

```js
assert.equal(dotProduct([1], [1, 2]), null);
```

`dotProduct([1, 3, -5], [4, -2, -1])` ต้องคืนค่าเป็น `3`

```js
assert.equal(dotProduct([1, 3, -5], [4, -2, -1]), 3);
```

`dotProduct([3, 2, 1], [2, 4, 2], [5, 3, 1])` ต้องคืนค่าเป็น `null`

```js
assert.equal(dotProduct([3, 2, 1], [2, 4, 2], [5, 3, 1]), null);
```

`dotProduct([ 0, 3, 6, 9, 12 ], [ 0, 4, 8, 12, 16 ])` ต้องคืนค่าเป็น `360`

```js
assert.equal(dotProduct([ 0, 3, 6, 9, 12 ], [ 0, 4, 8, 12, 16 ]), 360);
```

# --seed--

## --seed-contents--

```js
function dotProduct(...vectors) {

}
```

# --solutions--

```js
function dotProduct(...vectors) {
  if (!vectors || !vectors.length || vectors.length > 2 || vectors[0].length !== vectors[1].length) {
    return null;
  }
  const vectorLen = vectors[0].length;

  let prod = 0;
  let sum = 0;
  let j = vectorLen;
  let i = 2;
  // Sum terms
  while (j--) {
    i = 2;
    prod = 1;

    while (i--) {
      prod *= vectors[i][j];
    }
    sum += prod;
  }
  return sum;
}
```
