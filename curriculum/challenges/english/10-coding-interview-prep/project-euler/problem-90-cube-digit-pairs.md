---
id: 5900f3c61000cf542c50fed9
title: 'Problem 90: Cube digit pairs'
challengeType: 5
forumTopicId: 302207
dashedName: problem-90-cube-digit-pairs
---

# --description--

แต่ละหน้าของลูกบาศก์มีเลขต่างกัน (มีได้ตั้งแต่ 0 ถึง 9) และลูกบาศก์อีกลูกก็มีเลขเหมือนกัน ถ้าวางลูกบาศก์สองลูกไว้คู่กัน เราจะสามารถสรร้างเลขสองหลักได้


เช่น จะสร้างเลข 64 ได้:

<img class="img-responsive center-block" alt="two cubes, one with the number 6 and the other with number 4" src="https://cdn-media-1.freecodecamp.org/project-euler/cube-digit-pairs.png" style="background-color: white; padding: 10px;">

ที่จริงแล้ว การเลือกตัวเลขบนลูกบาศก์ทั้งสอง จะแสดงตัวเลขกำลังสองทั้งหมดที่อยู่ต่ำกว่าหนึ่งร้อยได้: 01, 04, 09, 16, 25, 36, 49, 64 และ 81

เช่น ต้องให้ลูกบาศก์ลูกแรกมีเลขเป็น {0, 5, 6, 7, 8, 9} และต้องให้ลูกบาศก์ลูกที่สองมีเลขเป็น {1, 2, 3, 4, 8, 9}

แต่ สำหรับปัญหานี้ เราจะยอมให้ใช้เลข 6 หรือ 9 กลับหัว เพื่อให้การจัดเรียงเช่น {0, 5, 6, 7, 8, 9} และ {1, 2, 3, 4, 6, 7} เพื่อให้ใช้เลขได้ครบทั้งเก้าตัว

ในการพิจารณาการจัดเรียง เราสนใจตัวเลขในแต่ละลูกบาศก์ ไม่ใช่ลำดับ

<div style="margin-left: 4em;">
  {1, 2, 3, 4, 5, 6} is equivalent to {3, 6, 4, 1, 2, 5}<br>
  {1, 2, 3, 4, 5, 6} is distinct from {1, 2, 3, 4, 5, 9}
</div>

แต่เนื่องจากเราอนุญาตให้มีการกลับรายการ 6 และ 9 ชุดที่แตกต่างกันสองชุดในตัวอย่างสุดท้ายจึงเป็นตัวแทนของชุดขยาย {1, 2, 3, 4, 5, 6, 9} เพื่อวัตถุประสงค์ในการสร้างตัวเลข 2 หลัก

จำนวนการจัดเรียงที่แตกต่างกันของลูกบาศก์ทั้งสอง ที่ทำให้สามารถแสดงตัวเลขกำลองสองทั้งหมดมีเท่าไหร่

# --hints--

`cubeDigitPairs()` ต้องคืนค่าเป็นตัวเลข

```js
assert(typeof cubeDigitPairs() === 'number');
```

`cubeDigitPairs()` ต้องคืนค่าเป็น 1217

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
