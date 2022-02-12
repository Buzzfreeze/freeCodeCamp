---
id: 596e457071c35c882915b3e4
title: Compare a list of strings
challengeType: 5
forumTopicId: 302235
dashedName: compare-a-list-of-strings
---

# --description--

ให้เขียนฟังก์ชันสองฟังก์ชัน โดยแต่ละฟังก์ชันต้องทำตามเงื่อนไขนี้

<ul>
  <li>ตรวจสอบว่าคำทุกคำเหมือนกันหรือไม่</li>
  <li>ตรวจสอบว่าคำแต่ละคำใน array มีความคล้ายกันลดลงจ้ายซ้ายไปขวาหรือไม่</li>
</ul>

# --hints--

`allEqual` ต้องเป็นฟังก์ชัน

```js
assert(typeof allEqual === 'function');
```

`azSorted` ต้องเป็นฟังก์ชัน

```js
assert(typeof azSorted === 'function');
```

`allEqual(["AA", "AA", "AA", "AA"])` ต้องคืนค่าเป็น true

```js
assert(allEqual(testCases[0]));
```

`azSorted(["AA", "AA", "AA", "AA"])` ต้องคืนค่าเป็น false

```js
assert(!azSorted(testCases[0]));
```

`allEqual(["AA", "ACB", "BB", "CC"])` ต้องคืนค่าเป็น false

```js
assert(!allEqual(testCases[1]));
```

`azSorted(["AA", "ACB", "BB", "CC"])` ต้องคืนค่าเป็น true

```js
assert(azSorted(testCases[1]));
```

`allEqual([])` ต้องคืนค่าเป็น true

```js
assert(allEqual(testCases[2]));
```

`azSorted([])` ต้องคืนค่าเป็น true

```js
assert(azSorted(testCases[2]));
```

`allEqual(["AA"])` ต้องคืนค่าเป็น true

```js
assert(allEqual(testCases[3]));
```

`azSorted(["AA"])` ต้องคืนค่าเป็น true

```js
assert(azSorted(testCases[3]));
```

`allEqual(["BB", "AA"])` ต้องคืนค่าเป็น false

```js
assert(!allEqual(testCases[4]));
```

`azSorted(["BB", "AA"])` ต้องคืนค่าเป็น false

```js
assert(!azSorted(testCases[4]));
```

# --seed--

## --after-user-code--

```js
const testCases = [['AA', 'AA', 'AA', 'AA'], ['AA', 'ACB', 'BB', 'CC'], [], ['AA'], ['BB', 'AA']];
```

## --seed-contents--

```js
function allEqual(arr) {

  return true;
}

function azSorted(arr) {

  return true;
}
```

# --solutions--

```js
function allEqual(a) {
  let out = true;
  let i = 0;
  while (++i < a.length) {
    out = out && (a[i - 1] === a[i]);
  } return out;
}

function azSorted(a) {
  let out = true;
  let i = 0;
  while (++i < a.length) {
    out = out && (a[i - 1] < a[i]);
  } return out;
}
```
