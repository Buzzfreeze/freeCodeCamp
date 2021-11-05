---
id: 5900f47b1000cf542c50ff8d
title: 'Problem 271: Modular Cubes, part 1'
challengeType: 5
forumTopicId: 301921
dashedName: problem-271-modular-cubes-part-1
---

# --description--

สำหรับจำนวนบวก $n$ ให้นิยาม $S(n)$ เป็นผลรวมของจำนวนเต็ม $x$ โดยที่ $1 < x < n$ และ $x^3 \equiv 1\bmod n$

เมื่อ $n = 91$ มี 8 ค่าที่เป็นไปได้สำหรับ $x$ ได้แก่ 9, 16, 22, 29, 53, 74, 79, 81 ดังนั้น $S(91) = 9 + 16 + 22 + 29 + 53 + 74 + 79 + 81 = 363$

หา $S(13\\,082\\,761\\,331\\,670\\,030)$

# --hints--

`modularCubesOne()` ควร return `4617456485273130000`.

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
