---
id: 5900f4571000cf542c50ff6a
title: 'Problem 235: An Arithmetic Geometric sequence'
challengeType: 5
forumTopicId: 301879
dashedName: problem-235-an-arithmetic-geometric-sequence
---

# --description--

กำหนดเป็นลำดับเลขคณิต-เรขาคณิต $u(k) = (900 - 3k)r^{k - 1}$

ให้ $s(n) = \sum_{k=1 \ldots n} u(k)$

หาค่าของ $r$ ซึ่ง $s(5000) = -600\\,000\\,000\\,000$

ให้ตอบเป็นทศนิยมปัดเศษ 12 ตำแหน่ง

# --hints--

`arithmeticGeometricSequence()` ต้องคืนค่าเป็น `1.002322108633`

```js
assert.strictEqual(arithmeticGeometricSequence(), 1.002322108633);
```

# --seed--

## --seed-contents--

```js
function arithmeticGeometricSequence() {

  return true;
}

arithmeticGeometricSequence();
```

# --solutions--

```js
// solution required
```
