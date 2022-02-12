---
id: 5900f4621000cf542c50ff75
title: 'Problem 246: Tangents to an ellipse'
challengeType: 5
forumTopicId: 301893
dashedName: problem-246-tangents-to-an-ellipse
---

# --description--

คำจำกัดความของวงรีคือ:

ถ้ามีวงกลม $c$ โดยมีจุดศูนย์กลาง $M$ และรัศมี $r$ และจุด $G$ ให้ $d(G, M) < r$ เป็นตำแหน่งของจุดที่เท่ากันจาก $c$ และ $G $ สร้างวงรี

การสร้างจุดของวงรีแสดงอยู่ด้านล่าง

<img class="img-responsive center-block" alt="animation of ellipse construction" src="https://cdn.freecodecamp.org/curriculum/project-euler/tangents-to-an-ellipse-1.gif" style="background-color: white; padding: 10px;">

จะได้จุด $M(-2000, 1500)$ และ $G(8000, 1500)$

ให้ยังเป็นวงกลม $c$ ที่มีศูนย์ $M$ และรัศมี $15\\,000$

ตำแหน่งของจุดที่มีระยะห่างเท่ากันจาก $G$ และ $c$ จะสร้างวงรี $e$

จากจุด $P$ นอก $e$ สองแทนเจนต์ $t_1$ และ $t_2$ ถึงวงรีจะถูกวาด

ให้จุดที่ $t_1$ และ $t_2$ สัมผัสวงรีเป็น $R$ และ $S$

<img class="img-responsive center-block" alt="circle c with the centre M, radius 15000, and point P outsie of ellipse e; from point P two tangents t_1 and t_2 are drawn to the ellipse, with points touching ellipse are R and S" src="https://cdn.freecodecamp.org/curriculum/project-euler/tangents-to-an-ellipse-2.gif" style="background-color: white; padding: 10px;">

$P$ เป็นมุม $RPS$ ที่มากกว่า 45° มีจุด lattice กี่จุด

# --hints--

`tangentsToAnEllipse()` ต้องคืนค่าเป็น `810834388`

```js
assert.strictEqual(tangentsToAnEllipse(), 810834388);
```

# --seed--

## --seed-contents--

```js
function tangentsToAnEllipse() {

  return true;
}

tangentsToAnEllipse();
```

# --solutions--

```js
// solution required
```
