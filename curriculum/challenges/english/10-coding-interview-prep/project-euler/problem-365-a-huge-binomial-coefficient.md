---
id: 5900f4da1000cf542c50ffec
title: 'Problem 365: A huge binomial coefficient'
challengeType: 5
forumTopicId: 302026
dashedName: problem-365-a-huge-binomial-coefficient
---

# --description--

สัมประสิทธิ์ทวินาม $\displaystyle\binom{{10}^{18}}{{10}^9}$ เป็นตัวเลขที่มีตัวเลขมากกว่า 9 พันล้าน ($9 × {10}^9$)

ให้ $M(n, k, m)$ แทนค่าสัมประสิทธิ์ทวินาม $\displaystyle\binom{n}{k}$ modulo $m$

คำนวณ $\sum M({10}^{18}, {10}^9, p \times q \times r)$ for $1000 &lt; พี &lt; ถาม &lt; ร &lt; 5000$ และ $p$, $q$, $r$ primes

# --hints--

`hugeBinomialCoefficient()` ควร return `162619462356610300`.

```js
assert.strictEqual(hugeBinomialCoefficient(), 162619462356610300);
```

# --seed--

## --seed-contents--

```js
function hugeBinomialCoefficient() {

  return true;
}

hugeBinomialCoefficient();
```

# --solutions--

```js
// solution required
```
