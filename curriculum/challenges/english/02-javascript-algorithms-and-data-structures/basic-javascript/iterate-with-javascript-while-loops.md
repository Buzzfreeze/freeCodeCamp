---
id: cf1111c1c11feddfaeb1bdef
title: Iterate with JavaScript While Loops
challengeType: 1
videoUrl: 'https://scrimba.com/c/c8QbnCM'
forumTopicId: 18220
dashedName: iterate-with-javascript-while-loops
---

# --description--

คุณสามารถทำให้โค้ดตัวเดิมทำงานหลายๆ ครั้งได้โดยใช้ loop

loop แบบแรกที่เราจะเรียน เรียกว่า `while` loop ที่จะทำงานก็ต่อเมื่อเงื่อนไขที่เราให้เป็น `true` และจะหยุดทำงานเมื่อเงื่อนไขเป็น `false`
ดูโค้ดตัวอย่าง:

```js
var ourArray = [];
var i = 0;
while(i < 5) {
  ourArray.push(i);
  i++;
}
```

ในโค้ดตัวอย่างด้านบน `while` loop จะทำงาน 5 ครั้ง และจะใส่เลข 0 ถึง 4 เข้าไปใน `ourArray`

มาลองใช้ `while` ในการเพิ่มค่าเข้าไปใน array กัน


# --instructions--

จงเพิ่มตัวเลข 5, 4, 3, 2, 1, และ 0 เข้าไปใน `myArray` ตามลำดับ โดยใช้ `while` loop

# --hints--

ต้องใช้คำสั่ง `while` loop ในการทำงาน

```js
assert(code.match(/while/g));
```

`myArray` ต้องมีค่าเป็น `[5,4,3,2,1,0]`

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
// เตรียมข้อมูล
var myArray = [];

// แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
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
