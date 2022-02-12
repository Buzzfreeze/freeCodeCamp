---
id: 5900f4711000cf542c50ff84
title: 'Problem 261: Pivotal Square Sums'
challengeType: 5
forumTopicId: 301910
dashedName: problem-261-pivotal-square-sums
---

# --description--

จำนวนเต็มบวก $k$ จะเป็น square-pivot ถ้ามีคู่ของจำนวนเต็ม $m > 0$ และ $n ≥ k$ โดยที่ผลรวมของ ($m + 1$) กำลังสองที่เรียงต่อกัน $k$ เท่ากับผลรวมของช่องกำลังสองต่อเนื่อง $m$ จาก ($n + 1$) ตามนี้

$${(k - m)}^2 + \ldots + k^2 = {(n + 1)}^2 + \ldots + {(n + m)}^2$$

ค่าของ square-pivot ที่น้อยๆคือ

$$\begin{align}
  & \mathbf{4}: 3^2 + \mathbf{4}^2 = 5^2 \\\\
  & \mathbf{21}: {20}^2 + \mathbf{21}^2 = {29}^2 \\\\
  & \mathbf{24}: {21}^2 + {22}^2 + {23}^2 + \mathbf{24}^2 = {25}^2 + {26}^2 + {27}^2 \\\\
  & \mathbf{110}: {108}^2 + {109}^2 + \mathbf{110}^2 = {133}^2 + {134}^2 \\\\
\end{align}$$

หาผลรวมของ square-pivot ทั้งหมดที่ $≤ {10}^{10}$

# --hints--

`pivotalSquareSums()` ต้องคืนค่าเป็น `238890850232021`

```js
assert.strictEqual(pivotalSquareSums(), 238890850232021);
```

# --seed--

## --seed-contents--

```js
function pivotalSquareSums() {

  return true;
}

pivotalSquareSums();
```

# --solutions--

```js
// solution required
```
