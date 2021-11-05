---
id: 5900f4571000cf542c50ff69
title: 'Problem 234: Semidivisible numbers'
challengeType: 5
forumTopicId: 301878
dashedName: problem-234-semidivisible-numbers
---

# --description--

สำหรับจำนวนเต็ม $n ≥ 4$ เรากำหนดรากที่สองของจำนวนเฉพาะที่ต่ำกว่าของ $n$ ซึ่งแสดงโดย $lps(n)$ เป็น $\text{largest prime} ≤ \sqrt{n}$ และจำนวนเฉพาะตัวบน รากที่สองของ $n$, $ups(n)$ เป็น $\text{smallest prime} ≥ \sqrt{n}$

ตัวอย่างเช่น $lps(4) = 2 = ups(4)$, $lps(1000) = 31$, $ups(1000) = 37$

ให้เราเรียกจำนวนเต็ม $n ≥ 4$ กึ่งหาร ถ้าหนึ่งใน $lps(n)$ และ $ups(n)$ หาร $n$ แต่ไม่ใช่ทั้งสองอย่าง

ผลรวมของจำนวนหารกึ่งหารได้ไม่เกิน 15 คือ 30 ตัวเลขคือ 8, 10 และ 12 15 ไม่สามารถแบ่งครึ่งได้เนื่องจากเป็นผลคูณของทั้ง $lps(15) = 3$ และ $ups(15) = 5$ ตัวอย่างเช่น ผลรวมของตัวเลขกึ่งหาร 92 ตัวที่มากถึง 1,000 คือ 34825

ผลรวมของตัวเลขกึ่งหารทั้งหมดไม่เกิน 999966663333 คืออะไร?

# --hints--

`semidivisibleNumbers()` ควร return `1259187438574927000`.

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
