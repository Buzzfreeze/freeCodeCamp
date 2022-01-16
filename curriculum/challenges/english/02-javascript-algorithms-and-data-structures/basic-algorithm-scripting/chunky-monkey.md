---
id: a9bd25c716030ec90084d8a1
title: Chunky Monkey
challengeType: 5
forumTopicId: 16005
dashedName: chunky-monkey
---

# --description--

จงเขียนฟังก์ชันที่จะแบ่ง array (argument แรก) ออกเป็น array ย่อยหลายๆอัน โดย array ย่อยที่แบ่งออกมาจะมีจะมีจำนวน element เท่ากับ `size` (argument ที่สอง) แล้วคืนค่าออกมาเป็น array 2 มิติ ที่มี array ย่อยที่เราแบ่งได้อยู่ข้างใน

# --hints--

การเรียกใช้ฟังก์ชัน `chunkArrayInGroups(["a", "b", "c", "d"], 2)` ต้องได้ค่าเป็น `[["a", "b"], ["c", "d"]]`

```js
assert.deepEqual(chunkArrayInGroups(['a', 'b', 'c', 'd'], 2), [
  ['a', 'b'],
  ['c', 'd']
]);
```

การเรียกใช้ฟังก์ชัน `chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)` ต้องได้ค่าเป็น `[[0, 1, 2], [3, 4, 5]]`

```js
assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3), [
  [0, 1, 2],
  [3, 4, 5]
]);
```

การเรียกใช้ฟังก์ชัน `chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)` ต้องได้ค่าเป็น `[[0, 1], [2, 3], [4, 5]]`

```js
assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2), [
  [0, 1],
  [2, 3],
  [4, 5]
]);
```

การเรียกใช้ฟังก์ชัน `chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)` ต้องได้ค่าเป็น `[[0, 1, 2, 3], [4, 5]]`

```js
assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4), [
  [0, 1, 2, 3],
  [4, 5]
]);
```

การเรียกใช้ฟังก์ชัน `chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)` ต้องได้ค่าเป็น `[[0, 1, 2], [3, 4, 5], [6]]`

```js
assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3), [
  [0, 1, 2],
  [3, 4, 5],
  [6]
]);
```

การเรียกใช้ฟังก์ชัน `chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)` ต้องได้ค่าเป็น `[[0, 1, 2, 3], [4, 5, 6, 7], [8]]`

```js
assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4), [
  [0, 1, 2, 3],
  [4, 5, 6, 7],
  [8]
]);
```

การเรียกใช้ฟังก์ชัน `chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)` ต้องได้ค่าเป็น `[[0, 1], [2, 3], [4, 5], [6, 7], [8]]`

```js
assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2), [
  [0, 1],
  [2, 3],
  [4, 5],
  [6, 7],
  [8]
]);
```

# --seed--

## --seed-contents--

```js
function chunkArrayInGroups(arr, size) {
  return arr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
```

# --solutions--

```js
function chunkArrayInGroups(arr, size) {
  let out = [];

  for (let i = 0; i < arr.length; i += size) {
    out.push(arr.slice(i, i + size));
  }

  return out;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
```
