---
id: ab306dbdcc907c7ddfc30830
title: Steamroller
challengeType: 5
forumTopicId: 16079
dashedName: steamroller
---

# --description--

จงทำให้ array หลายมิติกลายเป็น array มิติเดียว โดยต้องรองรับระดับการซ้อนหลายๆระดับ

# --hints--

`steamrollArray([[["a"]], [["b"]]])` ต้องคืนค่าเป็น `["a", "b"]`.

```js
assert.deepEqual(steamrollArray([[['a']], [['b']]]), ['a', 'b']);
```

`steamrollArray([1, [2], [3, [[4]]]])` ต้องคืนค่าเป็น `[1, 2, 3, 4]`.

```js
assert.deepEqual(steamrollArray([1, [2], [3, [[4]]]]), [1, 2, 3, 4]);
```

`steamrollArray([1, [], [3, [[4]]]])` ต้องคืนค่าเป็น `[1, 3, 4]`.

```js
assert.deepEqual(steamrollArray([1, [], [3, [[4]]]]), [1, 3, 4]);
```

`steamrollArray([1, {}, [3, [[4]]]])` ต้องคืนค่าเป็น `[1, {}, 3, 4]`.

```js
assert.deepEqual(steamrollArray([1, {}, [3, [[4]]]]), [1, {}, 3, 4]);
```

ห้ามใช้ method `Array.prototype.flat()` หรือ `Array.prototype.flatMap()`

```js
assert(!code.match(/\.\s*flat\s*\(/) && !code.match(/\.\s*flatMap\s*\(/));
```

# --seed--

## --seed-contents--

```js
function steamrollArray(arr) {
  return arr;
}

steamrollArray([1, [2], [3, [[4]]]]);
```

# --solutions--

```js
function steamrollArray(arr) {
  if (!Array.isArray(arr)) {
    return [arr];
  }
  var out = [];
  arr.forEach(function(e) {
    steamrollArray(e).forEach(function(v) {
      out.push(v);
    });
  });
  return out;
}
```
