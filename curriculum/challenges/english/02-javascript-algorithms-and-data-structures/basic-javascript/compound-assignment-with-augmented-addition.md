---
id: 56533eb9ac21ba0edf2244af
title: Compound Assignment With Augmented Addition
challengeType: 1
videoUrl: 'https://scrimba.com/c/cDR6LCb'
forumTopicId: 16661
dashedName: compound-assignment-with-augmented-addition
---

# --description--

ในการเขียนโปรแกรม เป็นเรื่องปกติที่ใช้ assignments (การกำหนดค่า) ในการแก้ไขเนื้อหาของตัวแปร หากยังจำได้ ทุกอย่างทางด้านขวาของเครื่องหมายเท่ากับจะถูกคำนวนก่อน ดังนั้นเราสามารถกล่าวได้ว่า:

```js
myVar = myVar + 5;
```

เป็นการนำ `5` มาบวกให้กับ `myVar` เนื่องจากเป็นรูปแบบทั่วไป จึงมี operator ที่ทำทั้งการคำนวณทางคณิตศาสตร์และกำหนดค่าตัวแปรในขั้นตอนเดียว

ตัวอย่างเช่น `+=` operator

```js
var myVar = 1;
myVar += 5;
console.log(myVar);
```

`6` ควรแสดงในหน้า console

# --instructions--

จงแปลง assignments ของ `a`, `b` และ `c` โดยกำหนดให้ใช้ `+=` operator

# --hints--

`a` ควรเท่ากับ `15`.

```js
assert(a === 15);
```

`b` ควรเท่ากับ  `26`.

```js
assert(b === 26);
```

`c` ควรเท่ากับ `19`.

```js
assert(c === 19);
```

คุณควรใช้ `+=` operator กับตัวแปรแต่ละตัว

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

// Only change code below this line
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
