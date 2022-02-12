---
id: 5900f4c21000cf542c50ffd4
title: 'Problem 340: Crazy Function'
challengeType: 5
forumTopicId: 301999
dashedName: problem-340-crazy-function
---

# --description--

ถ้า $a$, $b$, $c$ เป็นจำนวนเต็มคงที่ ให้กำหนดฟังก์ชัน $F(n)$ เป็นดังนี้

$$\begin{align}
  & F(n) = n - c \\;\text{ for all } n > b \\\\
  & F(n) = F(a + F(a + F(a + F(a + n)))) \\;\text{ for all } n ≤ b.
\end{align}$$

นอกจากนี้ ให้กำหนดให้ $S(a, b, c) = \displaystyle\sum_{n = 0}^b F(n)$

เช่น ถ้า $a = 50$, $b = 2000$ และ $c = 40$ ดังนั้น $F(0) = 3240$ และ $F(2000) = 2040$ นอกจากนี้ $S(50, 2000, 40) = 5\\,204\\,240$

ให้หา 9 หลักสุดท้ายของ $S({21}^7, 7^{21}, {12}^7)$

# --hints--

`crazyFunction()` ต้องคืนค่าเป็น `291504964`

```js
assert.strictEqual(crazyFunction(), 291504964);
```

# --seed--

## --seed-contents--

```js
function crazyFunction() {

  return true;
}

crazyFunction();
```

# --solutions--

```js
// solution required
```
