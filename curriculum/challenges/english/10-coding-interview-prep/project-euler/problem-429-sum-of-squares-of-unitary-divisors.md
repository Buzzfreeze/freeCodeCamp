---
id: 5900f5191000cf542c51002c
title: 'Problem 429: Sum of squares of unitary divisors'
challengeType: 5
forumTopicId: 302099
dashedName: problem-429-sum-of-squares-of-unitary-divisors
---

# --description--

ตัวหารรวม $d$ ของตัวเลข $n$ เป็นตัวหารของ $n$ ที่มีคุณสมบัติ $gcd(d, \frac{n}{d}) = 1$

ตัวหารรวมของ $4! = 24$ คือ 1, 3, 8 และ 24

ผลรวมของกำลังสองของพวกเขาคือ $12 + 32 + 82 + 242 = 650$

ให้ $S(n)$ แทนผลรวมของกำลังสองของตัวหารรวมของ $n$ ดังนั้น $S(4!) = 650$

หา $S(100\\,000\\,000!)$ modulo $1\\,000\\,000\\,009$

# --hints--

`sumSquaresOfUnitaryDivisors()` ควร return `98792821`.

```js
assert.strictEqual(sumSquaresOfUnitaryDivisors(), 98792821);
```

# --seed--

## --seed-contents--

```js
function sumSquaresOfUnitaryDivisors() {

  return true;
}

sumSquaresOfUnitaryDivisors();
```

# --solutions--

```js
// solution required
```
