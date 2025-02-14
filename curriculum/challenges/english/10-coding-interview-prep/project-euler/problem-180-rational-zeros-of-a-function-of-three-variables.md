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

ซึ่งจะรวมกันได้เป็น

$$\begin{align}
  & f_n(x,y,z) = f_{1,n}(x,y,z) + f_{2,n}(x,y,z) − f_{3,n}(x,y,z)
\end{align}$$

เราเรียก $(x,y,z)$ ว่าเป็น golden triple ของลำดับ $k$ ถ้า $x$, $y$, และ $z$ เป็นจำนวนตรรกยะของรูปแบบ $\frac{a}{b}$ ด้วย $0 &lt; &lt; b ≤ k$ และมีจำนวนเต็ม (อย่างน้อย) หนึ่งตัว $n$ ดังนั้น $f_n(x,y,z) = 0$

ให้ $s(x,y,z) = x + y + z$

ให้ $t = \frac{u}{v}$ เป็นผลรวมของ $s(x,y,z)$ ที่แตกต่างกันทั้งหมดสำหรับ Golden Triple $(x,y,z)$ ทั้งหมดของลำดับ 35 
$s(x,y,z)$ ทั้งหมดและ $t$ ต้องอยู่ในรูปแบบที่มีค่าต่ำที่สุด

ให้หาค่าของ $u + v$

# --hints--

`rationalZeros()` ต้องคีนค่าเป็น `285196020571078980`

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
