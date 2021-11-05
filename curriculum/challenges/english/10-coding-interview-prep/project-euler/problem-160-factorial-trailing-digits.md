---
id: 5900f40d1000cf542c50ff1f
title: 'Problem 160: Factorial trailing digits'
challengeType: 5
forumTopicId: 301794
dashedName: problem-160-factorial-trailing-digits
---

# --description--

สำหรับ $N$ ใดๆ ให้ $f(N)$ เป็นตัวเลขห้าหลักสุดท้ายก่อนเลขศูนย์ต่อท้ายใน $N!$

ตัวอย่างเช่น,

$$\begin{align}
  & 9! = 362880 \\; \text{so} \\; f(9) = 36288 \\\\
  & 10! = 3628800 \\; \text{so} \\; f(10) = 36288 \\\\
  & 20! = 2432902008176640000 \\; \text{so} \\; f(20) = 17664
\end{align}$$

หา $f(1,000,000,000,000)$

# --hints--

`factorialTrailingDigits()` ควร return `16576`.

```js
assert.strictEqual(factorialTrailingDigits(), 16576);
```

# --seed--

## --seed-contents--

```js
function factorialTrailingDigits() {

  return true;
}

factorialTrailingDigits();
```

# --solutions--

```js
// solution required
```
