---
id: 5900f3c61000cf542c50fed9
title: 'Problem 90: Cube digit pairs'
challengeType: 5
forumTopicId: 302207
dashedName: problem-90-cube-digit-pairs
---

# --description--

Each of the six faces on a cube has a different digit (0 to 9) written on it; the same is done to a second cube. By placing the two cubes side-by-side in different positions we can form a variety of 2-digit numbers.


ตัวอย่างเช่น เลขกำลังสอง 64 สามารถเกิดขึ้นได้:

<img class="img-responsive center-block" alt="two cubes, one with the number 6 and the other with number 4" src="https://cdn-media-1.freecodecamp.org/project-euler/cube-digit-pairs.png" style="background-color: white; padding: 10px;">

ที่จริงแล้ว โดยการเลือกตัวเลขบนลูกบาศก์ทั้งสองอย่างถี่ถ้วน มันเป็นไปได้ที่จะแสดงตัวเลขกำลังสองทั้งหมดที่อยู่ต่ำกว่าหนึ่งร้อย: 01, 04, 09, 16, 25, 36, 49, 64 และ 81

ตัวอย่างเช่น วิธีหนึ่งที่สามารถทำได้คือวาง {0, 5, 6, 7, 8, 9} บนลูกบาศก์หนึ่งก้อนและ {1, 2, 3, 4, 8, 9} ลงในลูกบาศก์อื่น

อย่างไรก็ตาม สำหรับปัญหานี้ เราจะปล่อยให้เลข 6 หรือ 9 กลับหัว เพื่อให้การจัดเรียงเช่น {0, 5, 6, 7, 8, 9} และ {1, 2, 3, 4, 6, 7} อนุญาตให้แสดงตัวเลขสี่เหลี่ยมทั้งเก้า มิเช่นนั้นจะไม่สามารถรับ 09 ได้

ในการพิจารณาการจัดเรียงที่ชัดเจน เราสนใจตัวเลขในแต่ละคิวบ์ ไม่ใช่ลำดับ

<div style="margin-left: 4em;">
  {1, 2, 3, 4, 5, 6} is equivalent to {3, 6, 4, 1, 2, 5}<br>
  {1, 2, 3, 4, 5, 6} is distinct from {1, 2, 3, 4, 5, 9}
</div>

แต่เนื่องจากเราอนุญาตให้มีการกลับรายการ 6 และ 9 ชุดที่แตกต่างกันสองชุดในตัวอย่างสุดท้ายจึงเป็นตัวแทนของชุดขยาย {1, 2, 3, 4, 5, 6, 9} เพื่อวัตถุประสงค์ในการสร้างตัวเลข 2 หลัก

จำนวนการจัดเรียงที่แตกต่างกันของลูกบาศก์ทั้งสองทำให้สามารถแสดงตัวเลขสี่เหลี่ยมจัตุรัสทั้งหมดมีเท่าไหร่

# --hints--

`cubeDigitPairs()` ควร return number.

```js
assert(typeof cubeDigitPairs() === 'number');
```

`cubeDigitPairs()` ควร return 1217.

```js
assert.strictEqual(cubeDigitPairs(), 1217);
```

# --seed--

## --seed-contents--

```js
function cubeDigitPairs() {

  return true;
}

cubeDigitPairs();
```

# --solutions--

```js
// solution required
```
