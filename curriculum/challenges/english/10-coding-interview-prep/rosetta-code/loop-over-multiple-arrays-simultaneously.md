---
id: 5e6dd15004c88cf00d2a78b3
title: Loop over multiple arrays simultaneously
challengeType: 5
forumTopicId: 385279
dashedName: loop-over-multiple-arrays-simultaneously
---

# --description--

ให้สร้าง array ใหม่ โดยรวม array เก่าเข้าตาม ำelement ในตำแหน่งเดียวกัน

เช่น ถ้าคุณมี array นี้:

```js
[ ["a", "b", "c"], ["A", "B", "C"], [1, 2, 3] ]
```

ต้องได้ array ใหม่เป็น:

```js
["aA1","bB2","cC3"]
```

# --instructions--

ให้เขียนฟังก์ชันที่รับค่าเป็น array ซ้อน array และคืนค่าเป็น array ใหม่ตามเงื่อนไขด้านบน

# --hints--

`loopSimult` ต้องเป็นฟังก์ชัน

```js
assert(typeof loopSimult == 'function');
```

`loopSimult([["a", "b", "c"], ["A", "B", "C"], [1, 2, 3]])` ต้องคืนค่าเป็น array

```js
assert(
  Array.isArray(
    loopSimult([
      ['a', 'b', 'c'],
      ['A', 'B', 'C'],
      [1, 2, 3]
    ])
  )
);
```

`loopSimult([["a", "b", "c"], ["A", "B", "C"], [1, 2, 3]])` ต้องคืนค่าเป็น `["aA1", "bB2", "cC3"]`

```js
assert.deepEqual(
  loopSimult([
    ['a', 'b', 'c'],
    ['A', 'B', 'C'],
    [1, 2, 3]
  ]),
  ['aA1', 'bB2', 'cC3']
);
```

`loopSimult([["c", "b", "c"], ["4", "5", "C"], [7, 7, 3]])` ต้องคืนค่าเป็น `["c47", "b57", "cC3"]`

```js
assert.deepEqual(
  loopSimult([
    ['c', 'b', 'c'],
    ['4', '5', 'C'],
    [7, 7, 3]
  ]),
  ['c47', 'b57', 'cC3']
);
```

`loopSimult([["a", "b", "c", "d"], ["A", "B", "C", "d"], [1, 2, 3, 4]])` ต้องคืนค่าเป็น `["aA1", "bB2", "cC3", "dd4"]`

```js
assert.deepEqual(
  loopSimult([
    ['a', 'b', 'c', 'd'],
    ['A', 'B', 'C', 'd'],
    [1, 2, 3, 4]
  ]),
  ['aA1', 'bB2', 'cC3', 'dd4']
);
```

`loopSimult([["a", "b"], ["A", "B"], [1, 2]])` ต้องคืนค่าเป็น `["aA1", "bB2"]`

```js
assert.deepEqual(
  loopSimult([
    ['a', 'b'],
    ['A', 'B'],
    [1, 2]
  ]),
  ['aA1', 'bB2']
);
```

`loopSimult([["b", "c"], ["B", "C"], [2, 3]])` ต้องคืนค่าเป็น `["bB2", "cC3"]`

```js
assert.deepEqual(
  loopSimult([
    ['b', 'c'],
    ['B', 'C'],
    [2, 3]
  ]),
  ['bB2', 'cC3']
);
```

# --seed--

## --seed-contents--

```js
function loopSimult(A) {

}
```

# --solutions--

```js
function loopSimult(A) {
    var res = [], output;
    for (var i = 0; i < A[0].length; i += 1) {
        output = "";
        for (var j = 0; j < A.length; j++)
            output += A[j][i];
        res.push(output);
    }
    return res;
}
```
