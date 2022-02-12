---
id: 5900f4b21000cf542c50ffc5
title: 'Problem 326: Modulo Summations'
challengeType: 5
forumTopicId: 301983
dashedName: problem-326-modulo-summations
---

# --description--

ให้ a เป็นลำดับที่กำหนดซ้ำโดย: $a_1 = 1$, $\displaystyle a_n = \left(\sum_{k = 1}^{n - 1} k \times a_k\right)\bmod n$

ดังนั้น 10 องค์ประกอบแรกของ $a_n$ คือ: 1, 1, 0, 3, 0, 3, 5, 4, 1, 9

ให้ $f(N, M)$ แทนจำนวนคู่ $(p, q)$ ที่:

$$ 1 \le p \le q \le N \\; \text{and} \\; \left(\sum_{i = p}^q a_i\right)\bmod M = 0$$

จะเห็นได้ว่า $f(10, 10) = 4$ กับคู่ (3,3), (5,5), (7,9) และ (9,10)

กำหนดให้ $f({10}^4, {10}^3) = 97\\,158$

ให้หา $f({10}^{12}, {10}^6)$

# --hints--

`moduloSummations()` ต้องคืนค่าเป็น `1966666166408794400`

```js
assert.strictEqual(moduloSummations(), 1966666166408794400);
```

# --seed--

## --seed-contents--

```js
function moduloSummations() {

  return true;
}

moduloSummations();
```

# --solutions--

```js
// solution required
```
