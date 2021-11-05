---
id: 5900f40f1000cf542c50ff22
title: 'Problem 163: Cross-hatched triangles'
challengeType: 5
forumTopicId: 301797
dashedName: problem-163-cross-hatched-triangles
---

# --description--

พิจารณารูปสามเหลี่ยมด้านเท่าที่มีเส้นตรงลากจากจุดยอดแต่ละจุดไปยังกึ่งกลางของด้านตรงข้าม เช่น ในรูปสามเหลี่ยมขนาด 1 ในภาพร่างด้านล่าง

<img class="img-responsive center-block" alt="triangles with size 1 and size 2" src="https://cdn.freecodecamp.org/curriculum/project-euler/cross-hatched-triangles.gif" style="background-color: white; padding: 10px;">

ขณะนี้สามารถสังเกตสามเหลี่ยมสิบหกรูปที่มีรูปร่างหรือขนาดต่างกัน การวางแนวหรือตำแหน่งได้ในรูปสามเหลี่ยมนั้น การใช้สามเหลี่ยมขนาด 1 เป็นตัวสร้าง สามารถสร้างสามเหลี่ยมขนาดใหญ่ขึ้นได้ เช่น สามเหลี่ยมขนาด 2 ในภาพร่างด้านบน ขณะนี้สามารถสังเกตสามเหลี่ยมหนึ่งร้อยสี่รูปที่มีรูปร่างหรือขนาดต่างกัน การวางแนวหรือตำแหน่งได้ในรูปสามเหลี่ยมขนาด 2 นั้น

สามารถสังเกตได้ว่าสามเหลี่ยมขนาด 2 มี 4 แบบสำเร็จรูปขนาด 1 รูปสามเหลี่ยม 4 ชิ้น สามเหลี่ยมขนาด 3 จะมีบล็อคการสร้างรูปสามเหลี่ยมขนาด 1 จำนวน 9 ชิ้น และรูปสามเหลี่ยมขนาด $n$ จะประกอบด้วยบล็อคการสร้างรูปสามเหลี่ยมขนาด $n^2$ ได้

ถ้าเราระบุ $T(n)$ เป็นจำนวนสามเหลี่ยมที่มีอยู่ในรูปสามเหลี่ยมขนาด $n$ 

$$\begin{align}
  & T(1) = 16 \\\\
  & T(2) = 104
\end{align}$$

หา $T(36)$.

# --hints--

`crossHatchedTriangles()` ควร return `343047`.

```js
assert.strictEqual(crossHatchedTriangles(), 343047);
```

# --seed--

## --seed-contents--

```js
function crossHatchedTriangles() {

  return true;
}

crossHatchedTriangles();
```

# --solutions--

```js
// solution required
```
