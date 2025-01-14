---
id: 5900f3ec1000cf542c50fefe
title: 'Problem 127: abc-hits'
challengeType: 5
forumTopicId: 301754
dashedName: problem-127-abc-hits
---

# --description--

รากของ $n$, $rad(n)$, เป็นผลคูณของตัวประกอบเฉพาะเฉพาะของ $n$ ตัวอย่างเช่น $504 = 2^3 × 3^2 × 7$ ดังนั้น $rad(504) = 2 × 3 × 7 = 42$

เราจะกำหนดแฝดสามของจำนวนเต็มบวก (a, b, c) ให้เป็น abc-hit ถ้า:

1. $GCD(a, b) = GCD(a, c) = GCD(b, c) = 1$
2. $a &lt; b$
3. $a + b = c$
4. $rad(abc) &lt; c$

เช่น (5, 27, 32) เป็น abc-hit เพราะ:

1. $GCD(5, 27) = GCD(5, 32) = GCD(27, 32) = 1$
2. $5 &lt; 27$
3. $5 + 27 = 32$
4. $rad(4320) = 30 &lt; 32$

ปรากฎว่า abc-hit ค่อนข้างหายากและมีแค่ 31 ตัวเท่านั้นที่ $c &lt; 1,000$ และ $\sum{c} = 12523$

ให้หาค่า $\sum{c}$ ที่ $c &lt; 120000$

# --hints--

`abcHits()` ต้องคืนค่าเป็น `18407904`

```js
assert.strictEqual(abcHits(), 18407904);
```

# --seed--

## --seed-contents--

```js
function abcHits() {

  return true;
}

abcHits();
```

# --solutions--

```js
// solution required
```
