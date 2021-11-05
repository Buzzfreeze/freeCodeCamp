---
id: 5900f42c1000cf542c50ff3f
title: 'Problem 192: Best Approximations'
challengeType: 5
forumTopicId: 301830
dashedName: problem-192-best-approximations
---

# --description--

ให้ $x$ เป็นจำนวนจริง

การประมาณค่าที่ดีที่สุดของ $x$ สำหรับตัวส่วนที่ถูกผูกไว้ $d$ คือจำนวนตรรกยะ $\frac{r}{s}$ ในรูปแบบลดขนาด โดยที่ $s ≤ d$ ทำให้จำนวนตรรกยะใดๆ ที่ใกล้กับ $x $ than $\frac{r}{s}$ มีตัวส่วนมากกว่า $d$:

$$|\frac{p}{q} - x| &lt; |\frac{r}{s} - x| ⇒ q > d$$

ตัวอย่างเช่น การประมาณที่ดีที่สุดของ $\sqrt{13}$ สำหรับตัวส่วนที่ถูกผูกไว้ $20$ คือ $\frac{18}{5}$ และการประมาณที่ดีที่สุดกับ $\sqrt{13}$ สำหรับตัวส่วนที่ถูกผูกไว้ $30$ คือ $\frac{101}{28}$.

ค้นหาผลรวมของตัวหารทั้งหมดของการประมาณค่าที่ดีที่สุดของ $\sqrt{n}$ สำหรับตัวส่วนที่ถูกผูกไว้ ${10}^{12}$ โดยที่ $n$ ไม่ใช่กำลังสองสมบูรณ์ และ $1 &lt; n ≤ 100,000$

# --hints--

`bestApproximations()` ควร return `57060635927998344`.

```js
assert.strictEqual(bestApproximations(), 57060635927998344);
```

# --seed--

## --seed-contents--

```js
function bestApproximations() {

  return true;
}

bestApproximations();
```

# --solutions--

```js
// solution required
```
