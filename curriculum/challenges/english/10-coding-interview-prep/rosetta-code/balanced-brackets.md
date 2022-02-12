---
id: 594dc6c729e5700999302b45
title: Balanced brackets
challengeType: 5
forumTopicId: 302230
dashedName: balanced-brackets
---

# --description--

ให้ตรวจสอบว่าสตริงที่ส่งไปมีการใช้วงเล็บเปิด-ปิดถูกต้องหรือไม่

**ตัวอย่าง:**
| Input                     | Output |
| ------------------------- | ------ |
| <code>\[]</code>          | true   |
| <code>]\[</code>          | false  |
| <code>[][]</code>         | true   |
| <code>]\[]</code>         | false  |
| <code>\[]]\[\[]</code>    | false  |
| <code>\[\[\[\[]]]]</code> | true   |

# --hints--

`isBalanced` ต้องเป็นฟังก์ชัน

```js
assert(typeof isBalanced === 'function');
```

`isBalanced("[]")` ต้องคืนค่าเป็น true

```js
assert(isBalanced(testCases[0]));
```

`isBalanced("]][[[][][][]][")` ต้องคืนค่าเป็น false

```js
assert(!isBalanced(testCases[1]));
```

`isBalanced("[][[[[][][[[]]]]]]")` ต้องคืนค่าเป็น true

```js
assert(isBalanced(testCases[2]));
```

`isBalanced("][")` ต้องคืนค่าเป็น false

```js
assert(!isBalanced(testCases[3]));
```

`isBalanced("[[[]]]][[]")` ต้องคืนค่าเป็น false

```js
assert(!isBalanced(testCases[4]));
```

`isBalanced("][[]")` ต้องคืนค่าเป็น false

```js
assert(!isBalanced(testCases[5]));
```

`isBalanced("][[][]][[[]]")` ต้องคืนค่าเป็น false

```js
assert(!isBalanced(testCases[6]));
```

`isBalanced("[[][]]][")` ต้องคืนค่าเป็น false

```js
assert(!isBalanced(testCases[7]));
```

`isBalanced("[[[]]][[]]]][][[")` ต้องคืนค่าเป็น false

```js
assert(!isBalanced(testCases[8]));
```

`isBalanced("[]][[]]][[[[][]]")` ต้องคืนค่าเป็น false

```js
assert(!isBalanced(testCases[9]));
```

`isBalanced("][]][[][")` ต้องคืนค่าเป็น false

```js
assert(!isBalanced(testCases[10]));
```

`isBalanced("[[]][[][]]")` ต้องคืนค่าเป็น true

```js
assert(isBalanced(testCases[11]));
```

`isBalanced("[[]]")` ต้องคืนค่าเป็น true

```js
assert(isBalanced(testCases[12]));
```

`isBalanced("]][]][[]][[[")` ต้องคืนค่าเป็น false

```js
assert(!isBalanced(testCases[13]));
```

`isBalanced("][]][][[")` ต้องคืนค่าเป็น false

```js
assert(!isBalanced(testCases[14]));
```

`isBalanced("][][")` ต้องคืนค่าเป็น false

```js
assert(!isBalanced(testCases[15]));
```

`isBalanced("[]]]")` ต้องคืนค่าเป็น false

```js
assert(!isBalanced(testCases[16]));
```

`isBalanced("")` ต้องคืนค่าเป็น true

```js
assert(isBalanced(testCases[17]));
```

# --seed--

## --after-user-code--

```js
const testCases = [
  '[]',
  ']][[[][][][]][',
  '[][[[[][][[[]]]]]]',
  '][',
  '[[[]]]][[]',
  '][[]',
  '][[][]][[[]]',
  '[[][]]][',
  '[[[]]][[]]]][][[',
  '[]][[]]][[[[][]]',
  '][]][[][',
  '[[]][[][]]',
  '[[]]',
  ']][]][[]][[[',
  '][]][][[',
  '][][',
  '[]]]',
  ''
];
```

## --seed-contents--

```js
function isBalanced(str) {

  return true;
}
```

# --solutions--

```js
function isBalanced(str) {
  if (str === '') return true;
  let a = str;
  let b;
  do {
    b = a;
    a = a.replace(/\[\]/g, '');
  } while (a !== b);
  return !a;
}
```
