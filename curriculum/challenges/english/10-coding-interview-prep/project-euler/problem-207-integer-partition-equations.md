---
id: 5900f43c1000cf542c50ff4e
title: 'Problem 207: Integer partition equations'
challengeType: 5
forumTopicId: 301848
dashedName: problem-207-integer-partition-equations
---

# --description--

ให้ $k$ เป็นจำนวนเต็มบวก ซึ่งอยู่ในสมการ $4^t = 2^t + k$

โดยที่ $4^t$, $2^t$ และ $k$ เป็นจำนวนเต็มบวกทั้งหมด และ $t$ เป็นจำนวนจริง

ในสมการนั้นจะมีสองรูปแบบแรกเป็นสมการ $4^1 = 2^1 + 2$ และ $4^{1.584\\,962\\,5\ldots} = 2^{1.584\\,962\\,5\ldots} + 6 $

สมการที่ $t$ เป็นจำนวนเต็มสมบูรณ์
ถ้า $m ≥ 1$ แล้ว $P(m)$ เป็นสัดส่วนของสมการที่สมบูรณ์กับ $k ≤ m$

ดังนั้น $P(6) = \frac{1}{2}$

ในตารางต่อไปนี้แสดงค่าของ $P(m)$

$$\begin{align}
  & P(5) = \frac{1}{1}    \\\\
  & P(10) = \frac{1}{2}   \\\\
  & P(15) = \frac{2}{3}   \\\\
  & P(20) = \frac{1}{2}   \\\\
  & P(25) = \frac{1}{2}   \\\\
  & P(30) = \frac{2}{5}   \\\\
  & \ldots                \\\\
  & P(180) = \frac{1}{4}  \\\\
  & P(185) = \frac{3}{13}
\end{align}$$

หา $m$ ที่น้อยที่สุดที่ทำให้ $P(m) &lt; \frac{1}{12\\,345}$
# --hints--

`integerPartitionEquations()` ต้องคืนค่าเป็น `44043947822`

```js
assert.strictEqual(integerPartitionEquations(), 44043947822);
```

# --seed--

## --seed-contents--

```js
function integerPartitionEquations() {

  return true;
}

integerPartitionEquations();
```

# --solutions--

```js
// solution required
```
