---
id: 5900f3fc1000cf542c50ff0f
title: 'Problem 144: Investigating multiple reflections of a laser beam'
challengeType: 5
forumTopicId: 301773
dashedName: problem-144-investigating-multiple-reflections-of-a-laser-beam
---

# --description--


ในฟิสิกส์ของเลเซอร์ "เซลล์สีขาว" เป็นระบบกระจกที่ทำหน้าที่เป็นเส้นหน่วงเวลาสำหรับลำแสงเลเซอร์ ลำแสงเข้าสู่ห้องขัง กระดอนไปรอบๆ กระจก และในที่สุดก็กลับออกมา

เซลล์สีขาวเฉพาะที่เราจะพิจารณาคือวงรีที่มีสมการ $4{x}^2 + y^2 = 100$

ส่วนที่ตรงกับ $−0.01 ≤ x ≤ +0.01$ ที่ด้านบนหายไป ทำให้แสงเข้าและออกจากรูได้

<div style="text-align: center">
  <img class="img-responsive center-block" alt="light beam starting at point (0.0, 10.1), and impacing the mirror at point (1.4, -9.6)" src="https://cdn.freecodecamp.org/curriculum/project-euler/investigating-multiple-reflections-of-a-laser-beam-1.png" style="display: inline-block; background-color: white; padding: 10px;">
  <img class="img-responsive center-block" alt="animation with first 10 relfections of the beam" src="https://cdn.freecodecamp.org/curriculum/project-euler/investigating-multiple-reflections-of-a-laser-beam-2.gif" style="display: inline-block; background-color: white; padding: 10px;">
</div><br>

ลำแสงในปัญหานี้เริ่มต้นที่จุด (0.0, 10.1) นอกเซลล์สีขาว และลำแสงกระทบกระจกก่อน (1.4, -9.6)

แต่ละครั้งที่ลำแสงเลเซอร์กระทบพื้นผิวของวงรี มันจะเป็นไปตามกฎการสะท้อนปกติ "มุมตกกระทบเท่ากับมุมสะท้อน" กล่าวคือทั้งลำแสงตกกระทบและลำแสงสะท้อนทำมุมเดียวกันกับเส้นตั้งฉากที่จุดตกกระทบ

ในรูปด้านซ้าย เส้นสีแดงแสดงจุดสัมผัสสองจุดแรกระหว่างลำแสงเลเซอร์กับผนังเซลล์สีขาว เส้นสีน้ำเงินแสดงเส้นสัมผัสวงรีที่จุดเกิดตีกลับครั้งแรก
ความชัน m ของเส้นสัมผัสที่จุดใดๆ (x, y) ของวงรีที่กำหนดคือ: $m = −4 × \frac{x}{y}$
เส้นตั้งฉากกับเส้นสัมผัสนี้ ณ จุดเกิด
ภาพเคลื่อนไหวทางด้านขวาแสดงการสะท้อนของลำแสง 10 ภาพแรก

ลำแสงกระทบพื้นผิวภายในของเซลล์สีขาวกี่ครั้งก่อนออกจากเซลล์?
# --hints--

`laserBeamReflections()` ควร return `354`.

```js
assert.strictEqual(laserBeamReflections(), 354);
```

# --seed--

## --seed-contents--

```js
function laserBeamReflections() {

  return true;
}

laserBeamReflections();
```

# --solutions--

```js
// solution required
```
