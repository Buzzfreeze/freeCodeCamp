---
id: 5900f5091000cf542c51001b
title: 'Problem 408: Admissible paths through a grid'
challengeType: 5
forumTopicId: 302076
dashedName: problem-408-admissible-paths-through-a-grid
---

# --description--

จุดแลตทิซ ($x$, $y$) ใช้ไม่ได้ถ้า $x$, $y$ และ $x + y$ เป็นกำลังสองสมบูรณ์ที่เป็นบวกทั้งหมด

ตัวอย่างเช่น (9, 16) ไม่สามารถยอมรับได้ ในขณะที่ (0, 4), (3, 1) และ (9, 4) ไม่เป็นที่ยอมรับ

พิจารณาเส้นทางจากจุด ($x_1$, $y_1$) ไปยังจุด ($x_2$, $y_2$) โดยใช้ขั้นตอนหน่วยเหนือหรือตะวันออกเท่านั้น เรียกได้ว่าเป็นเส้นทางที่ยอมรับได้หากไม่มีจุดกึ่งกลางที่ยอมรับไม่ได้

ให้ $P(n)$ เป็นจำนวนเส้นทางที่อนุญาตจาก (0, 0) ถึง ($n$, $n$) $P(5) = 252$, $P(16) = 596\\,994\\,440$ and $P(1\\,000)\bmod 1\\,000\\, 000\\,007 = 341\\,920\\,854$

หา $P(10\\,000\\,000)\bmod 1\\,000\\,000\\,007$

# --hints--

`admissiblePaths()` ควร return `299742733`.

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
