---
id: 5900f3e71000cf542c50fefa
title: 'Problem 123: Prime square remainders'
challengeType: 5
forumTopicId: 301750
dashedName: problem-123-prime-square-remainders
---

# --description--

ให้ $p_n$ เป็น $n$th prime: 2, 3, 5, 7, 11, ..., 
และให้ $r$ เป็นส่วนที่เหลือเมื่อ ${(p_n-1)}^n + {(p_n+1)}^n$ หารด้วย ${p_n}^2$

ตัวอย่างเช่น เมื่อ $n = 3, p_3 = 5$ และ $4^3 + 6^3 = 280 ≡ 5\\ mod\\ 25$

ค่าต่ำสุดของ $n$ ซึ่งส่วนที่เหลือก่อน $10^9$ คือ 7037

หาค่าที่น้อยที่สุดของ $n$ ที่ส่วนที่เหลือเกิน $10^{10}$ ก่อน

# --hints--

`primeSquareRemainders()` ควร return `21035`.

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
