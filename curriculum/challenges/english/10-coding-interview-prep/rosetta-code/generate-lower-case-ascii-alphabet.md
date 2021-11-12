---
id: 5a23c84252665b21eecc7e7a
title: Generate lower case ASCII alphabet
challengeType: 5
forumTopicId: 302274
dashedName: generate-lower-case-ascii-alphabet
---

# --description--

เขียนฟังก์ชันเพื่อสร้างarrayของอักขระ ASCII ตัวพิมพ์เล็กสำหรับช่วงที่กำหนด ตัวอย่างเช่น เมื่อกำหนดช่วง `['a', 'd']` ฟังก์ชันควร return `['a', 'b', 'c', 'd']`.

# --hints--

`lascii` ควรเป็น function.

```js
assert(typeof lascii == 'function');
```

`lascii("a","d")` ควร return array.

```js
assert(Array.isArray(lascii('a', 'd')));
```

`lascii('a','d')` ควร return `[ 'a', 'b', 'c', 'd' ]`.

```js
assert.deepEqual(lascii('a', 'd'), results[0]);
```

`lascii('c','i')` ควร return `[ 'c', 'd', 'e', 'f', 'g', 'h', 'i' ]`.

```js
assert.deepEqual(lascii('c', 'i'), results[1]);
```

`lascii('m','q')` ควร return `[ 'm', 'n', 'o', 'p', 'q' ]`.

```js
assert.deepEqual(lascii('m', 'q'), results[2]);
```

`lascii('k','n')` ควร return `[ 'k', 'l', 'm', 'n' ]`.

```js
assert.deepEqual(lascii('k', 'n'), results[3]);
```

`lascii('t','z')` ควร return `[ 't', 'u', 'v', 'w', 'x', 'y', 'z' ]`.

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
