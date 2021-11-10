---
id: 5679ceb97cbaa8c51670a16b
title: Returning Boolean Values from Functions
challengeType: 1
videoUrl: 'https://scrimba.com/c/cp62qAQ'
forumTopicId: 18273
dashedName: returning-boolean-values-from-functions
---

# --description--

จากที่ได้เรียนรู้มาแล้วใน [Comparison with the Equality Operator](/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-equality-operator) ทุกการเปรียบเทียบจะคืนค่า boolean `true` หรือ `false`

บางครั้งเราใช้ `if/else` statement เพื่อใช้ในการเปรียบเทียบดังนี้ 


```js
function isEqual(a,b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
```

แต่ยังมีวิธีที่ดีกว่าที่ได้ผลแบบเดียวกัน กล่าวคือ เนื่องจาก `===` คืนค่า `true` หรือ `false` เราจึงสามารถคืนค่าเป็นผลจากการเปรียบเทียบได้ดังนี้

```js
function isEqual(a,b) {
  return a === b;
}
```

# --instructions--

จงแก้ไข function `isLess` เพื่อนำ `if/else` statement ออก

# --hints--

`isLess(10,15)` ควรคืนค่า `true`

```js
assert(isLess(10, 15) === true);
```

`isLess(15,10)` ควรคืนค่า `false`

```js
assert(isLess(15, 10) === false);
```

คุณไม่ควรใช้ `if` หรือ `else` statements

```js
assert(!/if|else/g.test(code));
```

# --seed--

## --seed-contents--

```js
function isLess(a, b) {
  // Only change code below this line
  if (a < b) {
    return true;
  } else {
    return false;
  }
  // Only change code above this line
}

isLess(10, 15);
```

# --solutions--

```js
function isLess(a, b) {
  return a < b;
}
```
