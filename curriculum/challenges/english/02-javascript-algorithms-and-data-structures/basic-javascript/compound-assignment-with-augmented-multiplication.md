---
id: 56533eb9ac21ba0edf2244b1
title: Compound Assignment With Augmented Multiplication
challengeType: 1
videoUrl: 'https://scrimba.com/c/c83vrfa'
forumTopicId: 16662
dashedName: compound-assignment-with-augmented-multiplication
---

# --description--

`*=` operator คูณตัวแปรด้วยตัวเลขอีกตัว

```js
myVar = myVar * 5;
```

จะคูณ `myVar` ด้วย `5` สามารถเขียนใหม่เป็น:


```js
myVar *= 5;
```

# --instructions--

จงแปลง assignments ของ `a`, `b` และ `c` โดยกำหนดให้ใช้ `*=` operator

# --hints--

`a` ควรเท่ากับ `25`

```js
assert(a === 25);
```

`b` ควรเท่ากับ `36`.

```js
assert(b === 36);
```

`c` ควรเท่ากับ `46`.

```js
assert(c === 46);
```

คุณควรใช้ `*=` operator กับตัวแปรแต่ละตัว

```js
assert(code.match(/\*=/g).length === 3);
```

คุณไม่ควรแก้โค้ดที่อยู่เหนือ comment

```js
assert(
  /var a = 5;/.test(code) &&
    /var b = 12;/.test(code) &&
    /var c = 4\.6;/.test(code)
);
```

# --seed--

## --after-user-code--

```js
(function(a,b,c){ return "a = " + a + ", b = " + b + ", c = " + c; })(a,b,c);
```

## --seed-contents--

```js
var a = 5;
var b = 12;
var c = 4.6;

// Only change code below this line
a = a * 5;
b = 3 * b;
c = c * 10;
```

# --solutions--

```js
var a = 5;
var b = 12;
var c = 4.6;

a *= 5;
b *= 3;
c *= 10;
```
