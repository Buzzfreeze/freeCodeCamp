---
id: 5900f4ab1000cf542c50ffbe
title: 'Problem 319: Bounded Sequences'
challengeType: 5
forumTopicId: 301975
dashedName: problem-319-bounded-sequences
---

# --description--

ให้ $x_1, x_2, \ldots, x_n$ เป็นลำดับของความยาว $n$ เพื่อให้:

- $x_1 = 2$
- สำหรับ $1 &lt; ผม ≤ n : x_{i - 1} &lt; x_i$
- สำหรับ $i$ และ $j$ ทั้งหมดที่มี $1 ≤ i, j ≤ n : {(x_i)}^j &lt; {(x_j + 1)}^i$

มีเพียงห้าลำดับดังกล่าวของความยาว 2 คือ: {2,4}, {2,5}, {2,6}, {2,7} และ {2,8} มี 293 ลำดับความยาว 5; สามตัวอย่างได้รับด้านล่าง: {2,5,11,25,55}, {2,6,14,36,88}, {2,8,22,64,181}

ให้ $t(n)$ แทนจำนวนลำดับของความยาว $n$ คุณจะได้รับ $t(10) = 86195$ และ $t(20) = 5227991891$

หา $t({10}^{10})$ และให้คำตอบแบบ modulo $10^9$

# --hints--

`boundedSequences()` should return `268457129`.

```js
assert.strictEqual(boundedSequences(), 268457129);
```

# --seed--

## --seed-contents--

```js
function boundedSequences() {

  return true;
}

boundedSequences();
```

# --solutions--

```js
// solution required
```
