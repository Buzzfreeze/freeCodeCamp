---
id: 56533eb9ac21ba0edf2244a8
title: Storing Values with the Assignment Operator
challengeType: 1
videoUrl: 'https://scrimba.com/c/cEanysE'
forumTopicId: 18310
dashedName: storing-values-with-the-assignment-operator
---

# --description--

ในภาษา JavaScript คุณสามารถเก็บค่าในตัวแปรที่มี <dfn>assignment</dfn> operator (`=`)

```js
myVariable = 5;
```

นี่เป็นการกำหนด `Number` 5 ให้กับ `myVariable`

ถ้ามีการคำนวนใดๆ ทางด้านขวาของ `=` ก็จะทำก่อนที่จะกำหนดค่าให้กับตัวแปรทางด้านซ้ายของ `=`

```js
var myVar;
myVar = 5;
```

อันดับแรก โค้ดนี้จะสร้างตัวแปรชื่อ `myVar` จากนั้นกำหนดค่า `5` ให้กับ `myVar` ในตอนนี้ ถ้า `myVar` ปรากฏขึ้นอีกครั้งในโค้ด โปรแกรมจะถือว่ามีค่าเป็น `5`

# --instructions--


กำหนดค่า `7` ให้กับตัวแปร `a`

# --hints--

คุณไม่ควรแก้โค้ดที่อยู่ด้านบน comment

```js
assert(/var a;/.test(code));
```

`a` ควรมีค่า 7

```js
assert(typeof a === 'number' && a === 7);
```

# --seed--

## --before-user-code--

```js
if (typeof a != 'undefined') {
  a = undefined;
}
```

## --after-user-code--

```js
(function(a){return "a = " + a;})(a);
```

## --seed-contents--

```js
// Setup
var a;

// Only change code below this line
```

# --solutions--

```js
var a;
a = 7;
```
