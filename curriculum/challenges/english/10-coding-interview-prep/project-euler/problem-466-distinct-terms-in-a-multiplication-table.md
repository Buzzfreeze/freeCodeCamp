---
id: 5900f53e1000cf542c510051
title: 'Problem 466: Distinct terms in a multiplication table'
challengeType: 5
forumTopicId: 302141
dashedName: problem-466-distinct-terms-in-a-multiplication-table
---

# --description--

ให้ $P(m,n)$ เป็นจำนวนใน $m×n$ multiplication table.

ตัวอย่าง 3×4 multiplication table :

$$\begin{array}{c}
  ×          & \mathbf{1} & \mathbf{2} & \mathbf{3} & \mathbf{4}  \\\\
  \mathbf{1} & 1          & 2          & 3          & 4  \\\\
  \mathbf{2} & 2          & 4          & 6          & 8  \\\\
  \mathbf{3} & 3          & 6          & 9          & 12
\end{array}$$

มี 8 ค่า {1, 2, 3, 4, 6, 8, 9, 12}, ดังนั้น $P(3, 4) = 8$.

กำหนดให้:

$$\begin{align}
  & P(64, 64) = 1\\,263, \\\\
  & P(12, 345) = 1\\,998, \text{ and} \\\\
  & P(32, {10}^{15}) = 13\\,826\\,382\\,602\\,124\\,302. \\\\
\end{align}$$

ให้หา $P(64, {10}^{16})$.

# --hints--

`multiplicationTable()` ควร return `258381958195474750`.

```js
assert.strictEqual(multiplicationTable(), 258381958195474750);
```

# --seed--

## --seed-contents--

```js
function multiplicationTable() {

  return true;
}

multiplicationTable();
```

# --solutions--

```js
// solution required
```
