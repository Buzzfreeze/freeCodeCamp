---
id: 5900f41c1000cf542c50ff2e
title: >-
  Problem 175: Fractions involving the number of different ways a number can be
  expressed as a sum of powers of 2
challengeType: 5
forumTopicId: 301810
dashedName: >-
  problem-175-fractions-involving-the-number-of-different-ways-a-number-can-be-expressed-as-a-sum-of-powers-of-2
---

# --description--

กำหนด $f(0) = 1$ และ $f(n)$ เป็นจำนวนวิธีในการเขียน $n$ เป็นผลรวมของยกกำลัง 2 โดยที่ไม่มีกำลังเกิดขึ้นมากกว่าสองครั้ง

ตัวอย่างเช่น $f(10) = 5$ เนื่องจากมีห้าวิธีที่แตกต่างกันในการแสดง 10:

$$10 = 8 + 2 = 8 + 1 + 1 = 4 + 4 + 2 = 4 + 2 + 2 + 1 + 1 = 4 + 4 + 1 + 1$$

จะแสดงให้เห็นได้ว่าทุก ๆ เศษส่วน $\frac{p}{q}\\; (p>0, q>0)$ มีอย่างน้อยหนึ่งจำนวนเต็ม $n$ ซึ่ง $\frac{f(n)}{f(n - 1)} = \frac{p}{q}$

ตัวอย่างเช่น $n$ ที่เล็กที่สุดที่ $\frac{f(n)}{f(n - 1)} = \frac{13}{17}$ คือ 241 การขยายbinaryของ 241 คือ 1111001

การอ่านเลขฐานสองนี้จากบิตที่สำคัญที่สุดไปยังบิตที่มีนัยสำคัญน้อยที่สุด มี 4 ตัว, 3 ศูนย์และ 1 ตัว เราจะเรียกสตริง 4,3,1 ว่า Shortened Binary Expansion ของ 241

ค้นหาการขยายbinaryแบบสั้นของ $n$ ที่เล็กที่สุดซึ่ง

$$\frac{f(n)}{f(n - 1)} = \frac{123456789}{987654321}$$

ให้คำตอบของคุณเป็นสตริงที่มีจำนวนเต็มคั่นด้วยเครื่องหมายจุลภาค โดยไม่มีช่องว่างใดๆ
# --hints--

`shortenedBinaryExpansionOfNumber()` ควร return string.

```js
assert(typeof shortenedBinaryExpansionOfNumber() === 'string');
```

`shortenedBinaryExpansionOfNumber()` ควร return string `1,13717420,8`.

```js
assert.strictEqual(shortenedBinaryExpansionOfNumber(), '1,13717420,8');
```

# --seed--

## --seed-contents--

```js
function shortenedBinaryExpansionOfNumber() {

  return true;
}

shortenedBinaryExpansionOfNumber();
```

# --solutions--

```js
// solution required
```
