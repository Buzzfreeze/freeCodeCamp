---
id: 5900f47e1000cf542c50ff90
title: 'Problem 273: Sum of Squares'
challengeType: 5
forumTopicId: 301923
dashedName: problem-273-sum-of-squares
---

# --description--

พิจารณาสมการ $a^2 + b^2 = N$, $0 ≤ a ≤ b$  
โดยที่ $a$, $b$ และ $N$ เป็นจำนวนเต็ม

ถ้า $N = 65$ จะแก้สมการได้ 2 วิธี:

$a = 1, b = 8$ และ $a = 4, b = 7$

$S(N)$ เป็นผลรวมของค่าของ $a$ ของคำตอบทั้งหมดของ $a^2 + b^2 = N$, $0 ≤ a ≤ b$, $a$, $b$ และ $N จำนวนเต็ม $

ดังนั้น $S(65) = 1 + 4 = 5$

ให้หา $\sum S(N)$ สำหรับ $N$ ที่เป็น squarefree ทั้งหมด ที่หารด้วยจำนวนเฉพาะที่ $4k + 1$ โดย $4k + 1 &lt; 150$ ลงตัว

# --hints--

`sumOfSquares()` ต้องคืนค่าเป็น `2032447591196869000`

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
