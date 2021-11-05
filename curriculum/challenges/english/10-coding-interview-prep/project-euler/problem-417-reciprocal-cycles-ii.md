---
id: 5900f50d1000cf542c51001f
title: 'Problem 417: Reciprocal cycles II'
challengeType: 5
forumTopicId: 302086
dashedName: problem-417-reciprocal-cycles-ii
---

# --description--

เศษส่วนมี 1 ในตัวเศษ การแสดงทศนิยมของเศษส่วนหน่วยที่มีตัวส่วน 2 ถึง 10 จะได้รับ

$$\begin{align}
  & \frac{1}{2}  = 0.5 \\\\
  & \frac{1}{3}  = 0.(3) \\\\
  & \frac{1}{4}  = 0.25 \\\\
  & \frac{1}{5}  = 0.2 \\\\
  & \frac{1}{6}  = 0.1(6) \\\\
  & \frac{1}{7}  = 0.(142857) \\\\
  & \frac{1}{8}  = 0.125 \\\\
  & \frac{1}{9}  = 0.(1) \\\\
  & \frac{1}{10} = 0.1 \\\\
\end{align}$$

โดยที่ $0.1(6)$ หมายถึง $0.166666\ldots$ และมีรอบการเกิดซ้ำ 1 หลัก จะเห็นได้ว่า $\frac{1}{7}$ มีรอบการเกิดซ้ำ 6 หลัก

เศษส่วนหน่วยที่ตัวส่วนไม่มีตัวประกอบเฉพาะอื่นใดนอกจาก 2 และ/หรือ 5 จะไม่ถือว่ามีวัฏจักรที่เกิดซ้ำ เรากำหนดความยาวของวัฏจักรที่เกิดซ้ำของเศษส่วนหน่วยเหล่านั้นเป็น 0

ให้ $L(n)$ แทนความยาวของรอบที่เกิดซ้ำของ $\frac{1}{n}$ คุณจะได้รับ $\sum L(n)$ สำหรับ $3 ≤ n ≤ 1\\,000\\,000$ เท่ากับ $55\\,535\\,191\\,115$

หา $\sum L(n)$ สำหรับ $3 ≤ n ≤ 100\\,000\\,000$
# --hints--

`reciprocalCyclesTwo()` ควร return `446572970925740`.

```js
assert.strictEqual(reciprocalCyclesTwo(), 446572970925740);
```

# --seed--

## --seed-contents--

```js
function reciprocalCyclesTwo() {

  return true;
}

reciprocalCyclesTwo();
```

# --solutions--

```js
// solution required
```
