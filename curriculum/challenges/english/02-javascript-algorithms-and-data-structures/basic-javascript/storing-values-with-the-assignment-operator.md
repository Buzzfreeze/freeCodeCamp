---
id: 56533eb9ac21ba0edf2244a8
title: Storing Values with the Assignment Operator
challengeType: 1
videoUrl: 'https://scrimba.com/c/cEanysE'
forumTopicId: 18310
dashedName: storing-values-with-the-assignment-operator
---

# --description--

ในภาษา JavaScript คุณสามารถเก็บค่าในตัวแปรได้โดยใช้เครื่องหมายเท่ากับ (`=`)

```js
myVariable = 5;
```

ตัวอย่างด้านบนเป็นการเก็บข้อมูลประเภท `Number` ซึ่งมีค่าเท่ากับ 5 ในตัวแปร `myVariable`

ถ้ามีการคำนวนใดๆ ทางด้านขวาของเครื่องหมาย `=` ก็จะทำการคำนวณนั้นก่อน หลังจากนั้นจึงค่อยกำหนดค่าให้กับตัวแปรทางด้านซ้ายของ `=`

```js
var myVar;
myVar = 5;
```

จากตัวอย่าง โค้ดนี้จะสร้างตัวแปรชื่อ `myVar` จากนั้นจึงกำหนดค่า `5` ให้กับตัวแปร `myVar` 
ในตอนนี้ถ้าตัวแปร `myVar` ถูกใช้ในโค้ด โปรแกรมเห็นว่าตัวแปรนี้มีค่าเป็น `5`

# --instructions--


เก็บค่า `7` ในตัวแปร `a`

# --hints--

คุณไม่ควรแก้โค้ดที่อยู่เหนือ comment

```js
assert(/var a;/.test(code));
```

`a` ควรมีค่าเท่ากับ 7

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
// ตั้งค่า
var a;

// แก้โค้ดที่อยู่ใต้บรรทัดนี้เท่านั้น
```

# --solutions--

```js
var a;
a = 7;
```
