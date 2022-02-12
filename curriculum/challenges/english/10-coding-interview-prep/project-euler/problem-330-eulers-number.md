---
id: 5900f4b71000cf542c50ffc9
title: 'Problem 330: Euler''s Number'
challengeType: 5
forumTopicId: 301988
dashedName: problem-330-eulers-number
---

# --description--

ลำดับอนันต์ของจำนวนจริง $a(n)$ ถูกกำหนดสำหรับจำนวนเต็มทั้งหมด $n$ ดังนี้:

$$ a(n) =
\begin{cases}
1                                                       & n < 0 \\\\
\displaystyle \sum_{i = 1}^{\infty} \frac{a(n - 1)}{i!} & n \ge 0
\end{cases}
$$

เช่น

$$\begin{align}
  & a(0) = \frac{1}{1!} + \frac{1}{2!} + \frac{1}{3!} + \ldots = e − 1 \\\\
  & a(1) = \frac{e − 1}{1!} + \frac{1}{2!} + \frac{1}{3!} + \ldots = 2e − 3 \\\\
  & a(2) = \frac{2e − 3}{1!} + \frac{e − 1}{2!} + \frac{1}{3!} + \ldots = \frac{7}{2} e − 6
\end{align}$$

กับ $e = 2.7182818\ldots$ เป็น Euler's constant

จะแสดง $a(n)$ เป็น $\displaystyle\frac{A(n)e + B(n)}{n!}$ ได้ถ้า $A(n)$ และ $B(n )$ เป็นจำนวนเต็ม

เช่น $\displaystyle a(10) = \frac{328161643e − 652694486}{10!}$

ให้หา $A({10}^9)$ + $B({10}^9)$ แล้วตอบโดย $\bmod 77\\,777\\,777$

# --hints--

`eulersNumber()` ต้องคืนค่าเป็น `15955822`

```js
assert.strictEqual(eulersNumber(), 15955822);
```

# --seed--

## --seed-contents--

```js
function eulersNumber() {

  return true;
}

eulersNumber();
```

# --solutions--

```js
// solution required
```
