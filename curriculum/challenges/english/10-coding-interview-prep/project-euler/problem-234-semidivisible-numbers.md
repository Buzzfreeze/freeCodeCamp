---
id: 5900f4571000cf542c50ff69
title: 'Problem 234: Semidivisible numbers'
challengeType: 5
forumTopicId: 301878
dashedName: problem-234-semidivisible-numbers
---

# --description--

ให้ $n ≥ 4$ เป็นจำนวนเต็ม เรากำหนดรากที่สองของจำนวนเฉพาะที่น้อยที่สุดของ $n$ เป็น $lps(n)$ เป็น $\text{จำนวนเฉพาะที่มากที่สุด} ≤ \sqrt{n}$ และรากที่สองของจำนวนเฉพาะที่มากที่สุดของ $n$ เป็น $ups(n)$ เป็น $\text{จำนวนเฉพาะที่น้อยที่สุด} ≥ \sqrt{n}$

เช่น $lps(4) = 2 = ups(4)$, $lps(1000) = 31$, $ups(1000) = 37$

จำนวน $n ≥ 4$ เป็น semidivisible ถ้าหนึ่งใน $lps(n)$ และ $ups(n)$ หาร $n$ แต่ไม่ใช่ทั้งสองอย่าง

ผลรวมของจำนวนหาร semidivisible ได้ไม่เกิน 15 คือ 30 ตัวเลขคือ 8, 10 และ 12 15 ไม่สามารถแบ่งครึ่งได้เนื่องจากเป็นผลคูณของทั้ง $lps(15) = 3$ และ $ups(15) = 5$ ตัวอย่างเช่น ผลรวมของตัวเลข semidivisible 92 ตัวที่มากถึง 1,000 คือ 34825

ผลรวมของตัวเลข semidivisible ทั้งหมดไม่เกิน 999966663333 คืออะไร?

# --hints--

`semidivisibleNumbers()` ต้องคืนค่าเป็น `1259187438574927000`

```js
assert.strictEqual(semidivisibleNumbers(), 1259187438574927000);
```

# --seed--

## --seed-contents--

```js
function semidivisibleNumbers() {

  return true;
}

semidivisibleNumbers();
```

# --solutions--

```js
// solution required
```
