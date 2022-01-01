---
id: 56533eb9ac21ba0edf2244b2
title: Compound Assignment With Augmented Division
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2QvKT2'
forumTopicId: 16659
dashedName: compound-assignment-with-augmented-division
---

# --description--

เครื่องหมาย `/=` จะหารตัวแปรด้วยตัวเลขอีกตัวหนึ่ง

```js
myVar = myVar / 5;
```

จะหารตัวแปร `myVar` ด้วย `5` ซึ่งสามารถเขียนใหม่ได้เป็น:

```js
myVar /= 5;
```

# --instructions--

จงเปลี่ยนการกำหนดค่าของ `a`, `b` และ `c` โดยใช้เครื่องหมาย `/=`

# --hints--

`a` ควรมีค่าเท่ากับ `4`.

```js
assert(a === 4);
```

`b` ควรมีค่าเท่ากับ `27`.

```js
assert(b === 27);
```

`c` ควรมีค่าเท่ากับ `3`.

```js
assert(c === 3);
```

คุณควรใช้เครื่องหมาย `/=` กับตัวแปรทุกตัว

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

// แก้โค้ดที่อยู่ใต้บรรทัดนี้เท่านั้น
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
