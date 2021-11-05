---
id: 5900f4ea1000cf542c50fffc
title: 'Problem 381: (prime-k) factorial'
challengeType: 5
forumTopicId: 302045
dashedName: problem-381-prime-k-factorial
---

# --description--

สำหรับ prime $p$ ให้ $S(p) = (\sum (p - k)!)\bmod (p)$ สำหรับ $1 ≤ k ≤ 5$

ตัวอย่างเช่น ถ้า $p = 7$

$$(7 - 1)! + (7 - 2)! + (7 - 3)! + (7 - 4)! + (7 - 5)! = 6! + 5! + 4! + 3! + 2! = 720 + 120 + 24 + 6 + 2 = 872$$

เมื่อ $872\bmod (7) = 4$, $S(7) = 4$.


สามารถตรวจสอบได้ว่า $\sum S(p) = 480$ สำหรับ $5 ≤ p &lt; 100$.

หา $\sum S(p)$ สำหรับ $5 ≤ p &lt; {10}^8$.

# --hints--

`primeKFactorial()` ควร return `139602943319822`.

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
