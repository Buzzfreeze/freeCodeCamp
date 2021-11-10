---
id: 56533eb9ac21ba0edf2244aa
title: Understanding Uninitialized Variables
challengeType: 1
videoUrl: 'https://scrimba.com/c/cBa2JAL'
forumTopicId: 18335
dashedName: understanding-uninitialized-variables
---

# --description--

เมื่อมีการประกาศตัวแปร JavaScript จะมีค่าเริ่มต้นเป็น `undefined` ถ้าคุณคำนวณทางคณิตศาตร์กับตัวแปร `undefined` ผลที่ได้จะเป็น `NaN` ซึ่งหมายถึง <dfn>"Not a Number"</dfn> (ไม่ใช่ตัวเลข) แต่ถ้าคุณต่อ string กับตัวแปร `undefined` คุณจะได้ <dfn>string</dfn> ที่เป็นคำว่า `undefined`

# --instructions--

จงกำหนดค่าเริ่มต้นให้กับตัวแปร `a`, `b` และ `c` ด้วย `5`, `10` และ `"I am a"` ตามลำดับ เพื่อให้ไม่ตัวแปรเหล่านั้นมีค่า `undefined`

# --hints--

`a` ควรกำหนดให้มีค่าเท่ากับ `6`

```js
assert(typeof a === 'number' && a === 6);
```

`b` ควรกำหนดให้มีค่าเท่ากับ `15`

```js
assert(typeof b === 'number' && b === 15);
```

`c` ไม่ควรมีค่าเป็น `undefined` และควรมีค่าเป็น string `I am a String!`

```js
assert(!/undefined/.test(c) && c === 'I am a String!');
```

คุณไม่ควรแก้ไขโค้ดที่อยู่ด้านล่างของ comment ที่กำหนด

```js
assert(
  /a = a \+ 1;/.test(code) &&
    /b = b \+ 5;/.test(code) &&
    /c = c \+ " String!";/.test(code)
);
```

# --seed--

## --after-user-code--

```js
(function(a,b,c){ return "a = " + a + ", b = " + b + ", c = '" + c + "'"; })(a,b,c);
```

## --seed-contents--

```js
// Only change code below this line
var a;
var b;
var c;
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";
```

# --solutions--

```js
var a = 5;
var b = 10;
var c = "I am a";
a = a + 1;
b = b + 5;
c = c + " String!";
```
