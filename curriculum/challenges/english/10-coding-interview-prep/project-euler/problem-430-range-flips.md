---
id: 5900f51a1000cf542c51002d
title: 'Problem 430: Range flips'
challengeType: 5
forumTopicId: 302101
dashedName: problem-430-range-flips
---

# --description--

$N$ disks วางเรียงกันเป็นแถว ดัชนี 1 ถึง $N$ จากซ้ายไปขวา

ดิสก์แต่ละแผ่นมีด้านดำและด้านขาว เริ่มแรกดิสก์ทั้งหมดแสดงด้านสีขาว

ในแต่ละเทิร์น สองจำนวนเต็ม $A$ และ $B$ ที่ไม่จำเป็นต้องแตกต่างกันสองค่าระหว่าง 1 ถึง $N$ (รวม) จะถูกสุ่มเลือกอย่างสม่ำเสมอ ดิสก์ทั้งหมดที่มีดัชนีตั้งแต่ $A$ ถึง $B$ (รวม) จะถูกพลิก

ตัวอย่างต่อไปนี้แสดงกรณี $N = 8$ ในเทิร์นแรก $A = 5$ และ $B = 2$ และในเทิร์นที่สอง $A = 4$ และ $B = 6$

<img class="img-responsive center-block" alt="example for N = 8, with first turn A = 5 and B = 2, and second turn A = 4 and B = 6" src="https://cdn.freecodecamp.org/curriculum/project-euler/range-flips.gif" style="background-color: white; padding: 10px;">

ให้ $E(N, M)$ เป็นจำนวนดิสก์ที่คาดไว้ซึ่งแสดงด้านสีขาวหลังจาก $M$ หมุน เราสามารถยืนยันได้ว่า $E(3, 1) = \frac{10}{9}$, $E(3, 2) = \frac{5}{3}$, $E(10, 4) ≈ 5.157$ และ $E(100, 10) ≈ 51.893$

หา $E({10}^{10}, 4000)$ ให้คำตอบของคุณปัดเศษทศนิยม 2 ตำแหน่งหลังจุดทศนิยม

# --hints--

`rangeFlips()` ควร return `5000624921.38`.

```js
assert.strictEqual(rangeFlips(), 5000624921.38);
```

# --seed--

## --seed-contents--

```js
function rangeFlips() {

  return true;
}

rangeFlips();
```

# --solutions--

```js
// solution required
```
