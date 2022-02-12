---
id: 5900f3b01000cf542c50fec3
title: 'Problem 68: Magic 5-gon ring'
challengeType: 5
forumTopicId: 302180
dashedName: problem-68-magic-5-gon-ring
---

# --description--

พิจารณา "magic" 3-gon ring เติมเลข 1 ถึง 6 และแต่ละเส้นจะบวกกันได้ 9

<img class="img-responsive center-block" alt="a completed example of a 3-gon ring" src="https://cdn-media-1.freecodecamp.org/project-euler/3-gon-ring.png" style="background-color: white; padding: 10px;">

ให้ทำงาน **ตามเข็มนาฬิกา**, และเริ่มจากกลุ่มที่มีโหนดภายนอกต่ำสุด (4,3,2 ในตัวอย่างนี้) แต่ละโซลูชันสามารถอธิบายได้ไม่ซ้ำกัน ตัวอย่างเช่น วิธีแก้ปัญหาข้างต้นสามารถอธิบายได้โดยชุด: 4,3,2; 6,2,1; 5,1,3.

เป็นไปได้ที่จะทำให้แหวนสมบูรณ์ด้วยผลรวมที่แตกต่างกันสี่แบบ: 9, 10, 11 และ 12 มีทั้งหมดแปดวิธี

<div style='text-align: center;'>

| <div style='width: 100px;'>Total</div> | <div style='width: 250px;'>Solution Set</div> |
| -------------------------------------- | --------------------------------------------- |
| 9                                      | 4,2,3; 5,3,1; 6,1,2                           |
| 9                                      | 4,3,2; 6,2,1; 5,1,3                           |
| 10                                     | 2,3,5; 4,5,1; 6,1,3                           |
| 10                                     | 2,5,3; 6,3,1; 4,1,5                           |
| 11                                     | 1,4,6; 3,6,2; 5,2,4                           |
| 11                                     | 1,6,4; 5,4,2; 3,2,6                           |
| 12                                     | 1,5,6; 2,6,4; 3,4,5                           |
| 12                                     | 1,6,5; 3,5,4; 2,4,6                           |

</div>

การเชื่อมแต่ละกลุ่มเข้าด้วยกันจะร้างสตริงที่มีตัวเลข 9 หลักได้ สตริงสูงสุดสำหรับวงแหวนนี้คือ 432621513


การใช้ตัวเลข 1 ถึง 10 และขึ้นอยู่กับการจัดเรียง สามารถสร้างสตริง 16 และ 17 หลักได้ สูงสุดเท่าไหร่ **16-digit** สตริง สำหรับ "magic" 5-gon ring

<img class="img-responsive center-block" alt="a blank diagram of a 5-gon ring" src="https://cdn-media-1.freecodecamp.org/project-euler/5-gon-ring.png" style="background-color: white; padding: 10px;">

# --hints--

`magic5GonRing()` ต้องคืนค่าเป็นตัวเลข

```js
assert(typeof magic5GonRing() === 'number');
```

`magic5GonRing()` ต้องคืนค่าเป็น 6531031914842725

```js
assert.strictEqual(magic5GonRing(), 6531031914842725);
```

# --seed--

## --seed-contents--

```js
function magic5GonRing() {

  return true;
}

magic5GonRing();
```

# --solutions--

```js
// solution required
```
