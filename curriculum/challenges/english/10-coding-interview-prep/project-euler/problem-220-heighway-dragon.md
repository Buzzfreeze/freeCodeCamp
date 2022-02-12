---
id: 5900f4481000cf542c50ff5b
title: 'Problem 220: Heighway Dragon'
challengeType: 5
forumTopicId: 301863
dashedName: problem-220-heighway-dragon
---

# --description--

ให้ $D_0$ เป็นสตริงที่มีตัวอักษรสองตัว "Fa" สำหรับ $n ≥ 1$ หาค่า $D_n$ จาก $D_{n - 1}$ ตามกฎการเขียนสตริงใหม่:

- "a" → "aRbFR"
- "b" → "LFaLb"

ดังนั้น $D_0$ = "Fa", $D_1$ = "FaRbFR", $D_2$ = "FaRbFRRLFaLbFR" เป็นต้น

สตริงเหล่านี้สามารถตีความได้ว่าเป็นคำสั่งของโปรแกรมคอมพิวเตอร์กราฟิก โดย "F" หมายถึง "ดึงไปข้างหน้าหนึ่งหน่วย" "L" หมายถึง "เลี้ยวซ้าย 90 องศา" "R" หมายถึง "เลี้ยวขวา 90 องศา" และ "a " และ "b" ถูกละเว้น ตำแหน่งเริ่มต้นของเคอร์เซอร์คอมพิวเตอร์คือ (0,0) ชี้ขึ้นไปทาง (0,1)

จากนั้น $D_n$ เป็นภาพวาดที่แปลกใหม่ที่รู้จักกันในชื่อ Heighway Dragon ของคำสั่ง $n$ ตัวอย่างเช่น $D_{10}$ แสดงอยู่ด้านล่าง; โดยนับ "F" แต่ละขั้นเป็นหนึ่งก้าว จุดที่ไฮไลต์ที่ (18,16) คือตำแหน่งที่ไปถึงหลังจาก 500 ก้าว

<img class="img-responsive center-block" alt="drawing of the Heighway Dragon after 500 steps" src="https://cdn.freecodecamp.org/curriculum/project-euler/heighway-dragon.gif" style="background-color: white; padding: 10px;">

ตำแหน่งของเคอร์เซอร์หลังจาก ${10}^{12}$ ขั้นตอนใน $D_{50}$ คืออะไร? ให้คำตอบของคุณเป็นสตริงในรูปแบบ 'x,y' โดยไม่มีช่องว่าง

# --hints--

`heighwayDragon()` ต้องคืนค่าเป็นสตริง

```js
assert(typeof heighwayDragon() === 'string');
```

`heighwayDragon()` ต้องคืนค่าเป็นสตริง `139776,963904`

```js
assert.strictEqual(heighwayDragon(), '139776,963904');
```

# --seed--

## --seed-contents--

```js
function heighwayDragon() {

  return true;
}

heighwayDragon();
```

# --solutions--

```js
// solution required
```
