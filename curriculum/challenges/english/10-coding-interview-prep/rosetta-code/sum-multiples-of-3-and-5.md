---
id: 5a23c84252665b21eecc8040
title: Sum multiples of 3 and 5
challengeType: 5
forumTopicId: 302332
dashedName: sum-multiples-of-3-and-5
---

# --description--

ให้เขียนฟังก์ชันที่หาผลรวมของเลขที่มีตัวประกอบเป็น 3 หรือ 5 แต่น้อยกว่า *n*

# --hints--

`sumMults` ต้องเป็นฟังก์ชัน

```js
assert(typeof sumMults == 'function');
```

`sumMults(10)` ต้องคืนค่าเป็นตัวเลข

```js
assert(typeof sumMults(10) == 'number');
```

`sumMults(10)` ต้องคืนค่าเป็น `23`

```js
assert.equal(sumMults(10), 23);
```

`sumMults(100)` ต้องคืนค่าเป็น `2318`

```js
assert.equal(sumMults(100), 2318);
```

`sumMults(1000)` ต้องคืนค่าเป็น `233168`

```js
assert.equal(sumMults(1000), 233168);
```

`sumMults(10000)` ต้องคืนค่าเป็น `23331668`

```js
assert.equal(sumMults(10000), 23331668);
```

`sumMults(100000)` ต้องคืนค่าเป็น `2333316668`

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
