---
id: 5900f3c31000cf542c50fed5
title: 'Problem 86: Cuboid route'
challengeType: 5
forumTopicId: 302200
dashedName: problem-86-cuboid-route
---

# --description--

แมงมุม S นั่งอยู่ที่มุมหนึ่งของห้องทรงลูกบาศก์ขนาด 6 คูณ 5 คูณ 3 และแมลงวัน F นั่งอยู่ในมุมตรงข้าม 
การเดินทางบนพื้นผิวของห้องโดยระยะทาง "เส้นตรง" ที่สั้นที่สุดจาก S ถึง F คือ 10 และเส้นทางจะแสดงบนแผนภาพ

<img class="img-responsive center-block" alt="a diagram of a spider and fly's path from one corner of a cuboid room to the opposite corner" src="https://cdn-media-1.freecodecamp.org/project-euler/cuboid-route.png" style="background-color: white; padding: 10px;">

แต่มีเส้นทางที่มีแน้วโน้มว่าจะเป็นเส้นทางที่ "สั้นที่สุด" สามรายการ สำหรับทรงลูกบาศก์ที่กำหนด และเส้นทางที่สั้นที่สุดไม่ได้มีความยาวจำนวนเต็มเสมอไป

สามารถแสดงให้เห็นว่ามีลูกบาศก์ที่แตกต่างกันถึง `2060` ตัว โดยไม่สนใจการหมุน ที่มีขนาดจำนวนเต็มถึงขนาดสูงสุด M คูณ M โดย M ซึ่งเส้นทางที่สั้นที่สุดมีความยาวจำนวนเต็มเมื่อ M = 100 นี่คือค่าน้อยที่สุด ค่าของ M ซึ่งจำนวนวิธีแก้ปัญหาก่อนเกิน 2000 จำนวนวิธีแก้ปัญหาเมื่อ M = 99 คือ `1975`

จงหาค่าที่น้อยที่สุดของ M เพื่อให้จำนวนการแก้ปัญหาที่ไม่เกิน `n`

# --hints--

`cuboidRoute(2000)` ต้องคืนค่าเป็นตัวเลข

```js
assert(typeof cuboidRoute(2000) === 'number');
```

`cuboidRoute(2000)` ต้องคืนค่าเป็น `100`

```js
assert.strictEqual(cuboidRoute(2000), 100);
```

`cuboidRoute(25000)` ต้องคืนค่าเป็น `320`

```js
assert.strictEqual(cuboidRoute(25000), 320);
```

`cuboidRoute(500000)` ต้องคืนค่าเป็น `1309`

```js
assert.strictEqual(cuboidRoute(500000), 1309);
```

`cuboidRoute(1000000)` ต้องคืนค่าเป็น `1818`

```js
assert.strictEqual(cuboidRoute(1000000), 1818);
```

# --seed--

## --seed-contents--

```js
function cuboidRoute(n) {

  return true;
}

cuboidRoute(2000);
```

# --solutions--

```js
function cuboidRoute(n) {
  // Based on https://www.mathblog.dk/project-euler-86-shortest-path-cuboid/
  function getLength(a, b) {
    return Math.sqrt(a ** 2 + b ** 2);
  }

  let M = 2;
  let counter = 0;

  while (counter < n) {
    M++;
    for (let baseHeightWidth = 3; baseHeightWidth <= 2 * M; baseHeightWidth++) {
      const pathLength = getLength(M, baseHeightWidth);
      if (Number.isInteger(pathLength)) {
        if (baseHeightWidth <= M) {
          counter += Math.floor(baseHeightWidth / 2);
        } else {
          counter += 1 + M - Math.floor((baseHeightWidth + 1) / 2);
        }
      }
    }
  }

  return M;
}
```
