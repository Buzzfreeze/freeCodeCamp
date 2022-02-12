---
id: 5900f4161000cf542c50ff29
title: >-
  Problem 170: Find the largest 0 to 9 pandigital that can be formed by
  concatenating products
challengeType: 5
forumTopicId: 301805
dashedName: >-
  problem-170-find-the-largest-0-to-9-pandigital-that-can-be-formed-by-concatenating-products
---

# --description--

นำเลข 6 มาคูณด้วย 1273 และ 9854 ทีละตัว

$$\begin{align}
  & 6 × 1273 = 7638 \\\\
  & 6 × 9854 = 59124 \\\\
\end{align}$$

ถ้าเราต่อผลคูณเหล่านี้เข้าด้วยกัน เราจะได้ pandigital ของ 1 ถึง 9 เป็น 763859124 เราจะเรียก 763859124 ว่า "ผลคูณที่ต่อกันของ 6 และ (1273, 9854)" จะเห็นว่าการต่อกันของตัวเลข 612739854 เป็น pandigital 1 ถึง 9 ด้วยเช่นกัน

ตัวเลข pandigital ตั้งแต่ 0 ถึง 9 ก็สามารถทำวิธีนี้ได้เช่นกัน

ผลคูณที่ต่อกัน 10 หลักตั้งแต่ 0 ถึง 9 ที่มากที่สุดของเลขจำนวนเต็ม ที่มีจำนวนเต็มอื่นตั้งแต่สองจำนวนขึ้นไปคืออะไร โดยที่เลขที่ส่งเข้าไปเป็น pandigital ตั้งแต่ 0 ถึง 9 ด้วย

# --hints--

`largestPandigital()` ต้องคืนค่าเป็น `9857164023`

```js
assert.strictEqual(largestPandigital(), 9857164023);
```

# --seed--

## --seed-contents--

```js
function largestPandigital() {

  return true;
}

largestPandigital();
```

# --solutions--

```js
// solution required
```
