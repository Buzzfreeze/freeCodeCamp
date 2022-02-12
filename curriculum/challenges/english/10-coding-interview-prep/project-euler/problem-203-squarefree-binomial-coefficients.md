---
id: 5900f4381000cf542c50ff4a
title: 'Problem 203: Squarefree Binomial Coefficients'
challengeType: 5
forumTopicId: 301844
dashedName: problem-203-squarefree-binomial-coefficients
---

# --description--

สัมประสิทธิ์ทวินาม $\displaystyle\binom{n}{k}$ สามารถจัดเรียงในรูปสามเหลี่ยมของ Pascal ได้ดังนี้:

$$\begin{array}{ccccccccccccccc}
   &   &   &   &    &    &    &  1 &    &    &    &   &   &   &   \\\\
   &   &   &   &    &    &  1 &    & 1  &    &    &   &   &   &   \\\\
   &   &   &   &    &  1 &    &  2 &    &  1 &    &   &   &   &   \\\\
   &   &   &   &  1 &    &  3 &    &  3 &    &  1 &   &   &   &   \\\\
   &   &   & 1 &    &  4 &    &  6 &    &  4 &    & 1 &   &   &   \\\\
   &   & 1 &   &  5 &    & 10 &    & 10 &    &  5 &   & 1 &   &   \\\\
   & 1 &   & 6 &    & 15 &    & 20 &    & 15 &    & 6 &   & 1 &   \\\\
 1 &   & 7 &   & 21 &    & 35 &    & 35 &    & 21 &   & 7 &   & 1 \\\\
   &   &   &   &    &    &    & \ldots
\end{array}$$

จะเห็นได้ว่าแปดแถวแรกของสามเหลี่ยม Pascal ประกอบด้วยตัวเลขที่แตกต่างกันสิบสองจำนวน: 1, 2, 3, 4, 5, 6, 7, 10, 15, 20, 21 and 35.

จำนวนเต็มบวก n เรียกว่า squarefree ถ้าไม่มีกำลังสองของจำนวนเฉพาะหาร n จากจำนวนที่แตกต่างกันสิบสองจำนวนในแปดแถวแรกของสามเหลี่ยม Pascal ทั้งหมดยกเว้น 4 และ 20 เป็นสี่เหลี่ยมจัตุรัส ผลรวมของจำนวนสแควร์ฟรีที่แตกต่างกันในแปดแถวแรกคือ 105

หาผลรวมของจำนวนยกกำลังสองที่ไม่เท่ากันใน 51 แถวแรกของสามเหลี่ยม Pascal

# --hints--

`squarefreeBinomialCoefficients()` ต้องคืนค่าเป็น `34029210557338`

```js
assert.strictEqual(squarefreeBinomialCoefficients(), 34029210557338);
```

# --seed--

## --seed-contents--

```js
function squarefreeBinomialCoefficients() {

  return true;
}

squarefreeBinomialCoefficients();
```

# --solutions--

```js
// solution required
```
