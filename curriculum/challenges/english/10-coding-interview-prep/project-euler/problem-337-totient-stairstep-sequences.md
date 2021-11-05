---
id: 5900f4be1000cf542c50ffd0
title: 'Problem 337: Totient Stairstep Sequences'
challengeType: 5
forumTopicId: 301995
dashedName: problem-337-totient-stairstep-sequences
---

# --description--

ให้ $\\{a_1, a_2, \ldots, a_n\\}$ เป็นลำดับจำนวนเต็มของความยาว $n$ เพื่อให้:

- $a_1 = 6$
- สำหรับ $1 ≤ i &lt; n$ : $φ(a_i) &lt; φ(a_{i + 1}) &lt; a_i &lt; a_{i + 1}$
$φ$ เป็น Euler's totient function.

ให้ $S(N)$ เป็นจำนวนลำดับดังกล่าวด้วย $a_n ≤ N$

ตัวอย่างเช่น $S(10) = 4$: {6}, {6, 8}, {6, 8, 9} และ {6, 10}

เราสามารถยืนยันได้ว่า $S(100) = 482\\,073\\,668$ และ $S(10\\,000)\bmod {10}^8 = 73\\,808\\,307$

หา $S(20\\,000\\,000)\bmod {10}^8$


# --hints--

`totientStairstepSequences()` should return `85068035`.

```js
assert.strictEqual(totientStairstepSequences(), 85068035);
```

# --seed--

## --seed-contents--

```js
function totientStairstepSequences() {

  return true;
}

totientStairstepSequences();
```

# --solutions--

```js
// solution required
```
