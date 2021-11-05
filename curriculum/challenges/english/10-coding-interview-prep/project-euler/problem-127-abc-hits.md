---
id: 5900f3ec1000cf542c50fefe
title: 'Problem 127: abc-hits'
challengeType: 5
forumTopicId: 301754
dashedName: problem-127-abc-hits
---

# --description--

รากของ $n$, $rad(n)$, เป็นผลคูณของตัวประกอบเฉพาะเฉพาะของ $n$ ตัวอย่างเช่น $504 = 2^3 × 3^2 × 7$ ดังนั้น $rad(504) = 2 × 3 × 7 = 42$

เราจะกำหนดแฝดสามของจำนวนเต็มบวก (a, b, c) ให้เป็น abc-hit หาก:

1. $GCD(a, b) = GCD(a, c) = GCD(b, c) = 1$
2. $a &lt; b$
3. $a + b = c$
4. $rad(abc) &lt; c$

ตัวอย่างเช่น (5, 27, 32) เป็น abc-hit เนื่องจาก:

1. $GCD(5, 27) = GCD(5, 32) = GCD(27, 32) = 1$
2. $5 &lt; 27$
3. $5 + 27 = 32$
4. $rad(4320) = 30 &lt; 32$

ปรากฎว่า abc-hits ค่อนข้างหายากและมีเพียง 31 abc-hits สำหรับ $c &lt; 1,000$ ด้วย $\sum{c} = 12523$

หาค่า $\sum{c}$ สำหรับ $c &lt; 120000$.

# --hints--

`abcHits()` ควร return `18407904`.

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
