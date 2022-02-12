---
id: 5900f5091000cf542c51001b
title: 'Problem 408: Admissible paths through a grid'
challengeType: 5
forumTopicId: 302076
dashedName: problem-408-admissible-paths-through-a-grid
---

# --description--

จุด ($x$, $y$) จะเป็นจุดแบบ inadmissible ถ้า $x$, $y$ และ $x + y$ เป็นกำลังสองสมบูรณ์ที่เป็นบวกทั้งหมด

เช่น (9, 16) จะเป็นจุดแบบ inadmissible ในขณะที่ (0, 4), (3, 1) และ (9, 4) ไม่เป็น

พิจารณาเส้นทางจากจุด ($x_1$, $y_1$) ไปยังจุด ($x_2$, $y_2$) โดยขยับไปทางเหนือหรือตะวันออกเท่านั้น  
เรียกได้ว่าเป็นเส้นทางแบบ admissible หากไม่มีจุดที่เป็น inadmissible

ให้ $P(n)$ เป็นจำนวนเส้นทางที่เป็นแบบ admissible จาก (0, 0) ถึง ($n$, $n$) $P(5) = 252$, $P(16) = 596\\,994\\,440$ และ $P(1\\,000)\bmod 1\\,000\\, 000\\,007 = 341\\,920\\,854$

ให้หา $P(10\\,000\\,000)\bmod 1\\,000\\,000\\,007$

# --hints--

`admissiblePaths()` ต้องคืนค่าเป็น `299742733`

```js
assert.strictEqual(admissiblePaths(), 299742733);
```

# --seed--

## --seed-contents--

```js
function admissiblePaths() {

  return true;
}

admissiblePaths();
```

# --solutions--

```js
// solution required
```
