---
id: 5900f4bd1000cf542c50ffcf
title: 'Problem 336: Maximix Arrangements'
challengeType: 5
forumTopicId: 301994
dashedName: problem-336-maximix-arrangements
---

# --description--

รถไฟใช้เพื่อขนส่งตู้สี่ตู้ตามลำดับ: $ABCD$ อย่างไรก็ตาม บางครั้งเมื่อรถไฟมาถึงเพื่อไปรับตู้รถไฟ ขบวนรถไฟก็อาจไม่อยู่ในลำดับที่ถูกต้อง

ในการจัดเรียงตู้โดยสารใหม่ ทั้งหมดจะถูกแบ่งไปยังแท่นหมุนขนาดใหญ่ หลังจากถอดตู้โดยสารออกจากจุดที่กำหนดแล้ว รถไฟจะเคลื่อนออกจากแท่นหมุนโดยดึงตู้โดยสารที่ยังติดอยู่กับรางรถไฟ ตู้โดยสารที่เหลือหมุนได้ 180° จากนั้นตู้โดยสารทั้งหมดจะถูกเชื่อมต่อใหม่ และกระบวนการนี้จะทำซ้ำบ่อยเท่าที่จำเป็น เพื่อให้ได้จานเสียงจำนวนน้อยที่สุด

การเตรียมการบางอย่าง เช่น $ADCB$ สามารถแก้ไขได้ง่าย: รถม้าถูกแยกระหว่าง $A$ และ $D$ และหลังจาก $DCB$ ถูกหมุนเวียน ลำดับที่ถูกต้องก็สำเร็จ

อย่างไรก็ตาม Simple Simon คนขับรถไฟไม่เป็นที่รู้จักสำหรับประสิทธิภาพของเขา ดังนั้นเขาจึงแก้ปัญหาโดยเริ่มรับรถ $A$ ในตำแหน่งที่ถูกต้อง จากนั้นค่อยขึ้นรถ $B$ เป็นต้น

การใช้ตู้โดยสารสี่ตู้ การจัดเตรียมที่แย่ที่สุดสำหรับ Simon ซึ่งเราจะเรียกว่าการจัดเตรียม maximix คือ $DACB$ และ $DBAC$; แต่ละอันต้องการให้เขาหมุนห้ารอบ (แม้ว่าโดยใช้วิธีการที่มีประสิทธิภาพที่สุด พวกเขาสามารถแก้ไขได้โดยใช้การหมุนสามครั้ง) กระบวนการที่เขาใช้สำหรับ $DACB$ แสดงอยู่ด้านล่าง

<img class="img-responsive center-block" alt="five rotations for maximix arrangement DACB" src="https://cdn.freecodecamp.org/curriculum/project-euler/maximix-arrangements.gif" style="background-color: white; padding: 10px;">

สามารถตรวจสอบได้ว่ามีการจัดวางแม็กซิมิกซ์ 24 ตู้สำหรับตู้โดยสารหกตู้ โดยการจัดวางแม็กซิมิกซ์ศัพท์บัญญัติที่สิบเป็น $DFAECB$

หา ${2011}^{\text{th}}$ การจัดเรียงแม็กซิมิกซ์พจนานุกรมสำหรับรถ 11 ตู้

# --hints--

`maximixArrangements()` ควร return string.

```js
assert(typeof maximixArrangements() === 'string');
```

`maximixArrangements()` ควร return string `CAGBIHEFJDK`.

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
