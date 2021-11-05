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

การใช้ตัวอักษรสามตัวที่ต่างกันจาก 26 ตัวอักษรของตัวอักษร สามารถสร้างสตริงอักขระที่มีความยาวสามตัวได้

ตัวอย่าง ได้แก่ 'abc', 'hat' และ 'zyx'

เมื่อเราศึกษาตัวอย่างทั้งสามนี้ เราจะเห็นว่าสำหรับ 'abc' อักขระสองตัวนั้นมาเรียงตามลำดับศัพท์หลังทางซ้าย

สำหรับ 'หมวก' มีอักขระหนึ่งตัวที่มาศัพท์ตามหลังทางซ้ายเท่านั้น สำหรับ 'zyx' ไม่มีอักขระที่มา lexicographically หลังจากทางซ้าย

มีทั้งหมด 10,400 สตริงที่มีความยาว 3 ซึ่งอักขระหนึ่งตัวมาเรียงตามลำดับศัพท์หลังจากทางซ้าย

ตอนนี้เราพิจารณาสตริงของ $n ≤ 26$ อักขระที่แตกต่างจากตัวอักษร

สำหรับทุก ๆ $n$ $p(n)$ คือจำนวนสตริงที่มีความยาว $n$ โดยที่อักขระหนึ่งตัวจะเรียงตามลำดับศัพท์หลังจากทางซ้าย

ค่าสูงสุดของ $p(n)$ คืออะไร?

# --hints--

`lexicographicNeighbours()` should return `409511334375`.

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
