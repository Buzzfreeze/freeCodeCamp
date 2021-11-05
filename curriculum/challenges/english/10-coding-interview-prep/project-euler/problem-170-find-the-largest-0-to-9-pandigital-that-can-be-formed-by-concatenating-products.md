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

นำเลข 6 มาคูณด้วย 1273 และ 9854 แต่ละตัว

$$\begin{align}
  & 6 × 1273 = 7638 \\\\
  & 6 × 9854 = 59124 \\\\
\end{align}$$

โดยการต่อผลิตภัณฑ์เหล่านี้เข้าด้วยกัน เราได้ 1 ถึง 9 pandigital 763859124 เราจะเรียก 763859124 ว่า "ผลิตภัณฑ์ที่ต่อกันของ 6 และ (1273, 9854)" โปรดสังเกตด้วยว่าการต่อกันของตัวเลขอินพุต 612739854 เป็น pandigital 1 ถึง 9 เช่นกัน

สามารถทำได้เหมือนกันสำหรับตัวเลข pandigital 0 ถึง 9

ผลคูณที่ต่อกัน 10 หลัก 0 ถึง 9 ที่ใหญ่ที่สุดของเลขจำนวนเต็มที่มีจำนวนเต็มอื่นตั้งแต่สองจำนวนขึ้นไปคืออะไร การต่อตัวเลขที่ป้อนเข้าจะเป็นตัวเลข 10 หลักของเลขpandigital 0 ถึง 9 ด้วย

# --hints--

`largestPandigital()` ควร return `9857164023`.

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
