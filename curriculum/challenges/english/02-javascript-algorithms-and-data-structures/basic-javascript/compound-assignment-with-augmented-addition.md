---
id: 56533eb9ac21ba0edf2244af
title: Compound Assignment With Augmented Addition
challengeType: 1
videoUrl: 'https://scrimba.com/c/cDR6LCb'
forumTopicId: 16661
dashedName: compound-assignment-with-augmented-addition
---

# --description--

ในการเขียนโปรแกรม โดยทั่วไปจะใช้การกำหนดค่า (เครื่องหมาย `=`) ในการแก้ไขหรือเปลี่ยนแปลงตัวแปรนั้น จำได้ใช่ไหมว่า โปรแกรมจะคำนวนทุกอย่างทางด้านขวาของเครื่องหมายเท่ากับก่อน ดังนั้นเราสามารถเขียน:

```js
myVar = myVar + 5;
```

เพื่อนำ `5` มาบวกให้กับตัวแปร `myVar` และเพราะว่ามีการทำแบบนี้กันเป็นปกติ จึงมีเครื่องหมายที่ทำทั้งการคำนวณทางคณิตศาสตร์และกำหนดค่าตัวแปรได้ในขั้นตอนเดียว

ตัวอย่างเช่นเครื่องหมาย `+=`

```js
var myVar = 1;
myVar += 5;
console.log(myVar);
```

ในหน้า console จะแสดง `6`

# --instructions--

จงเปลี่ยนการกำหนดค่าของ `a`, `b` และ `c` โดยใช้เครื่องหมาย `+=`

# --hints--

`a` ควรมีค่าเท่ากับ `15`.

```js
assert(a === 15);
```

`b` ควรมีค่าเท่ากับ  `26`.

```js
assert(b === 26);
```

`c` ควรมีค่าเท่ากับ `19`.

```js
assert(c === 19);
```

คุณควรใช้เครื่องหมาย `+=` กับตัวแปรทุกตัว

```js
assert(code.match(/\+=/g).length === 3);
```

คุณไม่ควรแก้โค้ดที่อยู่เหนือ comment


```js
assert(
  /var a = 3;/.test(code) &&
    /var b = 17;/.test(code) &&
    /var c = 12;/.test(code)
);
```

# --seed--

## --after-user-code--

```js
(function(a,b,c){ return "a = " + a + ", b = " + b + ", c = " + c; })(a,b,c);
```

## --seed-contents--

```js
var a = 3;
var b = 17;
var c = 12;

// แก้โค้ดที่อยู่ใต้บรรทัดนี้เท่านั้น
a = a + 12;
b = 9 + b;
c = c + 7;
```

# --solutions--

```js
var a = 3;
var b = 17;
var c = 12;

a += 12;
b += 9;
c += 7;
```
