---
id: 5900f4e51000cf542c50fff6
title: 'Problem 374: Maximum Integer Partition Product'
challengeType: 5
forumTopicId: 302036
dashedName: problem-374-maximum-integer-partition-product
---

# --description--

partitionจำนวนเต็มของจำนวน $n$ เป็นวิธีการเขียน $n$ เป็นผลรวมของจำนวนเต็มบวก

partitionที่แตกต่างกันเฉพาะในลำดับของผลรวมจะถือว่าเหมือนกัน partitionของ $n$ ออกเป็นส่วนต่าง ๆ คือpartitionของ $n$ ซึ่งทุกส่วนจะเกิดขึ้นพร้อมกันมากที่สุด

partitionของ 5 เป็นส่วนที่แตกต่างกันคือ:

5, 4 + 1 และ 3 + 2

ให้ $f(n)$ เป็นผลิตภัณฑ์สูงสุดของส่วนต่าง ๆ ของpartition $n$ ให้เป็นส่วนที่แตกต่างกัน และให้ $m(n)$ เป็นจำนวนขององค์ประกอบของpartitionของ $n$ กับผลิตภัณฑ์นั้น

ดังนั้น $f(5) = 6$ และ $m(5) = 2$

สำหรับ $n = 10$ พาร์ติชันที่มีผลิตภัณฑ์ที่ใหญ่ที่สุดคือ $10 = 2 + 3 + 5$ ซึ่งให้ $f(10) = 30$ และ $m(10) = 3$ และผลิตภัณฑ์ของพวกเขา $f(10) \times m(10) = 30 \times 3 = 90$

สามารถตรวจสอบได้ว่า $\sum f(n) \times m(n)$ สำหรับ $1 ≤ n ≤ 100 = 1\\,683\\,550\\,844\\,462$

หา $\sum f(n) \times m(n)$ สำหรับ $1 ≤ n ≤ {10}^{14}$ ให้คำตอบแบบmodulo $982\\,451\\,653$ ไพรม์ที่ 50 ล้าน
# --hints--

`maximumIntegerPartitionProduct()` ควร return `334420941`.

```js
assert.strictEqual(maximumIntegerPartitionProduct(), 334420941);
```

# --seed--

## --seed-contents--

```js
function maximumIntegerPartitionProduct() {

  return true;
}

maximumIntegerPartitionProduct();
```

# --solutions--

```js
// solution required
```
