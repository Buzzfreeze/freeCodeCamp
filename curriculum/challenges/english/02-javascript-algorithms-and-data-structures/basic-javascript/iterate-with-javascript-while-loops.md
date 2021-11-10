---
id: cf1111c1c11feddfaeb1bdef
title: Iterate with JavaScript While Loops
challengeType: 1
videoUrl: 'https://scrimba.com/c/c8QbnCM'
forumTopicId: 18220
dashedName: iterate-with-javascript-while-loops
---

# --description--

คุณสามารถรันโค้ดเดียวกันหลายครั้งโดยใช้ loop

loop ประเภทแรกที่เราจะเรียนรู้เรียกว่า `while` loop เพราะรันก็ต่อเมื่อเงื่อนไขเป็นจริง และหยุดเมื่อเงื่อนไขนั้นไม่เป็นจริงแล้ว

```js
var ourArray = [];
var i = 0;
while(i < 5) {
  ourArray.push(i);
  i++;
}
```

ในโค้ดตัวอย่างด้านบน `while` loop จะทำงาน 5 ครั้ง และจะต่อเลข 0 ถึง 4 เข้าไปใน `ourArray`

มาลองทำให้ while loop ทำงาน โดยการ push ค่าเข้าไปยัง array


# --instructions--


จงเพิ่มตัวเลข 5 ถึง 0 (รวม 5 และ 0) ตามลำดับจากมากไปน้อยใน `myArray` โดยใช้ลูป `while`

# --hints--

ในที่นี้คุณควรใช้ `while` loop 

```js
assert(code.match(/while/g));
```

`myArray` ควรเท่ากับ `[5,4,3,2,1,0]`

```js
assert.deepEqual(myArray, [5, 4, 3, 2, 1, 0]);
```

# --seed--

## --after-user-code--

```js
if(typeof myArray !== "undefined"){(function(){return myArray;})();}
```

## --seed-contents--

```js
// Setup
var myArray = [];

// Only change code below this line
```

# --solutions--

```js
var myArray = [];
var i = 5;
while(i >= 0) {
  myArray.push(i);
  i--;
}
```
