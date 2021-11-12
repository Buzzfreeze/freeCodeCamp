---
id: 596fda99c69f779975a1b67d
title: Count occurrences of a substring
challengeType: 5
forumTopicId: 302237
dashedName: count-occurrences-of-a-substring
---

# --description--

สร้างฟังก์ชันหรือแสดงฟังก์ชัน เพื่อนับจำนวนการเกิดขึ้นที่ไม่ทับซ้อนกันของstringย่อยภายในstring

ฟังก์ชันควรมีสองargument:

<ul>
  <li>the first argument being the string to search, and</li>
  <li>the second a substring to be searched for.</li>
</ul>

ควร return จำนวนเต็ม

การจับคู่ควรให้จำนวนการจับคู่ที่ไม่ทับซ้อนกันมากที่สุด

โดยทั่วไป นี่หมายถึงการจับคู่จาก left-to-right หรือ right-to-left.

# --hints--

`countSubstring` ควรเป็น function.

```js
assert(typeof countSubstring === 'function');
```

`countSubstring("the three truths", "th")` ควร return `3`.

```js
assert.equal(countSubstring(testCases[0], searchString[0]), results[0]);
```

`countSubstring("ababababab", "abab")` ควร return `2`.

```js
assert.equal(countSubstring(testCases[1], searchString[1]), results[1]);
```

`countSubstring("abaabba*bbaba*bbab", "a*b")` ควร return `2`.

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
