---
id: 5900f5361000cf542c510048
title: 'Problem 457: A polynomial modulo the square of a prime'
challengeType: 5
forumTopicId: 302131
dashedName: problem-457-a-polynomial-modulo-the-square-of-a-prime
---

# --description--

ให้ $f(n) = n^2 - 3n - 1$

ให้ $p$ เป็นจำนวนเฉพาะ

ให้ $R(p)$ เป็นจำนวนเต็มบวกที่เล็กที่สุด $n$ โดยที่ $f(n)\bmod p^2 = 0$ ถ้าจำนวนเต็มดังกล่าว $n$ มีอยู่ มิฉะนั้น $R(p) = 0$

ให้ $SR(L)$ เป็น $\sum R(p)$ สำหรับจำนวนเฉพาะทั้งหมดไม่เกิน $L$

ให้หา $SR({10}^7)$

# --hints--

`polynomialModuloSquareOfPrime()` ต้องคืนค่าเป็น `2647787126797397000`

```js
assert.strictEqual(polynomialModuloSquareOfPrime(), 2647787126797397000);
```

# --seed--

## --seed-contents--

```js
function polynomialModuloSquareOfPrime() {

  return true;
}

polynomialModuloSquareOfPrime();
```

# --solutions--

```js
// solution required
```
