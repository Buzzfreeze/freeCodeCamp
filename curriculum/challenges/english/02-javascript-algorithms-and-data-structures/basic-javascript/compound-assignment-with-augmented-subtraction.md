---
id: 56533eb9ac21ba0edf2244b0
title: Compound Assignment With Augmented Subtraction
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2Qv7AV'
forumTopicId: 16660
dashedName: compound-assignment-with-augmented-subtraction
---

# --description--

เครื่องหมาย `-=` จะใช้ในการลบเลขออกจากตัวแปร ซึ่งคล้ายกับเครื่องหมาย `+=`

```js
myVar = myVar - 5;
```

ตัวอย่างด้านบนจะนำตัวแปร `myVar` ไปลบ `5` ซึ่งเราสามารถเขียนใหม่ได้เป็น:

```js
myVar -= 5;
```

# --instructions--

จงเปลี่ยนการกำหนดค่าของ `a`, `b` และ `c` โดยใช้เครื่องหมาย `-=`

# --hints--

`a` ควรมีค่าเท่ากับ `5`

```js
assert(a === 5);
```

`b` ควรมีค่าเท่ากับ `-6`.

```js
assert(b === -6);
```

`c` ควรมีค่าเท่ากับ `2`.

```js
assert(c === 2);
```

คุณควรใช้เครื่องหมาย `-=` กับตัวแปรทุกตัว

```js
assert(code.match(/-=/g).length === 3);
```

คุณไม่ควรแก้โค้ดที่อยู่เหนือ comment

```js
assert(
  /var a = 11;/.test(code) && /var b = 9;/.test(code) && /var c = 3;/.test(code)
);
```

# --seed--

## --after-user-code--

```js
(function(a,b,c){ return "a = " + a + ", b = " + b + ", c = " + c; })(a,b,c);
```

## --seed-contents--

```js
var a = 11;
var b = 9;
var c = 3;

// แก้โค้ดที่อยู่ใต้บรรทัดนี้เท่านั้น
a = a - 6;
b = b - 15;
c = c - 1;
```

# --solutions--

```js
var a = 11;
var b = 9;
var c = 3;

a -= 6;
b -= 15;
c -= 1;
```
