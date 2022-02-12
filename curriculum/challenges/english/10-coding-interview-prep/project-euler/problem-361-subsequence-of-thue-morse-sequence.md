---
id: 5900f4d51000cf542c50ffe8
title: 'Problem 361: Subsequence of Thue-Morse sequence'
challengeType: 5
forumTopicId: 302022
dashedName: problem-361-subsequence-of-thue-morse-sequence
---

# --description--

ลำดับ Thue-Morse $\\{T_n\\}$ เป็นลำดับ binary

- $T_0 = 0$
- $T_{2n} = T_n$
- $T_{2n + 1} = 1 - T_n$

เทอมแรกๆของ $\\{T_n\\}$ มีดังต่อไปนี้: $01101001\color{red}{10010}1101001011001101001\ldots$

เรากำหนด $\\{A_n\\}$ เป็นลำดับการจัดเรียงของจำนวนเต็ม เพื่อให้นิพจน์ไบนารีของแต่ละองค์ประกอบปรากฏเป็นลำดับย่อยใน $\\{T_n\\}$ 

เช่น เลขทศนิยม 18 แสดงเป็น 10010 ในรูปแบบไบนารี 10010 ปรากฏใน $\\{T_n\\}$ ($T_8$ ถึง $T_{12}$) ดังนั้น 18 เป็นองค์ประกอบของ $\\{A_n\\}$  
เลข 14 ฐานสิบแสดงเป็น 1110 ในรูปแบบไบนารี 1110 ไม่ปรากฏใน $\\{T_n\\}$ ดังนั้น 14 ไม่ใช่องค์ประกอบของ $\\{A_n\\}$

เทอมแรกๆของ $A_n$ เป็นดังนี้

$$\begin{array}{cr}
  n   & 0 & 1 & 2 & 3 & 4 & 5 & 6 & 7 &  8 &  9 & 10 & 11 & 12 & \ldots \\\\
  A_n & 0 & 1 & 2 & 3 & 4 & 5 & 6 & 9 & 10 & 11 & 12 & 13 & 18 & \ldots
\end{array}$$

กำหนดให้ $A_{100} = 3251$ และ $A_{1000} = 80\\,852\\,364\\,498$

ให้หา 9 หลักสุดท้ายของ $\displaystyle\sum_{k = 1}^{18} A_{{10}^k}$

# --hints--

`subsequenceOfThueMorseSequence()` ต้องคืนค่าเป็น `178476944`

```js
assert.strictEqual(subsequenceOfThueMorseSequence(), 178476944);
```

# --seed--

## --seed-contents--

```js
function subsequenceOfThueMorseSequence() {

  return true;
}

subsequenceOfThueMorseSequence();
```

# --solutions--

```js
// solution required
```
