---
id: 5a23c84252665b21eecc7edb
title: Largest int from concatenated ints
challengeType: 5
forumTopicId: 302298
dashedName: largest-int-from-concatenated-ints
---

# --description--

กำหนดชุดของจำนวนเต็มบวก ให้เขียนฟังก์ชันเพื่อเรียงลำดับจำนวนเต็มในลักษณะที่การต่อกันของตัวเลขทำให้เกิดจำนวนเต็มที่มากที่สุดเท่าที่จะเป็นไปได้และส่งคืนจำนวนเต็มนี้

# --hints--

`maxCombine` ควรเป็น function.

```js
assert(typeof maxCombine == 'function');
```

`maxCombine([1, 3, 3, 4, 55])` ควร return number.

```js
assert(typeof maxCombine([1, 3, 3, 4, 55]) == 'number');
```

`maxCombine([1, 3, 3, 4, 55])` ควร return `554331`.

```js
assert.equal(maxCombine([1, 3, 3, 4, 55]), 554331);
```

`maxCombine([71, 45, 23, 4, 5])` ควร return `71545423`.

```js
assert.equal(maxCombine([71, 45, 23, 4, 5]), 71545423);
```

`maxCombine([14, 43, 53, 114, 55])` ควร return `55534314114`.

```js
assert.equal(maxCombine([14, 43, 53, 114, 55]), 55534314114);
```

`maxCombine([1, 34, 3, 98, 9, 76, 45, 4])` ควร return `998764543431`.

```js
assert.equal(maxCombine([1, 34, 3, 98, 9, 76, 45, 4]), 998764543431);
```

`maxCombine([54, 546, 548, 60])` ควร return `6054854654`.

```js
assert.equal(maxCombine([54, 546, 548, 60]), 6054854654);
```

# --seed--

## --seed-contents--

```js
function maxCombine(xs) {

}
```

# --solutions--

```js
function maxCombine(xs) {
  return parseInt(
    xs
      .sort(function(x, y) {
        var a = x.toString(),
          b = y.toString(),
          ab = parseInt(a + b),
          ba = parseInt(b + a);

        return ab > ba ? -1 : ab < ba ? 1 : 0;
      })
      .join(''),
    10
  );
}
```
