---
id: 5900f51f1000cf542c510031
title: 'Problem 434: Rigid graphs'
challengeType: 5
forumTopicId: 302105
dashedName: problem-434-rigid-graphs
---

# --description--

ถ้ายังจำได้ กราฟคือชุดของจุดยอด และขอบที่เชื่อมต่อจุดยอด และจุดยอดสองจุดที่เชื่อมต่อกันด้วยขอบจะเรียกว่า "อยู่ติดกัน"

สามารถเขียนกราฟใร Euclidean space ได้โดยการเชื่อมโยงจุดยอดแต่ละจุดกับจุดใน Euclidean space

กราฟแบบยืดหยุ่น (flexible graph) คือกราฟที่สามารถเคลื่อนจุดยอดหนึ่งจุดขึ้นไป ย่างต่อเนื่องเพื่อให้ระยะห่างระหว่างจุดยอดที่ไม่อยู่ติดกัน อย่างน้อยสองจุดจะเปลี่ยนแปลงไป ในขณะที่ระยะห่างระหว่างจุดยอดที่อยู่ติดกันแต่ละคู่จะคงที่

rigid graph คือกราฟที่ไม่ยืดหยุ่น กราฟเป็น rigid ถ้าโดยแทนที่จุดยอดด้วยบานพับที่หมุนได้เต็มที่ และขอบด้วยแท่งที่ไม่โค้งงอและไม่ยืดหยุ่น ไม่มีส่วนใดของกราฟที่สามารถเคลื่อนย้ายได้อย่างอิสระจากส่วนที่เหลือของกราฟ

กราฟกริดที่อยู่ในระนาบแบบยุคลิดนั้นไม่เป็น rigid ดังที่แสดงในภาพเคลื่อนไหวต่อไปนี้:

<img class="img-responsive center-block" alt="animation showing grid graphs are not rigid in Euclidean plane" src="https://cdn.freecodecamp.org/curriculum/project-euler/rigid-graphs-1.gif" style="background-color: white; padding: 10px;">

อย่างไรก็ตาม เราสามารถทำให้กราฟเป็น rigid ได้โดยการเพิ่มขอบทแยงมุมให้กับเซลล์  
เช่น สำหรับกราฟกริด 2x3 มี 19 วิธีในการทำให้กราฟเป็น rigid:

<img class="img-responsive center-block" alt="19 ways to make 2x3 grid graph rigid" src="https://cdn.freecodecamp.org/curriculum/project-euler/rigid-graphs-2.png" style="background-color: white; padding: 10px;">

จะเห็นว่า จุดประสงค์ของปัญหานี้ เราไม่พิจารณาเปลี่ยนการวางแนวของขอบแนวทแยง หรือเพิ่มขอบแนวทแยงทั้งสองไปยังเซลล์ เป็นอีกวิธีหนึ่งในการทำให้กราฟกริดเป็น rigid

ให้ $R(m, n)$ เป็นจำนวนวิธีที่จะทำให้กราฟกริด $m × n$ เป็น rigid

เช่น $R(2, 3) = 19$ และ $R(5, 5) = 23\\,679\\,901$

กำหนด $S(N)$ เป็น $\sum R(i, j)$ สำหรับ $1 ≤ i$, $j ≤ N$

เช่น $S(5) = 25\\,021\\,721$

ให้หา $S(100)$ ให้ตอบโดย mod กับ $1\\,000\\,000\\,033$

# --hints--

`rigidGraphs()` ต้องคืนค่าเป็น `863253606`

```js
assert.strictEqual(rigidGraphs(), 863253606);
```

# --seed--

## --seed-contents--

```js
function rigidGraphs() {

  return true;
}

rigidGraphs();
```

# --solutions--

```js
// solution required
```
