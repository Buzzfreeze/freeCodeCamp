---
id: 596fda99c69f779975a1b67d
title: Count occurrences of a substring
challengeType: 5
forumTopicId: 302237
dashedName: count-occurrences-of-a-substring
---

# --description--

ให้สร้างฟังก์ชันที่นับจำนวนสตริงย่อยที่ไม่ทับกันในสตริงหลัก

ฟังก์ชันต้องรับ argument สองตัว:

<ul>
  <li>argument แรกคือสตริงหลัก</li>
  <li>argument ที่สองคือสตริงย่อยที่เราจะหาในสตริงหลัก</li>
</ul>

ต้องคืนค่าเป็นจำนวนเต็ม

ให้คืนค่าเป็นจำนวนของสตริงย่อยที่เจอในสตริงหลักโดยไม่ทับซ้อนกัน

# --hints--

`countSubstring` ต้องเป็นฟังก์ชัน

```js
assert(typeof countSubstring === 'function');
```

`countSubstring("the three truths", "th")` ต้องคืนค่าเป็น `3`

```js
assert.equal(countSubstring(testCases[0], searchString[0]), results[0]);
```

`countSubstring("ababababab", "abab")` ต้องคืนค่าเป็น `2`

```js
assert.equal(countSubstring(testCases[1], searchString[1]), results[1]);
```

`countSubstring("abaabba*bbaba*bbab", "a*b")` ต้องคืนค่าเป็น `2`

```js
assert.equal(countSubstring(testCases[2], searchString[2]), results[2]);
```

# --seed--

## --after-user-code--

```js
const testCases = ['the three truths', 'ababababab', 'abaabba*bbaba*bbab'];
const searchString = ['th', 'abab', 'a*b'];
const results = [3, 2, 2];
```

## --seed-contents--

```js
function countSubstring(str, subStr) {

  return true;
}
```

# --solutions--

```js
function countSubstring(str, subStr) {
  const escapedSubStr = subStr.replace(/[.+*?^$[\]{}()|/]/g, '\\$&');
  const matches = str.match(new RegExp(escapedSubStr, 'g'));
  return matches ? matches.length : 0;
}
```
