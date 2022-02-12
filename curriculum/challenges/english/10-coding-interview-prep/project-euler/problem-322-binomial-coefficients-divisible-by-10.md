---
id: 5900f4af1000cf542c50ffc1
title: 'Problem 322: Binomial coefficients divisible by 10'
challengeType: 5
forumTopicId: 301979
dashedName: problem-322-binomial-coefficients-divisible-by-10
---

# --description--

ให้ $T(m, n)$ เป็นจำนวนของสัมประสิทธิ์ทวินาม ${}^iC_n$ ที่หารด้วย 10 ลงตัว ถ้า $n ≤ i &lt; m$ ($i$, $m$ และ $n$ เป็นจำนวนเต็มบวก)

จะได้รับ $T({10}^9, {10}^7 - 10) = 989\\,697\\,000$

ให้หา $T({10}^{18}, {10}^{12} - 10)$

# --hints--

`binomialCoefficientsDivisibleBy10()` ต้องคืนค่าเป็น `999998760323314000`

```js
assert.strictEqual(binomialCoefficientsDivisibleBy10(), 999998760323314000);
```

# --seed--

## --seed-contents--

```js
function binomialCoefficientsDivisibleBy10() {

  return true;
}

binomialCoefficientsDivisibleBy10();
```

# --solutions--

```js
// solution required
```
