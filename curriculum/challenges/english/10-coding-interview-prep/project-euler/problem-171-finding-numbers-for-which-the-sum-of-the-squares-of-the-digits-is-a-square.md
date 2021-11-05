---
id: 5900f4181000cf542c50ff2a
title: >-
  Problem 171: Finding numbers for which the sum of the squares of the digits is
  a square
challengeType: 5
forumTopicId: 301806
dashedName: >-
  problem-171-finding-numbers-for-which-the-sum-of-the-squares-of-the-digits-is-a-square
---

# --description--

สำหรับจำนวนเต็มบวก $n$ ให้ $f(n)$ เป็นผลรวมของกำลังสองของตัวเลข (ในฐาน 10) ของ $n$ เช่น

$$\begin{align}
  & f(3) = 3^2 = 9 \\\\
  & f(25) = 2^2 + 5^2 = 4 + 25 = 29 \\\\
  & f(442) = 4^2 + 4^2 + 2^2 = 16 + 16 + 4 = 36 \\\\
\end{align}$$

ค้นหาเก้าหลักสุดท้ายของผลรวมของ $n$, $0 &lt; น &lt; {10}^{20}$ ดังนั้น $f(n)$ จะเป็นกำลังสองสมบูรณ์

# --hints--

`lastDigitsSumOfPerfectSquare()` ควร return `142989277`.

```js
assert.strictEqual(lastDigitsSumOfPerfectSquare(), 142989277);
```

# --seed--

## --seed-contents--

```js
function lastDigitsSumOfPerfectSquare() {

  return true;
}

lastDigitsSumOfPerfectSquare();
```

# --solutions--

```js
// solution required
```
