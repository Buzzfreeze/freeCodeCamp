---
id: 5900f3841000cf542c50fe97
title: 'Problem 24: Lexicographic permutations'
challengeType: 5
forumTopicId: 301885
dashedName: problem-24-lexicographic-permutations
---

# --description--

permutation คือการเรียงลำดับของ objects  
เช่น 3124 ก็เป็นหนึ่งใน permutation ของ 1, 2, 3 และ 4

ถ้าเราเรียง permutations ตามลำดับตัวเลขหรือตามลำดับตัวอักษร เราจะเรียกว่า lexicographic order  

โดย lexicographic permutations ของ 0, 1 และ 2 คือ:

<div style='text-align: center;'>012   021   102   120   201   210</div>

หา lexicographic permutation ลำดับที่ `n` ของเลข 0, 1, 2, 3, 4, 5, 6, 7, 8 และ 9

# --hints--

`lexicographicPermutations(699999)` ต้องคืนค่าเป็นตัวเลข

```js
assert(typeof lexicographicPermutations(699999) === 'number');
```

`lexicographicPermutations(699999)` ต้องคืนค่าเป็น 1938246570

```js
assert(lexicographicPermutations(699999) == 1938246570);
```

`lexicographicPermutations(899999)` ต้องคืนค่าเป็น 2536987410

```js
assert(lexicographicPermutations(899999) == 2536987410);
```

`lexicographicPermutations(900000)` ต้องคืนค่าเป็น 2537014689

```js
assert(lexicographicPermutations(900000) == 2537014689);
```

`lexicographicPermutations(999999)` ต้องคืนค่าเป็น 2783915460

```js
assert(lexicographicPermutations(999999) == 2783915460);
```

# --seed--

## --seed-contents--

```js
function lexicographicPermutations(n) {

  return n;
}

lexicographicPermutations(999999);
```

# --solutions--

```js
// solution required
```
