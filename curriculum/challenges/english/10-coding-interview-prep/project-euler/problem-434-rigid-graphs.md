---
id: 5900f51f1000cf542c510031
title: 'Problem 434: Rigid graphs'
challengeType: 5
forumTopicId: 302105
dashedName: problem-434-rigid-graphs
---

# --description--

กราฟคือชุดของจุดยอดและขอบที่เชื่อมต่อจุดยอด และจุดยอดสองจุดที่เชื่อมต่อกันด้วยขอบจะเรียกว่าอยู่ติดกัน

สามารถฝังกราฟในปริภูมิแบบยุคลิดได้โดยการเชื่อมโยงจุดยอดแต่ละจุดกับจุดในปริภูมิแบบยุคลิด

กราฟแบบยืดหยุ่นคือการฝังกราฟที่สามารถเคลื่อนจุดยอดหนึ่งจุดขึ้นไปอย่างต่อเนื่องเพื่อให้ระยะห่างระหว่างจุดยอดที่ไม่อยู่ติดกันอย่างน้อยสองจุดจะเปลี่ยนแปลงไปในขณะที่ระยะห่างระหว่างจุดยอดที่อยู่ติดกันแต่ละคู่จะคงที่

rigid graph คือการฝังกราฟที่ไม่ยืดหยุ่น
อย่างไม่เป็นทางการ กราฟจะแข็งถ้าโดยแทนที่จุดยอดด้วยบานพับที่หมุนได้เต็มที่ และขอบด้วยแท่งที่ไม่โค้งงอและไม่ยืดหยุ่น ไม่มีส่วนใดของกราฟที่สามารถเคลื่อนย้ายได้อย่างอิสระจากส่วนที่เหลือของกราฟ

กราฟกริดที่ฝังอยู่ในระนาบแบบยุคลิดนั้นไม่เข้มงวด ดังที่แสดงในภาพเคลื่อนไหวต่อไปนี้:

<img class="img-responsive center-block" alt="animation showing grid graphs are not rigid in Euclidean plane" src="https://cdn.freecodecamp.org/curriculum/project-euler/rigid-graphs-1.gif" style="background-color: white; padding: 10px;">

อย่างไรก็ตาม เราสามารถทำให้มันแข็งได้โดยการเพิ่มขอบทแยงมุมให้กับเซลล์ ตัวอย่างเช่น สำหรับกราฟกริด 2x3 มี 19 วิธีในการทำให้กราฟมีความแข็ง:

<img class="img-responsive center-block" alt="19 ways to make 2x3 grid graph rigid" src="https://cdn.freecodecamp.org/curriculum/project-euler/rigid-graphs-2.png" style="background-color: white; padding: 10px;">

Note that จุดประสงค์ของปัญหานี้ เราไม่พิจารณาเปลี่ยนการวางแนวของขอบแนวทแยงหรือเพิ่มขอบแนวทแยงทั้งสองไปยังเซลล์เป็นอีกวิธีหนึ่งในการทำให้กราฟกริดมีความแข็ง

ให้ $R(m, n)$ เป็นจำนวนวิธีที่จะทำให้กราฟกริด $m × n$ เข้มงวด

เช่น. $R(2, 3) = 19$ และ $R(5, 5) = 23\\,679\\,901$

กำหนด $S(N)$ เป็น $\sum R(i, j)$ สำหรับ $1 ≤ i$, $j ≤ N$

เช่น. $S(5) = 25\\,021\\,721$.

หา $S(100)$ ให้คำตอบแบบmodulo $1\\,000\\,000\\,033$

# --hints--

`rigidGraphs()` ควร return `863253606`.

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
