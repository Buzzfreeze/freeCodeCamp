---
id: 594dc6c729e5700999302b45
title: Balanced brackets
challengeType: 5
forumTopicId: 302230
dashedName: balanced-brackets
---

# --description--

ตรวจสอบว่าstringของวงเล็บที่สร้างขึ้นมีความสมดุลหรือไม่ นั่นคือ ไม่ว่าจะประกอบด้วยวงเล็บเปิด/ปิดทั้งหมดหรือไม่ (ตามลำดับ) ซึ่งไม่มีวงเล็บผิดพลาด

**Examples:**
| Input                     | Output |
| ------------------------- | ------ |
| <code>\[]</code>          | true   |
| <code>]\[</code>          | false  |
| <code>[][]</code>         | true   |
| <code>]\[]</code>         | false  |
| <code>\[]]\[\[]</code>    | false  |
| <code>\[\[\[\[]]]]</code> | true   |

# --hints--

`isBalanced` ควรเป็น function.

```js
assert(typeof isBalanced === 'function');
```

`isBalanced("[]")` ควร return true.

```js
assert(isBalanced(testCases[0]));
```

`isBalanced("]][[[][][][]][")` ควร return false.

```js
assert(!isBalanced(testCases[1]));
```

`isBalanced("[][[[[][][[[]]]]]]")` ควร return true.

```js
assert(isBalanced(testCases[2]));
```

`isBalanced("][")` ควร return false.

```js
assert(!isBalanced(testCases[3]));
```

`isBalanced("[[[]]]][[]")` ควร return false.

```js
assert(!isBalanced(testCases[4]));
```

`isBalanced("][[]")` ควร return false.

```js
assert(!isBalanced(testCases[5]));
```

`isBalanced("][[][]][[[]]")` ควร return false.

```js
assert(!isBalanced(testCases[6]));
```

`isBalanced("[[][]]][")` ควร return false.

```js
assert(!isBalanced(testCases[7]));
```

`isBalanced("[[[]]][[]]]][][[")` ควร return false.

```js
assert(!isBalanced(testCases[8]));
```

`isBalanced("[]][[]]][[[[][]]")` ควร return false.

```js
assert(!isBalanced(testCases[9]));
```

`isBalanced("][]][[][")` ควร return false.

```js
assert(!isBalanced(testCases[10]));
```

`isBalanced("[[]][[][]]")` ควร return true.

```js
assert(isBalanced(testCases[11]));
```

`isBalanced("[[]]")` ควร return true.

```js
assert(isBalanced(testCases[12]));
```

`isBalanced("]][]][[]][[[")` ควร return false.

```js
assert(!isBalanced(testCases[13]));
```

`isBalanced("][]][][[")` ควร return false.

```js
assert(!isBalanced(testCases[14]));
```

`isBalanced("][][")` ควร return false.

```js
assert(!isBalanced(testCases[15]));
```

`isBalanced("[]]]")` ควร return false.

```js
assert(!isBalanced(testCases[16]));
```

`isBalanced("")` ควร return true.

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
