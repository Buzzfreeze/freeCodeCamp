---
id: bd7993c9c69feddfaeb8bdef
title: Store Multiple Values in one Variable using JavaScript Arrays
challengeType: 1
videoUrl: 'https://scrimba.com/c/crZQWAm'
forumTopicId: 18309
dashedName: store-multiple-values-in-one-variable-using-javascript-arrays
---

# --description--

ภาษา JavaScript มีตัวแปรแบบ `array` ที่ทำให้เราสามารถเก็บข้อมูลหลายตัวไว้ในที่เดียวกันได้

การประกาศ array ทำได้โดยการเปิดด้วย open square bracket (`[`) และปิดด้วย close square bracket (`]`) และใส่ comma (`,`) ระหว่างแต่ละรายการ แบบนี้:

```js
var sandwich = ["peanut butter", "jelly", "bread"]
```

# --instructions--

จงแก้ไขตัวแปร array ที่มีชื่อว่า `myArray` ให้มีทั้งข้อมูลแบบ string และ number (ตามลำดับ)

# --hints--

ตัวแปร `myArray` ต้องเป็นข้อมูลประเภท array

```js
assert(typeof myArray == 'object');
```

ข้อมูลแรกในตัวแปร `myArray` ต้องเป็นข้อมูลประเภท string

```js
assert(typeof myArray[0] !== 'undefined' && typeof myArray[0] == 'string');
```

ข้อมูลที่สองในตัวแปร `myArray` ต้องเป็นข้อมูลประเภท number


```js
assert(typeof myArray[1] !== 'undefined' && typeof myArray[1] == 'number');
```

# --seed--

## --after-user-code--

```js
(function(z){return z;})(myArray);
```

## --seed-contents--

```js
// แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
var myArray = [];
```

# --solutions--

```js
var myArray = ["The Answer", 42];
```
