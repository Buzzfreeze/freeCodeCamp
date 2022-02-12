---
id: 5900f3ca1000cf542c50fedd
title: 'Problem 94: Almost equilateral triangles'
challengeType: 5
forumTopicId: 302211
dashedName: problem-94-almost-equilateral-triangles
---

# --description--

การพิสูจน์ว่าไม่มีสามเหลี่ยมด้านเท่าที่มีความยาวด้านเป็นจำนวนเต็ม และมีพื้นที่เป็นจำนวนเต็ม นั้นง่ายมาก แต่สามเหลี่ยมด้านเกือบเท่า 5-5-6 มีพื้นที่ 12 ตารางหน่วย

กำหนดให้ <dfn>สามเหลี่ยมด้านเกือบเท่า</dfn> 
ให้เป็นสามเหลี่ยมที่มีด้านสองด้านเท่ากันและด้านที่สามต่างกันไม่เกินหนึ่งหน่วย

จงหาผลรวมของเส้นรอบรูปของรูปสามเหลี่ยมด้านเกือบเท่า ที่มีความยาวด้านและพื้นที่เป็นจำนวนเต็ฒ และเส้นรอบรูปไม่เกิน `limit`

# --hints--

`almostEquilateralTriangles(50)` ต้องคืนค่าเป็นตัวเลข

```js
assert(typeof almostEquilateralTriangles(50) === 'number');
```

`almostEquilateralTriangles(50)` ต้องคืนค่าเป็น `66`

```js
assert.strictEqual(almostEquilateralTriangles(50), 66);
```

`almostEquilateralTriangles(10000)` ต้องคืนค่าเป็น `3688`

```js
assert.strictEqual(almostEquilateralTriangles(10000), 3688);
```

`almostEquilateralTriangles(10000000)` ต้องคืนค่าเป็น `9973078`

```js
assert.strictEqual(almostEquilateralTriangles(10000000), 9973078);
```

`almostEquilateralTriangles(1000000000)` ต้องคืนค่าเป็น `518408346`

```js
assert.strictEqual(almostEquilateralTriangles(1000000000), 518408346);
```

# --seed--

## --seed-contents--

```js
function almostEquilateralTriangles(limit) {

  return true;
}

almostEquilateralTriangles(50);
```

# --solutions--

```js
function almostEquilateralTriangles(limit) {
  // Based on https://blog.dreamshire.com/project-euler-94-solution/
  let perimetersSum = 0;

  let sidesAB = 1;
  let sideC = 1;
  let perimeter = 0;
  let perimeterOffset = 1;

  while (perimeter <= limit) {
    [sidesAB, sideC] = [4 * sidesAB - sideC + 2 * perimeterOffset, sidesAB];
    perimeterOffset = -perimeterOffset;

    perimetersSum += perimeter;
    perimeter = 3 * sidesAB - perimeterOffset;
  }

  return perimetersSum;
}
```
