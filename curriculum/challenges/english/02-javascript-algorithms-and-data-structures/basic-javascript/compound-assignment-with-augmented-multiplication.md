---
id: 56533eb9ac21ba0edf2244b1
title: Compound Assignment With Augmented Multiplication
challengeType: 1
videoUrl: 'https://scrimba.com/c/c83vrfa'
forumTopicId: 16662
dashedName: compound-assignment-with-augmented-multiplication
---

# --description--

เครื่องหมาย `*=` จะคูณตัวแปรด้วยตัวเลขอีกตัวหนึ่ง

```js
myVar = myVar * 5;
```

จะคูณตัวแปร `myVar` ด้วย `5` ซึ่งสามารถเขียนใหม่ได้เป็น:


```js
myVar *= 5;
```

# --instructions--

จงเปลี่ยนการกำหนดค่าของ `a`, `b` และ `c` โดยใช้เครื่องหมาย `*=`

# --hints--

`a` ควรมีค่าเท่ากับ `25`

```js
assert(a === 25);
```

`b` ควรมีค่าเท่ากับ `36`

```js
assert(b === 36);
```

`c` ควรมีค่าเท่ากับ `46`

```js
assert(c === 46);
```

คุณควรใช้เครื่องหมาย `*=` กับตัวแปรทุกตัว

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

// แก้โค้ดที่อยู่ใต้บรรทัดนี้เท่านั้น
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
