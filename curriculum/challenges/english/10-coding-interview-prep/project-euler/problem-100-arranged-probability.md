---
id: 5900f3d01000cf542c50fee3
title: "Problem 100: Arranged probability"
challengeType: 5
forumTopicId: 301724
dashedName: problem-100-arranged-probability
---

# --description--

ถ้ากล่องหนึ่งมีแผ่นสี 21 แผ่น ประกอบด้วยแผ่นสีน้ำเงิน 15 แผ่น และแผ่นสีแดง 6 แผ่น และสุ่มหยิบแผ่นสองแผ่น จะเห็นได้ว่าความน่าจะเป็นที่จะได้แผ่นสีน้ำเงินสองแผ่น คือ

$${P(BB)} = \frac{15}{21}×\frac{14}{20} = \frac{1}{2}$$

การจัดเรียงครั้งต่อไปซึ่งมีโอกาส 50% ที่จะสุ่มเลือกแผ่นสีน้ำเงินสองแผ่น คือกล่องที่ประกอบด้วยแผ่นสีน้ำเงิน 85 แผ่นและแผ่นสีแดง 35 แผ่น

ให้หาจำนวนแผ่นสีน้ำเงินที่ต้องมีในกล่อง เพื่อหยิบแผ่นให้ได้อย่างน้อย `limit` แผ่น

# --hints--

`arrangedProbability(20)` ต้องคืนค่าเป็นตัวเลข

```js
assert(typeof arrangedProbability(10) === "number");
```

`arrangedProbability(20)` ต้องคืนค่าเป็น `15`

```js
assert.strictEqual(arrangedProbability(20), 15);
```

`arrangedProbability(100)` ต้องคืนค่าเป็น `85`

```js
assert.strictEqual(arrangedProbability(100), 85);
```

`arrangedProbability(100000)` ต้องคืนค่าเป็น `97513`

```js
assert.strictEqual(arrangedProbability(100000), 97513);
```

`arrangedProbability(1000000000)` ต้องคืนค่าเป็น `3822685023`

```js
assert.strictEqual(arrangedProbability(1000000000), 3822685023);
```

`arrangedProbability(1000000000000)` ต้องคืนค่าเป็น `756872327473`

```js
assert.strictEqual(arrangedProbability(1000000000000), 756872327473);
```

# --seed--

## --seed-contents--

```js
function arrangedProbability(limit) {
  return true;
}

arrangedProbability(20);
```

# --solutions--

```js
function arrangedProbability(limit) {
  // Based on https://www.mathblog.dk/project-euler-100-blue-discs-two-blue/
  let blue = 15;
  let discs = 21;

  while (discs < limit) {
    const nextBlue = 3 * blue + 2 * discs - 2;
    const nextDiscs = 4 * blue + 3 * discs - 3;

    blue = nextBlue;
    discs = nextDiscs;
  }
  return blue;
}
```
