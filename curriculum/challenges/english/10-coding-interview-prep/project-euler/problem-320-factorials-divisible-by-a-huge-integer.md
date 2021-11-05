---
id: 5900f4ae1000cf542c50ffbf
title: 'Problem 320: Factorials divisible by a huge integer'
challengeType: 5
forumTopicId: 301977
dashedName: problem-320-factorials-divisible-by-a-huge-integer
---

# --description--

ให้ $N(i)$ เป็นจำนวนเต็มที่น้อยที่สุด $n$ โดยที่ $n!$ หารด้วย $(i!)^{1234567890}$ ลงตัว

ให้ $S(u) = \sum N(i)$ สำหรับ $10 ≤ i ≤ u$

$S(1000)=614\\,538\\,266\\,565\\,663$

หา $S(1\\,000\\,000)\bmod {10}^{18}$

# --hints--

`divisibleByHugeInteger()` ควร return `278157919195482660`.

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
