---
id: 5900f5131000cf542c510025
title: 'Problem 422: Sequence of points on a hyperbola'
challengeType: 5
forumTopicId: 302092
dashedName: problem-422-sequence-of-points-on-a-hyperbola
---

# --description--

ให้ $H$ เป็นไฮเปอร์โบลาที่กำหนดโดยสมการ $12x^2 + 7xy - 12y^2 = 625$

ถัดไป กำหนด $X$ เป็นจุด (7, 1) จะเห็นได้ว่า $X$ อยู่ใน $H$

ตอนนี้เรากำหนดลำดับของจุดใน $H, \\{P_i : i ≥ 1\\}$ เป็น:

- $P_1 = (13, \frac{61}{4})$.
- $P_2 = (\frac{-43}{6}, -4)$.
- สำหรับ $i > 2$ $P_i$ คือจุดเฉพาะใน $H$ ซึ่งแตกต่างจาก $P_{i - 1}$ และเส้นนั้น $P_iP_{i - 1}$ ขนานกับเส้นที่ $P_{i - 2}X$. สามารถแสดงให้เห็นได้ว่า $P_i$ มีการกำหนดไว้อย่างดี และพิกัดนั้นเป็นจำนวนตรรกยะเสมอ

<img class="img-responsive center-block" alt="animation showing defining points P_1 to P_6" src="https://cdn.freecodecamp.org/curriculum/project-euler/sequence-of-points-on-a-hyperbola.gif" style="background-color: white; padding: 10px;">

จะได้ $P_3 = (\frac{-19}{2}, \frac{-229}{24})$, $P_4 = (\frac{1267}{144}, \frac{-37}{ 12})$ และ $P_7 = (\frac{17\\,194\\,218\\,091}{143\\,327\\,232}, \frac{274\\,748\\,766 \\,781}{1\\,719\\,926\\,784})$.

ให้หา $P_n$ ถ้า $n = {11}^{14}$ ในรูปแบบต่อไปนี้  
ถ้า $P_n = (\frac{a}{b}, \frac{c}{d})$ โดยเป็นเศษส่วนอย่างต่ำ และตัวส่วนเป็นค่าบวก คำตอบจะเป็น $(a + b + c + d)\bmod 1\\,000\\,000\\,007$

ถ้า $n = 7$ คำตอบจะเป็น $806\\,236\\,837$

# --hints--

`sequenceOfPointsOnHyperbola()` ต้องคืนค่าเป็น `92060460`

```js
assert.strictEqual(sequenceOfPointsOnHyperbola(), 92060460);
```

# --seed--

## --seed-contents--

```js
function sequenceOfPointsOnHyperbola() {

  return true;
}

sequenceOfPointsOnHyperbola();
```

# --solutions--

```js
// solution required
```
