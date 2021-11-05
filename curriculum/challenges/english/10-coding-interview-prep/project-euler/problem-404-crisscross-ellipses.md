---
id: 5900f5001000cf542c510012
title: 'Problem 404: Crisscross Ellipses'
challengeType: 5
forumTopicId: 302072
dashedName: problem-404-crisscross-ellipses
---

# --description--

$E_a$ เป็นวงรีที่มีสมการอยู่ในรูป $x^2 + 4y^2 = 4a^2$

$E_a'$ เป็นภาพที่หมุนของ $E_a$ โดย $θ$ องศาทวนเข็มนาฬิการอบจุดกำเนิด $O(0, 0)$ สำหรับ $0° &lt; &lt; 90°$

<img class="img-responsive center-block" alt="ellipse E_a and ellipse rotated by θ degrees E_a'" src="https://cdn.freecodecamp.org/curriculum/project-euler/crisscross-ellipses.gif" style="background-color: white; padding: 10px;">

$b$ คือระยะห่างจากจุดกำเนิดของจุดตัดสองจุดที่ใกล้กับจุดกำเนิดมากที่สุด และ $c$ คือระยะห่างของจุดตัดอีกสองจุด

เราเรียก triplet ที่ได้รับคำสั่ง ($a$, $b$, $c$) ว่า triplet canonical ellipsoidal ถ้า $a$, $b$ และ $c$ เป็นจำนวนเต็มบวก

ตัวอย่างเช่น (209, 247, 286) เป็นtriplet canonical ellipsoidalที่เป็นที่ยอมรับ

ให้ $C(N)$ เป็นจำนวนของtriplet canonical ellipsoidalที่แตกต่างกัน ($a$, $b$, $c$) สำหรับ $a ≤ N$

สามารถตรวจสอบได้ว่า $C({10}^3) = 7$, $C({10}^4) = 106$ และ $C({10}^6) = 11\\,845$

ค้นหา $C({10}^{17})$

# --hints--

`crisscrossEllipses()` should return `1199215615081353`.

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
