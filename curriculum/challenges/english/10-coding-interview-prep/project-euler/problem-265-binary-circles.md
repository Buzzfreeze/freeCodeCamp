---
id: 5900f4761000cf542c50ff88
title: 'Problem 265: Binary Circles'
challengeType: 5
forumTopicId: 301914
dashedName: problem-265-binary-circles
---

# --description--

ถ้า $2^N$ เป็นเลขฐานสองที่สามารถวางในวงกลม เพื่อให้การเรียงตามเข็มนาฬิกา $N$ หลักทั้งหมดแตกต่างกัน

ถ้า $N = 3$ สามารถจัดเรียงแบบวงกลมได้สองแบบ โดยไม่สนใจการหมุน:

<img class="img-responsive center-block" alt="two circular arrangements for N = 3" src="https://cdn.freecodecamp.org/curriculum/project-euler/binary-circles.gif" style="background-color: white; padding: 10px;">

สำหรับการจัดเรียงแรก ลำดับรอง 3 หลักในลำดับตามเข็มนาฬิกาคือ: 000, 001, 010, 101, 011, 111, 110 และ 100

การจัดเรียงแบบวงกลมแต่ละครั้งสามารถเข้ารหัสเป็นตัวเลขได้โดยการต่อเลขฐานสองโดยเริ่มจากการเรียงเลขศูนย์ตามลำดับเป็นบิตที่สำคัญที่สุดและดำเนินการตามเข็มนาฬิกา การจัดเตรียมสองแบบสำหรับ $N = 3$ จึงแสดงเป็น 23 และ 29:

$${00010111}_2 = 23\\\\
{00011101}_2 = 29$$

ถ้าให้ $S(N)$ เป็นผลรวมของการแทนค่าตัวเลขที่ไม่ซ้ำกัน เราจะเห็นได้ว่า $S(3) = 23 + 29 = 52$

ให้หา $S(5)$

# --hints--

`binaryCircles()` ต้องคืนค่าเป็น `209110240768`

```js
assert.strictEqual(binaryCircles(), 209110240768);
```

# --seed--

## --seed-contents--

```js
function binaryCircles() {

  return true;
}

binaryCircles();
```

# --solutions--

```js
// solution required
```
