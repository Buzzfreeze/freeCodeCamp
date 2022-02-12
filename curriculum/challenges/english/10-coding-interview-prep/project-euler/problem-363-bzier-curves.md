---
id: 5900f4d91000cf542c50ffeb
title: 'Problem 363: Bézier Curves'
challengeType: 5
forumTopicId: 302024
dashedName: problem-363-bzier-curves
---

# --description--

เส้นโค้งกำลังสาม Bézier ถูกกำหนดโดยสี่จุด: $P_0$, $P_1$, $P_2$ และ $P_3$

เส้นโค้งถูกสร้างขึ้นดังนี้:

<img class="img-responsive center-block" alt="construction of Bézier curve" src="https://cdn.freecodecamp.org/curriculum/project-euler/bzier-curves.png" style="background-color: white; padding: 10px;">

ในส่วน $P_0P_1$, $P_1P_2$ และ $P_2P_3$ จุด $Q_0$,$Q_1$ และ $Q_2$ ถูกวาดออกมาในลักษณะที่ว่า $\frac{P_0Q_0}{P_0P_1} = \frac{P_1Q_1}{P_1P_2} = \frac{P_2Q_2}{P_2P_3} = t$ โดยที่ $t$ เป็น [0,1]

ในส่วน $Q_0Q_1$ และ $Q_1Q_2$ จุด $R_0$ และ $R_1$ จะถูกวาดเพื่อให้ $\frac{Q_0R_0}{Q_0Q_1} = \frac{Q_1R_1}{Q_1Q_2} = t$ สำหรับค่าเดียวกันของ $ t$

ในส่วน $R_0R_1$ จุด $B$ จะถูกวาดโดย $\frac{R_0B}{R_0R_1} = t$ สำหรับค่าเดียวกันของ $t$

ส้นโค้ง Bézier ที่กำหนดโดยจุด $P_0$, $P_1$, $P_2$, $P_3$ คือตำแหน่งของ $B$ เนื่องจาก $Q_0$ รับตำแหน่งที่เป็นไปได้ทั้งหมดในส่วน $P_0P_1$ (โปรดทราบว่ามูลค่าของ $t$ เท่ากันทุกแต้ม)

จากการก่อสร้าง จะเห็นได้ชัดเจนว่าเส้นโค้ง Bézier จะสัมผัสกับส่วน $P_0P_1$ ใน $P_0$ และ $P_2P_3$ ใน $P_3$

ใช้เส้นโค้ง Bézier กำลังสามที่มี $P_0 = (1, 0)$, $P_1 = (1, v)$, $P_2 = (v, 1)$ และ $P_3 = (0, 1)$ เพื่อประมาณหนึ่งในสี่ วงกลม. ค่า $v > 0$ ถูกเลือกเพื่อให้พื้นที่ที่ล้อมรอบด้วยเส้น $OP_0$, $OP_3$ และเส้นโค้งเท่ากับ $\frac{π}{4}$ (พื้นที่ของวงกลมของไตรมาส)

ความยาวของเส้นโค้งแตกต่างจากความยาวของวงกลมกี่เปอร์เซ็นต์? นั่นคือ ถ้า $L$ เป็นความยาวของเส้นโค้ง ให้คำนวณ $100 × \displaystyle\frac{L − \frac{π}{2}}{\frac{π}{2}}$ ให้คำตอบของคุณปัดเศษเป็น 10 หลักหลังจุดทศนิยม

# --hints--

`bezierCurves()` ต้องคืนค่าเป็น `0.0000372091`

```js
assert.strictEqual(bezierCurves(), 0.0000372091);
```

# --seed--

## --seed-contents--

```js
function bezierCurves() {

  return true;
}

bezierCurves();
```

# --solutions--

```js
// solution required
```
