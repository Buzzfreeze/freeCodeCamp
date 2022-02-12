---
id: 5900f47d1000cf542c50ff8f
title: 'Problem 272: Modular Cubes, part 2'
challengeType: 5
forumTopicId: 301922
dashedName: problem-272-modular-cubes-part-2
---

# --description--

ถ้าให้ $n$ เป็นจำนวนเต็มบวก แล้ว $C(n)$ เป็นจำนวนของจำนวนเต็ม $x$ ที่ $1 < x < n$ และ $x^3 \equiv 1\bmod n$

เมื่อ $n = 91$ จะทำให้ $x$ มีได้ 8 ค่า คือ 9, 16, 22, 29, 53, 74, 79, 81 ดังนั้น $C(91) = 8$

ให้หาผลรวมของจำนวนบวก $n ≤ {10}^{11}$ ถ้า $C(n)=242$

# --hints--

`modularCubesTwo()` ต้องคืนค่าเป็น `8495585919506151000`

```js
assert.strictEqual(modularCubesTwo(), 8495585919506151000);
```

# --seed--

## --seed-contents--

```js
function modularCubesTwo() {

  return true;
}

modularCubesTwo();
```

# --solutions--

```js
// solution required
```
