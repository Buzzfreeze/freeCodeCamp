---
id: 5a23c84252665b21eecc7ed2
title: Knapsack problem/Bounded
challengeType: 5
forumTopicId: 323652
dashedName: knapsack-problembounded
---

# --description--

bounded knapsack problem ถูกกำหนดโดย:

โจทย์ bounded knapsack คือ:

คุณจะได้รับ array ของ object โดย object จะมี attribute 4 ตัวคือ name pieces (มีของชิ้นนี้กี่ชิ้น) weight และ value คุณต้องเลือกข้อมูลใน array ให้ weight รวมไม่เกินค่าที่กำหนด และมี value มากที่สุด โดยที่ object ที่เลือกต้องมีจำนวนไม่เกิน `pieces` ของ object นั้น

# --instructions--

ให้เขียนฟังก์ชันที่รับ array ของ object และรับค่าน้ำหนักสูงสุด จากนั้นจึงคำนวณน้ำหนักสูงสุดที่เป็นไปได้จากการเลือก object ใน array

# --hints--

`findBestPack([{ name:'map', weight:9, value:150, pieces:1 }, { name:'compass', weight:13, value:35, pieces:1 }, { name:'water', weight:153, value:200, pieces:2 }, { name:'sandwich', weight:50, value:60, pieces:2 }, { name:'glucose', weight:15, value:60, pieces:2 }, { name:'tin', weight:68, value:45, pieces:3 }, { name:'banana', weight:27, value:60, pieces:3 }, { name:'apple', weight:39, value:40, pieces:3 }, { name:'cheese', weight:23, value:30, pieces:1 }, { name:'beer', weight:52, value:10, pieces:3 }, { name:'suntan, cream', weight:11, value:70, pieces:1 }, { name:'camera', weight:32, value:30, pieces:1 }, { name:'T-shirt', weight:24, value:15, pieces:2 }], 300)` ต้องคืนค่าเป็น `755`

```js
assert.equal(
  findBestPack(
    [
      { name: 'map', weight: 9, value: 150, pieces: 1 },
      { name: 'compass', weight: 13, value: 35, pieces: 1 },
      { name: 'water', weight: 153, value: 200, pieces: 2 },
      { name: 'sandwich', weight: 50, value: 60, pieces: 2 },
      { name: 'glucose', weight: 15, value: 60, pieces: 2 },
      { name: 'tin', weight: 68, value: 45, pieces: 3 },
      { name: 'banana', weight: 27, value: 60, pieces: 3 },
      { name: 'apple', weight: 39, value: 40, pieces: 3 },
      { name: 'cheese', weight: 23, value: 30, pieces: 1 },
      { name: 'beer', weight: 52, value: 10, pieces: 3 },
      { name: 'suntan, cream', weight: 11, value: 70, pieces: 1 },
      { name: 'camera', weight: 32, value: 30, pieces: 1 },
      { name: 'T-shirt', weight: 24, value: 15, pieces: 2 }
    ],
    300
  ),
  755
);
```

`findBestPack([{ name:'map', weight:9, value:150, pieces:1 }, { name:'compass', weight:13, value:35, pieces:1 }, { name:'water', weight:153, value:200, pieces:2 }, { name:'sandwich', weight:50, value:60, pieces:2 }, { name:'glucose', weight:15, value:60, pieces:2 }, { name:'tin', weight:68, value:45, pieces:3 }, { name:'banana', weight:27, value:60, pieces:3 }, { name:'apple', weight:39, value:40, pieces:3 }, { name:'cheese', weight:23, value:30, pieces:1 }, { name:'beer', weight:52, value:10, pieces:3 }, { name:'suntan, cream', weight:11, value:70, pieces:1 }, { name:'camera', weight:32, value:30, pieces:1 }, { name:'T-shirt', weight:24, value:15, pieces:2 }], 400)` ต้องคืนค่าเป็น `875`

