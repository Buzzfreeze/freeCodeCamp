---
id: 5a23c84252665b21eecc7e7a
title: Generate lower case ASCII alphabet
challengeType: 5
forumTopicId: 302274
dashedName: generate-lower-case-ascii-alphabet
---

# --description--

ให้เขียนฟังก์ชันเพื่อสร้าง array ของตัวอักษร ASCII ตัวพิมพ์เล็กในช่วงที่กำหนด เช่น เมื่อกำหนดช่วงเป็น `['a', 'd']` ฟังก์ชันต้องคืนค่าเป็น `['a', 'b', 'c', 'd']`

# --hints--

`lascii` ต้องเป็นฟังก์ชัน

```js
assert(typeof lascii == 'function');
```

`lascii("a","d")` ต้องคืนค่าเป็น array

```js
assert(Array.isArray(lascii('a', 'd')));
```

`lascii('a','d')` ต้องคืนค่าเป็น `[ 'a', 'b', 'c', 'd' ]`

```js
assert.deepEqual(lascii('a', 'd'), results[0]);
```

`lascii('c','i')` ต้องคืนค่าเป็น `[ 'c', 'd', 'e', 'f', 'g', 'h', 'i' ]`

```js
assert.deepEqual(lascii('c', 'i'), results[1]);
```

`lascii('m','q')` ต้องคืนค่าเป็น `[ 'm', 'n', 'o', 'p', 'q' ]`

```js
assert.deepEqual(lascii('m', 'q'), results[2]);
```

`lascii('k','n')` ต้องคืนค่าเป็น `[ 'k', 'l', 'm', 'n' ]`

```js
assert.deepEqual(lascii('k', 'n'), results[3]);
```

`lascii('t','z')` ต้องคืนค่าเป็น `[ 't', 'u', 'v', 'w', 'x', 'y', 'z' ]`

```js
assert.deepEqual(lascii('t', 'z'), results[4]);
```

# --seed--

## --after-user-code--

```js
let results=[
  [ 'a', 'b', 'c', 'd' ],
  [ 'c', 'd', 'e', 'f', 'g', 'h', 'i' ],
  [ 'm', 'n', 'o', 'p', 'q' ],
  [ 'k', 'l', 'm', 'n' ],
  [ 't', 'u', 'v', 'w', 'x', 'y', 'z' ]
]
```

## --seed-contents--

```js
function lascii(cFrom, cTo) {

}
```

# --solutions--

```js
function lascii(cFrom, cTo) {

  function cRange(cFrom, cTo) {
    var iStart = cFrom.charCodeAt(0);

    return Array.apply(
      null, Array(cTo.charCodeAt(0) - iStart + 1)
    ).map(function (_, i) {

      return String.fromCharCode(iStart + i);

    });
  }

  return cRange(cFrom, cTo);

}
```
