---
id: 5900f4641000cf542c50ff76
title: 'Problem 247: Squares under a hyperbola'
challengeType: 5
forumTopicId: 301894
dashedName: problem-247-squares-under-a-hyperbola
---

# --description--

พิจารณาขอบเขตที่จำกัดด้วย $1 ≤ x$ และ $0 ≤ y ≤ \frac{1}{x}$

ให้ $S_1$ เป็นสี่เหลี่ยมจัตุรัสที่ใหญ่ที่สุดที่อยู่ใต้เส้นโค้งได้

ให้ $S_2$ เป็นสี่เหลี่ยมจัตุรัสที่ใหญ่ที่สุดซึ่งพอดีกับพื้นที่ที่เหลือ เป็นต้น

ให้indexของ $S_n$ เป็นคู่ (ซ้าย, ด้านล่าง) ระบุจำนวนช่องสี่เหลี่ยมทางด้านซ้ายของ $S_n$ และจำนวนช่องสี่เหลี่ยมที่ต่ำกว่า $S_n$

<img class="img-responsive center-block" alt="diagram with squares under the hyperbola" src="https://cdn.freecodecamp.org/curriculum/project-euler/squares-under-a-hyperbola.gif" style="background-color: white; padding: 10px;">

แผนภาพแสดงสี่เหลี่ยมบางช่องที่มีป้ายกำกับตามตัวเลข

$S_2$ มีช่องสี่เหลี่ยมทางซ้ายหนึ่งช่องและไม่มีช่องด้านล่าง ดังนั้นindexของ $S_2$ คือ (1, 0)

จะเห็นได้ว่าindexของ $S_{32}$ คือ (1,1) เช่นเดียวกับindexของ $S_{50}$

50 คือ $n$ ที่ใหญ่ที่สุดที่indexของ $S_n$ คือ (1, 1)

$n$ ที่ใหญ่ที่สุดที่indexของ $S_n$ คือ (3, 3) คืออะไร?

# --hints--

`squaresUnderAHyperbola()` should return `782252`.

```js
assert.strictEqual(squaresUnderAHyperbola(), 782252);
```

# --seed--

## --seed-contents--

```js
function squaresUnderAHyperbola() {

  return true;
}

squaresUnderAHyperbola();
```

# --solutions--

```js
// solution required
```
