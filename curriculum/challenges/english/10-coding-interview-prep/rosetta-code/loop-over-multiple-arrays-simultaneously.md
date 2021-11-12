---
id: 5e6dd15004c88cf00d2a78b3
title: Loop over multiple arrays simultaneously
challengeType: 5
forumTopicId: 385279
dashedName: loop-over-multiple-arrays-simultaneously
---

# --description--

Loop หลาย arrays และสร้าง array ใหม่ที่มีองค์ประกอบ $i^{th}$ เป็นการต่อกันขององค์ประกอบ $i^{th}$ ของแต่ละองค์ประกอบที่กำหนด

สำหรับตัวอย่างนี้ หากคุณได้รับarrayของarrayนี้:

```js
[ ["a", "b", "c"], ["A", "B", "C"], [1, 2, 3] ]
```

output ควรเป็น:

```js
["aA1","bB2","cC3"]
```

# --instructions--

เขียนฟังก์ชันที่ใช้arrayของarrayเป็นพารามิเตอร์และส่งกลับarrayของสตริงที่ตรงตามคำอธิบายที่กำหนด

# --hints--

`loopSimult` ควรเป็น function.

```js
assert(typeof loopSimult == 'function');
```

`loopSimult([["a", "b", "c"], ["A", "B", "C"], [1, 2, 3]])` ควร return array.

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

`loopSimult([["a", "b", "c"], ["A", "B", "C"], [1, 2, 3]])` ควร return `["aA1", "bB2", "cC3"]`.

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

`loopSimult([["c", "b", "c"], ["4", "5", "C"], [7, 7, 3]])` ควร return `["c47", "b57", "cC3"]`.

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

`loopSimult([["a", "b", "c", "d"], ["A", "B", "C", "d"], [1, 2, 3, 4]])` ควร return `["aA1", "bB2", "cC3", "dd4"]`.

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

`loopSimult([["a", "b"], ["A", "B"], [1, 2]])` ควร return `["aA1", "bB2"]`.

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

`loopSimult([["b", "c"], ["B", "C"], [2, 3]])` ควร return `["bB2", "cC3"]`.

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
