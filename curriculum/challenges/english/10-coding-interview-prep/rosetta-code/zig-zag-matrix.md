---
id: 594810f028c0303b75339ad8
title: Zig-zag matrix
challengeType: 5
forumTopicId: 302348
dashedName: zig-zag-matrix
---

# --description--

array 'zig-zag' เป็นการจัดเรียงกำลังสองของจำนวนเต็ม $N^2$ ตัวแรก โดยที่ตัวเลขจะเพิ่มขึ้นตามลำดับเมื่อ zig-zag ไปตาม [แนวขวาง](https://en.wiktionary.org/wiki/antidiagonal)

เช่นถ้า input เป็น `5` จะสร้าง array ในรูปแบบนี้:

<pre>
 0  1  5  6 14
 2  4  7 13 15
 3  8 12 16 21
 9 11 17 20 22
10 18 19 23 24
</pre>

# --instructions--

ให้เขียนฟังก์ชันที่รับค่าขนาดของเมตริกซ์ zig-zag และคืนค่าเป็น array สองมิติที่เป็นค่าของ zig-zag นั้น

# --hints--

`ZigZagMatrix` ต้องเป็นฟังก์ชัน

```js
assert.equal(typeof ZigZagMatrix, 'function');
```

`ZigZagMatrix` ต้องคืนค่าเป็น array

```js
assert.equal(typeof ZigZagMatrix(1), 'object');
```

`ZigZagMatrix` ต้องคืนค่าเป็น array ซ้อน array

```js
assert.equal(typeof ZigZagMatrix(1)[0], 'object');
```

`ZigZagMatrix(1)` ต้องคืนค่าเป็น \[[0]]

```js
assert.deepEqual(ZigZagMatrix(1), zm1);
```

`ZigZagMatrix(2)` ต้องคืนค่าเป็น \[[0, 1], [2, 3]]

```js
assert.deepEqual(ZigZagMatrix(2), zm2);
```

`ZigZagMatrix(5)` ต้องคืนค่าเป็นเมตริกซ์ที่ถูกต้อง

```js
assert.deepEqual(ZigZagMatrix(5), zm5);
```

# --seed--

## --after-user-code--

```js
const zm1 = [[0]];
const zm2 = [[0, 1], [2, 3]];
const zm5 = [
  [0, 1, 5, 6, 14],
  [2, 4, 7, 13, 15],
  [3, 8, 12, 16, 21],
  [9, 11, 17, 20, 22],
  [10, 18, 19, 23, 24]
];
```

## --seed-contents--

```js
function ZigZagMatrix(n) {

  return [[], []];
}
```

# --solutions--

```js
function ZigZagMatrix(n) {
  const mtx = [];
  for (let i = 0; i < n; i++) {
    mtx[i] = [];
  }

  let i = 1;
  let j = 1;
  for (let e = 0; e < n * n; e++) {
    mtx[i - 1][j - 1] = e;
    if ((i + j) % 2 === 0) {
      // Even stripes
      if (j < n) j++;
      else i += 2;
      if (i > 1) i--;
    } else {
      // Odd stripes
      if (i < n) i++;
      else j += 2;
      if (j > 1) j--;
    }
  }
  return mtx;
}
```
