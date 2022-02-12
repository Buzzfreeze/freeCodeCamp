---
id: 5900f4f71000cf542c51000a
title: 'Problem 395: Pythagorean tree'
challengeType: 5
forumTopicId: 302060
dashedName: problem-395-pythagorean-tree
---

# --description--

Pythagorean tree เป็นเศษส่วนที่สร้างขึ้นโดยขั้นตอนต่อไปนี้:

เริ่มต้นด้วยหน่วยสี่เหลี่ยม จากนั้นเรียกด้านใดด้านหนึ่งเป็นฐาน (ในภาพเคลื่อนไหว จะใช้ด้านล่างเป็นฐาน):

1. แปะสามเหลี่ยมมุมฉากกับด้านตรงข้ามฐาน โดยด้านตรงข้ามมุมฉากประชิดกับด้านนั้นและด้านในอัตราส่วน 3-4-5 โปรดทราบว่าด้านที่เล็กกว่าของสามเหลี่ยมต้องอยู่ทาง 'ขวา' โดยสัมพันธ์กับฐาน (ดูภาพเคลื่อนไหว)
2. ติดสี่เหลี่ยมจัตุรัสกับแต่ละด้านของสามเหลี่ยมมุมฉาก 
3. ทำซ้ำขั้นตอนนี้สำหรับสี่เหลี่ยมทั้งสอง โดยให้ด้านที่สัมผัสสามเหลี่ยมเป็นฐาน

ผลลัพธ์ที่ได้หลังจากการวนซ้ำเป็นอนันต์คือต้นไม้พีทาโกรัส

<img class="img-responsive center-block" alt="animation showing 8 iterations of the procedure" src="https://cdn.freecodecamp.org/curriculum/project-euler/pythagorean-tree.gif" style="background-color: white; padding: 10px;">

มีสี่เหลี่ยมผืนผ้าอย่างน้อยหนึ่งรูป ซึ่งด้านข้างขนานกับสี่เหลี่ยมจัตุรัสที่ใหญ่ที่สุดของ Pythagorean tree ซึ่งสี่เหลี่ยมผืนผ้านี้จะครอบ Pythagorean tree ไว้อย่างสมบูรณ์

หาพื้นที่ที่เล็กที่สุดเท่าที่จะเป็นไปได้สำหรับสี่เหลี่ยมที่ล้อมรอบต้นไม้นี้ และโดยให้ตอบเป็นทศนิยมสิบตำแหน่ง

# --hints--

`pythagoreanTree()` ต้องคืนค่าเป็น `28.2453753155`

```js
assert.strictEqual(pythagoreanTree(), 28.2453753155);
```

# --seed--

## --seed-contents--

```js
function pythagoreanTree() {

  return true;
}

pythagoreanTree();
```

# --solutions--

```js
// solution required
```
