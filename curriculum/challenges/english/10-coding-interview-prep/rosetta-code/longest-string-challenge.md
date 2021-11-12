---
id: 5e6dd14192286d95fc43046e
title: Longest string challenge
challengeType: 5
forumTopicId: 385275
dashedName: longest-string-challenge
---

# --description--

หาstringที่ยาวที่สุดในบรรดาstringที่กำหนด

# --instructions--

เขียนฟังก์ชันที่รับarrayของstringและส่งกลับstringที่มีความยาวเท่ากับความยาวที่ยาวที่สุด

# --hints--

`longestString` ควรเป็น function.

```js
assert(typeof longestString == 'function');
```

`longestString(["a", "bb", "ccc", "ee", "f", "ggg"])` ควร return array.

```js
assert(Array.isArray(longestString(['a', 'bb', 'ccc', 'ee', 'f', 'ggg'])));
```

`longestString(["a", "bb", "ccc", "ee", "f", "ggg"])` ควร return `["ccc", "ggg"]'`.

```js
assert.deepEqual(longestString(['a', 'bb', 'ccc', 'ee', 'f', 'ggg']), [
  'ccc',
  'ggg'
]);
```

`longestString(["afedg", "bb", "sdccc", "efdee", "f", "geegg"])` ควร return `["afedg", "sdccc", "efdee", "geegg"]`.

```js
assert.deepEqual(
  longestString(['afedg', 'bb', 'sdccc', 'efdee', 'f', 'geegg']),
  ['afedg', 'sdccc', 'efdee', 'geegg']
);
```

`longestString(["a", "bhghgb", "ccc", "efde", "fssdrr", "ggg"])` ควร return `["bhghgb", "fssdrr"]`.

```js
assert.deepEqual(
  longestString(['a', 'bhghgb', 'ccc', 'efde', 'fssdrr', 'ggg']),
  ['bhghgb', 'fssdrr']
);
```

`longestString(["ahgfhg", "bdsfsb", "ccc", "ee", "f", "ggdsfg"])` ควร return `["ahgfhg", "bdsfsb", "ggdsfg"]`.

```js
assert.deepEqual(
  longestString(['ahgfhg', 'bdsfsb', 'ccc', 'ee', 'f', 'ggdsfg']),
  ['ahgfhg', 'bdsfsb', 'ggdsfg']
);
```

`longestString(["a", "bbdsf", "ccc", "edfe", "gzzzgg"])` ควร return `["gzzzgg"]`.

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
