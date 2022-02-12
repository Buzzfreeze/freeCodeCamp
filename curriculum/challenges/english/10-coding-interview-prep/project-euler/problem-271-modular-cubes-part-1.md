---
id: 5900f47b1000cf542c50ff8d
title: 'Problem 271: Modular Cubes, part 1'
challengeType: 5
forumTopicId: 301921
dashedName: problem-271-modular-cubes-part-1
---

# --description--

ถ้า $n$ เป็นจำนวนบวก ให้นิยาม $S(n)$ เป็นผลรวมของจำนวนเต็ม $x$ โดยที่ $1 < x < n$ และ $x^3 \equiv 1\bmod n$

เมื่อ $n = 91$ จะทำให้ $x$ มีได้ 8 ค่า  คือ 9, 16, 22, 29, 53, 74, 79, 81 ดังนั้น $S(91) = 9 + 16 + 22 + 29 + 53 + 74 + 79 + 81 = 363$

ให้หา $S(13\\,082\\,761\\,331\\,670\\,030)$

# --hints--

`modularCubesOne()` ต้องคืนค่าเป็น `4617456485273130000`

```js
assert.strictEqual(modularCubesOne(), 4617456485273130000);
```

# --seed--

## --seed-contents--

```js
function modularCubesOne() {

  return true;
}

modularCubesOne();
```

# --solutions--

```js
// solution required
```