```js
assert.equal(
  findBestPack(
    [
      { name: 'map', weight: 9, value: 150, pieces: 1 },
      { name: 'compass', weight: 13, value: 35, pieces: 1 },
      { name: 'water', weight: 153, value: 200, pieces: 2 },
      { name: 'sandwich', weight: 50, value: 60, pieces: 2 },
      { name: 'glucose', weight: 15, value: 60, pieces: 2 },
      { name: 'tin', weight: 68, value: 45, pieces: 3 },
      { name: 'banana', weight: 27, value: 60, pieces: 3 },
      { name: 'apple', weight: 39, value: 40, pieces: 3 },
      { name: 'cheese', weight: 23, value: 30, pieces: 1 },
      { name: 'beer', weight: 52, value: 10, pieces: 3 },
      { name: 'suntan, cream', weight: 11, value: 70, pieces: 1 },
      { name: 'camera', weight: 32, value: 30, pieces: 1 },
      { name: 'T-shirt', weight: 24, value: 15, pieces: 2 }
    ],
    400
  ),
  875
);
```

`findBestPack([{ name:'map', weight:9, value:150, pieces:1 }, { name:'compass', weight:13, value:35, pieces:1 }, { name:'water', weight:153, value:200, pieces:2 }, { name:'sandwich', weight:50, value:60, pieces:2 }, { name:'glucose', weight:15, value:60, pieces:2 }, { name:'tin', weight:68, value:45, pieces:3 }, { name:'banana', weight:27, value:60, pieces:3 }, { name:'apple', weight:39, value:40, pieces:3 }, { name:'cheese', weight:23, value:30, pieces:1 }, { name:'beer', weight:52, value:10, pieces:3 }, { name:'suntan, cream', weight:11, value:70, pieces:1 }, { name:'camera', weight:32, value:30, pieces:1 }, { name:'T-shirt', weight:24, value:15, pieces:2 }], 500)` ต้องคืนค่าเป็น `1015`

```js
assert.equal(
  findBestPack(
    [
      { name: 'map', weight: 9, value: 150, pieces: 1 },
      { name: 'compass', weight: 13, value: 35, pieces: 1 },
      { name: 'water', weight: 153, value: 200, pieces: 2 },
      { name: 'sandwich', weight: 50, value: 60, pieces: 2 },
      { name: 'glucose', weight: 15, value: 60, pieces: 2 },
      { name: 'tin', weight: 68, value: 45, pieces: 3 },
      { name: 'banana', weight: 27, value: 60, pieces: 3 },
      { name: 'apple', weight: 39, value: 40, pieces: 3 },
      { name: 'cheese', weight: 23, value: 30, pieces: 1 },
      { name: 'beer', weight: 52, value: 10, pieces: 3 },
      { name: 'suntan, cream', weight: 11, value: 70, pieces: 1 },
      { name: 'camera', weight: 32, value: 30, pieces: 1 },
      { name: 'T-shirt', weight: 24, value: 15, pieces: 2 }
    ],
    500
  ),
  1015
);
```

`findBestPack([{ name:'map', weight:9, value:150, pieces:1 }, { name:'compass', weight:13, value:35, pieces:1 }, { name:'water', weight:153, value:200, pieces:2 }, { name:'sandwich', weight:50, value:60, pieces:2 }, { name:'glucose', weight:15, value:60, pieces:2 }, { name:'tin', weight:68, value:45, pieces:3 }, { name:'banana', weight:27, value:60, pieces:3 }, { name:'apple', weight:39, value:40, pieces:3 }, { name:'cheese', weight:23, value:30, pieces:1 }, { name:'beer', weight:52, value:10, pieces:3 }, { name:'suntan, cream', weight:11, value:70, pieces:1 }, { name:'camera', weight:32, value:30, pieces:1 }, { name:'T-shirt', weight:24, value:15, pieces:2 }], 600)` ต้องคืนค่าเป็น `1120`

```js
assert.equal(
  findBestPack(
    [
      { name: 'map', weight: 9, value: 150, pieces: 1 },
      { name: 'compass', weight: 13, value: 35, pieces: 1 },
      { name: 'water', weight: 153, value: 200, pieces: 2 },
      { name: 'sandwich', weight: 50, value: 60, pieces: 2 },
      { name: 'glucose', weight: 15, value: 60, pieces: 2 },
      { name: 'tin', weight: 68, value: 45, pieces: 3 },
      { name: 'banana', weight: 27, value: 60, pieces: 3 },
      { name: 'apple', weight: 39, value: 40, pieces: 3 },
      { name: 'cheese', weight: 23, value: 30, pieces: 1 },
      { name: 'beer', weight: 52, value: 10, pieces: 3 },
      { name: 'suntan, cream', weight: 11, value: 70, pieces: 1 },
      { name: 'camera', weight: 32, value: 30, pieces: 1 },
      { name: 'T-shirt', weight: 24, value: 15, pieces: 2 }
    ],
    600
  ),
  1120
);
```

