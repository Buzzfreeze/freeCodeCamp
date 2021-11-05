---
id: 5900f4671000cf542c50ff7a
title: 'Problem 251: Cardano Triplets'
challengeType: 5
forumTopicId: 301899
dashedName: problem-251-cardano-triplets
---

# --description--

Triplet ของจำนวนเต็มบวก ($a$,$b$,$c$) เรียกว่า Cardano Triplet หากเป็นไปตามเงื่อนไข:

$$\sqrt[3]{a + b \sqrt{c}} + \sqrt[3]{a - b \sqrt{c}} = 1$$

ตัวอย่างเช่น (2,1,5) คือ Cardano Triplet

มี 149 Cardano Triplets ซึ่ง $a + b + c ≤ 1,000$

หาจำนวน Cardano Triplets ที่มีอยู่เพื่อให้ $a + b + c ≤ 110\\,000\\,000$

# --hints--

`cardanoTriplets()` ควร return `18946051`.

```js
assert.strictEqual(cardanoTriplets(), 18946051);
```

# --seed--

## --seed-contents--

```js
function cardanoTriplets() {

  return true;
}

cardanoTriplets();
```

# --solutions--

```js
// solution required
```
