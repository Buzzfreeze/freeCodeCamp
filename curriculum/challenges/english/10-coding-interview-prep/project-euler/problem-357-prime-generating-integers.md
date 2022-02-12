---
id: 5900f4d11000cf542c50ffe4
title: 'Problem 357: Prime generating integers'
challengeType: 5
forumTopicId: 302017
dashedName: problem-357-prime-generating-integers
---

# --description--

ตัวหารของ 30 คือ 1, 2, 3, 5, 6, 10, 15, 30

ให้ $d$ เป็นตัวหารของ 30 จะเห็นได้ว่า $d + \frac{30}{d}$ เป็นจำนวนเฉพาะ

หาผลรวมของจำนวนเต็มบวกทั้งหมด $n$ ไม่เกิน $100\\,000\\,000$ เพื่อให้ทุก ๆ ตัวหาร $d$ ของ $n$ จะมี $d + \frac{n}{d}$ เป็นจำนวนเฉพาะ

# --hints--

`primeGeneratingIntegers()` ต้องคืนค่าเป็น `1739023853137`

```js
assert.strictEqual(primeGeneratingIntegers(), 1739023853137);
```

# --seed--

## --seed-contents--

```js
function primeGeneratingIntegers() {

  return true;
}

primeGeneratingIntegers();
```

# --solutions--

```js
// solution required
```
