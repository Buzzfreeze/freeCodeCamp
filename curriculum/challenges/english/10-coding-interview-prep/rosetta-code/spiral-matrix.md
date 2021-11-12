---
id: 5a23c84252665b21eecc801c
title: Spiral matrix
challengeType: 5
forumTopicId: 302321
dashedName: spiral-matrix
---

# --description--

สร้างspiral array *spiral array* เป็นการจัดเรียงกำลังสองของจำนวนธรรมชาติ N<sup>2</sup> ตัวแรก โดยที่ตัวเลขจะเพิ่มขึ้นตามลำดับเมื่อคุณเลื่อนไปตามขอบของarrayที่วนเข้าด้านใน ตัวอย่างเช่น กำหนด **5** ให้สร้างarrayนี้:

<pre>
0  1  2  3  4
15 16 17 18 5
14 23 24 19 6
13 22 21 20 7
12 11 10  9 8
</pre>

# --hints--

`spiralArray` ควรเป็น function.

```js
assert(typeof spiralArray == 'function');
```

`spiralArray(3)` ควร return array.

```js
assert(Array.isArray(spiralArray(3)));
```

`spiralArray(3)` ควร return `[[0, 1, 2],[7, 8, 3],[6, 5, 4]]`.

```js
assert.deepEqual(spiralArray(3), [
  [0, 1, 2],
  [7, 8, 3],
  [6, 5, 4]
]);
```

`spiralArray(4)` ควร return `[[0, 1, 2, 3],[11, 12, 13, 4],[10, 15, 14, 5],[9, 8, 7, 6]]`.

```js
assert.deepEqual(spiralArray(4), [
  [0, 1, 2, 3],
  [11, 12, 13, 4],
  [10, 15, 14, 5],
  [9, 8, 7, 6]
]);
```

`spiralArray(5)` ควร return `[[0, 1, 2, 3, 4],[15, 16, 17, 18, 5],[14, 23, 24, 19, 6],[13, 22, 21, 20, 7],[12, 11, 10, 9, 8]]`.

```js
assert.deepEqual(spiralArray(5), [
  [0, 1, 2, 3, 4],
  [15, 16, 17, 18, 5],
  [14, 23, 24, 19, 6],
  [13, 22, 21, 20, 7],
  [12, 11, 10, 9, 8]
]);
```

# --seed--

## --seed-contents--

```js
function spiralArray(n) {

}
```

# --solutions--

```js
function spiralArray(n) {
  var arr = Array(n),
    x = 0,
    y = n,
    total = n * n--,
    dx = 1,
    dy = 0,
    i = 0,
    j = 0;
  while (y) arr[--y] = [];
  while (i < total) {
    arr[y][x] = i++;
    x += dx;
    y += dy;
    if (++j == n) {
      if (dy < 0) {
        x++;
        y++;
        n -= 2;
      }
      j = dx;
      dx = -dy;
      dy = j;
      j = 0;
    }
  }
  return arr;
}
```
