---
id: 5900f3ca1000cf542c50fedd
title: 'Problem 94: Almost equilateral triangles'
challengeType: 5
forumTopicId: 302211
dashedName: problem-94-almost-equilateral-triangles
---

# --description--

พิสูจน์ได้ง่าย ๆ ว่าไม่มีสามเหลี่ยมด้านเท่าที่มีด้านยาวครบหนึ่งส่วนและพื้นที่ปริพันธ์ อย่างไรก็ตาม สามเหลี่ยมด้านเท่าเกือบ 5-5-6 มีพื้นที่ 12 ตารางหน่วย

กำหนดให้ <dfn>almost equilateral triangle</dfn> 
ให้เป็นสามเหลี่ยมที่มีด้านสองด้านเท่ากันและด้านที่สามต่างกันไม่เกินหนึ่งหน่วย

จงหาผลรวมของเส้นรอบรูปของรูปสามเหลี่ยมด้านเท่าเกือบทั้งหมดที่มีความยาวด้านปริพันธ์และพื้นที่รวม และเส้นรอบรูปไม่เกิน `limit`

# --hints--

`almostEquilateralTriangles(50)` ควร return number.

```js
assert(typeof almostEquilateralTriangles(50) === 'number');
```

`almostEquilateralTriangles(50)` ควร return `66`.

```js
assert.strictEqual(almostEquilateralTriangles(50), 66);
```

`almostEquilateralTriangles(10000)` ควร return `3688`.

```js
assert.strictEqual(almostEquilateralTriangles(10000), 3688);
```

`almostEquilateralTriangles(10000000)` ควร return `9973078`.

```js
assert.strictEqual(almostEquilateralTriangles(10000000), 9973078);
```

`almostEquilateralTriangles(1000000000)` ควร return `518408346`.

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
