---
id: 5900f4811000cf542c50ff94
title: 'Problem 277: A Modified Collatz sequence'
challengeType: 5
forumTopicId: 301927
dashedName: problem-277-a-modified-collatz-sequence
---

# --description--

ลำดับจำนวนเต็มของ Colatz ที่แก้ไขได้มาจากค่าเริ่มต้น $a_1$ ด้วยวิธีต่อไปนี้:

$a_{n + 1} = \frac{a_n}{3}$ ถ้า $a_n$ หารด้วย 3 ลงตัว เราจะแสดงว่านี่เป็นการก้าวลงครั้งใหญ่ "D"

$a_{n + 1} = \frac{4a_n + 2}{3}$ ถ้า $a_n$ หารด้วย 3 ได้เศษ 1 เราจะแสดงว่านี่เป็นขั้นที่สูงขึ้น "U"

$a_{n + 1} = \frac{2a_n - 1}{3}$ ถ้า $a_n$ หารด้วย 3 ให้เหลือเศษ 2 เราจะแสดงว่านี่เป็นการก้าวลง "d"

ลำดับจะสิ้นสุดลงเมื่อ $a_n = 1$

ด้วยจำนวนเต็มใดๆ เราสามารถแสดงลำดับขั้นตอนได้ ตัวอย่างเช่น ถ้า $a_1 = 231$ ดังนั้นลำดับ $\\{a_n\\} = \\{231, 77, 51, 17, 11, 7, 10, 14, 9, 3, 1\\}$ จะสอดคล้องกัน ไปยังขั้นตอน "DdDddUUdDD"

แน่นอนว่ายังมีsequenceอื่นๆ ที่ขึ้นต้นด้วยsequenceเดียวกันนั้น "DdDddUUdDD...."

ตัวอย่างเช่น ถ้า $a_1 = 1004064$ ลำดับจะเป็น DdDddUUdDDDdUDUUUdDdUUDDDUdDD

อันที่จริง 1004064 เป็น $a_1 > {10}^6$ ที่เล็กที่สุดที่ขึ้นต้นด้วยลำดับ DdDddUUDD

$a_1 > {10}^{15}$ ที่เล็กที่สุดที่ขึ้นต้นด้วยลำดับ "UDDDUdddDDUDDddDdDddDDUDDdUUDd" คืออะไร

# --hints--

`modifiedCollatzSequence()` ควร return `1125977393124310`.

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
