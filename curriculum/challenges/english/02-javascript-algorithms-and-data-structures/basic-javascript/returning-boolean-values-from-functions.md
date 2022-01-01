---
id: 5679ceb97cbaa8c51670a16b
title: Returning Boolean Values from Functions
challengeType: 1
videoUrl: 'https://scrimba.com/c/cp62qAQ'
forumTopicId: 18273
dashedName: returning-boolean-values-from-functions
---

# --description--

จากที่เราได้เรียนมาแล้วใน [Comparison with the Equality Operator](/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-equality-operator) ในการเปรียบเทียบ (เช่น `==`, `!=`, `>` ฯลฯ) จะคืนค่าเป็น boolean ที่มีค่าเป็น `true` หรือ `false`

หลายๆ คนจะใช้ `if/else` เพื่อใช้ในการเปรียบเทียบแบบนี้:

```js
function isEqual(a,b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
```

เราสามารถเอาโค้ดด้านบนมาเขียนใหม่ให้ดีขึ้นได้ 
การใช้ `===` จะคืนค่าออกมาเป็น `true` หรือ `false` เราจึงสามารถคืนค่าอีกแบบได้ตามนี้:

```js
function isEqual(a,b) {
  return a === b;
}
```

# --instructions--

จงแก้ไขฟังก์ชัน `isLess` ให้ไม่ใช้คำสั่ง `if/else`

# --hints--

การเรียกใช้ฟังก์ชัน `isLess(10,15)` ต้องคืนค่าออกมาเป็น `true`

```js
assert(isLess(10, 15) === true);
```

การเรียกใช้ฟังก์ชัน `isLess(15,10)` ต้องคืนค่าออกมาเป็น `false`

```js
assert(isLess(15, 10) === false);
```

ห้ามใช้คำสั่ง `if` และ `else`

```js
assert(!/if|else/g.test(code));
```

# --seed--

## --seed-contents--

```js
function isLess(a, b) {
  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
  if (a < b) {
    return true;
  } else {
    return false;
  }
  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
}

isLess(10, 15);
```

# --solutions--

```js
function isLess(a, b) {
  return a < b;
}
```
