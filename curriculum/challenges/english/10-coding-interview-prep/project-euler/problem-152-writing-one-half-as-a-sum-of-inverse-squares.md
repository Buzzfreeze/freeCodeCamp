---
id: 5900f4041000cf542c50ff17
title: 'Problem 152: Writing one half as a sum of inverse squares'
challengeType: 5
forumTopicId: 301783
dashedName: problem-152-writing-one-half-as-a-sum-of-inverse-squares
---

# --description--

มีหลายวิธีในการเขียนตัวเลข $\frac{1}{2}$ เป็นผลรวมของกำลังสองผกผันโดยใช้จำนวนเต็มที่ต่างกัน

เช่น สามารถใช้ตัวเลข {2,3,4,5,7,12,15,20,28,35} ได้แบบนี้:

$$\frac{1}{2} = \frac{1}{2^2} + \frac{1}{3^2} + \frac{1}{4^2} + \frac{1}{5^2} + \frac{1}{7^2} + \frac{1}{{12}^2} + \frac{1}{{15}^2} + \frac{1}{{20}^2} + \frac{1}{{28}^2} + \frac{1}{{35}^2}$$

อันที่จริง ใช้เฉพาะจำนวนเต็มระหว่าง 2 ถึง 45 เท่านั้น มีสามวิธีที่จะทำ สองวิธีที่เหลือคือ: {2,3,4,6,7,9,10,20,28,35,36,45 } และ {2,3,4,6,7,9,12,15,28,30,35,36,45}

มีกี่วิธีในการเขียนตัวเลข $\frac{1}{2}$ เป็นผลรวมของกำลังสองผกผันโดยใช้จำนวนเต็มระหว่าง 2 ถึง 80

# --hints--

`sumInverseSquares()` ต้องคืนค่าเป็น `301`

```js
assert.strictEqual(sumInverseSquares(), 301);
```

# --seed--

## --seed-contents--

```js
function sumInverseSquares() {

  return true;
}

sumInverseSquares();
```

# --solutions--

```js
// solution required
```
