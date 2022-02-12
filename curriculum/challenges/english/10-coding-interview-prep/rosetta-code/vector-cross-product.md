---
id: 594810f028c0303b75339ad2
title: Vector cross product
challengeType: 5
forumTopicId: 302342
dashedName: vector-cross-product
---

# --description--

เวกเตอร์สามมิติจะมีค่าทั้งหมดสามค่า (X, Y, Z)

# --instructions--

ให้เขียนฟังก์ชันที่รับเวกเตอร์สามมิติเป็น array และคืนค่าเป็นผลคูณของเวกเตอร์นั้นในรูปแบบ array

# --hints--

`crossProduct` ต้องเป็นฟังก์ชัน

```js
assert.equal(typeof crossProduct, 'function');
```

`crossProduct()` ต้องคืนค่าเป็น null

```js
assert.equal(crossProduct(), null);
```

`crossProduct([1, 2, 3], [4, 5, 6])` ต้องคืนค่าเป็น `[-3, 6, -3]`

```js
assert.deepEqual(res12, exp12);
```

# --seed--

## --after-user-code--

```js
const tv1 = [1, 2, 3];
const tv2 = [4, 5, 6];
const res12 = crossProduct(tv1, tv2);
const exp12 = [-3, 6, -3];
```

## --seed-contents--

```js
function crossProduct(a, b) {

}
```

# --solutions--

```js
function crossProduct(a, b) {
  if (!a || !b) {
    return null;
  }

  // Check lengths
  if (a.length !== 3 || b.length !== 3) {
    return null;
  }

  return [
    (a[1] * b[2]) - (a[2] * b[1]),
    (a[2] * b[0]) - (a[0] * b[2]),
    (a[0] * b[1]) - (a[1] * b[0])
  ];
}
```
