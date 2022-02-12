---
id: 5900f5411000cf542c510054
title: 'Problem 468: Smooth divisors of binomial coefficients'
challengeType: 5
forumTopicId: 302143
dashedName: problem-468-smooth-divisors-of-binomial-coefficients
---

# --description--

จำนวนเต็มเรียกว่า B-smooth หากไม่มีตัวประกอบเฉพาะตัวใดที่มากกว่า $B$

ให้ $SB(n)$ เป็นตัวหาร B-smooth ที่มากที่สุดของ $n$

ตัวอย่าง:

$$\begin{align}
  & S_1(10) = 1 \\\\
  & S_4(2\\,100) = 12 \\\\
  & S_{17}(2\\,496\\,144) = 5\\,712
\end{align}$$

กำหนดให้ $F(n) = \displaystyle\sum_{B = 1}^n \sum_{r = 0}^n S_B(\displaystyle\binom{n}{r})$  
ในที่นี้ $\displaystyle\binom{n}{r}$ หมายถึงสัมประสิทธิ์ทวินาม

ตัวอย่าง:

$$\begin{align}
  & F(11) = 3132 \\\\
  & F(1\\,111)\bmod 1\\,000\\,000\\,993 = 706\\,036\\,312 \\\\
  & F(111\\,111)\bmod 1\\,000\\,000\\,993 = 22\\,156\\,169
\end{align}$$

ให้หา $F(11\\,111\\,111)\bmod 1\\,000\\,000\\,993$

# --hints--

`smoothDivisorsOfBinomialCoefficients()` ต้องคืนค่าเป็น `852950321`

```js
assert.strictEqual(smoothDivisorsOfBinomialCoefficients(), 852950321);
```

# --seed--

## --seed-contents--

```js
function smoothDivisorsOfBinomialCoefficients() {

  return true;
}

smoothDivisorsOfBinomialCoefficients();
```

# --solutions--

```js
// solution required
```
