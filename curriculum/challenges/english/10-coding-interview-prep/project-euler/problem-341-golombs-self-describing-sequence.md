---
id: 5900f4c11000cf542c50ffd3
title: 'Problem 341: Golomb''s self-describing sequence'
challengeType: 5
forumTopicId: 302000
dashedName: problem-341-golombs-self-describing-sequence
---

# --description--

ลำดับระบุค่าตัวเองของ Golomb ($G(n)$) เป็นลำดับตัวเลขธรรมชาติที่ไม่ลดลงเพียงลำดับเดียว ที่ $n$ ปรากฏในลำดับ $G(n)$ ครั้งพอดี  
ค่า $G(n)$ ของ $n$ ตัวแรกๆคือ

$$\begin{array}{c}
  n    & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 & 10 & 11 & 12 & 13 & 14 & 15 & \ldots \\\\
  G(n) & 1 & 2 & 2 & 3 & 3 & 4 & 4 & 4 & 5 & 5  &  5 &  6 &  6 &  6 &  6 & \ldots
\end{array}$$

กำหนดให้ $G({10}^3) = 86$, $G({10}^6) = 6137$

กำหนดให้ $\sum G(n^3) = 153\\,506\\,976$ ถ้า $1 ≤ n &lt; {10}^3$.

ให้หา $\sum G(n^3)$ ถ้า $1 ≤ n &lt; {10}^6$.

# --hints--

`golombsSequence()` ต้องคืนค่าเป็น `56098610614277016`

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
