---
id: 5900f42f1000cf542c50ff40
title: 'Problem 194: Coloured Configurations'
challengeType: 5
forumTopicId: 301832
dashedName: problem-194-coloured-configurations
---

# --description--


พิจารณากราฟที่สร้างด้วยหน่วย A:
<img class="img-responsive" alt="graph unit A" src="https://cdn.freecodecamp.org/curriculum/project-euler/coloured-configurations-1.png" style="display: inline-block; background-color: white; padding: 10px;">
 และ B: <img class="img-responsive" alt="graph unit B" src="https://cdn.freecodecamp.org/curriculum/project-euler/coloured-configurations-2.png" style="display: inline-block; background-color: white; padding: 10px;">, โดยที่แต่ละหน่วยจะเชื่อมกันที่มุมดังภาพ <img class="img-responsive" alt="graph with four units glued along the vertical edges" src="https://cdn.freecodecamp.org/curriculum/project-euler/coloured-configurations-3.png" style="display: inline-block; background-color: white; padding: 10px;">.

การกำหนดค่าของ $(a,b,c)$ เป็นกราฟที่สร้างจาก $a$ (หน่วย A) และ $b$ (หน่วย B) โดยที่จุดยอดของกราฟจะถูกระบายสีโดยใช้สีไม่เกิน $c$ เพื่อไม่ให้อยู่ติดกันสองอัน จุดยอดมีสีเดียวกัน 

กราฟประกอบด้านบนเป็นตัวอย่างของการกำหนดค่าประเภท $(2,2,6)$ ในความเป็นจริงของประเภท $(2,2,c)$ สำหรับ $c ≥ 4$ ทั้งหมด

ให้ $N(a,b,c)$ เป็นจำนวนการกำหนดค่าประเภท $(a,b,c)$ 

เช่น $N(1,0,3) = 24$, $N(0,2,4) = 92928$ และ $N(2,2,3) = 20736$

ให้หา 8 หลักสุดท้ายของ $N(25,75,1984)$

# --hints--

`coloredConfigurations()` ต้องคืนค่าเป็น `61190912`

```js
assert.strictEqual(coloredConfigurations(), 61190912);
```

# --seed--

## --seed-contents--

```js
function coloredConfigurations() {

  return true;
}

coloredConfigurations();
```

# --solutions--

```js
// solution required
```
