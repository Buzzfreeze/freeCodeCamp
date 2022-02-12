---
id: 5900f51d1000cf542c51002f
title: 'Problem 433: Steps in Euclid''s algorithm'
challengeType: 5
forumTopicId: 302104
dashedName: problem-433-steps-in-euclids-algorithm
---

# --description--

ให้ $E(x_0, y_0)$ เป็นจำนวนขั้นตอนที่ใช้ในการหาตัวหารร่วมมากของ $x_0$ และ $y_0$ ด้วยอัลกอริทึมของ Euclid:

$$\begin{align}
  & x_1 = y_0, y_1 = x_0\bmod y_0 \\\\
  & x_n = y_{n - 1}, y_n = x_{n - 1}\bmod y_{n - 1}
\end{align}$$

$E(x_0, y_0)$ คือ $n$ ที่น้อยที่สุด ดังนั้น $y_n = 0$

เรามี $E(1, 1) = 1$, $E(10, 6) = 3$ และ $E(6, 10) = 4$

กำหนดให้ $S(N)$ เป็นผลรวมของ $E(x, y)$ เมื่อ $1 ≤ x$, $y ≤ N$

ให้ $S(1) = 1$, $S(10) = 221$ และ $S(100) = 39\\,826$

ให้หา $S(5 \times {10}^6)$

# --hints--

`stepsInEuclidsAlgorithm()` ต้องคืนค่าเป็น `326624372659664`

```js
assert.strictEqual(stepsInEuclidsAlgorithm(), 326624372659664);
```

# --seed--

## --seed-contents--

```js
function stepsInEuclidsAlgorithm() {

  return true;
}

stepsInEuclidsAlgorithm();
```

# --solutions--

```js
// solution required
```
