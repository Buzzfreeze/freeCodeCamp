---
id: 5900f4411000cf542c50ff53
title: 'Problem 212: Combined Volume of Cuboids'
challengeType: 5
forumTopicId: 301854
dashedName: problem-212-combined-volume-of-cuboids
---

# --description--

ลูกบาศก์ที่จัดตามแนวแกนซึ่งระบุโดยพารามิเตอร์ $\{ (x_0,y_0,z_0), (dx,dy,dz) \}$ จะมีจุด ($X$,$Y$,$Z$) ในรูปแบบ $x_0 ≤ X ≤ x_0 + dx$, $y_0 ≤ Y ≤ y_0 + dy$ และ $z_0 ≤ Z ≤ z_0 + dz$  
ปริมาตรของทรงลูกบาศก์คือผลคูณของ $dx × dy × dz$ ปริมาตรรวมของชุดข้อมูลของทรงลูกบาศก์คือปริมาตรที่ union กันของทรงลูกบาศก์ และจะน้อยกว่าผลรวมของปริมาตรแต่ละลูกบาศก์ ถ้ามีการทับกันเกิดขึ้น

ให้ $C_1, \ldots, C_{50000}$ เป็นชุดข้อมูลของทรงลูกบาศก์ที่จัดแนวแกน 50000 อันเพื่อให้ $C_n$ มีพารามิเตอร์

$$\begin{align}
  & x_0 = S_{6n - 5} \\; \text{modulo} \\; 10000    \\\\
  & y_0 = S_{6n - 4} \\; \text{modulo} \\; 10000    \\\\
  & z_0 = S_{6n - 3} \\; \text{modulo} \\; 10000    \\\\
  & dx = 1 + (S_{6n - 2} \\; \text{modulo} \\; 399) \\\\
  & dy = 1 + (S_{6n - 1} \\; \text{modulo} \\; 399) \\\\
  & dz = 1 + (S_{6n} \\; \text{modulo} \\; 399)     \\\\
\end{align}$$

โดยที่ $S_1, \ldots, S_{300000}$ มาจาก "Lagged Fibonacci Generator":

ให้ $1 ≤ k ≤ 55$, $S_k = [100003 - 200003k + 300007k^3] \\; (โมดูล \\; 1000000)$

ให้ $56 ≤ k$, $S_k = [S_{k - 24} + S_{k - 55}] \\; (โมดูล \\; 1000000)$

ดังนั้น $C_1$ มีพารามิเตอร์ $\{(7,53,183), (94,369,56)\}$, $C_2$ มีพารามิเตอร์ $\{(2383,3563,5079), (42,212,344)\}$ และอื่นๆ 

ปริมาตรรวมของ 100 ลูกบาศก์แรก $C_1, \ldots, C_{100}$ คือ 723581599

ให้หาปริมาตรรวมของลูกบาศก์ทั้งหมด 50000, $C_1, \ldots, C_{50000}$
# --hints--

`combinedValueOfCuboids()` ต้องคืนค่าเป็น `328968937309`

```js
assert.strictEqual(combinedValueOfCuboids(), 328968937309);
```

# --seed--

## --seed-contents--

```js
function combinedValueOfCuboids() {

  return true;
}

combinedValueOfCuboids();
```

# --solutions--

```js
// solution required
```
