---
id: 5900f49d1000cf542c50ffb0
title: 'Problem 305: Reflexive Position'
challengeType: 5
forumTopicId: 301959
dashedName: problem-305-reflexive-position
---

# --description--

ให้ $S$ เป็นสตริง (อนันต์) ที่สร้างขึ้นโดยการต่อจำนวนเต็มบวกฐานสิบต่อกัน (เริ่มจาก 1) 

จะได้ $S = 1234567891011121314151617181920212223242\ldots$

จะเห็นได้ว่ามีเลขทุกตัวอยู่ใน $S$

ให้ $f(n)$ เป็นตำแหน่งเริ่มต้นของ $n^{\text{th}}$ ที่เกิดขึ้นของ $n$ ใน $S$  
เช่น $f(1) = 1$, $f(5) = 81$, $f(12) = 271$ และ $f(7780) = 111\\,111\\,365$

ให้หา $\sum f(3^k) ถ้า 1 ≤ k ≤ 13$

# --hints--

`reflexivePosition()` ต้องคืนค่าเป็น `18174995535140`

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
