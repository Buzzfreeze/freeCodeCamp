---
id: 5a23c84252665b21eecc8046
title: Symmetric difference
challengeType: 5
forumTopicId: 16086
dashedName: symmetric-difference
---

# --description--

กำหนดให้มี 2 [เซ็ท](https://rosettacode.org/wiki/set) คือ *A* และ *B*
ให้คำนวน $(A \\setminus B) \\cup (B \\setminus A)$ 

ซึ่งก็คือการหาค่าที่มีใน *A* หรือ *B* แต่ไม่ใช่ค่าที่มีร่วมกันในทั้งสองเซ็ท โดยเราจะเรียกค่าแบบนี้ว่า [symmetric difference](<https://en.wikipedia.org/wiki/Symmetric difference>) 

ซึ่งจะเขียนอีกแบบได้เป็น: $(A \\cup B) \\setminus (A \\cap B)$ 

# --instructions--

ให้เขียนฟังก์ชันที่รับ array สองตัวและคืนค่าเป็น array ที่เป็น symmetric difference ของสอง array นั้น

# --hints--

`symmetricDifference` ต้องเป็นฟังก์ชัน

```js
assert(typeof symmetricDifference == 'function');
```

`symmetricDifference(["John", "Bob", "Mary", "Serena"], ["Jim", "Mary", "John", "Bob"])` ต้องคืนค่าเป็น array

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

`symmetricDifference(["John", "Bob", "Mary", "Serena"], ["Jim", "Mary", "John", "Bob"])` ต้องคืนค่าเป็น `["Jim", "Serena"]`

```js
assert.deepEqual(
  symmetricDifference(
    ['John', 'Bob', 'Mary', 'Serena'],
    ['Jim', 'Mary', 'John', 'Bob']
  ),
  ['Jim', 'Serena']
);
```

`symmetricDifference([1, 2, 3], [3, 4])` ต้องคืนค่าเป็น `[1, 2, 4]`

```js
assert.deepEqual(symmetricDifference([1, 2, 3], [3, 4]), [1, 2, 4]);
```

`symmetricDifference([1, 2, 3, 4, 5], [3, 4, 8, 7])` ต้องคืนค่าเป็น `[1, 2, 5, 7, 8]`

```js
assert.deepEqual(symmetricDifference([1, 2, 3, 4, 5], [3, 4, 8, 7]), [
  1,
  2,
  5,
  7,
  8
]);
```

`symmetricDifference([1, 2, 3, 4, 5, 6, 7, 8], [1, 3, 5, 6, 7, 8, 9])` ต้องคืนค่าเป็น `[2, 4, 9]`

```js
assert.deepEqual(
  symmetricDifference([1, 2, 3, 4, 5, 6, 7, 8], [1, 3, 5, 6, 7, 8, 9]),
  [2, 4, 9]
);
```

`symmetricDifference([1, 2, 4, 7, 9], [2, 3, 7, 8, 9])` ต้องคืนค่าเป็น `[1, 3, 4, 8]`

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
