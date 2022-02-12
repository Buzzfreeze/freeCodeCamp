---
id: 5900f5001000cf542c510012
title: 'Problem 404: Crisscross Ellipses'
challengeType: 5
forumTopicId: 302072
dashedName: problem-404-crisscross-ellipses
---

# --description--

$E_a$ เป็นวงรีที่มีสมการอยู่ในรูป $x^2 + 4y^2 = 4a^2$

$E_a'$ เป็นภาพที่หมุนของ $E_a$ โดยหมุนไป $θ$ องศาทวนเข็มนาฬิกา รอบจุดกำเนิด $O(0, 0)$ โดยที่ $0° &lt; &lt; 90°$

<img class="img-responsive center-block" alt="ellipse E_a and ellipse rotated by θ degrees E_a'" src="https://cdn.freecodecamp.org/curriculum/project-euler/crisscross-ellipses.gif" style="background-color: white; padding: 10px;">

$b$ คือระยะห่างจากจุดกำเนิดของจุดตัดสองจุดที่ใกล้กับจุดกำเนิดมากที่สุด และ $c$ คือระยะห่างของจุดตัดอีกสองจุด

เราเรียก triplet ($a$, $b$, $c$) ที่เรียงลำดับว่า triplet canonical ellipsoidal ถ้า $a$, $b$ และ $c$ เป็นจำนวนเต็มบวก

เช่น (209, 247, 286) เป็น triplet canonical ellipsoidal

ให้ $C(N)$ เป็นจำนวนของ triplet canonical ellipsoidal ที่แตกต่างกัน ($a$, $b$, $c$) โดย $a ≤ N$

ซึ่ง $C({10}^3) = 7$, $C({10}^4) = 106$ และ $C({10}^6) = 11\\,845$

ให้หา $C({10}^{17})$

# --hints--

`crisscrossEllipses()` ต้องคืนค่าเป็น `1199215615081353`

```js
assert.strictEqual(crisscrossEllipses(), 1199215615081353);
```

# --seed--

## --seed-contents--

```js
function crisscrossEllipses() {

  return true;
}

crisscrossEllipses();
```

# --solutions--

```js
// solution required
```
