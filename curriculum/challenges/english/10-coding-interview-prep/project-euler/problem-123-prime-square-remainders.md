---
id: 5900f3e71000cf542c50fefa
title: 'Problem 123: Prime square remainders'
challengeType: 5
forumTopicId: 301750
dashedName: problem-123-prime-square-remainders
---

# --description--

ให้ $p_n$ เป็นจำนวนเฉพาะตัวที่ $n$ : 2, 3, 5, 7, 11, ..., 
และให้ $r$ เป็นเศษเหลือเมื่อหาร ${(p_n-1)}^n + {(p_n+1)}^n$ ด้วย ${p_n}^2$

เช่น ถ้า $n = 3, p_3 = 5$ และ $4^3 + 6^3 = 280 ≡ 5\\ mod\\ 25$

ค่าต่ำสุดของ $n$ ที่ทำให้เศษเหลือมากกว่า $10^9$ คือ 7037

ให้หา $n$ ที่ต่ำที่สุด ที่ทำให้เศษเหลือเกิน $10^{10}$

# --hints--

`primeSquareRemainders()` ต้องคืนค่าเป็น `21035`

```js
assert.strictEqual(primeSquareRemainders(), 21035);
```

# --seed--

## --seed-contents--

```js
function primeSquareRemainders() {

  return true;
}

primeSquareRemainders();
```

# --solutions--

```js
// solution required
```
