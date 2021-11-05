---
id: 5900f4ed1000cf542c50fffe
title: 'Problem 384: Rudin-Shapiro sequence'
challengeType: 5
forumTopicId: 302048
dashedName: problem-384-rudin-shapiro-sequence
---

# --description--

กำหนดลำดับ $a(n)$ เป็นจำนวนคู่ที่อยู่ติดกันในการขยายไบนารีของ $n$ (อาจทับซ้อนกัน)

เช่น $a(5) = a({101}_2) = 0$, $a(6) = a({110}_2) = 1$, $a(7) = a({111}_2) = 2$

กำหนดลำดับ $b(n) = {(-1)}^{a(n)}$ ลำดับนี้เรียกว่าลำดับ Rudin-Shapiro

พิจารณาลำดับผลรวมของ $b(n)$: $s(n) = \displaystyle\sum_{i = 0}^{n} b(i)$ ด้วย

ค่าคู่แรกของลำดับเหล่านี้คือ:

$$\begin{array}{lr}
  n    & 0 & 1 & 2 &  3 & 4 & 5 &  6 & 7 \\\\
  a(n) & 0 & 0 & 0 &  1 & 0 & 0 &  1 & 2 \\\\
  b(n) & 1 & 1 & 1 & -1 & 1 & 1 & -1 & 1 \\\\
  s(n) & 1 & 2 & 3 &  2 & 3 & 4 &  3 & 4
\end{array}$$

ลำดับ $s(n)$ มีคุณสมบัติที่น่าทึ่งที่องค์ประกอบทั้งหมดเป็นค่าบวก และจำนวนเต็มบวกทุกจำนวน $k$ เกิดขึ้นตรง $k$ ครั้ง

กำหนด $g(t, c)$ โดยมีค่า $1 ≤ c ≤ t$ เป็นดัชนีใน $s(n)$ ที่ $t$ เกิดขึ้นเป็นครั้งที่ $c$' ใน $s(n)$

เช่น: $g(3, 3) = 6$, $g(4, 2) = 7$ and $g(54321, 12345) = 1\\,220\\,847\\,710$.

ให้ $F(n)$ เป็นลำดับFibonacciที่กำหนดโดย:

$$\begin{align}
  & F(0) = F(1) = 1 \text{ and} \\\\
  & F(n) = F(n - 1) + F(n - 2) \text{ for } n > 1.
\end{align}$$

กำหนด $GF(t) = g(F(t), F(t - 1))$.

หา $\sum GF(t)$ for$ 2 ≤ t ≤ 45$.

# --hints--

`rudinShapiroSequence()` ควร return `3354706415856333000`.

```js
assert.strictEqual(rudinShapiroSequence(), 3354706415856333000);
```

# --seed--

## --seed-contents--

```js
function rudinShapiroSequence() {

  return true;
}

rudinShapiroSequence();
```

# --solutions--

```js
// solution required
```
