---
id: 5900f4331000cf542c50ff45
title: 'Problem 198: Ambiguous Numbers'
challengeType: 5
forumTopicId: 301836
dashedName: problem-198-ambiguous-numbers
---

# --description--

การประมาณค่าจำนวนจริง $x$ ที่ดีที่สุดสำหรับตัวส่วนที่ถูกผูกไว้ $d$ คือจำนวนตรรกยะ $\frac{r}{s}$ (ในรูปแบบลดขนาด) ด้วย $s ≤ d$ ดังนั้นจำนวนตรรกยะใดๆ $\ frac{p}{q}$ ซึ่งใกล้กับ $x$ มากกว่า $\frac{r}{s}$ มี $q > d$

โดยปกติ การประมาณค่าที่ดีที่สุดสำหรับจำนวนจริงจะถูกกำหนดอย่างเฉพาะเจาะจงสำหรับขอบเขตตัวส่วนทั้งหมด อย่างไรก็ตาม มีข้อยกเว้นบางประการเช่น $\frac{9}{40}$ มีการประมาณค่าที่ดีที่สุดสองค่าคือ $\frac{1}{4}$ และ $\frac{1}{5}$ สำหรับตัวส่วนที่ถูกผูกไว้ $6$ เราจะเรียกจำนวนจริง $x$ คลุมเครือ ถ้ามีตัวส่วนอย่างน้อยหนึ่งตัวที่ $x$ มีค่าประมาณที่ดีที่สุดสองค่า เห็นได้ชัดว่าจำนวนที่คลุมเครือจำเป็นต้องมีเหตุผล

จำนวนตัวเลข$ x = \ frac {p} {Q} $, $ 0 & lt; x &lt; \frac{1}{100}$ มีตัวส่วน $q$ ไม่เกิน ${10}^8$ หรือไม่

# --hints--

`ambiguousNumbers()` ควร return `52374425`.

```js
assert.strictEqual(ambiguousNumbers(), 52374425);
```

# --seed--

## --seed-contents--

```js
function ambiguousNumbers() {

  return true;
}

ambiguousNumbers();
```

# --solutions--

```js
// solution required
```
