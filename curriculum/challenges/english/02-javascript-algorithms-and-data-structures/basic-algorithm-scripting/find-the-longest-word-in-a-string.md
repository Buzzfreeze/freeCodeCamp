---
id: a26cbbe9ad8655a977e1ceb5
title: Find the Longest Word in a String
challengeType: 5
forumTopicId: 16015
dashedName: find-the-longest-word-in-a-string
---

# --description--

แบบทดสอบนี้ให้หาความยาวของคำที่ยาวที่สุดในประโยค โดยผลลัพธ์ที่ได้ควรเป็นตัวเลข


# --hints--

การเรียกใช้ฟังก์ชัน `findLongestWordLength("The quick brown fox jumped over the lazy dog")` ต้องได้ค่าเป็นเป็นตัวเลข

```js
assert(
  typeof findLongestWordLength(
    'The quick brown fox jumped over the lazy dog'
  ) === 'number'
);
```

การเรียกใช้ฟังก์ชัน `findLongestWordLength("The quick brown fox jumped over the lazy dog")` ต้องได้ค่าเป็น `6`

```js
assert(
  findLongestWordLength('The quick brown fox jumped over the lazy dog') === 6
);
```

การเรียกใช้ฟังก์ชัน `findLongestWordLength("May the force be with you")` ต้องได้ค่าเป็น `5`

```js
assert(findLongestWordLength('May the force be with you') === 5);
```

การเรียกใช้ฟังก์ชัน `findLongestWordLength("Google do a barrel roll")` ต้องได้ค่าเป็น `6`

```js
assert(findLongestWordLength('Google do a barrel roll') === 6);
```

การเรียกใช้ฟังก์ชัน `findLongestWordLength("What is the average airspeed velocity of an unladen swallow")` ต้องได้ค่าเป็น `8`

```js
assert(
  findLongestWordLength(
    'What is the average airspeed velocity of an unladen swallow'
  ) === 8
);
```

การเรียกใช้ฟังก์ชัน `findLongestWordLength("What if we try a super-long word such as otorhinolaryngology")` ต้องได้ค่าเป็น `19`

```js
assert(
  findLongestWordLength(
    'What if we try a super-long word such as otorhinolaryngology'
  ) === 19
);
```

# --seed--

## --seed-contents--

```js
function findLongestWordLength(str) {
  return str.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
```

# --solutions--

```js
function findLongestWordLength(str) {
  return str.split(' ').sort((a, b) => b.length - a.length)[0].length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
```
