---
id: 5900f4e61000cf542c50fff9
title: 'Problem 378: Triangle Triples'
challengeType: 5
forumTopicId: 302040
dashedName: problem-378-triangle-triples
---

# --description--

ให้ $T(n)$ เป็น Triangle Number ตัวที่ $n$ ดังนั้น $T(n) = \frac{n(n + 1)}{2}$

ให้ $dT(n)$ เป็นจำนวนตัวหารของ $T(n)$ เช่น: $T(7) = 28$ และ $dT(7) = 6$

ให้ $Tr(n)$ เป็นจำนวนสามเท่า ($i$, $j$, $k$) โดยที่ $1 ≤ i &lt; เจ &lt; k ≤ n$ และ $dT(i) > dT(j) > dT(k)$ $Tr(20) = 14$, $Tr(100) = 5\\,772$ และ $Tr(1000) = 11\\,174\\,776$

ให้หา $Tr(60\\,000\\,000)$ โดยตอบเฉพาะ 18 หลักสุดท้าย

# --hints--

`triangleTriples()` ต้องคืนค่าเป็น `147534623725724700`

```js
assert.strictEqual(triangleTriples(), 147534623725724700);
```

# --seed--

## --seed-contents--

```js
function triangleTriples() {

  return true;
}

triangleTriples();
```

# --solutions--

```js
// solution required
```
