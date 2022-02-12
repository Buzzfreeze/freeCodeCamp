---
id: 5e6dd14192286d95fc43046e
title: Longest string challenge
challengeType: 5
forumTopicId: 385275
dashedName: longest-string-challenge
---

# --description--

หาสตริงที่ยาวที่สุดในบรรดาสตริงที่กำหนด

# --instructions--

ให้เขียนฟังก์ชันที่รับค่า array ของสตริง และคืนค่าเป็น array ของสตริงที่มีความยาวมากที่สุด

# --hints--

`longestString` ต้องเป็นฟังก์ชัน

```js
assert(typeof longestString == 'function');
```

`longestString(["a", "bb", "ccc", "ee", "f", "ggg"])` ต้องคืนค่าเป็น array

```js
assert(Array.isArray(longestString(['a', 'bb', 'ccc', 'ee', 'f', 'ggg'])));
```

`longestString(["a", "bb", "ccc", "ee", "f", "ggg"])` ต้องคืนค่าเป็น `["ccc", "ggg"]'`

```js
assert.deepEqual(longestString(['a', 'bb', 'ccc', 'ee', 'f', 'ggg']), [
  'ccc',
  'ggg'
]);
```

`longestString(["afedg", "bb", "sdccc", "efdee", "f", "geegg"])` ต้องคืนค่าเป็น `["afedg", "sdccc", "efdee", "geegg"]`

```js
assert.deepEqual(
  longestString(['afedg', 'bb', 'sdccc', 'efdee', 'f', 'geegg']),
  ['afedg', 'sdccc', 'efdee', 'geegg']
);
```

`longestString(["a", "bhghgb", "ccc", "efde", "fssdrr", "ggg"])` ต้องคืนค่าเป็น `["bhghgb", "fssdrr"]`

```js
assert.deepEqual(
  longestString(['a', 'bhghgb', 'ccc', 'efde', 'fssdrr', 'ggg']),
  ['bhghgb', 'fssdrr']
);
```

`longestString(["ahgfhg", "bdsfsb", "ccc", "ee", "f", "ggdsfg"])` ต้องคืนค่าเป็น `["ahgfhg", "bdsfsb", "ggdsfg"]`

```js
assert.deepEqual(
  longestString(['ahgfhg', 'bdsfsb', 'ccc', 'ee', 'f', 'ggdsfg']),
  ['ahgfhg', 'bdsfsb', 'ggdsfg']
);
```

`longestString(["a", "bbdsf", "ccc", "edfe", "gzzzgg"])` ต้องคืนค่าเป็น `["gzzzgg"]`

```js
assert.deepEqual(longestString(['a', 'bbdsf', 'ccc', 'edfe', 'gzzzgg']), [
  'gzzzgg'
]);
```

# --seed--

## --seed-contents--

```js
function longestString(strings) {

}
```

# --solutions--

```js
function longestString(strings) {
    var mx = 0;
    var result = []
    strings.forEach(function (e) {
        if (e.length > mx) {
            mx = e.length
            result = [e]
        } else if (e.length == mx)
            result.push(e)
    })

    return result
}
```
