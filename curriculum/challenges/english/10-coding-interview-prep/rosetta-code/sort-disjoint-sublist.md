---
id: 5a23c84252665b21eecc8000
title: Sort disjoint sublist
challengeType: 5
forumTopicId: 302307
dashedName: sort-disjoint-sublist
---

# --description--

เมื่อกำหนด list of values และชุดของ indices จำนวนเต็มลงใน list of values นั้น ให้ทำการจัดเรียงค่าตาม indices ที่กำหนด แต่คงค่าไว้ที่ indices นอกชุดของค่าที่จะจัดเรียง

ทำให้ฟังก์ชันของคุณทำงานกับlist of valuesและชุดindicesต่อไปนี้:

<code>values: [7, <b>6</b>, 5, 4, 3, 2, <b>1</b>, <b>0</b>]</code>

```js
indices(0-based): {6, 1, 7}
```

ผลลัพธ์ที่ถูกต้องควรเป็น:

<code>[7, <b>0</b>, 5, 4, 3, 2, <b>1</b>, <b>6</b>]</code>.

# --hints--

`sortDisjoint` ต้องเป็นฟังก์ชัน

```js
assert(typeof sortDisjoint == 'function');
```

`sortDisjoint([7, 6, 5, 4, 3, 2, 1, 0], [6, 1, 7])` ต้องคืนค่าเป็น array

```js
assert(Array.isArray(sortDisjoint([7, 6, 5, 4, 3, 2, 1, 0], [6, 1, 7])));
```

`sortDisjoint([7, 6, 5, 4, 3, 2, 1, 0], [6, 1, 7])` ต้องคืนค่าเป็น `[7, 0, 5, 4, 3, 2, 1, 6]`

```js
assert.deepEqual(sortDisjoint([7, 6, 5, 4, 3, 2, 1, 0], [6, 1, 7]), [
  7,
  0,
  5,
  4,
  3,
  2,
  1,
  6
]);
```

`sortDisjoint([7, 6, 5, 4, 3, 2, 1, 0], [1, 2, 5, 6])` ต้องคืนค่าเป็น `[7, 1, 2, 4, 3, 5, 6, 0]`

```js
assert.deepEqual(sortDisjoint([7, 6, 5, 4, 3, 2, 1, 0], [1, 2, 5, 6]), [
  7,
  1,
  2,
  4,
  3,
  5,
  6,
  0
]);
```

`sortDisjoint([8, 7, 6, 5, 4, 3, 2, 1], [6, 1, 7])` ต้องคืนค่าเป็น `[8, 1, 6, 5, 4, 3, 2, 7]`

```js
assert.deepEqual(sortDisjoint([8, 7, 6, 5, 4, 3, 2, 1], [6, 1, 7]), [
  8,
  1,
  6,
  5,
  4,
  3,
  2,
  7
]);
```

`sortDisjoint([8, 7, 6, 5, 4, 3, 2, 1], [1, 3, 5, 6])` ต้องคืนค่าเป็น `[8, 2, 6, 3, 4, 5, 7, 1]`

```js
assert.deepEqual(sortDisjoint([8, 7, 6, 5, 4, 3, 2, 1], [1, 3, 5, 6]), [
  8,
  2,
  6,
  3,
  4,
  5,
  7,
  1
]);
```

`sortDisjoint([6, 1, 7, 1, 3, 5, 6], [6, 1, 5, 4])` ต้องคืนค่าเป็น `[6, 1, 7, 1, 3, 5, 6]`

```js
assert.deepEqual(sortDisjoint([6, 1, 7, 1, 3, 5, 6], [6, 1, 5, 4]), [
  6,
  1,
  7,
  1,
  3,
  5,
  6
]);
```

# --seed--

## --seed-contents--

```js
function sortDisjoint(values, indices) {

}
```

# --solutions--

```js
function sortDisjoint(values, indices) {
  let sublist = [];

  indices.sort(function(a, b) {
    return a - b;
  });

  for (let i = 0; i < indices.length; i++) {
    sublist.push(values[indices[i]]);
  }

  sublist.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < indices.length; i++) {
    values[indices[i]] = sublist[i];
  }

  return values;
}
```
