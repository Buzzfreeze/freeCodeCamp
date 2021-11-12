---
id: 5a23c84252665b21eecc8040
title: Sum multiples of 3 and 5
challengeType: 5
forumTopicId: 302332
dashedName: sum-multiples-of-3-and-5
---

# --description--

วัตถุประสงค์คือเพื่อเขียนฟังก์ชันที่หาผลรวมของผลคูณ บวกกันทั้งหมดของ 3 หรือ 5 ด้านล่าง *n*.

# --hints--

`sumMults` ควรเป็น function.

```js
assert(typeof sumMults == 'function');
```

`sumMults(10)` ควร return number.

```js
assert(typeof sumMults(10) == 'number');
```

`sumMults(10)` ควร return `23`.

```js
assert.equal(sumMults(10), 23);
```

`sumMults(100)` ควร return `2318`.

```js
assert.equal(sumMults(100), 2318);
```

`sumMults(1000)` ควร return `233168`.

```js
assert.equal(sumMults(1000), 233168);
```

`sumMults(10000)` ควร return `23331668`.

```js
assert.equal(sumMults(10000), 23331668);
```

`sumMults(100000)` ควร return `2333316668`.

```js
assert.equal(sumMults(100000), 2333316668);
```

# --seed--

## --seed-contents--

```js
function sumMults(n) {

}
```

# --solutions--

```js
function sumMults(n) {
  var sum = 0;
  for (var i = 1; i < n; i++) {
    if (i % 3 == 0 || i % 5 == 0) sum += i;
  }
  return sum;
}
```
