---
id: 5a23c84252665b21eecc7e1e
title: Dot product
challengeType: 5
forumTopicId: 302251
dashedName: dot-product
---

# --description--

ให้สร้างฟังก์ชันเพื่อคำนวน **[dot product](<https://en.wikipedia.org/wiki/Dot product>)** หรือที่เรียกกันว่า **scalar product** ของสอง vectors

# --hints--

`dotProduct` ต้องเป็นฟังก์ชัน

```js
assert(typeof dotProduct == 'function');
```

`dotProduct([1, 3, -5], [4, -2, -1])` ต้องคืนค่าเป็นตัวเลข

```js
assert(typeof dotProduct([1, 3, -5], [4, -2, -1]) == 'number');
```

`dotProduct([1, 3, -5], [4, -2, -1])` ต้องคืนค่าเป็น `3`

```js
assert.equal(dotProduct([1, 3, -5], [4, -2, -1]), 3);
```

`dotProduct([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])` ต้องคืนค่าเป็น `130`

```js
assert.equal(dotProduct([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]), 130);
```

`dotProduct([5, 4, 3, 2], [7, 8, 9, 6])` ต้องคืนค่าเป็น `106`

```js
assert.equal(dotProduct([5, 4, 3, 2], [7, 8, 9, 6]), 106);
```

`dotProduct([-5, 4, -3, 2], [-7, -8, 9, -6])` ต้องคืนค่าเป็น `-36`

```js
assert.equal(dotProduct([-5, 4, -3, 2], [-7, -8, 9, -6]), -36);
```

`dotProduct([17, 27, 34, 43, 15], [62, 73, 48, 95, 110])` ต้องคืนค่าเป็น `10392`

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
