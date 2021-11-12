---
id: 594810f028c0303b75339ad8
title: Zig-zag matrix
challengeType: 5
forumTopicId: 302348
dashedName: zig-zag-matrix
---

# --description--

'zig-zag' array เป็นการจัดเรียงกำลังสองของจำนวนเต็ม $N^2$ ตัวแรก โดยที่ตัวเลขจะเพิ่มขึ้นตามลำดับเมื่อzig-zag ไปตาม array [anti-diagonals](https://en.wiktionary.org/wiki/antidiagonal).

ตัวอย่างเช่น สำหรับinput "5" ควรสร้างผลลัพธ์ต่อไปนี้:

<pre>
 0  1  5  6 14
 2  4  7 13 15
 3  8 12 16 21
 9 11 17 20 22
10 18 19 23 24
</pre>

# --instructions--

เขียนฟังก์ชันที่ใช้ขนาดของzig-zag-matrix และส่งกลับmatrixที่สอดคล้องกันเป็นarrayสองมิติ

# --hints--

ZigZagMatrix ควรเป็น function.

```js
assert.equal(typeof ZigZagMatrix, 'function');
```

ZigZagMatrix ควร return array.

```js
assert.equal(typeof ZigZagMatrix(1), 'object');
```

ZigZagMatrix ควร return an array of nested arrays.

```js
assert.equal(typeof ZigZagMatrix(1)[0], 'object');
```

ZigZagMatrix(1) ควร return \[[0]].

```js
assert.deepEqual(ZigZagMatrix(1), zm1);
```

ZigZagMatrix(2) ควร return \[[0, 1], [2, 3]].

```js
assert.deepEqual(ZigZagMatrix(2), zm2);
```

ZigZagMatrix(5) ควร return specified matrix.

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
