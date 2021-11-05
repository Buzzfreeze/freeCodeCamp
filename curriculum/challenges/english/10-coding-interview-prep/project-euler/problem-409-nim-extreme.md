---
id: 5900f5061000cf542c510017
title: 'Problem 409: Nim Extreme'
challengeType: 5
forumTopicId: 302077
dashedName: problem-409-nim-extreme
---

# --description--

ให้ $n$ เป็น positive integer พิจารณา nim positions เมื่อ

- มีกองไม่ว่าง $n$
- แต่ละกองมีขนาดน้อยกว่า $2^n$
- ไม่มีสองกองที่มีขนาดเท่ากัน

ให้ $W(n)$ เป็นจำนวนตำแหน่ง nim ที่ชนะซึ่งเป็นไปตามเงื่อนไขข้างต้น (ตำแหน่งจะชนะหากผู้เล่นคนแรกมีกลยุทธ์ในการชนะ)

ตัวอย่างเช่น $W(1) = 1$, $W(2) = 6$, $W(3) = 168$, $W(5) = 19\\,764\\,360$ and $W( 100)\bmod 1\\,000\\,000\\,007 = 384\\,777\\,056$

หา $W(10\\,000\\,000)\bmod 1\\,000\\,000\\,007$.

# --hints--

`nimExtreme()` ควร return `253223948`.

```js
assert.strictEqual(nimExtreme(), 253223948);
```

# --seed--

## --seed-contents--

```js
function nimExtreme() {

  return true;
}

nimExtreme();
```

# --solutions--

```js
// solution required
```
