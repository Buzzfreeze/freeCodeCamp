---
id: 5900f5021000cf542c510014
title: 'Problem 405: A rectangular tiling'
challengeType: 5
forumTopicId: 302073
dashedName: problem-405-a-rectangular-tiling
---

# --description--

เราต้องการปูกระเบื้องสี่เหลี่ยมที่มีความยาวเป็นสองเท่าของความกว้าง

ให้ $T(0)$ เป็นการปูกระเบื้องที่ใช้กระเบื้องแผ่นเดียว

ถ้า $n > 0$ ให้ $T(n)$ มาจาก $T( n- 1)$ โดยแทนที่กระเบื้องทั้งหมดในลักษณะต่อไปนี้:

<img class="img-responsive center-block" alt="obtaining T(n) from T(n - 1)" src="https://cdn.freecodecamp.org/curriculum/project-euler/a-rectangular-tiling-1.png" style="background-color: white; padding: 10px;">

ภาพเคลื่อนไหวต่อไปนี้สาธิตการเรียงต่อกันของ $T(n)$ โดย $n$ มีค่าตั้งแต่ 0 ถึง 5:

<img class="img-responsive center-block" alt="animation with tilings T(n) for n from 0 to 5" src="https://cdn.freecodecamp.org/curriculum/project-euler/a-rectangular-tiling-2.gif" style="background-color: white; padding: 10px;">

ให้ $f(n)$ เป็นจำนวนจุดที่สี่แผ่นมาบรรจบกันใน $T(n)$ ตัวอย่างเช่น $f(1) = 0$, $f(4) = 82$ และ $f({10}^9)\bmod {17}^7 = 126\\,897\\,180$.

ให้หาค่าของ $f({10}^k)$ ถ้า $k = {10}^{18}$ ให้นำคำตอบไป mod กับ ${17}^7$

# --hints--

`rectangularTiling()` ต้องคืนค่าเป็น `237696125`

```js
assert.strictEqual(rectangularTiling(), 237696125);
```

# --seed--

## --seed-contents--

```js
function rectangularTiling() {

  return true;
}

rectangularTiling();
```

# --solutions--

```js
// solution required
```
