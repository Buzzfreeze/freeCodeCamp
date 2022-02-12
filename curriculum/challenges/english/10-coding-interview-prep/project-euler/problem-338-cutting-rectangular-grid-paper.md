---
id: 5900f4be1000cf542c50ffd1
title: 'Problem 338: Cutting Rectangular Grid Paper'
challengeType: 5
forumTopicId: 301996
dashedName: problem-338-cutting-rectangular-grid-paper
---

# --description--

กระดาษตารางสี่เหลี่ยมที่มีขนาดจำนวนเต็ม $w$ × $h$ ถูกกำหนด ระยะห่างของกริดคือ 1

เมื่อเราตัดแผ่นงานตามแนวเส้นตารางเป็นสองส่วนและจัดเรียงชิ้นส่วนเหล่านั้นใหม่โดยไม่ทับซ้อนกัน เราสามารถสร้างสี่เหลี่ยมใหม่ที่มีขนาดต่างกันได้

เช่น จากแผ่นงานที่มีขนาด 9 × 4 เราสามารถสร้างสี่เหลี่ยมที่มีขนาด 18 × 2, 12 × 3 และ 6 × 6 โดยการตัดและจัดเรียงใหม่ดังนี้:

<img class="img-responsive center-block" alt="sheet with 9 x 4 dimensions cut in three different ways to make rectangles with 18 x 2, 12 x 3 and 6 x 6 dimensions" src="https://cdn.freecodecamp.org/curriculum/project-euler/cutting-rectangular-grid-paper.gif" style="background-color: white; padding: 10px;">

ในทำนองเดียวกัน จากแผ่นงานที่มีขนาด 9 × 8 เราสามารถสร้างสี่เหลี่ยมที่มีขนาด 18 × 4 และ 12 × 6

สำหรับคู่ $w$ และ $h$ ให้ $F(w, h)$ เป็นจำนวนสี่เหลี่ยมที่แตกต่างกันซึ่งสามารถสร้างจากแผ่นงานที่มีขนาด $w$ × $h$ ตัวอย่างเช่น $F(2, 1) = 0$, $F(2, 2) = 1$, $F(9, 4) = 3$ and $F(9, 8) = 2$  
จะเห็นว่าสี่เหลี่ยมผืนผ้าที่สอดคล้องกับรูปสี่เหลี่ยมผืนผ้า จะไม่ถูกนับใน $F(w, h)$  
และจะเห็นว่าสี่เหลี่ยมผืนผ้าที่มีขนาด $w$ × $h$ และขนาด $h$ × $w$ ไม่ถือว่าแตกต่างกัน

ถ้า $N$ เป็นจำนวนเต็ม กำหนดให้ $G(N)$ เป็นผลรวมของ $F(w, h)$ สำหรับคู่ $w$ และ $h$ ทั้งหมด ซึ่งเป็นไปตาม $0 &lt; h ≤ w ≤ N$ เราสามารถยืนยันได้ว่า $G(10) = 55$, $G({10}^3) = 971\\,745$ and $G({10}^5) = 9\\,992\\,617\ \,687$.

ให้หา $G({10}^{12})$ โดยนำคำตอบไป mod กับ ${10}^8$

# --hints--

`cuttingRectangularGridPaper()` ต้องคืนค่าเป็น `15614292`

```js
assert.strictEqual(cuttingRectangularGridPaper(), 15614292);
```

# --seed--

## --seed-contents--

```js
function cuttingRectangularGridPaper() {

  return true;
}

cuttingRectangularGridPaper();
```

# --solutions--

```js
// solution required
```
