---
id: 5900f37b1000cf542c50fe8e
title: 'Problem 15: Lattice paths'
challengeType: 5
forumTopicId: 301780
dashedName: problem-15-lattice-paths
---

# --description--

เริ่มจากมุมซ้ายบนของกริดขนาด 2×2 ให้เคลื่อนที่ไปยังมุมขวาล่าง โดยคุณจะสามารถเคลื่อนที่ได้แค่สองทิศทางคือ ไปทางขวากับลงล่าง

<img class="img-responsive center-block" alt="a diagram of 6 2 by 2 grids showing all the routes to the bottom right corner" src="https://cdn-media-1.freecodecamp.org/project-euler/1Atixoj.gif" style="background-color: white; padding: 10px;">

ให้หาจำนานเส้นทางตามกริดขนาด `gridSize`

# --hints--

`latticePaths(4)` ต้องคืนค่าเป็นตัวเลข

```js
assert(typeof latticePaths(4) === 'number');
```

`latticePaths(4)` ต้องคืนค่าเป็น 70

```js
assert.strictEqual(latticePaths(4), 70);
```

`latticePaths(9)` ต้องคืนค่าเป็น 48620

```js
assert.strictEqual(latticePaths(9), 48620);
```

`latticePaths(20)` ต้องคืนค่าเป็น 137846528820

```js
assert.strictEqual(latticePaths(20), 137846528820);
```

# --seed--

## --seed-contents--

```js
function latticePaths(gridSize) {

  return true;
}

latticePaths(4);
```

# --solutions--

```js
function latticePaths(gridSize) {
  let paths = 1;

  for (let i = 0; i < gridSize; i++) {
    paths *= (2 * gridSize) - i;
    paths /= i + 1;
  }
  return paths;
}
```
