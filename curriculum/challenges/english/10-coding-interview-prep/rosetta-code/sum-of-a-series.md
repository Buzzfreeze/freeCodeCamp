---
id: 5a23c84252665b21eecc8041
title: Sum of a series
challengeType: 5
forumTopicId: 302333
dashedName: sum-of-a-series
---

# --description--

คำนวณ **n**<sup>th</sup> ของ [series](<https://en.wikipedia.org/wiki/Series (mathematics)>) เช่น ผลรวมของ **n** เงื่อนไขแรกของ [ลำดับ ที่เกี่ยวข้อง](https://en.wikipedia.org/wiki/sequence) ค่านี้อย่างไม่เป็นทางการหรือขีดจำกัดเมื่อ **n** มีแนวโน้มเป็นอนันต์ เรียกอีกอย่างว่า *ผลรวมของซีรีส์* ดังนั้นจึงเป็นชื่อของงานนี้ สำหรับงานนี้ ให้ใช้: $S_n = \displaystyle\sum_{k=1}^n \frac{1}{k^2}$

# --instructions--

เขียนฟังก์ชันที่ใช้ $a$ และ $b$ เป็นพารามิเตอร์และreturnผลรวมของ $a^{th}$ ถึง $b^{th}$ สมาชิกของลำดับ

# --hints--

`sum` ควรเป็น function.

```js
assert(typeof sum == 'function');
```

`sum(1, 100)` ควร return number.

```js
assert(typeof sum(1, 100) == 'number');
```

`sum(1, 100)` ควร return `1.6349839001848923`.

```js
assert.equal(sum(1, 100), 1.6349839001848923);
```

`sum(33, 46)` ควร return `0.009262256361481223`.

```js
assert.equal(sum(33, 46), 0.009262256361481223);
```

`sum(21, 213)` ควร return `0.044086990748706555`.

```js
assert.equal(sum(21, 213), 0.044086990748706555);
```

`sum(11, 111)` ควร return `0.08619778593108679`.

```js
assert.equal(sum(11, 111), 0.08619778593108679);
```

`sum(1, 10)` ควร return `1.5497677311665408`.

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
