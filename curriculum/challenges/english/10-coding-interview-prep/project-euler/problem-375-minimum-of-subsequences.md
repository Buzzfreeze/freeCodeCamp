---
id: 5900f4e41000cf542c50fff5
title: 'Problem 375: Minimum of subsequences'
challengeType: 5
forumTopicId: 302037
dashedName: problem-375-minimum-of-subsequences
---

# --description--

ให้ $S_n$ เป็นลำดับจำนวนเต็ม ที่สร้างด้วยตัวสร้างตัวเลขสุ่มต่อไปนี้:

$$\begin{align}
        S_0 & = 290\\,797 \\\\
  S_{n + 1} & = {S_n}^2\bmod 50\\,515\\,093
\end{align}$$

ให้ $A(i, j)$ เป็นค่าต่ำสุดของตัวเลข $S_i, S_{i + 1}, \ldots, S_j$ สำหรับ $i ≤ j$ ให้ $M(N) = \sum A(i, j)$ สำหรับ $1 ≤ i ≤ j ≤ N$

ถ้า $M(10) = 432\\,256\\,955$ และ $M(10\\,000) = 3\\,264\\,567\\,774\\,119$

ให้หา $M(2\\,000\\,000\\,000)$

# --hints--

`minimumOfSubsequences()` ต้องคืนค่าเป็น `7435327983715286000`

```js
assert.strictEqual(minimumOfSubsequences(), 7435327983715286000);
```

# --seed--

## --seed-contents--

```js
function minimumOfSubsequences() {

  return true;
}

minimumOfSubsequences();
```

# --solutions--

```js
// solution required
```
