---
id: 5900f4931000cf542c50ffa6
title: 'Problem 295: Lenticular holes'
challengeType: 5
forumTopicId: 301947
dashedName: problem-295-lenticular-holes
---

# --description--

เราเรียกพื้นที่นูนที่ล้อมรอบด้วยวงกลมสองวงว่า lenticular hole ถ้า:

- จุดศูนย์กลางของวงกลมทั้งสองอยู่บนจุดตัด
- วงกลมสองวงตัดกันที่จุดตัดสองจุดที่แตกต่างกัน
- ด้านในของพื้นที่นูนที่ล้อมรอบด้วยวงกลมทั้งสองไม่มีจุดตัด

ลองดูวงกลม:

$$\begin{align}
  & C_0: x^2 + y^2 = 25 \\\\
  & C_1: {(x + 4)}^2 + {(y - 4)}^2 = 1 \\\\
  & C_2: {(x - 12)}^2 + {(y - 4)}^2 = 65
\end{align}$$

แสดงภาพวงกลม $C_0$, $C_1$ และ $C_2$ ในภาพด้านล่าง

<img class="img-responsive center-block" alt="C_0, C_1 and C_2 circles" src="https://cdn.freecodecamp.org/curriculum/project-euler/lenticular-holes.gif" style="background-color: white; padding: 10px;">

$C_0$ และ $C_1$ เป็นรู lenticular เช่นเดียวกับ $C_0$ และ $C_2$

เราเรียกคู่ลำดับของจำนวนจริงบวก ($r_1$, $r_2$) ว่าคู่ lenticular  ถ้ามีวงกลมสองวงที่มีรัศมี $r_1$ และ $r_2$ ที่ก่อตัวเป็นรู เราสามารถยืนยันได้ว่า ($$1$, $5$) และ ($5$, $\sqrt{65}$) เป็นคู่ของตัวอย่างข้างต้น

ให้ $L(N)$ เป็นจำนวนของคู่ lenticular ที่แตกต่างกัน ($r_1$, $r_2$)  
ซึ่ง $0 &lt; r_1 ≤ r_2 ≤ N$  
เราสามารถยืนยันได้ว่า $L(10) = 30$ และ $L(100) = 3442$

ให้หาค่าของ $L(100\\,000)$

# --hints--

`lenticularHoles()` ต้องคืนค่าเป็น `4884650818`

```js
assert.strictEqual(lenticularHoles(), 4884650818);
```

# --seed--

## --seed-contents--

```js
function lenticularHoles() {

  return true;
}

lenticularHoles();
```

# --solutions--

```js
// solution required
```
