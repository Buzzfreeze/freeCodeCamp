---
id: 5900f3901000cf542c50fea3
title: 'Problem 36: Double-base palindromes'
challengeType: 5
forumTopicId: 302020
dashedName: problem-36-double-base-palindromes
---

# --description--

จำนวน 585 = 1001001001<sub>2</sub> (binary), มีเลขฐานเป็น palindromic 

หาผลรวมของทึกจำนวนที่น้อยกว่า `n` ที่ 1000 ≤ `n` ≤ 1000000, ที่มี palindromic อยู่ในเลขฐาน base 10 และ base 2.

(Please note : palindromic number ในฐานใดฐานหนึ่ง อาจไม่รวมศูนย์นำหน้า)

# --hints--

`doubleBasePalindromes(1000)` ควร return a number.

```js
assert(typeof doubleBasePalindromes(1000) === 'number');
```

`doubleBasePalindromes(1000)` ควร return 1772.

```js
assert(doubleBasePalindromes(1000) == 1772);
```

`doubleBasePalindromes(50000)` ควร return 105795.

```js
assert(doubleBasePalindromes(50000) == 105795);
```

`doubleBasePalindromes(500000)` ควร return 286602.

```js
assert(doubleBasePalindromes(500000) == 286602);
```

`doubleBasePalindromes(1000000)` ควร return 872187.

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
