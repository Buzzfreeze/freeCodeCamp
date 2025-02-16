---
id: 599c333915e0ea32d04d4bec
title: Element-wise operations
challengeType: 5
forumTopicId: 302252
dashedName: element-wise-operations
---

# --description--

ใช้เขียนฟังก์ชันที่ดำเนินการแบบ matrix-matrix และ scalar-matrix

**ให้ฟังก์ชันของคุณทำงานได้ดังนี้:**

<ul>
  <li>บวก</li>
  <li>ลบ</li>
  <li>คุณ</li>
  <li>หาร</li>
  <li>ยกกำลัง</li>
</ul>

พารามิเตอร์แรกจะเป็นการดำเนินการที่จะดำเนินการ เช่น "m_add" สำหรับบวกเมทริกซ์และ "s_add" สำหรับการบวกสเกลาร์ พารามิเตอร์ที่สองและสามจะเป็นเมทริกซ์ที่จะดำเนินการ

# --hints--

`operation` ต้องเป็นฟังก์ชัน

```js
assert(typeof operation === 'function');
```

`operation("m_add",[[1,2],[3,4]],[[1,2],[3,4]])` ต้องคืนค่าเป็น `[[2,4],[6,8]]`

```js
assert.deepEqual(
  operation(
    'm_add',
    [
      [1, 2],
      [3, 4]
    ],
    [
      [1, 2],
      [3, 4]
    ]
  ),
  [
    [2, 4],
    [6, 8]
  ]
);
```

`operation("s_add",[[1,2],[3,4]],2)` ต้องคืนค่าเป็น `[[3,4],[5,6]]`

```js
assert.deepEqual(
  operation(
    's_add',
    [
      [1, 2],
      [3, 4]
    ],
    2
  ),
  [
    [3, 4],
    [5, 6]
  ]
);
```

`operation("m_sub",[[1,2],[3,4]],[[1,2],[3,4]])` ต้องคืนค่าเป็น `[[0,0],[0,0]]`

```js
assert.deepEqual(
  operation(
    'm_sub',
    [
      [1, 2],
      [3, 4]
    ],
    [
      [1, 2],
      [3, 4]
    ]
  ),
  [
    [0, 0],
    [0, 0]
  ]
);
```

`operation("m_mult",[[1,2],[3,4]],[[1,2],[3,4]])` ต้องคืนค่าเป็น `[[1,4],[9,16]]`

```js
assert.deepEqual(
  operation(
    'm_mult',
    [
      [1, 2],
      [3, 4]
    ],
    [
      [1, 2],
      [3, 4]
    ]
  ),
  [
    [1, 4],
    [9, 16]
  ]
);
```

`operation("m_div",[[1,2],[3,4]],[[1,2],[3,4]])` ต้องคืนค่าเป็น `[[1,1],[1,1]]`

```js
assert.deepEqual(
  operation(
    'm_div',
    [
      [1, 2],
      [3, 4]
    ],
    [
      [1, 2],
      [3, 4]
    ]
  ),
  [
    [1, 1],
    [1, 1]
  ]
);
```

`operation("m_exp",[[1,2],[3,4]],[[1,2],[3,4]])` ต้องคืนค่าเป็น `[[1,4],[27,256]]`

```js
assert.deepEqual(
  operation(
    'm_exp',
    [
      [1, 2],
      [3, 4]
    ],
    [
      [1, 2],
      [3, 4]
    ]
  ),
  [
    [1, 4],
    [27, 256]
  ]
);
```

`operation("m_add",[[1,2,3,4],[5,6,7,8]],[[9,10,11,12],[13,14,15,16]])` ต้องคืนค่าเป็น `[[10,12,14,16],[18,20,22,24]]`

```js
assert.deepEqual(
  operation(
    'm_add',
    [
      [1, 2, 3, 4],
      [5, 6, 7, 8]
    ],
    [
      [9, 10, 11, 12],
      [13, 14, 15, 16]
    ]
  ),
  [
    [10, 12, 14, 16],
    [18, 20, 22, 24]
  ]
);
```

# --seed--

## --seed-contents--

```js
function operation(op, arr1, arr2) {

}
```

# --solutions--

```js
function operation(op, arr1, arr2) {
  const ops = {
    add: ((a, b) => a + b),
    sub: ((a, b) => a - b),
    mult: ((a, b) => a * b),
    div: ((a, b) => a / b),
    exp: ((a, b) => Math.pow(a, b))
  };
  const ifm = op.startsWith('m');
  const doOp = ops[op.substring(2)];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[0].length; j++) {
      arr1[i][j] = doOp(arr1[i][j], (ifm) ? (arr2[i][j]) : (arr2));
    }
  }
  return arr1;
}
```
