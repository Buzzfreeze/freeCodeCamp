---
id: 5900f40a1000cf542c50ff1d
title: >-
  Problem 158: Exploring strings for which only one character comes
  lexicographically after its neighbour to the left
challengeType: 5
forumTopicId: 301789
dashedName: >-
  problem-158-exploring-strings-for-which-only-one-character-comes-lexicographically-after-its-neighbour-to-the-left
---

# --description--

การใช้ตัวอักษรสามตัวที่ต่างกันจากตัวอักษรภาษาอังกฤษ 26 ตัว เราสามารถสร้างสตริงที่มีความยาวสามตัวได้

เช่น 'abc', 'hat' และ 'zyx'

เมื่อเราศึกษาตัวอย่างทั้งสามนี้ เราจะเห็นว่าใน 'abc' ตัวอักษรจะเรียงจากมากไปน้อย

จะเห็นว่าใน 'hat' มีตัวอักษรแค่หนึ่งตัวที่จะเรียงจากมากไปน้อย และใน 'zyx' ไม่มีตัวอักษรจะเรียงจากมากไปน้อย

มีสตริงที่ยาว 3 ตัวอักษรทั้งหมด 10,400 แบบ ที่มีตัวอักษรอย่างน้อยหนึ่งตัวที่จะเรียงจากมากไปน้อย

ตอนนี้เราพิจารณาสตริงที่ยาว $n ≤ 26$ โดยที่ใช้ตัวอักษรไม่ซ้ำ

ถ้าทุก ๆ $n$ มี $p(n)$ เป็นจำนวนสตริงที่มีความยาว $n$ ที่มีตัวอักษรอย่างน้อยหนึ่งตัวที่จะเรียงจากมากไปน้อย

ให้หาค่าสูงสุดของ $p(n)$

# --hints--

`lexicographicNeighbours()` ต้องคืนค่าเป็น `409511334375`

```js
assert.strictEqual(lexicographicNeighbours(), 409511334375);
```

# --seed--

## --seed-contents--

```js
function lexicographicNeighbours() {

  return true;
}

lexicographicNeighbours();
```

# --solutions--

```js
// solution required
```
