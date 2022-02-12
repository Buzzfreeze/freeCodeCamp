---
id: 5900f5431000cf542c510056
title: 'Problem 471: Triangle inscribed in ellipse'
challengeType: 5
forumTopicId: 302148
dashedName: problem-471-triangle-inscribed-in-ellipse
---

# --description--

สามเหลี่ยม $ΔABC$ เขียนไว้ในวงรีด้วยสมการ $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$, $0 &lt; 2b &lt; a$, $a$ และ $b$ จำนวนเต็ม

ให้ $r(a, b)$ เป็นรัศมีของวงกลมของ $ΔABC$ เมื่อวงกลมมีจุดศูนย์กลาง $(2b, 0)$ และ $A$ มีพิกัด $\left(\frac{a}{2}, \frac{\sqrt{3}}{2}b\right)$

เช่น $r(3, 1) = \frac{1}{2}, r(6, 2) = 1, r(12, 3) = 2$

<img class="img-responsive center-block" alt="triangle ΔABC inscribed in an ellipse, radius of the incircle of ΔABC r(6, 2) = 1" src="https://cdn.freecodecamp.org/curriculum/project-euler/triangle-inscribed-in-ellipse-1.png" style="background-color: white; padding: 10px;">

<img class="img-responsive center-block" alt="triangle ΔABC inscribed in an ellipse, radius of the incircle of ΔABC r(12, 3) = 2" src="https://cdn.freecodecamp.org/curriculum/project-euler/triangle-inscribed-in-ellipse-2.png" style="background-color: white; padding: 10px;">

ให้ $G(n) = \sum_{a = 3}^n \sum_{b = 1}^{\left\lfloor\frac{a - 1}{2} \right\rfloor} r(a, b)$

กำหนดให้ $G(10) = 20.59722222$, $G(100) = 19223.60980$ (ปัดเศษเป็นทศนิยมสิบหลัก)

ให้หา $G({10}^{11})$ โดยตอบเป็นสตริงสัญกรณ์วิทยาศาสตร์ ทศนิยมสิบหลัก และใช้ตัวพิมพ์เล็ก "e" เพื่อแยก mantissa และเลขชี้กำลัง

เช่นถ้า $G(10)$ คำตอบจะเป็น `2.059722222e1`

# --hints--

`triangleInscribedInEllipse()` ต้องคืนค่าเป็นสตริง

```js
assert(typeof triangleInscribedInEllipse() === 'string');
```

`triangleInscribedInEllipse()` ต้องคืนค่าเป็นสตริง `1.895093981e31`

```js
assert.strictEqual(triangleInscribedInEllipse(), '1.895093981e31');
```

# --seed--

## --seed-contents--

```js
function triangleInscribedInEllipse() {

  return true;
}

triangleInscribedInEllipse();
```

# --solutions--

```js
// solution required
```
