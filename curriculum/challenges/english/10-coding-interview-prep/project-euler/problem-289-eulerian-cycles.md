---
id: 5900f48d1000cf542c50ffa0
title: 'Problem 289: Eulerian Cycles'
challengeType: 5
forumTopicId: 301940
dashedName: problem-289-eulerian-cycles
---

# --description--


ให้ $C(x,y)$ เป็นวงกลมผ่านจุด ($x$, $y$), ($x$, $y + 1$), ($x + 1$, $y$) และ ($x + 1$, $y + 1$).

สำหรับจำนวนเต็มบวก $m$ และ $n$ ให้ $E(m,n)$ เป็นการกำหนดค่าซึ่งประกอบด้วยวงกลม $m·n$: { $C(x,y)$: $0 ≤ x &lt; m$, $0 ≤ y &lt; n$, $x$ และ $y$ เป็นจำนวนเต็ม }

Eulerian cycle บน $E(m,n)$ เป็นเส้นทางปิดที่ผ่านแต่ละส่วนโค้งเพียงครั้งเดียว เส้นทางดังกล่าวเป็นไปได้มากมายบน $E(m,n)$ แต่เราสนใจเฉพาะเส้นทางที่ไม่ข้ามตัวเอง: เส้นทางที่ไม่ข้ามเพียงแค่สัมผัสตัวเองที่จุดขัดแตะ แต่มันไม่เคยข้ามตัวเอง

ภาพด้านล่างแสดง $E(3,3)$ และตัวอย่างของเส้นทางที่ไม่ผ่านEulerian non-crossing path

<img class="img-responsive center-block" alt="Eulerian cycle E(3, 3) and Eulerian non-crossing path" src="https://cdn.freecodecamp.org/curriculum/project-euler/eulerian-cycles.gif" style="background-color: white; padding: 10px;">

Let $L(m,n)$ be the number of Eulerian non-crossing paths on $E(m,n)$. For example, $L(1,2) = 2$, $L(2,2) = 37$ and $L(3,3) = 104290$.

Find $L(6,10)\bmod {10}^{10}$.

# --hints--

`eulerianCycles()` should return `6567944538`.

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
