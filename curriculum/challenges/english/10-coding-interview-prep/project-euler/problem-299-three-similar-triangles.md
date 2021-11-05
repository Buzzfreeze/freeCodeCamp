---
id: 5900f4971000cf542c50ffaa
title: 'Problem 299: Three similar triangles'
challengeType: 5
forumTopicId: 301951
dashedName: problem-299-three-similar-triangles
---

# --description--

เลือกสี่จุดที่มีพิกัดจำนวนเต็ม:

$A(a, 0)$, $B(b, 0)$, $C(0, c)$ and $D(0, d)$, ด้วย $0 &lt; &lt; b$ และ $0 &lt; ค &lt; ดอลลาร์

จุด $P$ พร้อมด้วยพิกัดจำนวนเต็ม ถูกเลือกบนบรรทัด $AC$ เพื่อให้สามเหลี่ยมสามรูป $ABP$, $CDP$ และ $BDP$ มีความคล้ายคลึงกันทั้งหมด

<img class="img-responsive center-block" alt="points A, B, C, D and P creating three triangles: ABP, CDP, and BDP" src="https://cdn.freecodecamp.org/curriculum/project-euler/three-similar-triangles.gif" style="background-color: white; padding: 10px;">

เป็นการง่ายที่จะพิสูจน์ว่าสามเหลี่ยมทั้งสามนั้นสามารถคล้ายกันได้ก็ต่อเมื่อ $a = c$

ดังนั้น เนื่องจาก $a = c$ เรากำลังมองหาtriplets  ($a$, $b$, $d$) ที่มีจุด $P$ (ที่มีพิกัดจำนวนเต็ม) อย่างน้อยหนึ่งจุดบน $AC$ ทำให้ สามเหลี่ยมสามรูป $ABP$, $CDP$ และ $BDP$ คล้ายกันทั้งหมด

ตัวอย่างเช่น ถ้า $(a, b, d) = (2, 3, 4)$ ก็สามารถตรวจสอบได้อย่างง่ายดายว่าจุดที่ $P(1, 1)$ เป็นไปตามเงื่อนไขข้างต้น โปรดทราบว่าtriplets  (2,3,4) และ (2,4,3) ถือว่าแตกต่างกัน แม้ว่าจุด $P(1, 1)$ จะเหมือนกันสำหรับทั้งคู่

ถ้า $b + d &lt; 100$ มีtriplets ที่แตกต่างกัน 92 คน ($a$, $b$, $d$) ที่มีจุด $P$

ถ้า $b + d &lt; 100\\,000$ มีtriplets ที่แตกต่างกัน 320471 ($a$, $b$, $d$) ที่มีจุด $P$

ถ้า $b + d &lt; 100\\,000\\,000$ triplets ที่แตกต่างกันกี่คน ($a$, $b$, $d$) มีจุดที่ $P$ มีอยู่จริงหรือไม่?

# --hints--

`threeSimilarTriangles()` ควร return `549936643`.

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
