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

ถ้า $n$ เป็นจำนวนเต็มบวก  
ให้ $f(n)$ เป็นผลรวมของกำลังสองของตัวเลข (ในฐาน 10) ของ $n$ เช่น

$$\begin{align}
  & f(3) = 3^2 = 9 \\\\
  & f(25) = 2^2 + 5^2 = 4 + 25 = 29 \\\\
  & f(442) = 4^2 + 4^2 + 2^2 = 16 + 16 + 4 = 36 \\\\
\end{align}$$

ให้หาเก้าหลักสุดท้ายของผลรวมของ $n$ เมื่อ $0 &lt; n &lt; {10}^{20}$ โดยที่ $f(n)$ จะเป็นกำลังสองสมบูรณ์

# --hints--

`lastDigitsSumOfPerfectSquare()` ต้องคืนค่าเป็น `142989277`

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
