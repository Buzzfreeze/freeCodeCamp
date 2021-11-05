---
id: 5900f46d1000cf542c50ff7f
title: 'Problem 255: Rounded Square Roots'
challengeType: 5
forumTopicId: 301903
dashedName: problem-255-rounded-square-roots
---

# --description--

กำหนด rounded-square-root ของจำนวนเต็มบวก $n$ เป็นสแควร์รูทของ $n$ ที่ปัดเศษเป็นจำนวนเต็มที่ใกล้เคียงที่สุด

ขั้นตอนต่อไปนี้ (โดยพื้นฐานแล้ววิธีการของ Heron ที่ปรับให้เข้ากับเลขคณิตจำนวนเต็ม) จะค้นหารากที่สองของ $n$ ที่ปัดเศษ:

ให้ $d$ เป็นจำนวนหลักของตัวเลข $n$

ถ้า $d$ เป็นเลขคี่ ให้ตั้งค่า $x_0 = 2 × {10}^{\frac{d - 1}{2}}$

ถ้า $d$ เป็นเลขคู่ ให้ตั้งค่า $x_0 = 7 × {10}^{\frac{d - 2}{2}}$

วน

$$x_{k + 1} = \left\lfloor\frac{x_k + \left\lceil\frac{n}{x_k}\right\rceil}{2}\right\rfloor$$

กระทั่ง $x_{k + 1} = x_k$.

ตัวอย่างเช่น ให้เราหาค่าที่ปัดเศษสี่เหลี่ยมของ $n = 4321$

$n$ มี 4 หลัก ดังนั้น $x_0 = 7 × {10}^{\frac{4-2}{2}} = 70$

$$x_1 = \left\lfloor\frac{70 + \left\lceil\frac{4321}{70}\right\rceil}{2}\right\rfloor = 66 \\\\
x_2 = \left\lfloor\frac{66 + \left\lceil\frac{4321}{66}\right\rceil}{2}\right\rfloor = 66$$

เนื่องจาก $x_2 = x_1$ เราหยุดที่นี่ ดังนั้น หลังจากการวนซ้ำสองครั้ง เราพบว่า สแควร์รูทที่ปัดเศษของ 4321 คือ 66 (สแควร์รูทที่แท้จริงคือ 65.7343137…)

จำนวนการทำซ้ำที่จำเป็นเมื่อใช้วิธีนี้มีน้อยอย่างน่าประหลาดใจ ตัวอย่างเช่น เราสามารถหาค่าที่ปัดเศษของจำนวนเต็ม 5 หลัก ($10\\,000 ≤ n ≤ 99\\,999$) ได้โดยเฉลี่ย 3.2102888889 การวนซ้ำ (ค่าเฉลี่ยถูกปัดเศษเป็นทศนิยม 10 ตำแหน่ง )

จากขั้นตอนที่อธิบายข้างต้น จำนวนเฉลี่ยของการวนซ้ำที่ต้องใช้ในการหารากที่สองของตัวเลข 14 หลัก (${10}^{13} ≤ n &lt; {10}^{14}$) เป็นเท่าใด ? ให้คำตอบของคุณเป็นทศนิยม 10 ตำแหน่ง

**Note:** สัญลักษณ์ $⌊x⌋$ และ $⌈x⌉$ แสดงถึงfloor functionและceiling functionตามลำดับ

# --hints--

`roundedSquareRoots()` ควร return `4.447401118`.

```js
assert.strictEqual(roundedSquareRoots(), 4.447401118);
```

# --seed--

## --seed-contents--

```js
function roundedSquareRoots() {

  return true;
}

roundedSquareRoots();
```

# --solutions--

```js
// solution required
```
