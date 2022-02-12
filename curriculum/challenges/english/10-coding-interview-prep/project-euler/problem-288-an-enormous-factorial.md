---
id: 5900f48d1000cf542c50ff9f
title: 'Problem 288: An enormous factorial'
challengeType: 5
forumTopicId: 301939
dashedName: problem-288-an-enormous-factorial
---

# --description--

สำหรับจำนวนเฉพาะ $p$ จำนวน $N(p,q)$ ถูกกำหนดโดย $N(p,q) = \sum_{n=0}^q T_n \times p^n$ โดย $T_n$ เกิดจากการสุ่ม:

$$\begin{align}
  & S_0 = 290797 \\\\
  & S_{n + 1} = {S_n}^2\bmod 50\\,515\\,093 \\\\
  & T_n = S_n\bmod p
\end{align}$$

ให้ $Nfac(p,q)$ เป็น factorial ของ $N(p,q)$

ให้ $NF(p,q)$ เป็นจำนวนตัวประกอบ $p$ ใน $Nfac(p,q)$

กำหนดให้ $NF(3,10000) \bmod 3^{20} = 624\\,955\\,285$

ให้หา $NF(61,{10}^7)\bmod {61}^{10}$

# --hints--

`enormousFactorial()` ต้องคืนค่าเป็น `605857431263982000`

```js
assert.strictEqual(enormousFactorial(), 605857431263982000);
```

# --seed--

## --seed-contents--

```js
function enormousFactorial() {

  return true;
}

enormousFactorial();
```

# --solutions--

```js
// solution required
```
