---
id: 5900f4511000cf542c50ff63
title: 'Problem 228: Minkowski Sums'
challengeType: 5
forumTopicId: 301871
dashedName: problem-228-minkowski-sums
---

# --description--

ให้ $S_n$ เป็นรูปหลายเหลี่ยมที่มี $n$ ด้าน โดยมีพิกัดจุดยอด $v_k (k = 1, 2, \ldots, n)$ ตามนี้

$$\begin{align}
  & x_k = cos(\frac{2k - 1}{n} × 180°) \\\\
  & y_k = sin(\frac{2k - 1}{n} × 180°)
\end{align}$$

แต่ละจุด $S_n$ จะเป็นรูปร่าง ซึ่งประกอบด้วยจุดทั้งหมดที่ขอบและภายใน

ผลรวม Minkowski ($S + T$) ของสองรูปร่าง $S$ และ $T$ เป็นผลมาจากการเพิ่มทุกจุดใน $S$ ให้กับทุกจุดใน $T$ โดยที่การเพิ่มจุดจะดำเนินการตามพิกัด: $( u, v) + (x, y) = (u + x, v + y)$

ตัวอย่างเช่น ผลรวมของ $S_3$ และ $S_4$ คือรูปร่างหกด้านที่แสดงเป็นสีชมพูด้านล่าง

<img class="img-responsive center-block" alt="image showing S_3, S_4 and S_3 + S_4" src="https://cdn.freecodecamp.org/curriculum/project-euler/minkowski-sums.png" style="background-color: white; padding: 10px;">

$S_{1864} + S_{1865} + \ldots + S_{1909}$ มีกี่ด้าน

# --hints--

`minkowskiSums()` ต้องคืนค่าเป็น `86226`

```js
assert.strictEqual(minkowskiSums(), 86226);
```

# --seed--

## --seed-contents--

```js
function minkowskiSums() {

  return true;
}

minkowskiSums();
```

# --solutions--

```js
// solution required
```
