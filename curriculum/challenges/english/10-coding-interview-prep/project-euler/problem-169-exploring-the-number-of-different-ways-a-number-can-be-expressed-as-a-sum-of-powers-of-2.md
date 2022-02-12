---
id: 5900f4151000cf542c50ff28
title: >-
  Problem 169: Exploring the number of different ways a number can be expressed
  as a sum of powers of 2
challengeType: 5
forumTopicId: 301803
dashedName: >-
  problem-169-exploring-the-number-of-different-ways-a-number-can-be-expressed-as-a-sum-of-powers-of-2
---

# --description--

กำหนดให้ $f(0)=1$ และ $f(n)$ เป็นจำนวนวิธีต่างๆ ที่ $n$ สามารถแสดงเป็นผลรวมของเลขยกกำลังจำนวนเต็ม 2 โดยใช้กำลังแต่ละค่าไม่เกินสองครั้ง

เช่น ถ้า $f(10)=5$ เราจะแสดงค่าเป็น 10 ได้ 5 วิธีคือ

$$\begin{align}
  & 1 + 1 + 8 \\\\
  & 1 + 1 + 4 + 4 \\\\
  & 1 + 1 + 2 + 2 + 4 \\\\
  & 2 + 4 + 4 \\\\
  & 2 + 8
\end{align}$$

ให้หาค่าของ $f({10}^{25})$

# --hints--

`numberOfWaysToExpress()` ต้องคืนค่าเป็น `178653872807`

```js
assert.strictEqual(numberOfWaysToExpress(), 178653872807);
```

# --seed--

## --seed-contents--

```js
function numberOfWaysToExpress() {

  return true;
}

numberOfWaysToExpress();
```

# --solutions--

```js
// solution required
```
