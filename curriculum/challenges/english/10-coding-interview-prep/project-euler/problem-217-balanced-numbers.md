---
id: 5900f4461000cf542c50ff58
title: 'Problem 217: Balanced Numbers'
challengeType: 5
forumTopicId: 301859
dashedName: problem-217-balanced-numbers
---

# --description--

จำนวนเต็มบวกที่มีตัวเลข $k$ (ทศนิยม) เรียกว่าบาลานซ์ ถ้าตัวเลข $⌈\frac{k}{2}⌉$ หลักแรกรวมเป็นค่าเดียวกับ $⌈\frac{k}{2}⌉$ ตัวสุดท้าย ตัวเลข โดยที่ $⌈x⌉$ เพดานเด่นชัดของ $x$ เป็นจำนวนเต็มที่น้อยที่สุด $≥ x$ ดังนั้น $⌈π⌉ = 4$ และ $⌈5⌉ = 5$

ตัวอย่างเช่น พาลินโดรมทั้งหมดมีความสมดุล เช่นเดียวกับ 13722

ให้ $T(n)$ เป็นผลรวมของจำนวนที่สมดุลทั้งหมดที่น้อยกว่า $10^n$

ดังนั้น: $T(1) = 45$, $T(2) = 540$ และ $T(5) = 334\\,795\\,890$

ค้นหา $T(47)\\,mod\\,3^{15}$

# --hints--

`balancedNumbers()` ควร return `6273134`.

```js
assert.strictEqual(balancedNumbers(), 6273134);
```

# --seed--

## --seed-contents--

```js
function balancedNumbers() {

  return true;
}

balancedNumbers();
```

# --solutions--

```js
// solution required
```
