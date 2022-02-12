---
id: 5900f5311000cf542c510042
title: 'Problem 451: Modular inverses'
challengeType: 5
forumTopicId: 302124
dashedName: problem-451-modular-inverses
---

# --description--

พิจารณาเลข 15

มีตัวเลขบวกแปดตัวที่น้อยกว่า 15 ซึ่งเป็น coprime ของ 15 คือ 1, 2, 4, 7, 8, 11, 13, 14

modulo ผกผันของตัวเลขเหล่านี้ คือ: 1, 8, 4, 13, 2, 11, 7, 14 เพราะ

$$\begin{align}
  & 1  \times 1\bmod 15 = 1 \\\\
  & 2  \times 8  = 16\bmod 15 = 1 \\\\
  & 4  \times 4  = 16\bmod 15 = 1 \\\\
  & 7  \times 13 = 91\bmod 15 = 1 \\\\
  & 11 \times 11 = 121\bmod 15 = 1 \\\\
  & 14 \times 14 = 196\bmod 15 = 1
\end{align}$$

ให้ $I(n)$ เป็นจำนวนบวกที่มากที่สุด ($m$) ซึ่งน้อยกว่า $n - 1$ เพื่อให้ modulo ผกผันของ $m$ modulo $n$ เท่ากับ $m$ เอง

ดังนั้น $I(15) = 11$

นอกจากนี้ $I(100) = 51$ และ $I(7) = 1$

ให้หา $\sum I(n)$ เมื่อ $3 ≤ n ≤ 2 \times {10}^7$

# --hints--

`modularInverses()` ต้องคืนค่าเป็น `153651073760956`

```js
assert.strictEqual(modularInverses(), 153651073760956);
```

# --seed--

## --seed-contents--

```js
function modularInverses() {

  return true;
}

modularInverses();
```

# --solutions--

```js
// solution required
```
