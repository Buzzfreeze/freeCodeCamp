---
id: 5a23c84252665b21eecc7eb1
title: Identity matrix
challengeType: 5
forumTopicId: 302290
dashedName: identity-matrix
---

# --description--

*identity matrix* คือ square matrix ที่มีขนาดเป็น \\( n \\times n \\) โดยที่ข้อมูลในแนวทแยงเป็น `1` ัทั้งหมด และข้อมูลอื่นๆ เป็น `0` ทั้งหมด

เช่น

<ul>
  <li style='list-style: none;'>\(\displaystyle I_{n}=\begin{bmatrix} 1 &#x26; 0 &#x26; 0 \cr 0 &#x26; 1 &#x26; 0 \cr 0 &#x26; 0 &#x26; 1 \cr \end{bmatrix}\)</li>
</ul>

# --instructions--

ให้เขียนฟังก์ชันที่รับตัวเลข `n` เป็นพารามิเตอร์ และคืนค่าเป็น identity matrix \\( n \\times n \\)

# --hints--

`idMatrix` ต้องเป็นฟังก์ชัน

```js
assert(typeof idMatrix == 'function');
```

`idMatrix(1)` ต้องคืนค่าเป็น array

```js
assert(Array.isArray(idMatrix(1)));
```

`idMatrix(1)` ต้องคืนค่าเป็น `[ [ 1 ] ]`

```js
assert.deepEqual(idMatrix(1), results[0]);
```

`idMatrix(2)` ต้องคืนค่าเป็น `[ [ 1, 0 ], [ 0, 1 ] ]`

```js
assert.deepEqual(idMatrix(2), results[1]);
```

`idMatrix(3)` ต้องคืนค่าเป็น `[ [ 1, 0, 0 ], [ 0, 1, 0 ], [ 0, 0, 1 ] ]`

```js
assert.deepEqual(idMatrix(3), results[2]);
```

`idMatrix(4)` ต้องคืนค่าเป็น `[ [ 1, 0, 0, 0 ], [ 0, 1, 0, 0 ], [ 0, 0, 1, 0 ], [ 0, 0, 0, 1 ] ]`

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
