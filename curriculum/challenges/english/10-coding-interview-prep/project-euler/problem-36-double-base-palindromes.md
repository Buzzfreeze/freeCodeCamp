---
id: 5900f3901000cf542c50fea3
title: 'Problem 36: Double-base palindromes'
challengeType: 5
forumTopicId: 302020
dashedName: problem-36-double-base-palindromes
---

# --description--

จำนวน 585 = 1001001001<sub>2</sub> (binary) เป็น palindrome ทั้งในฐานสิบและฐานสอง

หาผลรวมของทุกจำนวนที่น้อยกว่า `n` (โดย 1000 ≤ `n` ≤ 1000000) ที่เป็น palindrome ทั้งในฐานสิบและฐานสอง

(Please note : palindrome จะไม่นับเลข 0 ที่นำหน้า)

# --hints--

`doubleBasePalindromes(1000)` ต้องคืนค่าเป็นตัวเลข

```js
assert(typeof doubleBasePalindromes(1000) === 'number');
```

`doubleBasePalindromes(1000)` ต้องคืนค่าเป็น 1772

```js
assert(doubleBasePalindromes(1000) == 1772);
```

`doubleBasePalindromes(50000)` ต้องคืนค่าเป็น 105795

```js
assert(doubleBasePalindromes(50000) == 105795);
```

`doubleBasePalindromes(500000)` ต้องคืนค่าเป็น 286602

```js
assert(doubleBasePalindromes(500000) == 286602);
```

`doubleBasePalindromes(1000000)` ต้องคืนค่าเป็น 872187

```js
assert(doubleBasePalindromes(1000000) == 872187);
```

# --seed--

## --seed-contents--

```js
function doubleBasePalindromes(n) {

  return n;
}

doubleBasePalindromes(1000000);
```

# --solutions--

```js
// solution required
```
