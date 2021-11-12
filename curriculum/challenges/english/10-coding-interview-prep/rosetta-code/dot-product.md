---
id: 5a23c84252665b21eecc7e1e
title: Dot product
challengeType: 5
forumTopicId: 302251
dashedName: dot-product
---

# --description--

สร้าง function เพื่อคำนวน **[dot product](<https://en.wikipedia.org/wiki/Dot product>)** ที่รู้จักกันในนาม  **scalar product** ของสอง vectors.

# --hints--

`dotProduct` ควรเป็น function.

```js
assert(typeof dotProduct == 'function');
```

`dotProduct([1, 3, -5], [4, -2, -1])` ควร return number.

```js
assert(typeof dotProduct([1, 3, -5], [4, -2, -1]) == 'number');
```

`dotProduct([1, 3, -5], [4, -2, -1])` ควร return `3`.

```js
assert.equal(dotProduct([1, 3, -5], [4, -2, -1]), 3);
```

`dotProduct([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])` ควร return `130`.

```js
assert.equal(dotProduct([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]), 130);
```

`dotProduct([5, 4, 3, 2], [7, 8, 9, 6])` ควร return `106`.

```js
assert.equal(dotProduct([5, 4, 3, 2], [7, 8, 9, 6]), 106);
```

`dotProduct([-5, 4, -3, 2], [-7, -8, 9, -6])` ควร return `-36`.

```js
assert.equal(dotProduct([-5, 4, -3, 2], [-7, -8, 9, -6]), -36);
```

`dotProduct([17, 27, 34, 43, 15], [62, 73, 48, 95, 110])` ควร return `10392`.

```js
assert.equal(dotProduct([17, 27, 34, 43, 15], [62, 73, 48, 95, 110]), 10392);
```

# --seed--

## --seed-contents--

```js
function dotProduct(ary1, ary2) {

}
```

# --solutions--

```js
function dotProduct(ary1, ary2) {
  var dotprod = 0;
  for (var i = 0; i < ary1.length; i++) dotprod += ary1[i] * ary2[i];
  return dotprod;
}
```
