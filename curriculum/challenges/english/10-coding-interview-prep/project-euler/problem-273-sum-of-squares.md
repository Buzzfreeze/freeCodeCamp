---
id: 5900f47e1000cf542c50ff90
title: 'Problem 273: Sum of Squares'
challengeType: 5
forumTopicId: 301923
dashedName: problem-273-sum-of-squares
---

# --description--

พิจารณาสมการของรูปแบบ: $a^2 + b^2 = N$, $0 ≤ a ≤ b$, $a$, $b$ และ $N$ จำนวนเต็ม

สำหรับ $N = 65$ มีสองวิธีแก้ไข:

$a = 1, b = 8$ และ $a = 4, b = 7$

เราเรียก $S(N)$ ผลรวมของค่าของ $a$ ของคำตอบทั้งหมดของ $a^2 + b^2 = N$, $0 ≤ a ≤ b$, $a$, $b$ และ $N จำนวนเต็ม $

ดังนั้น $S(65) = 1 + 4 = 5$

หา $\sum S(N)$ สำหรับ squarefree ทั้งหมด $N$ หารด้วยจำนวนเฉพาะของรูปแบบ $4k + 1$ ด้วย $4k + 1 &lt; 150$.

# --hints--

`sumOfSquares()` ควร return `2032447591196869000`.

```js
assert.strictEqual(sumOfSquares(), 2032447591196869000);
```

# --seed--

## --seed-contents--

```js
function sumOfSquares() {

  return true;
}

sumOfSquares();
```

# --solutions--

```js
// solution required
```
