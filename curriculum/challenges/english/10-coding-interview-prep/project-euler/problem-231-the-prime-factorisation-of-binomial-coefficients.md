---
id: 5900f4531000cf542c50ff66
title: 'Problem 231: The prime factorisation of binomial coefficients'
challengeType: 5
forumTopicId: 301875
dashedName: problem-231-the-prime-factorisation-of-binomial-coefficients
---

# --description--

สัมประสิทธิ์ทวินาม $\displaystyle\binom{10}{3} = 120$

$120 = 2^3 × 3 × 5 = 2 × 2 × 2 × 3 × 5$, and $2 + 2 + 2 + 3 + 5 = 14$.

ดังนั้นผลรวมของเทอมในการแยกตัวประกอบเฉพาะของ $\displaystyle\binom{10}{3}$ คือ $14$

หาผลรวมของเงื่อนไขในการแยกตัวประกอบเฉพาะของ $\binom{20\\,000\\,000}{15\\,000\\,000}$

# --hints--

`primeFactorisation()` ควร return `7526965179680`.

```js
assert.strictEqual(primeFactorisation(), 7526965179680);
```

# --seed--

## --seed-contents--

```js
function primeFactorisation() {

  return true;
}

primeFactorisation();
```

# --solutions--

```js
// solution required
```
