---
id: 5a23c84252665b21eecc8013
title: Sorting algorithms/Strand sort
challengeType: 5
forumTopicId: 302319
dashedName: sorting-algorithmsstrand-sort
---

# --description--

ให้เขียนฟังก์ชันเพื่อเรียง array ของจำนวนเต็ม โดยใช้ [Strand sort](<https://en.wikipedia.org/wiki/Strand sort>) 

วิธีการนี้จะทำการแยก array ย่อยที่เรียงลำดับแล้วออกมาจาก array ที่ยังไม่ได้เรียงลำดับ

# --hints--

`strandSort` ต้องเป็นฟังก์ชัน

```js
assert(typeof strandSort == 'function');
```

`strandSort([25, 32, 12, 7, 20])` ต้องคืนค่าเป็น array

```js
assert(Array.isArray(strandSort([25, 32, 12, 7, 20])));
```

`strandSort([25, 32, 12, 7, 20])` ต้องคืนค่าเป็น `[7, 12, 20, 25, 32]`

```js
assert.deepEqual(strandSort([25, 32, 12, 7, 20]), [7, 12, 20, 25, 32]);
```

`strandSort([38, 45, 35, 8, 13])` ต้องคืนค่าเป็น `[8, 13, 35, 38, 45]`

```js
assert.deepEqual(strandSort([38, 45, 35, 8, 13]), [8, 13, 35, 38, 45]);
```

`strandSort([43, 36, 20, 34, 24])` ต้องคืนค่าเป็น `[20, 24, 34, 36, 43]`

```js
assert.deepEqual(strandSort([43, 36, 20, 34, 24]), [20, 24, 34, 36, 43]);
```

`strandSort([12, 33, 26, 18, 1, 16, 38])` ต้องคืนค่าเป็น `[1, 12, 16, 18, 26, 33, 38]`

```js
assert.deepEqual(strandSort([12, 33, 26, 18, 1, 16, 38]), [
  1,
  12,
  16,
  18,
  26,
  33,
  38
]);
```

`strandSort([3, 39, 48, 16, 1, 4, 29])` ต้องคืนค่าเป็น `[1, 3, 4, 16, 29, 39, 48]`

```js
assert.deepEqual(strandSort([3, 39, 48, 16, 1, 4, 29]), [
  1,
  3,
  4,
  16,
  29,
  39,
  48
]);
```

# --seed--

## --seed-contents--

```js
function strandSort(list) {

}
```

# --solutions--

```js
function strandSort(list) {
  function merge(left, right) {
    var result = [];
    while (left.length != 0 && right.length != 0) {
      if (left[0] <= right[0]) result.push(left.shift());
      else result.push(right.shift());
    }
    result.push.apply(result, left);
    result.push.apply(result, right);
    return result;
  }

  if (list.length <= 1) return list;
  var result = [];
  while (list.length > 0) {
    var sorted = [];
    sorted.push(list.shift());
    var len = list.length;
    for (var i = 1; i < len; i++) {
      var elem = list[i];
      if (sorted[i - 1] <= elem) {
        sorted.push(elem);
        sorted.splice(i, 1);
      }
    }

    result = merge(result, sorted);
  }
  return result;
}
```
