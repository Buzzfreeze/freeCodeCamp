---
id: 5900f5171000cf542c510029
title: 'Problem 426: Box-ball system'
challengeType: 5
forumTopicId: 302096
dashedName: problem-426-box-ball-system
---

# --description--

พิจารณากล่องแถวในที่ไม่มีที่สิ้นสุด  
บางกล่องมีลูกบอล เช่น การเริ่มต้น ที่มีกล่องที่มีลูกบอล 2 กล่องที่ต่อเนื่องกัน ตามด้วยกล่องเปล่า 2 กล่อง กล่องที่มีลูกบอล 2 กล่อง กล่องเปล่า 1 กล่อง และกล่องที่มีลูกบอล 2 กล่อง สามารถแสดงด้วยลำดับ (2, 2, 2, 1, 2) ได้ ซึ่ง จำนวนกล่องที่มีลูกบอลและกล่องว่างที่ต่อเนื่องกัน จะปรากฏขึ้นสลับกัน

เทิร์นประกอบด้วยการย้ายแต่ละลูกอย่างถูกต้องตามกฎต่อไปนี้: ย้ายลูกซ้ายสุดไปยังช่องว่างที่ใกล้ที่สุดทางด้านขวา

หลังจากเทิร์นหนึ่ง ลำดับ (2, 2, 2, 1, 2) จะกลายเป็น (2, 2, 1, 2, 3) ดังที่แสดงด้านล่าง โปรดทราบว่าเราเริ่มลำดับใหม่โดยเริ่มจากกล่องแรกที่มีลูกบอล

<img class="img-responsive center-block" alt="animation showing one complete turn from (2, 2, 2, 1, 2) to (2, 2, 1, 2, 3)" src="https://cdn.freecodecamp.org/curriculum/project-euler/box-ball-system-1.gif" style="background-color: white; padding: 10px;">

ระบบแบบนี้เรียกว่า Box-Ball System หรือเรียกสั้นๆ ว่า BBS

สามารถแสดงให้เห็นได้ว่าหลังจากจำนวนรอบที่เพียงพอ ระบบจะพัฒนาไปสู่สถานะที่จำนวนกล่องที่มีลูกบอลติดต่อกันเป็นค่าคงที่ ในตัวอย่างด้านล่าง จำนวนกล่องที่มีลูกบอลอย่างต่อเนื่องจะวิวัฒนาการเป็น [1, 2, 3]; เราจะเรียกสิ่งนี้ว่าสถานะสุดท้าย

<img class="img-responsive center-block" alt="four turns from occupied boxes [2, 2, 2] to final state [1, 2, 3]" src="https://cdn.freecodecamp.org/curriculum/project-euler/box-ball-system-2.gif" style="background-color: white; padding: 10px;">

กำหนด sequence $\\{t_i\\}$:

$$\begin{align}
  & s_0 = 290\\,797 \\\\
  & s_{k + 1} = {s_k}^2\bmod 50\\,515\\,093 \\\\
  & t_k = (s_k\bmod 64) + 1
\end{align}$$

เริ่มต้นจากการกำหนดค่าเริ่มต้น $(t_0, t_1, \ldots, t_{10})$ สถานะสุดท้ายจะกลายเป็น [1, 3, 10, 24, 51, 75]

เริ่มต้นจากการกำหนดค่าเริ่มต้น $(t_0, t_1, \ldots, t_{10\\,000\\,000})$ ค้นหาสถานะสุดท้าย

ให้ผลรวมของกำลังสองขององค์ประกอบของสถานะสุดท้ายเป็นคำตอบของคุณ 

เช่น หากสถานะสุดท้ายคือ [1, 2, 3] ดังนั้น $14 (= 1^2 + 2^2 + 3^2)$ คือคำตอบของคุณ

# --hints--

`boxBallSystem()` ต้องคืนค่าเป็น `31591886008`

```js
assert.strictEqual(boxBallSystem(), 31591886008);
```

# --seed--

## --seed-contents--

```js
function boxBallSystem() {

  return true;
}

boxBallSystem();
```

# --solutions--

```js
// solution required
```
