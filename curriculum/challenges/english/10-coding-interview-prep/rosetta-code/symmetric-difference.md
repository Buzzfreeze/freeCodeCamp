---
id: 5a23c84252665b21eecc8046
title: Symmetric difference
challengeType: 5
forumTopicId: 16086
dashedName: symmetric-difference
---

# --description--

กำหนดสอง [set](https://rosettacode.org/wiki/set)s *A* และ *B*, เพื่อคำนวน $(A \\setminus B) \\cup (B \\setminus A).$ กล่าวคือ ระบุรายการที่อยู่ใน *A* หรือ *B*  เรียกว่า [symmetric difference](<https://en.wikipedia.org/wiki/Symmetric difference>) ของ *A* และ *B*. พูดอีกอย่างคือ: $(A \\cup B) \\setminus (A \\cap B)$ (ชุดของรายการที่อยู่ในอย่างน้อยหนึ่ง *A* or *B* ลบชุดของรายการที่อยู่ในทั้งสอง *A* และ *B*).

# --instructions--

เขียนฟังก์ชันที่ใช้สองarrayเป็นพารามิเตอร์และส่งกลับค่าความแตกต่างสมมาตร จัดเรียงarrayผลลัพธ์ก่อนส่งคืน

# --hints--

`symmetricDifference` ควรเป็น function.

```js
assert(typeof symmetricDifference == 'function');
```

`symmetricDifference(["John", "Bob", "Mary", "Serena"], ["Jim", "Mary", "John", "Bob"])` ควร return array.

```js
assert(
  Array.isArray(
    symmetricDifference(
      ['John', 'Bob', 'Mary', 'Serena'],
      ['Jim', 'Mary', 'John', 'Bob']
    )
  )
);
```

`symmetricDifference(["John", "Bob", "Mary", "Serena"], ["Jim", "Mary", "John", "Bob"])` ควร return `["Jim", "Serena"]`.

```js
assert.deepEqual(
  symmetricDifference(
    ['John', 'Bob', 'Mary', 'Serena'],
    ['Jim', 'Mary', 'John', 'Bob']
  ),
  ['Jim', 'Serena']
);
```

`symmetricDifference([1, 2, 3], [3, 4])` ควร return `[1, 2, 4]`.

```js
assert.deepEqual(symmetricDifference([1, 2, 3], [3, 4]), [1, 2, 4]);
```

`symmetricDifference([1, 2, 3, 4, 5], [3, 4, 8, 7])` ควร return `[1, 2, 5, 7, 8]`.

```js
assert.deepEqual(symmetricDifference([1, 2, 3, 4, 5], [3, 4, 8, 7]), [
  1,
  2,
  5,
  7,
  8
]);
```

`symmetricDifference([1, 2, 3, 4, 5, 6, 7, 8], [1, 3, 5, 6, 7, 8, 9])` ควร return `[2, 4, 9]`.

```js
assert.deepEqual(
  symmetricDifference([1, 2, 3, 4, 5, 6, 7, 8], [1, 3, 5, 6, 7, 8, 9]),
  [2, 4, 9]
);
```

`symmetricDifference([1, 2, 4, 7, 9], [2, 3, 7, 8, 9])` ควร return `[1, 3, 4, 8]`.

```js
assert.deepEqual(symmetricDifference([1, 2, 4, 7, 9], [2, 3, 7, 8, 9]), [
  1,
  3,
  4,
  8
]);
```

# --seed--

## --seed-contents--

```js
function symmetricDifference(A, B) {

}
```

# --solutions--

```js
function symmetricDifference(A, B) {
  function relative_complement(A, B) {
    return A.filter(function(elem) {
      return B.indexOf(elem) == -1;
    });
  }

  function unique(ary) {
    var u = ary.concat().sort();
    for (var i = 1; i < u.length; ) {
      if (u[i - 1] === u[i]) u.splice(i, 1);
      else i++;
    }
    return u;
  }

  return unique(
    relative_complement(A, B).concat(relative_complement(B, A))
  ).sort();
}
```
