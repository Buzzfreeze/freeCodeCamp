---
id: 56533eb9ac21ba0edf2244b2
title: Compound Assignment With Augmented Division
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2QvKT2'
forumTopicId: 16659
dashedName: compound-assignment-with-augmented-division
---

# --description--

`/=` operator หารตัวแปรด้วยตัวเลขอีกตัว

```js
myVar = myVar / 5;
```

จะหาร `myVar` ด้วย `5` สามารถเขียนใหม่เป็น:

```js
myVar /= 5;
```

# --instructions--

จงแปลง assignments ของ `a`, `b` และ `c` โดยกำหนดให้ใช้ `/=` operator

# --hints--

`a` ควรเท่ากับ `4`.

```js
assert(a === 4);
```

`b` ควรเท่ากับ `27`.

```js
assert(b === 27);
```

`c` ควรเท่ากับ `3`.

```js
assert(c === 3);
```

# - คุณควรใช้ `/=` operator กับตัวแปรแต่ละตัว

```js
assert(code.match(/\/=/g).length === 3);
```

คุณไม่ควรแก้โค้ดที่อยู่เหนือ comment

```js
assert(
  /var a = 48;/.test(code) &&
    /var b = 108;/.test(code) &&
    /var c = 33;/.test(code)
);
```

# --seed--

## --after-user-code--

```js
(function(a,b,c){ return "a = " + a + ", b = " + b + ", c = " + c; })(a,b,c);
```

## --seed-contents--

```js
var a = 48;
var b = 108;
var c = 33;

// Only change code below this line
a = a / 12;
b = b / 4;
c = c / 11;
```

# --solutions--

```js
var a = 48;
var b = 108;
var c = 33;

a /= 12;
b /= 4;
c /= 11;
```
