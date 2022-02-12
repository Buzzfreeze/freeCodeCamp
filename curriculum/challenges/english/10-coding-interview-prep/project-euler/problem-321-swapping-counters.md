---
id: 5900f4ae1000cf542c50ffc0
title: 'Problem 321: Swapping Counters'
challengeType: 5
forumTopicId: 301978
dashedName: problem-321-swapping-counters
---

# --description--

แถวแนวนอนที่ประกอบด้วยสี่เหลี่ยม $2n + 1$ มีตัวนับสีแดง $n$ วางที่ปลายด้านหนึ่งและตัวนับสีน้ำเงิน $n$ ที่ปลายอีกด้านหนึ่ง คั่นด้วยสี่เหลี่ยมว่างเดียวตรงกลาง ตัวอย่างเช่น เมื่อ $n = 3$

<img class="img-responsive center-block" alt="three squares with red and blue counters placed on opposite ends of the row, separated by one empty square" src="https://cdn.freecodecamp.org/curriculum/project-euler/swapping-counters-1.gif" style="background-color: white; padding: 10px;">

ตัวนับสามารถย้ายจากสี่เหลี่ยมหนึ่งไปยังอีกช่องหนึ่ง (สไลด์) หรือสามารถกระโดดข้ามตัวนับอื่น (กระโดด) ได้ตราบใดที่สี่เหลี่ยมที่อยู่ถัดจากตัวนับนั้นว่างอยู่

<img class="img-responsive center-block" alt="allowed moves of the counter" src="https://cdn.freecodecamp.org/curriculum/project-euler/swapping-counters-2.gif" style="background-color: white; padding: 10px;">

ให้ $M(n)$ แทนจำนวนการเคลื่อนไหว/การกระทำขั้นต่ำเพื่อย้อนกลับตำแหน่งของตัวนับสีทั้งหมด นั่นคือย้ายเคาน์เตอร์สีแดงทั้งหมดไปทางขวาและย้ายเคาน์เตอร์สีน้ำเงินทั้งหมดไปทางซ้าย

จะเห็นว่า $M(3) = 15$ เป็น triangle number เช่นกัน

หากเราสร้างลำดับตามค่าของ n ซึ่ง $M(n)$ เป็น triangle number  ห้าเทอมแรกจะเป็น: 1, 3, 10, 22 และ 63 และผลรวมของพวกมันจะเท่ากับ 99

หาผลรวมของสี่สิบเทอมแรกของลำดับนี้

# --hints--

`swappingCounters()` ต้องคืนค่าเป็น `2470433131948040`

```js
assert.strictEqual(swappingCounters(), 2470433131948040);
```

# --seed--

## --seed-contents--

```js
function swappingCounters() {

  return true;
}

swappingCounters();
```

# --solutions--

```js
// solution required
```
