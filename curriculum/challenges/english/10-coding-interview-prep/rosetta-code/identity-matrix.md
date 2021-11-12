---
id: 5a23c84252665b21eecc7eb1
title: Identity matrix
challengeType: 5
forumTopicId: 302290
dashedName: identity-matrix
---

# --description--

*identity matrix* เป็น square matrix มี size \\( n \\times n \\), โดยที่องค์ประกอบในแนวทแยงล้วนเป็น `1` (ones), และองค์ประกอบอื่น ๆ ทั้งหมดนั้นทั้งหมดเป็น `0` (zeroes).

<ul>
  <li style='list-style: none;'>\(\displaystyle I_{n}=\begin{bmatrix} 1 &#x26; 0 &#x26; 0 \cr 0 &#x26; 1 &#x26; 0 \cr 0 &#x26; 0 &#x26; 1 \cr \end{bmatrix}\)</li>
</ul>

# --instructions--

เขียนฟังก์ชันที่ใช้ตัวเลข `n` เป็นพารามิเตอร์และreturnเมทริกซ์เอกลักษณ์ของคำสั่ง \\( n \\times n \\)

# --hints--

`idMatrix` ควรเป็น function.

```js
assert(typeof idMatrix == 'function');
```

`idMatrix(1)` ควร return array.

```js
assert(Array.isArray(idMatrix(1)));
```

`idMatrix(1)` ควร return `[ [ 1 ] ]`.

```js
assert.deepEqual(idMatrix(1), results[0]);
```

`idMatrix(2)` ควร return `[ [ 1, 0 ], [ 0, 1 ] ]`.

```js
assert.deepEqual(idMatrix(2), results[1]);
```

`idMatrix(3)` ควร return `[ [ 1, 0, 0 ], [ 0, 1, 0 ], [ 0, 0, 1 ] ]`.

```js
assert.deepEqual(idMatrix(3), results[2]);
```

`idMatrix(4)` ควร return `[ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]`.

```js
assert.deepEqual(idMatrix(4), results[3]);
```

# --seed--

## --after-user-code--

```js
let results=[[ [ 1 ] ],
[ [ 1, 0 ], [ 0, 1 ] ],
[ [ 1, 0, 0 ], [ 0, 1, 0 ], [ 0, 0, 1 ] ],
[ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]]
```

## --seed-contents--

```js
function idMatrix(n) {

}
```

# --solutions--

```js
function idMatrix(n) {
    return Array.apply(null, new Array(n)).map(function (x, i, xs) {
        return xs.map(function (_, k) {
            return i === k ? 1 : 0;
        })
    });
}
```
