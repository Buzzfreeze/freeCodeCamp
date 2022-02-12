---
id: 5900f4601000cf542c50ff73
title: 'Problem 243: Resilience'
challengeType: 5
forumTopicId: 301890
dashedName: problem-243-resilience
---

# --description--

เราจะเรียกเศษส่วนที่ไม่สามารถลดรูปได้ว่า resilient fraction

สำหรับตัวส่วนใดๆ $d$ จะมี $d−1$ เศษส่วนแท้ ตัวอย่างเช่น กับ $d = 12$:

$$\frac{1}{12}, \frac{2}{12}, \frac{3}{12}, \frac{4}{12}, \frac{5}{12}, \frac{6}{12}, \frac{7}{12}, \frac{8}{12}, \frac{9}{12}, \frac{10}{12}, \frac{11}{12}$$

เราจะเรียกเศษส่วนที่ไม่ลดรูปได้ว่า resilient fraction

นอกจากนี้ เราจะกำหนดความยืดหยุ่นของตัวส่วน $R(d)$ ให้เป็นอัตราส่วนของเศษส่วนแท้ที่มีความยืดหยุ่น ตัวอย่างเช่น $R(12) = \frac{4}{11}$

อันที่จริง $d = 12$ เป็นตัวหารที่น้อยที่สุดที่มีความยืดหยุ่น $R(d) &lt; \frac{4}{10}$.

ให้หาตัวหารที่น้อยที่สุด $d$ ที่มี $R(d) &lt; \frac{15\\,499}{94\\,744}$

# --hints--

`resilience()` ต้องคืนค่าเป็น `892371480`

```js
assert.strictEqual(resilience(), 892371480);
```

# --seed--

## --seed-contents--

```js
function resilience() {

  return true;
}

resilience();
```

# --solutions--

```js
// solution required
```
