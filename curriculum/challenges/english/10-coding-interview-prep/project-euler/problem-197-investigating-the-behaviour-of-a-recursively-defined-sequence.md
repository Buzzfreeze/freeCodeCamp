---
id: 5900f4311000cf542c50ff44
title: 'Problem 197: Investigating the behaviour of a recursively defined sequence'
challengeType: 5
forumTopicId: 301835
dashedName: problem-197-investigating-the-behaviour-of-a-recursively-defined-sequence
---

# --description--

กำหนดให้ฟังก์ชัน $f(x) = ⌊{2}^{30.403243784 - x^2}⌋ × {10}^{-9}$ ( ⌊ ⌋ คือฟังก์ชันพื้น)  

ลำดับ $u_n$ ถูกกำหนดโดย $u_0 = -1$ และ $u_{n + 1} = f(u_n)$

ให้หา $u_n + u_{n + 1}$ ถ้า $n = {10}^{12}$ ทศนิยม 9 หลัก

# --hints--

`recursivelyDefinedSequence()` ต้องคืนค่าเป็น `1.710637717`

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
