---
id: 5900f4621000cf542c50ff74
title: 'Problem 245: Coresilience'
challengeType: 5
forumTopicId: 301892
dashedName: problem-245-coresilience
---

# --description--

เราจะเรียกเศษส่วนที่ไม่สามารถหักลงเป็นเศษส่วนที่ยืดหยุ่นได้

นอกจากนี้ เราจะกำหนดความยืดหยุ่นของตัวส่วน $R(d)$ ให้เป็นอัตราส่วนของเศษส่วนที่เหมาะสมที่มีความยืดหยุ่น ตัวอย่างเช่น $R(12) = \frac{4}{11}$

ความยืดหยุ่นของตัวเลข $d > 1$ ก็คือ $\frac{φ(d)}{d − 1}$ โดยที่ $φ$ เป็นฟังก์ชัน totient ของออยเลอร์

เรากำหนดแกนกลางของตัวเลขเพิ่มเติม $n > 1$ เป็น $C(n) = \frac{n − φ(n)}{n − 1}$

Coresilience ของไพรม์ $p$ คือ $C(p) = \frac{1}{p − 1}$

หาผลรวมของจำนวนเต็มรวม $1 &lt; n ≤ 2 × {10}^{11}$ โดยที่ $C(n)$ เป็นเศษส่วนหน่วย

# --hints--

`coresilience()` should return `288084712410001`.

```js
assert.strictEqual(coresilience(), 288084712410001);
```

# --seed--

## --seed-contents--

```js
function coresilience() {

  return true;
}

coresilience();
```

# --solutions--

```js
// solution required
```
