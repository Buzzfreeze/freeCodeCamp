---
id: 5900f4691000cf542c50ff7b
title: 'Problem 252: Convex Holes'
challengeType: 5
forumTopicId: 301900
dashedName: problem-252-convex-holes
---

# --description--

จากเซ็ทของจุดบนระนาบ เรากำหนดรูให้เป็นรูปหลายเหลี่ยมนูนที่มีจุดยอดเป็นจุดใดๆ และไม่มีจุดที่กำหนดภายใน (นอกเหนือจากจุดยอด จุดที่กำหนดอื่นๆ อาจอยู่ บนปริมณฑลของรูปหลายเหลี่ยม)

ตัวอย่างเช่น รูปภาพด้านล่างแสดงเซ็ทจุดยี่สิบจุดและรูสองสามรู รูที่แสดงเป็นรูปหกเหลี่ยมสีแดงมีพื้นที่เท่ากับ 1049694.5 ตารางหน่วย ซึ่งเป็นพื้นที่สูงสุดที่เป็นไปได้สำหรับรูบนเซ็ทจุดที่กำหนด

<img class="img-responsive center-block" alt="set of twenty points and convex holes on plane" src="https://cdn.freecodecamp.org/curriculum/project-euler/convex-holes.gif" style="background-color: white; padding: 10px;">

ในตัวอย่าง เราใช้ 20 จุดแรกเป็น ($T_{2k − 1}$, $T_{2k}$) ถ้า $k = 1, 2, \ldots, 20$ ที่มาจากการสุ่ม :

$$\begin{align}
  S_0 & = 290\\,797 \\\\
  S_{n+1} & = {S_n}^2 \\; \text{mod} \\; 50\\,515\\,093 \\\\
  T_n & = (S_n \\; \text{mod} \\; 2000) − 1000
\end{align}$$

i.e. (527, 144), (−488, 732), (−454, −947), …

พื้นที่สูงสุดของ convex hole ในเซ็ทที่มี 500 จุดแรกในแบบสุ่มคือเท่าใด ระบุคำตอบโดยใส่ตัวเลขหลังจุดทศนิยมหนึ่งหลัก

# --hints--

`convexHoles()` ต้องคืนค่าเป็น `104924`

```js
assert.strictEqual(convexHoles(), 104924);
```

# --seed--

## --seed-contents--

```js
function convexHoles() {

  return true;
}

convexHoles();
```

# --solutions--

```js
// solution required
```
