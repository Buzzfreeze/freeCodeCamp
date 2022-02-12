---
id: 5900f4ed1000cf542c50ffff
title: 'Problem 383: Divisibility comparison between factorials'
challengeType: 5
forumTopicId: 302047
dashedName: problem-383-divisibility-comparison-between-factorials
---

# --description--

ให้ $f_5(n)$ เป็นจำนวนเต็มที่มากที่สุด $x$ โดยที่ $5^x$ หาร $n$ ลงตัว

เช่น $f_5(625\\,000) = 7$

ให้ $T_5(n)$ เป็นจำนวนเต็ม $i$ ซึ่งเป็นไปตาม $f_5((2 \times i - 1)!) &lt; 2 \ครั้ง f_5(i!)$ และ $1 ≤ i ≤ n$

โดย $T_5({10}^3) = 68$ และ $T_5({10}^9) = 2\\,408\\,210$

ให้หา $T_5({10}^{18})$

# --hints--

`factorialDivisibilityComparison()` ต้องคืนค่าเป็น `22173624649806`

```js
assert.strictEqual(factorialDivisibilityComparison(), 22173624649806);
```

# --seed--

## --seed-contents--

```js
function factorialDivisibilityComparison() {

  return true;
}

factorialDivisibilityComparison();
```

# --solutions--

```js
// solution required
```
