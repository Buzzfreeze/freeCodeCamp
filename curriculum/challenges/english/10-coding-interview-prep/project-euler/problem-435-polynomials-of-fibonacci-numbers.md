---
id: 5900f5201000cf542c510032
title: 'Problem 435: Polynomials of Fibonacci numbers'
challengeType: 5
forumTopicId: 302106
dashedName: problem-435-polynomials-of-fibonacci-numbers
---

# --description--

เลข Fibonacci $\\{f_n, n ≥ 0\\}$ เขียนเป็น recursive ได้เป็น  $f_n = f_{n - 1} + f_{n - 2}$  
โดยมี base case เป็น $f_0 = 0$ และ $f_1 = 1$

กำหนดพหุนาม $\\{F_n, n ≥ 0\\}$ เป็น $F_n(x) = \displaystyle\sum_{i = 0}^n f_ix^i$

เช่น $F_7(x) = x + x^2 + 2x^3 + 3x^4 + 5x^5 + 8x^6 + 13x^7$ และ $F_7(11) = 268\\,357\\ ,683$

กำหนดให้ $n = {10}^{15}$  
ให้หาผลรวม $\displaystyle\sum_{x = 0}^{100} F_n(x)$ และตอบโดย mod กับ $1\\,307\\,674\\,368\\,000 \\, (= 15 !)$

# --hints--

`polynomialsOfFibonacciNumbers()` ต้องคืนค่าเป็น `252541322550`

```js
assert.strictEqual(polynomialsOfFibonacciNumbers(), 252541322550);
```

# --seed--

## --seed-contents--

```js
function polynomialsOfFibonacciNumbers() {

  return true;
}

polynomialsOfFibonacciNumbers();
```

# --solutions--

```js
// solution required
```
