---
id: 5900f4811000cf542c50ff94
title: 'Problem 277: A Modified Collatz sequence'
challengeType: 5
forumTopicId: 301927
dashedName: problem-277-a-modified-collatz-sequence
---

# --description--

ลำดับจำนวนเต็มของ Colatz ที่แก้ไขได้มาจากค่าเริ่มต้น $a_1$ ด้วยวิธีต่อไปนี้:

$a_{n + 1} = \frac{a_n}{3}$ ถ้า $a_n$ หารด้วย 3 ลงตัว เราจะแสดงว่านี่เป็นการลดลงอย่างมาก ("D")

$a_{n + 1} = \frac{4a_n + 2}{3}$ ถ้า $a_n$ หารด้วย 3 ได้เศษ 1 เราจะแสดงว่านี่เป็นการเพิ่มขึ้น ("U")

$a_{n + 1} = \frac{2a_n - 1}{3}$ ถ้า $a_n$ หารด้วย 3 ให้เหลือเศษ 2 เราจะแสดงว่านี่เป็นการลดลง ("d")

ลำดับจะสิ้นสุดลงเมื่อ $a_n = 1$

เราสามารถแสดงลำดับขั้นตอนได้ไม่ว่าจะใช้จำนวนเต็มใด   
เช่น ถ้า $a_1 = 231$ ดังนั้นลำดับ $\\{a_n\\} = \\{231, 77, 51, 17, 11, 7, 10, 14, 9, 3, 1\\}$ จะสอดคล้องกับขั้นตอน "DdDddUUdDD"

แน่นอนว่ายังมี sequence อื่นๆ ที่ขึ้นต้นด้วย sequence เดียวกันนั้น "DdDddUUdDD...."

เช่น ถ้า $a_1 = 1004064$ ลำดับจะเป็น DdDddUUdDDDdUDUUUdDdUUDDDUdDD

1004064 เป็น $a_1 > {10}^6$ ที่น้อยที่สุดที่ขึ้นต้นด้วยลำดับ DdDddUUDD

ให้หา sequence ของ $a_1 > {10}^{15}$ ที่น้อยที่สุดที่ขึ้นต้นด้วยลำดับ "UDDDUdddDDUDDddDdDddDDUDDdUUDd" 

# --hints--

`modifiedCollatzSequence()` ต้องคืนค่าเป็น `1125977393124310`

```js
assert.strictEqual(modifiedCollatzSequence(), 1125977393124310);
```

# --seed--

## --seed-contents--

```js
function modifiedCollatzSequence() {

  return true;
}

modifiedCollatzSequence();
```

# --solutions--

```js
// solution required
```
