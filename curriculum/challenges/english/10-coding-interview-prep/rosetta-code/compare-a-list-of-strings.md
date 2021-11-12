---
id: 596e457071c35c882915b3e4
title: Compare a list of strings
challengeType: 5
forumTopicId: 302235
dashedName: compare-a-list-of-strings
---

# --description--

กำหนดให้ [list](https://en.wikipedia.org/wiki/List_(abstract_data_type) "wp: List\_(abstract_data_type)") ของ strings ใช้ฟังก์ชันสำหรับแต่ละเงื่อนไขต่อไปนี้:

<ul>
  <li>test if they are all lexically equal</li>
  <li>test if every string is lexically less than the one after it  (i.e. whether the list is in strict ascending order)</li>
</ul>

# --hints--

`allEqual` ควรเป็น function.

```js
assert(typeof allEqual === 'function');
```

`azSorted` ควรเป็น function.

```js
assert(typeof azSorted === 'function');
```

`allEqual(["AA", "AA", "AA", "AA"])` ควร return true.

```js
assert(allEqual(testCases[0]));
```

`azSorted(["AA", "AA", "AA", "AA"])` ควร return false.

```js
assert(!azSorted(testCases[0]));
```

`allEqual(["AA", "ACB", "BB", "CC"])` ควร return false.

```js
assert(!allEqual(testCases[1]));
```

`azSorted(["AA", "ACB", "BB", "CC"])` ควร return true.

```js
assert(azSorted(testCases[1]));
```

`allEqual([])` ควร return true.

```js
assert(allEqual(testCases[2]));
```

`azSorted([])` ควร return true.

```js
assert(azSorted(testCases[2]));
```

`allEqual(["AA"])` ควร return true.

```js
assert(allEqual(testCases[3]));
```

`azSorted(["AA"])` ควร return true.

```js
assert(azSorted(testCases[3]));
```

`allEqual(["BB", "AA"])` ควร return false.

```js
assert(!allEqual(testCases[4]));
```

`azSorted(["BB", "AA"])` ควร return false.

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
