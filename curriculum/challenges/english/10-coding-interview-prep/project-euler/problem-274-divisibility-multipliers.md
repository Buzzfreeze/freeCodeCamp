---
id: 5900f47f1000cf542c50ff91
title: 'Problem 274: Divisibility Multipliers'
challengeType: 5
forumTopicId: 301924
dashedName: problem-274-divisibility-multipliers
---

# --description--

แต่ละจำนวนเต็มที่ $p > 1$ ที่เป็น coprime กันจะมีตัวคูณหาร $m &lt; p$ ซึ่งคงการหารด้วย $p$ ไว้สำหรับฟังก์ชันต่อไปนี้ในจำนวนเต็มบวกใดๆ $n$:

$f(n) = (\text{ทุกตัวยกเว้นตัวสุดท้ายของ} \\; n) + (\text{ตัวสุดท้ายของ} \\; n) \times m$

นั่นคือ ถ้า $m$ เป็นตัวคูณหารสำหรับ $p$ แล้ว $f(n)$ จะหารด้วย $p$ ลงตัวก็ต่อเมื่อ $n$ หารด้วย $p$ ลงตัว

(เมื่อ $n$ มากกว่า $p$ มาก $f(n)$ จะน้อยกว่า $n$ และการใช้ $f$ ซ้ำๆ จะเป็นการทดสอบการหารแบบทวีคูณสำหรับ $p$)

เช่น ตัวคูณหารสำหรับ 113 คือ 34

$f(76275) = 7627 + 5 \times 34 = 7797$: 76275 และ 7797 หารด้วย 113 ลงตัว

$f(12345) = 1234 + 5 \times 34 = 1404$: 12345 และ 1404 หารด้วย 113 ไม่ลงตัว

ผลรวมของตัวคูณการหารสำหรับจำนวนเฉพาะที่มีค่า coprime ถึง 10 และน้อยกว่า 1000 คือ 39517 ผลรวมของตัวคูณการหารสำหรับจำนวนเฉพาะที่มีค่า coprime ถึง 10 และน้อยกว่า ${10}^7$ เป็นเท่าใด

# --hints--

`divisibilityMultipliers()` ต้องคืนค่าเป็น `1601912348822`

```js
assert.strictEqual(divisibilityMultipliers(), 1601912348822);
```

# --seed--

## --seed-contents--

```js
function divisibilityMultipliers() {

  return true;
}

divisibilityMultipliers();
```

# --solutions--

```js
// solution required
```
