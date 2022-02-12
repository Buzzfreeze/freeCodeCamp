---
id: 5900f4ae1000cf542c50ffbf
title: 'Problem 320: Factorials divisible by a huge integer'
challengeType: 5
forumTopicId: 301977
dashedName: problem-320-factorials-divisible-by-a-huge-integer
---

# --description--

ให้ $N(i)$ เป็นจำนวนเต็มที่น้อยที่สุด ($n$) ที่ $n!$ หารด้วย $(i!)^{1234567890}$ ลงตัว

ให้ $S(u) = \sum N(i)$ ถ้า $10 ≤ i ≤ u$

$S(1000)=614\\,538\\,266\\,565\\,663$

ให้หา $S(1\\,000\\,000)\bmod {10}^{18}$

# --hints--

`divisibleByHugeInteger()` ต้องคืนค่าเป็น `278157919195482660`

```js
assert.strictEqual(divisibleByHugeInteger(), 278157919195482660);
```

# --seed--

## --seed-contents--

```js
function divisibleByHugeInteger() {

  return true;
}

divisibleByHugeInteger();
```

# --solutions--

```js
// solution required
```
