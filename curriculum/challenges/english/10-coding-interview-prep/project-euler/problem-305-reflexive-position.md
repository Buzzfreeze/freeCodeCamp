---
id: 5900f49d1000cf542c50ffb0
title: 'Problem 305: Reflexive Position'
challengeType: 5
forumTopicId: 301959
dashedName: problem-305-reflexive-position
---

# --description--

เรามาเรียก $S$ ว่าสตริง (อนันต์) ที่สร้างขึ้นโดยการต่อจำนวนเต็มบวกที่ต่อเนื่องกัน (เริ่มจาก 1) ที่เขียนลงในฐาน 10

ดังนั้น $S = 1234567891011121314151617181920212223242\ldots$

ง่ายที่จะเห็นว่าตัวเลขใดๆ จะแสดงจำนวนครั้งเป็นอนันต์ใน $S$

เรามาเรียก $f(n)$ ตำแหน่งเริ่มต้นของ $n^{\text{th}}$ ที่เกิดขึ้นของ $n$ ใน $S$ ตัวอย่างเช่น $f(1) = 1$, $f(5) = 81$, $f(12) = 271$ and $f(7780) = 111\\,111\\,365$.

หา $\sum f(3^k) สำหรับ 1 ≤ k ≤ 13$.

# --hints--

`reflexivePosition()` ควร return `18174995535140`.

```js
assert.strictEqual(reflexivePosition(), 18174995535140);
```

# --seed--

## --seed-contents--

```js
function reflexivePosition() {

  return true;
}

reflexivePosition();
```

# --solutions--

```js
// solution required
```
