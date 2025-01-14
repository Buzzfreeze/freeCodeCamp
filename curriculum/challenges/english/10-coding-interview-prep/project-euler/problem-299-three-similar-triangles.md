---
id: 5900f4971000cf542c50ffaa
title: 'Problem 299: Three similar triangles'
challengeType: 5
forumTopicId: 301951
dashedName: problem-299-three-similar-triangles
---

# --description--

มีสี่จุดที่มีพิกัดเป็นจำนวนเต็ม:

$A(a, 0)$, $B(b, 0)$, $C(0, c)$ และ $D(0, d)$  
โดย $0 &lt; &lt; b$ และ $0 &lt; c &lt; d$

จุด $P$ พร้อมด้วยพิกัดจำนวนเต็ม อยู่บนเส้น $AC$ เพื่อให้สามเหลี่ยมสามรูป $ABP$, $CDP$ และ $BDP$ เป็นสามเหลี่ยมคล้าย

<img class="img-responsive center-block" alt="points A, B, C, D and P creating three triangles: ABP, CDP, and BDP" src="https://cdn.freecodecamp.org/curriculum/project-euler/three-similar-triangles.gif" style="background-color: white; padding: 10px;">

เป็นการง่ายที่จะพิสูจน์ว่าสามเหลี่ยมทั้งสามนั้นสามารถคล้ายกันได้ก็ต่อเมื่อ $a = c$

ดังนั้น เนื่องจาก $a = c$ เรากำลังมองหา triplet  ($a$, $b$, $d$) ที่มีจุด $P$ (ที่มีพิกัดจำนวนเต็ม) อย่างน้อยหนึ่งจุดบน $AC$ ทำให้ สามเหลี่ยมสามรูป $ABP$, $CDP$ และ $BDP$ คล้ายกันทั้งหมด

เช่น ถ้า $(a, b, d) = (2, 3, 4)$ ก็สามารถตรวจสอบได้อย่างง่ายดายว่าจุดที่ $P(1, 1)$ เป็นไปตามเงื่อนไขข้างต้น  
triplet (2,3,4) และ (2,4,3) ถือว่าแตกต่างกัน แม้ว่าจุด $P(1, 1)$ จะเหมือนกันสำหรับทั้งคู่

ถ้า $b + d &lt; 100$ มี triplet ที่แตกต่างกัน 92 แบบ ($a$, $b$, $d$) ที่มีจุด $P$

ถ้า $b + d &lt; 100\\,000$ มี triplet ที่แตกต่างกัน 320471 แบบ ($a$, $b$, $d$) ที่มีจุด $P$

ถ้า $b + d &lt; 100\\,000\\,000$ triplets ที่แตกต่างกันกี่แบบ ($a$, $b$, $d$) มีจุดที่ $P$ มีอยู่จริงหรือไม่?

# --hints--

`threeSimilarTriangles()` ต้องคืนค่าเป็น `549936643`

```js
assert.strictEqual(threeSimilarTriangles(), 549936643);
```

# --seed--

## --seed-contents--

```js
function threeSimilarTriangles() {

  return true;
}

threeSimilarTriangles();
```

# --solutions--

```js
// solution required
```