`findBestPack([{ name:'map', weight:9, value:150, pieces:1 }, { name:'compass', weight:13, value:35, pieces:1 }, { name:'water', weight:153, value:200, pieces:2 }, { name:'sandwich', weight:50, value:60, pieces:2 }, { name:'glucose', weight:15, value:60, pieces:2 }, { name:'tin', weight:68, value:45, pieces:3 }, { name:'banana', weight:27, value:60, pieces:3 }, { name:'apple', weight:39, value:40, pieces:3 }, { name:'cheese', weight:23, value:30, pieces:1 }, { name:'beer', weight:52, value:10, pieces:3 }, { name:'suntan, cream', weight:11, value:70, pieces:1 }, { name:'camera', weight:32, value:30, pieces:1 }, { name:'T-shirt', weight:24, value:15, pieces:2 }], 700)` ต้องคืนค่าเป็น `1225`

```js
assert.equal(
  findBestPack(
    [
      { name: 'map', weight: 9, value: 150, pieces: 1 },
      { name: 'compass', weight: 13, value: 35, pieces: 1 },
      { name: 'water', weight: 153, value: 200, pieces: 2 },
      { name: 'sandwich', weight: 50, value: 60, pieces: 2 },
      { name: 'glucose', weight: 15, value: 60, pieces: 2 },
      { name: 'tin', weight: 68, value: 45, pieces: 3 },
      { name: 'banana', weight: 27, value: 60, pieces: 3 },
      { name: 'apple', weight: 39, value: 40, pieces: 3 },
      { name: 'cheese', weight: 23, value: 30, pieces: 1 },
      { name: 'beer', weight: 52, value: 10, pieces: 3 },
      { name: 'suntan, cream', weight: 11, value: 70, pieces: 1 },
      { name: 'camera', weight: 32, value: 30, pieces: 1 },
      { name: 'T-shirt', weight: 24, value: 15, pieces: 2 }
    ],
    700
  ),
  1225
);
```

# --seed--

## --seed-contents--

```js
function findBestPack(data, maxweight) {

}
```

# --solutions--

```js
function findBestPack(data, maxweight) {
  var m = [[0]]; // maximum pack value found so far
  var b = [[0]]; // best combination found so far
  var opts = [0]; // item index for 0 of item 0
  var P = [1]; // item encoding for 0 of item 0
  var choose = 0;
  for (var j = 0; j < data.length; j++) {
    opts[j + 1] = opts[j] + data[j].pieces; // item index for 0 of item j+1
    P[j + 1] = P[j] * (1 + data[j].pieces); // item encoding for 0 of item j+1
  }
  for (var j = 0; j < opts[data.length]; j++) {
    m[0][j + 1] = b[0][j + 1] = 0; // best values and combos for empty pack: nothing
  }
  for (var w = 1; w <= maxweight; w++) {
    m[w] = [0];
    b[w] = [0];
    for (var j = 0; j < data.length; j++) {
      var N = data[j].pieces; // how many of these can we have?
      var base = opts[j]; // what is the item index for 0 of these?
      for (var n = 1; n <= N; n++) {
        var W = n * data[j].weight; // how much do these items weigh?
        var s = w >= W ? 1 : 0; // can we carry this many?
        var v = s * n * data[j].value; // how much are they worth?
        var I = base + n; // what is the item number for this many?
        var wN = w - s * W; // how much other stuff can we be carrying?
        var C = n * P[j] + b[wN][base]; // encoded combination
        m[w][I] = Math.max(m[w][I - 1], v + m[wN][base]); // best value
        choose = b[w][I] = m[w][I] > m[w][I - 1] ? C : b[w][I - 1];
      }
    }
  }

  var best = [];
  for (var j = data.length - 1; j >= 0; j--) {
    best[j] = Math.floor(choose / P[j]);
    choose -= best[j] * P[j];
  }

  var wgt = 0;
  var val = 0;
  for (var i = 0; i < best.length; i++) {
    if (0 == best[i]) continue;
    wgt += best[i] * data[i].weight;
    val += best[i] * data[i].value;
  }

  return val;
}
```
