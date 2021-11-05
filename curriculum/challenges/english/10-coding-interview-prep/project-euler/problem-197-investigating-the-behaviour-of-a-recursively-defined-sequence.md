---
id: 5900f4311000cf542c50ff44
title: 'Problem 197: Investigating the behaviour of a recursively defined sequence'
challengeType: 5
forumTopicId: 301835
dashedName: problem-197-investigating-the-behaviour-of-a-recursively-defined-sequence
---

# --description--

กำหนดให้เป็นฟังก์ชัน $f(x) = ⌊{2}^{30.403243784 - x^2}⌋ × {10}^{-9}$ ( ⌊ ⌋ คือฟังก์ชันพื้น) ลำดับที่ $u_n$ ถูกกำหนด โดย $u_0 = -1$ และ $u_{n + 1} = f(u_n)$

หา $u_n + u_{n + 1}$ สำหรับ $n = {10}^{12}$ ให้คำตอบด้วยตัวเลข 9 หลักหลังจุดทศนิยม

# --hints--

`recursivelyDefinedSequence()` ควร return `1.710637717`.

```js
assert.strictEqual(recursivelyDefinedSequence(), 1.710637717);
```

# --seed--

## --seed-contents--

```js
function recursivelyDefinedSequence() {

  return true;
}

recursivelyDefinedSequence();
```

# --solutions--

```js
// solution required
```
