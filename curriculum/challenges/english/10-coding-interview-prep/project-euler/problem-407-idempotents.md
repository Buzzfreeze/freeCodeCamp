---
id: 5900f5041000cf542c510016
title: 'Problem 407: Idempotents'
challengeType: 5
forumTopicId: 302075
dashedName: problem-407-idempotents
---

# --description--

ถ้าเราคำนวณ $a^2\bmod 6$ สำหรับ $0 ≤ a ≤ 5$ เราจะได้: 0, 1, 4, 3, 4, 1

ค่าสูงสุดของ a ที่ $a^2 ≡ a\bmod 6$ คือ $4$

เรียก $M(n)$ ว่าค่าที่ใหญ่ที่สุดของ $a &lt; n$ นั้น $a^2 ≡ a (\text{mod } n)$. ดังนั้น $M(6) = 4$

หา $\sum M(n)$ สำหรับ $1 ≤ n ≤ {10}^7$

# --hints--

`idempotents()` ควร return `39782849136421`.

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
