---
id: 5900f4201000cf542c50ff33
title: 'Problem 180: Rational zeros of a function of three variables'
challengeType: 5
forumTopicId: 301816
dashedName: problem-180-rational-zeros-of-a-function-of-three-variables
---

# --description--

สำหรับจำนวนเต็ม $n$ ใดๆ ให้พิจารณาสามฟังก์ชัน

$$\begin{align}
  & f_{1,n}(x,y,z) = x^{n + 1} + y^{n + 1} − z^{n + 1}\\\\
  & f_{2,n}(x,y,z) = (xy + yz + zx) \times (x^{n - 1} + y^{n - 1} − z^{n - 1})\\\\
  & f_{3,n}(x,y,z) = xyz \times (x^{n - 2} + y^{n - 2} − z^{n - 2})
\end{align}$$

และพวกมันถูก combination

$$\begin{align}
  & f_n(x,y,z) = f_{1,n}(x,y,z) + f_{2,n}(x,y,z) − f_{3,n}(x,y,z)
\end{align}$$

เราเรียก $(x,y,z)$ golden triple ของ order $k$ ถ้า $x$, $y$, และ $z$ เป็นจำนวนตรรกยะของรูปแบบ $\frac{a}{b}$ ด้วย $0 &lt; &lt; b ≤ k$ และมี (อย่างน้อย) หนึ่งจำนวนเต็ม $n$ ดังนั้น $f_n(x,y,z) = 0$

ให้ $s(x,y,z) = x + y + z$

ให้ $t = \frac{u}{v}$ เป็นผลรวมของ $s(x,y,z)$ ที่แตกต่างกันทั้งหมดสำหรับ Golden Triples ทั้งหมด $(x,y,z)$ ของลำดับ 35 $s ทั้งหมด (x,y,z)$ และ $t$ ต้องอยู่ในรูปแบบที่ลดลง

หาค่า $u + v$.

# --hints--

`rationalZeros()` ควร return `285196020571078980`.

```js
assert.strictEqual(rationalZeros(), 285196020571078980);
```

# --seed--

## --seed-contents--

```js
function rationalZeros() {

  return true;
}

rationalZeros();
```

# --solutions--

```js
// solution required
```
