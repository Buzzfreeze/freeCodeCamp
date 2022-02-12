---
id: 5900f48d1000cf542c50ffa0
title: 'Problem 289: Eulerian Cycles'
challengeType: 5
forumTopicId: 301940
dashedName: problem-289-eulerian-cycles
---

# --description--


ให้ $C(x,y)$ เป็นวงกลมที่ผ่านจุด ($x$, $y$), ($x$, $y + 1$), ($x + 1$, $y$) และ ($x + 1$, $y + 1$).

ให้ $m$ และ $n$ เป็นจำนวนเต็มบวก และกำหนดให้ $E(m,n)$ เป็นการกำหนดค่าซึ่งประกอบด้วยวงกลม $m·n$ โดย { $C(x,y)$: $0 ≤ x &lt; m$, $0 ≤ y &lt; n$ ซึ่ง $x$ และ $y$ เป็นจำนวนเต็ม }

Eulerian cycle บน $E(m,n)$ เป็นเส้นทางที่มาบรรจบตัวเอง ที่ผ่านแต่ละส่วนโค้งเพียงครั้งเดียว เส้นทางดังกล่าวเป็นไปได้มากมายบน $E(m,n)$ แต่เราสนใจเฉพาะเส้นทางที่ไม่ตัดตัวเอง (เส้นทางที่ไม่ตัดตัวตัวเองอาจจะสัมผัสเส้นตัวเองได้ แต่จะไม่ข้าม)

ภาพด้านล่างแสดง $E(3,3)$ และตัวอย่างของเส้นทางที่ไม่ตัดตัวเอง

<img class="img-responsive center-block" alt="Eulerian cycle E(3, 3) and Eulerian non-crossing path" src="https://cdn.freecodecamp.org/curriculum/project-euler/eulerian-cycles.gif" style="background-color: white; padding: 10px;">

ให้ $L(m,n)$ เป็นจำนวนเส้นทางที่ไม่ตัดตัวเองของ $E(m,n)$  
เช่น $L(1,2) = 2$, $L(2,2) = 37$ and $L(3,3) = 104290$.

ให้หา $L(6,10)\bmod {10}^{10}$

# --hints--

`eulerianCycles()` ต้องคืนค่าเป็น `6567944538`

```js
assert.strictEqual(eulerianCycles(), 6567944538);
```

# --seed--

## --seed-contents--

```js
function eulerianCycles() {

  return true;
}

eulerianCycles();
```

# --solutions--

```js
// solution required
```
