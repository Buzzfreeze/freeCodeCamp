---
id: 5900f4ea1000cf542c50fffc
title: 'Problem 381: (prime-k) factorial'
challengeType: 5
forumTopicId: 302045
dashedName: problem-381-prime-k-factorial
---

# --description--

ให้ $p$ เป็นจำนวนเฉพาะ  
กำหนดให้ $S(p) = (\sum (p - k)!)\bmod (p)$ เมื่อ $1 ≤ k ≤ 5$

เช่น ถ้า $p = 7$

$$(7 - 1)! + (7 - 2)! + (7 - 3)! + (7 - 4)! + (7 - 5)! = 6! + 5! + 4! + 3! + 2! = 720 + 120 + 24 + 6 + 2 = 872$$

เมื่อ $872\bmod (7) = 4$, $S(7) = 4$


ถ้า $\sum S(p) = 480$ สำหรับ $5 ≤ p &lt; 100$.

ให้หา $\sum S(p)$ เมื่อ $5 ≤ p &lt; {10}^8$

# --hints--

`primeKFactorial()` ต้องคืนค่าเป็น `139602943319822`

```js
assert.strictEqual(primeKFactorial(), 139602943319822);
```

# --seed--

## --seed-contents--

```js
function primeKFactorial() {

  return true;
}

primeKFactorial();
```

# --solutions--

```js
// solution required
```
