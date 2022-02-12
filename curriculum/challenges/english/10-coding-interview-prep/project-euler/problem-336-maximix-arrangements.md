---
id: 5900f4bd1000cf542c50ffcf
title: 'Problem 336: Maximix Arrangements'
challengeType: 5
forumTopicId: 301994
dashedName: problem-336-maximix-arrangements
---

# --description--

รถไฟใช้เพื่อขนส่งตู้สี่ตู้ตามลำดับ $ABCD$  
แต่บางครั้งเมื่อรถไฟมาถึงเพื่อไปรับตู้รถไฟ ขบวนรถไฟก็อาจไม่อยู่ในลำดับที่ถูกต้อง

ในการจัดเรียงตู้โดยสารใหม่ ทั้งหมดจะถูกแบ่งไปยังแท่นหมุนขนาดใหญ่ หลังจากถอดตู้โดยสารออกจากจุดที่กำหนดแล้ว รถไฟจะเคลื่อนออกจากแท่นหมุนโดยดึงตู้โดยสารที่ยังติดอยู่กับรางรถไฟ ตู้โดยสารที่เหลือหมุนได้ 180° จากนั้นตู้โดยสารทั้งหมดจะถูกเชื่อมต่อใหม่ และกระบวนการนี้จะทำซ้ำบ่อยขนาดให้ก็ได้ เพื่อให้ใช้แท่นหมุนจำนวนน้อยที่สุด

การเรียงบางแบบ เช่น $ADCB$ สามารถแก้ไขได้ง่าย โดย  
แยกขบวน $A$ และ $D$ และและหมุน $DCB$ ก็เสร็จแล้ว

แต่ Simple Simon (คนขับรถไฟ) ไม่เน้นประสิทธิภาพ ดังนั้นเขาจึงแก้ปัญหาโดยเริ่มขบวน $A$ ในตำแหน่งที่ถูกต้อง จากนั้นค่อยขึ้นรถ $B$ เป็นต้น

ถ้าใช้ตู้โดยสารสี่ตู้ การเรียงตู้ที่เป็น worst case ของ Simon คือ $DACB$ และ $DBAC$ ซึ่งทำให้เขาหมุนห้ารอบ (แต่ถ้าใช้วิธีอื่นจะหมุนแค่สามครั้ง) กระบวนการที่เขาใช้สำหรับ $DACB$ แสดงอยู่ด้านล่าง

<img class="img-responsive center-block" alt="five rotations for maximix arrangement DACB" src="https://cdn.freecodecamp.org/curriculum/project-euler/maximix-arrangements.gif" style="background-color: white; padding: 10px;">

มีการเรียงตู้ 24 แบบ ถ้ามีหกตู้ โดยการเรียงแบบที่สิบตามตัวอักษรเป็น $DFAECB$

หาการจัดเรียงแบบที่ ${2011}$ ตามตัวอักษร ถ้ามี 11 ตู้

# --hints--

`maximixArrangements()` ต้องคืนค่าเป็นสตริง

```js
assert(typeof maximixArrangements() === 'string');
```

`maximixArrangements()` ต้องคืนค่าเป็นสตริง `CAGBIHEFJDK`

```js
assert.strictEqual(maximixArrangements(), 'CAGBIHEFJDK');
```

# --seed--

## --seed-contents--

```js
function maximixArrangements() {

  return true;
}

maximixArrangements();
```

# --solutions--

```js
// solution required
```
