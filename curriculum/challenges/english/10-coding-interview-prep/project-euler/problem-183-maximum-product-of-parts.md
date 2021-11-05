---
id: 5900f4231000cf542c50ff36
title: 'Problem 183: Maximum product of parts'
challengeType: 5
forumTopicId: 301819
dashedName: problem-183-maximum-product-of-parts
---

# --description--

ให้ $N$ เป็นจำนวนเต็มบวก และให้ $N$ แบ่งออกเป็น $k$ ส่วนเท่าๆ กัน $r = \frac{N}{k}$ ดังนั้น $N = r + r + \cdots + r$

ให้ $P$ เป็นผลคูณของส่วนเหล่านี้ $P = r × r × \cdots × r = r^k$

ตัวอย่างเช่น ถ้า 11 ถูกแบ่งออกเป็นห้าส่วนเท่าๆ กัน 11 = 2.2 + 2.2 + 2.2 + 2.2 + 2.2 แล้ว $P = {2.2}^5 = 51.53632$

ให้ $M(N) = P_{max}$ สำหรับค่าที่กำหนดเป็น $N$

ปรากฎว่าค่าสูงสุดของ $N = 11$ หาได้จากการแยกส่วนสิบเอ็ดออกเป็นสี่ส่วนเท่าๆ กัน ซึ่งนำไปสู่ ​​$P_{max} = {(\frac{11}{4})}^4$; นั่นคือ $M(11) = \frac{14641}{256} = 57.19140625$ ซึ่งเป็นจุดสิ้นสุดของทศนิยม

อย่างไรก็ตาม สำหรับ $N = 8$ ค่าสูงสุดทำได้โดยแบ่งออกเป็นสามส่วนเท่าๆ กัน ดังนั้น $M(8) = \frac{512}{27}$ ซึ่งเป็นทศนิยมที่ไม่สิ้นสุด

ห้ $D(N) = N$ ถ้า $M(N)$ เป็นทศนิยมที่ไม่สิ้นสุด และ $D(N) = -N$ ถ้า $M(N)$ เป็นทศนิยมที่สิ้นสุด

ตัวอย่างเช่น $\sum D(N)$ สำหรับ $5 ≤ N ≤ 100$ คือ 2438

หา $\sum D(N)$ สำหรับ $5 ≤ N ≤ 10000$

# --hints--

`maximumProductOfParts()` ควร return `48861552`.

```js
assert.strictEqual(maximumProductOfParts(), 48861552);
```

# --seed--

## --seed-contents--

```js
function maximumProductOfParts() {

  return true;
}

maximumProductOfParts();
```

# --solutions--

```js
// solution required
```
