---
id: 5900f3ff1000cf542c50ff12
title: 'Problem 147: Rectangles in cross-hatched grids'
challengeType: 5
forumTopicId: 301776
dashedName: problem-147-rectangles-in-cross-hatched-grids
---

# --description--

ในตารางแบบ cross-hatch ขนาด 3x2 สามารถใส่รูปสี่เหลี่ยมผืนผ้าที่แตกต่างกันทั้งหมด 37 รูปภายในตารางนั้นตามที่ระบุในภาพ

<img class="img-responsive center-block" alt="ways of situating different rectangles wihtin cross-hatched 3x2 grid" src="https://cdn.freecodecamp.org/curriculum/project-euler/rectangles-in-cross-hatched-grids.png" style="background-color: white; padding: 10px;">

มี 5 ช่องตารางที่เล็กกว่า 3x2 ขนาดแนวตั้งและแนวนอนมีความสำคัญ เช่น 1x1, 2x1, 3x1, 1x2 และ 2x2 หากแต่ละอันเป็นแบบ cross-hatch จำนวนสี่เหลี่ยมที่แตกต่างกันต่อไปนี้อาจอยู่ภายในกริดที่เล็กกว่าเหล่านั้น:

$$\begin{array}{|c|c|}
\hline
  1 \times 1 & 1  \\\\ \hline
  2 \times 1 & 4  \\\\ \hline
  3 \times 1 & 8  \\\\ \hline
  1 \times 2 & 4  \\\\ \hline
  2 \times 2 & 18 \\\\ \hline
\end{array}$$

การเพิ่มสิ่งเหล่านั้นลงใน 37 ของตาราง 3x2 นั้นจะมีรูปสี่เหลี่ยมผืนผ้าที่แตกต่างกันทั้งหมด 72 รูปอยู่ภายใน 3x2 และกริดที่เล็กกว่า

สามารถวางสี่เหลี่ยมที่แตกต่างกันได้กี่รูปภายใน 47x43 และกริดที่เล็กกว่า

# --hints--

`crossHatchedRectangles()` ต้องคืนค่าเป็น `846910284`

```js
assert.strictEqual(crossHatchedRectangles(), 846910284);
```

# --seed--

## --seed-contents--

```js
function crossHatchedRectangles() {

  return true;
}

crossHatchedRectangles();
```

# --solutions--

```js
// solution required
```
