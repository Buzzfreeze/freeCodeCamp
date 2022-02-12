---
id: 5900f4f41000cf542c510007
title: 'Problem 392: Enmeshed unit circle'
challengeType: 5
forumTopicId: 302057
dashedName: problem-392-enmeshed-unit-circle
---

# --description--

Rectilinear Grid เป็นเส้นตารางมุมฉากที่ระยะห่างระหว่างเส้นตารางไม่จำเป็นต้องเท่ากัน

ตัวอย่างของตารางดังกล่าวคือกระดาษกราฟลอการิทึม

พิจารณา Rectilinear Grid ในระบบพิกัดคาร์ทีเซียนที่มีคุณสมบัติดังต่อไปนี้:

- เส้นตารางขนานกับแกนของระบบพิกัดคาร์ทีเซียน
- มีเส้นตารางแนวตั้ง $N + 2$ และเส้นตารางแนวนอน $N + 2$ ดังนั้นจึงมีเซลล์สี่เหลี่ยม $(N + 1) \times (N + 1)$
- สมการของเส้นตารางแนวตั้งด้านนอกสองเส้นคือ $x = -1$ และ $x = 1$
- สมการของเส้นตารางแนวนอนด้านนอกสองเส้นคือ $y = -1$ และ $y = 1$
- เซลล์กริดจะเป็นสีแดงหากซ้อนทับกับวงกลมหน่วย มิฉะนั้นจะเป็นสีดำ

สำหรับปัญหานี้ เราอยากให้คุณค้นหาตำแหน่งของเส้นตารางแนวตั้งด้านในของ $N$ ในแนวนอน และ $N$ ในแนวตั้ง เพื่อให้พื้นที่สีแดงถูกย่อให้เล็กสุด

เช่น นี่คือรูปภาพของวิธีแก้เมื่อ $N = 10$:

<img class="img-responsive center-block" alt="solution for N = 10" src="https://cdn.freecodecamp.org/curriculum/project-euler/enmeshed-unit-circle.png" style="background-color: white; padding: 10px;">

พื้นที่ที่ถูกครอบครองโดยเซลล์สีแดงเมื่อ $N = 10$ จะเป็น 3.3469640797 (ปัดเศษเป็นทศนิยมสิบหลัก)

หาตำแหน่งเมื่อ $N = 400$ ให้พื้นที่สีแดงเป็นคำตอบของคุณ โดยปัดเศษเป็นทศนิยมสิบหลัก

# --hints--

`enmeshedUnitCircle()` ต้องคืนค่าเป็น `3.1486734435`

```js
assert.strictEqual(enmeshedUnitCircle(), 3.1486734435);
```

# --seed--

## --seed-contents--

```js
function enmeshedUnitCircle() {

  return true;
}

enmeshedUnitCircle();
```

# --solutions--

```js
// solution required
```
