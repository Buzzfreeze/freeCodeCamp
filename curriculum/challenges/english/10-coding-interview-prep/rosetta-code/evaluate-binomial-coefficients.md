---
id: 598de241872ef8353c58a7a2
title: Evaluate binomial coefficients
challengeType: 5
forumTopicId: 302259
dashedName: evaluate-binomial-coefficients
---

# --description--

เขียนฟังก์ชันเพื่อคำนวณสัมประสิทธิ์ทวินามสำหรับค่าที่กำหนดของ n และ k

แนะนำให้ใช้สูตรนี้:

$\\binom{n}{k} = \\frac{n!}{(n-k)!k!} = \\frac{n(n-1)(n-2)\\ldots(n-k+1)}{k(k-1)(k-2)\\ldots 1}$

# --hints--

`binom` ต้องเป็นฟังก์ชัน

```js
assert(typeof binom === 'function');
```

`binom(5,3)` ต้องคืนค่าเป็น 10

```js
assert.equal(binom(5, 3), 10);
```

`binom(7,2)` ต้องคืนค่าเป็น 21

```js
assert.equal(binom(7, 2), 21);
```

`binom(10,4)` ต้องคืนค่าเป็น 210

```js
assert.equal(binom(10, 4), 210);
```

`binom(6,1)` ต้องคืนค่าเป็น 6

```js
assert.equal(binom(6, 1), 6);
```

`binom(12,8)` ต้องคืนค่าเป็น 495

```js
assert.equal(binom(12, 8), 495);
```

# --seed--

## --seed-contents--

```js
function binom(n, k) {

}
```

# --solutions--

```js
function binom(n, k) {
  let coeff = 1;
  for (let i = n - k + 1; i <= n; i++) coeff *= i;
  for (let i = 1; i <= k; i++) coeff /= i;
  return coeff;
}
```
