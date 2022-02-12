---
id: 5900f3c11000cf542c50fed4
title: 'Problem 85: Counting rectangles'
challengeType: 5
forumTopicId: 302199
dashedName: problem-85-counting-rectangles
---

# --description--

ถ้าลองนับจะเห็นว่าตารางสี่เหลี่ยมขนาด 3 คูณ 2 มีสี่เหลี่ยมสิบแปดตัว:

<img class="img-responsive center-block" alt="a diagram of the different rectangles found within a 3 by 2 rectangular grid" src="https://cdn-media-1.freecodecamp.org/project-euler/counting-rectangles.png" style="background-color: white; padding: 10px;">


ให้หาจำนวนกริดของสี่เหลี่ยนที่ทำให้มีสี่เหลี่ยมก้านในเป็น `n` ถ้าไม่เจอให้เอาค่าที่ใกล้ที่สุด

# --hints--

`countingRectangles(18)` ต้องคืนค่าเป็นตัวเลข

```js
assert(typeof countingRectangles(18) === 'number');
```

`countingRectangles(18)` ต้องคืนค่าเป็น `6`

```js
assert.strictEqual(countingRectangles(18), 6);
```

`countingRectangles(250)` ต้องคืนค่าเป็น `22`

```js
assert.strictEqual(countingRectangles(250), 22);
```

`countingRectangles(50000)` ต้องคืนค่าเป็น `364`

```js
assert.strictEqual(countingRectangles(50000), 364);
```

`countingRectangles(1000000)` ต้องคืนค่าเป็น `1632`

```js
assert.strictEqual(countingRectangles(1000000), 1632);
```

`countingRectangles(2000000)` ต้องคืนค่าเป็น `2772`

```js
assert.strictEqual(countingRectangles(2000000), 2772);
```

# --seed--

## --seed-contents--

```js
function countingRectangles(n) {

  return true;
}

countingRectangles(18);
```

# --solutions--

```js
function countingRectangles(n) {
  function numberOfRectangles(h, w) {
    return (h * (h + 1) * w * (w + 1)) / 4;
  }

  function rectangleArea(h, w) {
    return h * w;
  }

  let rectanglesCount = 1;
  let maxSide = 1;
  while (rectanglesCount < n) {
    maxSide++;
    rectanglesCount = numberOfRectangles(maxSide, 1);
  }

  let bestDiff = Math.abs(rectanglesCount - n);
  let bestSize = [maxSide, 1];

  let curHeight = maxSide - 1;
  let curWidth = 1;

  for (curWidth; curWidth < curHeight; curWidth++) {
    for (curHeight; curHeight > curWidth; curHeight--) {
      rectanglesCount = numberOfRectangles(curHeight, curWidth);
      const curDiff = Math.abs(rectanglesCount - n);
      if (curDiff < bestDiff) {
        bestDiff = curDiff;
        bestSize = [curHeight, curWidth];
      }

      if (rectanglesCount < n) {
        break;
      }
    }
  }
  return rectangleArea(...bestSize);
}
```
