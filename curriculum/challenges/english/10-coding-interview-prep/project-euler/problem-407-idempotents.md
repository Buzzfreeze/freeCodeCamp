---
id: 5900f5041000cf542c510016
title: 'Problem 407: Idempotents'
challengeType: 5
forumTopicId: 302075
dashedName: problem-407-idempotents
---

# --description--

ถ้าเราคำนวณ $a^2\bmod 6$ โดย $0 ≤ a ≤ 5$ เราจะได้: 0, 1, 4, 3, 4, 1

ค่าสูงสุดของ a ที่ $a^2 ≡ a\bmod 6$ คือ $4$

$M(n)$ เป็นค่าที่มากที่สุดของ $a &lt; n$ เมื่อ $a^2 ≡ a (\text{mod } n)$ ดังนั้น $M(6) = 4$

ให้หาค่าของ $\sum M(n)$ เมื่อ $1 ≤ n ≤ {10}^7$

# --hints--

`idempotents()` ต้องคืนค่าเป็น `39782849136421`

```js
assert.strictEqual(idempotents(), 39782849136421);
```

# --seed--

## --seed-contents--

```js
function idempotents() {

  return true;
}

idempotents();
```

# --solutions--

```js
// solution required
```
