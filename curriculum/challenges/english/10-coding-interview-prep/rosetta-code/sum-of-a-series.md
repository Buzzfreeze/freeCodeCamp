---
id: 5a23c84252665b21eecc8041
title: Sum of a series
challengeType: 5
forumTopicId: 302333
dashedName: sum-of-a-series
---

# --description--

ให้หาค่าของตำแหน่งที่ **n** ของ [series](<https://en.wikipedia.org/wiki/Series (mathematics)>) 

เช่น ผลรวมของค่า **n** ตัวแรกของ [ลำดับ](https://en.wikipedia.org/wiki/sequence) ที่เกี่ยวข้อง

ให้หาค่าโดยใช้ $S_n = \displaystyle\sum_{k=1}^n \frac{1}{k^2}$

# --instructions--

ให้เขียนฟังก์ชันที่รับค่า $a$ และ $b$ เป็นพารามิเตอร์ และคืนค่าเป็นผลรวมของสมาชิกตั้งแต่ตำแหน่งที่ $a$ ถึงตำแหน่งที่ $b$

# --hints--

`sum` ต้องเป็นฟังก์ชัน

```js
assert(typeof sum == 'function');
```

`sum(1, 100)` ต้องคืนค่าเป็นตัวเลข

```js
assert(typeof sum(1, 100) == 'number');
```

`sum(1, 100)` ต้องคืนค่าเป็น `1.6349839001848923`

```js
assert.equal(sum(1, 100), 1.6349839001848923);
```

`sum(33, 46)` ต้องคืนค่าเป็น `0.009262256361481223`

```js
assert.equal(sum(33, 46), 0.009262256361481223);
```

`sum(21, 213)` ต้องคืนค่าเป็น `0.044086990748706555`

```js
assert.equal(sum(21, 213), 0.044086990748706555);
```

`sum(11, 111)` ต้องคืนค่าเป็น `0.08619778593108679`

```js
assert.equal(sum(11, 111), 0.08619778593108679);
```

`sum(1, 10)` ต้องคืนค่าเป็น `1.5497677311665408`

```js
assert.equal(sum(1, 10), 1.5497677311665408);
```

# --seed--

## --seed-contents--

```js
function sum(a, b) {

}
```

# --solutions--

```js
function sum(a, b) {
  function fn(x) {
    return 1 / (x * x);
  }
  var s = 0;
  for (; a <= b; a++) s += fn(a);
  return s;
}
```
