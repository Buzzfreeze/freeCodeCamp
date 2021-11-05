---
id: 5900f4c11000cf542c50ffd3
title: 'Problem 341: Golomb''s self-describing sequence'
challengeType: 5
forumTopicId: 302000
dashedName: problem-341-golombs-self-describing-sequence
---

# --description--

ลำดับการอธิบายตนเองของ Golomb ($G(n)$) เป็นลำดับตัวเลขธรรมชาติที่ไม่ลดลงเพียงลำดับเดียว โดยที่ $n$ ปรากฏตรงที่ $G(n)$ ครั้งในลำดับ ค่าของ $G(n)$ สำหรับ $n$ สองสามตัวแรกคือ

$$\begin{array}{c}
  n    & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 & 10 & 11 & 12 & 13 & 14 & 15 & \ldots \\\\
  G(n) & 1 & 2 & 2 & 3 & 3 & 4 & 4 & 4 & 5 & 5  &  5 &  6 &  6 &  6 &  6 & \ldots
\end{array}$$

คุณจะได้รับ $G({10}^3) = 86$, $G({10}^6) = 6137$

คุณยังได้รับ $\sum G(n^3) = 153\\,506\\,976$ สำหรับ $1 ≤ n &lt; {10}^3$.

หา $\sum G(n^3)$ สำหรับ $1 ≤ n &lt; {10}^6$.

# --hints--

`golombsSequence()` ควร return `56098610614277016`.

```js
assert.strictEqual(golombsSequence(), 56098610614277016);
```

# --seed--

## --seed-contents--

```js
function golombsSequence() {

  return true;
}

golombsSequence();
```

# --solutions--

```js
// solution required
```
