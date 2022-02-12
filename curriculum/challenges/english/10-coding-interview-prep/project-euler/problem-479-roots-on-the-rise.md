---
id: 5900f54b1000cf542c51005d
title: 'Problem 479: Roots on the Rise'
challengeType: 5
forumTopicId: 302156
dashedName: problem-479-roots-on-the-rise
---

# --description--

ให้ $a_k$, $b_k$, และ $c_k$ เป็นสามคำตอบ (เป็นจำนวนจริงหรือจำนวนเชิงซ้อนก็ได้) ของสมการ $\frac{1}{x} = {\left(\frac{k}{x} \right)}^2 (k + x^2) - kx$

ถ้า $k = 5$ จะเห็นว่า  $\{a_5, b_5, c_5\\}$ มีค่าประมาณ $\\{5.727244, -0.363622 + 2.057397i, -0.363622 - 2.057397i\\}$

ให้ $S(n) = \displaystyle\sum_{p = 1}^n \sum_{k = 1}^n {(a_k + b_k)}^p {(b_k + c_k)}^p {(c_k + a_k)}^p$ สำหรับทุกจำนวนเต็ม $p$, $k$ ที่ทำให้ $1 ≤ p, k ≤ n$

$S(n)$ เป็นจะเป็นจำนวนเต็มเสมอ $S(4) = 51\\,160$

ให้หา $S({10}^6) \text{ modulo } 1\\,000\\,000\\,007$

# --hints--

`rootsOnTheRise()` ต้องคืนค่าเป็น `191541795`

```js
assert.strictEqual(rootsOnTheRise(), 191541795);
```

# --seed--

## --seed-contents--

```js
function rootsOnTheRise() {

  return true;
}

rootsOnTheRise();
```

# --solutions--

```js
// solution required
```
