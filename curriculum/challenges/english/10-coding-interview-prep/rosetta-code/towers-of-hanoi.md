---
id: 5951ed8945deab770972ae56
title: Towers of Hanoi
challengeType: 5
forumTopicId: 302341
dashedName: towers-of-hanoi
---

# --description--

ให้เขียนฟังก์ชันเพื่อแก้โจทย์ [Towers of Hanoi](https://en.wikipedia.org/wiki/Towers_of_Hanoi "wp: Towers_of_Hanoi")

ฟังก์ชันของคุณต้องรับพารามิเตอร์แรกเป็น จำนวนแผ่นวงกลม และตามด้วยสตริงสามตัวสำหรับการเรียงชั้นของแผ่นนั้น เช่น `towerOfHanoi(4, 'A', 'B', 'C')`

โดยฟังก์ชันต้องคืนค่าเป็น array ของ array ที่เป็นวิธีการขยับแผ่นวงกลม

เช่น array `[['A', 'C'], ['B', 'A']]` จะระบุว่าการย้ายครั้งแรกคือการย้ายแผ่นวงกลมจากกอง A ไปยัง C และการย้ายครั้งที่ 2 คือการย้ายแผ่นวงกลมจากกอง B ไปยัง A
<p></p>

# --hints--

`towerOfHanoi` ต้องเป็นฟังก์ชัน

```js
assert(typeof towerOfHanoi === 'function');
```

`towerOfHanoi(3, ...)` คืนค่าว่ามีการย้าย 7 ครั้ง

```js
assert(res3.length === 7);
```

`towerOfHanoi(3, 'A', 'B', 'C')` ต้องคืนค่าเป็น `[['A','B'], ['A','C'], ['B','C'], ['A','B'], ['C','A'], ['C','B'], ['A','B']]`.

```js
assert.deepEqual(towerOfHanoi(3, 'A', 'B', 'C'), res3Moves);
```

`towerOfHanoi(5, "X", "Y", "Z")` ต้องมีการย้ายครั้งที่สิบเป็น Y -> X

```js
assert.deepEqual(res5[9], ['Y', 'X']);
```

`towerOfHanoi(7, 'A', 'B', 'C')` ย้ายสิบครั้งแรกควรเป็น `[['A','B'], ['A','C'], ['B','C'], ['A','B'], ['C','A'], ['C','B'], ['A','B'], ['A','C'], ['B','C'], ['B','A']]`

```js
assert.deepEqual(towerOfHanoi(7, 'A', 'B', 'C').slice(0, 10), res7First10Moves);
```

# --seed--

## --after-user-code--

```js
const res3 = towerOfHanoi(3, 'A', 'B', 'C');
const res3Moves = [['A', 'B'], ['A', 'C'], ['B', 'C'], ['A', 'B'], ['C', 'A'], ['C', 'B'], ['A', 'B']];
const res5 = towerOfHanoi(5, 'X', 'Y', 'Z');
const res7First10Moves = [['A', 'B'], ['A', 'C'], ['B', 'C'], ['A', 'B'], ['C', 'A'], ['C', 'B'], ['A', 'B'], ['A', 'C'], ['B', 'C'], ['B', 'A']];
```

## --seed-contents--

```js
function towerOfHanoi(n, a, b, c) {

  return [[]];
}
```

# --solutions--

```js
function towerOfHanoi(n, a, b, c) {
  const res = [];
  towerOfHanoiHelper(n, a, c, b, res);
  return res;
}

function towerOfHanoiHelper(n, a, b, c, res) {
  if (n > 0) {
    towerOfHanoiHelper(n - 1, a, c, b, res);
    res.push([a, c]);
    towerOfHanoiHelper(n - 1, b, a, c, res);
  }
}
```
