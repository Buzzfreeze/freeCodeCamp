---
id: 5ee127a03c3b35dd45426493
title: Assigning the Value of One Variable to Another
challengeType: 1
videoUrl: ''
forumTopicId: 418265
dashedName: assigning-the-value-of-one-variable-to-another
---

# --description--

หลังจากที่กำหนดค่าให้กับตัวแปรโดยใช้เครื่องหมายเท่ากับแล้ว คุณก็สามารถกำหนดค่าของตัวแปรนั้นให้กับตัวแปรอื่นได้โดยใช้เครื่องหมายเท่ากับได้เช่นกัน


```js
var myVar;
myVar = 5;
var myNum;
myNum = myVar;
```

โค้ดด้านบนดำเนินการตามลำดับดังนี้

1. ประกาศตัวแปร `myVar` แบบยังไม่กำหนดค่า 
2. กำหนดค่า `5` ให้กับตัวแปร `myVar`
3. ประกาศตัวแปร `myNum` แบบยังไม่กำหนดค่า 
4. นำตัวแปร `myVar` (ซึ่งมีค่า `5`) มากำหนดให้กับตัวแปร `myNum` 

ดังนั้นตอนนี้ `myNum` จะมีค่าเท่ากับ `5`


# --instructions--

จงกำหนดค่าของ `a` ให้กับตัวแปร `b`

# --hints--

คุณไม่ควรแก้โค้ดที่อยู่เหนือ comment

```js
assert(/var a;/.test(code) && /a = 7;/.test(code) && /var b;/.test(code));
```

`b` ควรมีค่าเท่ากับ `7`

```js
assert(typeof b === 'number' && b === 7);
```

ควรนำ `a` มากำหนดค่าให้กับ `b` โดยใช้ `=`

```js
assert(/b\s*=\s*a\s*/g.test(code));
```

# --seed--

## --before-user-code--

```js
if (typeof a != 'undefined') {
  a = undefined;
}
if (typeof b != 'undefined') {
  b = undefined;
}
```

## --after-user-code--

```js
(function(a, b) {
  return 'a = ' + a + ', b = ' + b;
})(a, b);
```

## --seed-contents--

```js
// ตั้งค่า
var a;
a = 7;
var b;

// แก้โค้ดที่อยู่ใต้บรรทัดนี้เท่านั้น
```

# --solutions--

```js
var a;
a = 7;
var b;
b = a;
```
