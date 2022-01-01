---
id: 56bbb991ad1ed5201cd392cc
title: Manipulate Arrays With pop()
challengeType: 1
videoUrl: 'https://scrimba.com/c/cRbVZAB'
forumTopicId: 18236
dashedName: manipulate-arrays-with-pop
---

# --description--

อีกวิธีในการเปลี่ยนแปลงข้อมูลใน array ก็คือการใช้ฟังก์ชัน `.pop()`

`.pop()` จะดึงข้อมูลตัวสุดท้ายของ array ออก แล้วเราก็สามารถเอาข้อมูลที่ดึงออกมานี้ไปให้กับตัวแปรอื่นได้ หรือจะมองว่า `.pop()` เป็นการลบ element สุดท้ายออกจาก array และคืนค่าเป็น element นั้นก็ได้

ข้อมูลทุกประเภทสามารถดึงออกจาก array ได้ทั้งหมด ไม่ว่าจะเป็น number, string, หรือแม้แต่ array ที่ซ้อนอยู่ข้างในก็ตาม

```js
var threeArr = [1, 4, 6];
var oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);
```

การ `console.log` ครั้งแรกจะแสดงค่า `6` ออกมา และครั้งที่สองจะแสดงค่า `[1, 4]` ออกมา

# --instructions--

จงใช้ฟังก์ชัน `.pop()` เพื่อลบข้อมูลสุดท้ายออกจากตัวแปร `myArray` แล้วนำ element ที่ดึงออกมา มากำหนดค่าให้กับตัวแปร `removedFromMyArray`

# --hints--

ตัวแปร `myArray` ควรมีค่าเป็น `[["John", 23]]` เท่านั้น

```js
assert(
  (function (d) {
    if (d[0][0] == 'John' && d[0][1] === 23 && d[1] == undefined) {
      return true;
    } else {
      return false;
    }
  })(myArray)
);
```

คุณต้องใช้ `pop()` กับตัวแปร `myArray`

```js
assert(/removedFromMyArray\s*=\s*myArray\s*.\s*pop\s*(\s*)/.test(code));
```

ตัวแปร `removedFromMyArray` ต้องมีข้อมูลข้างในเป็น `["cat", 2]` เท่านั้น

```js
assert(
  (function (d) {
    if (d[0] == 'cat' && d[1] === 2 && d[2] == undefined) {
      return true;
    } else {
      return false;
    }
  })(removedFromMyArray)
);
```

# --seed--

## --after-user-code--

```js
(function(y, z){return 'myArray = ' + JSON.stringify(y) + ' & removedFromMyArray = ' + JSON.stringify(z);})(myArray, removedFromMyArray);
```

## --seed-contents--

```js
// เตรียมข้อมูล
var myArray = [["John", 23], ["cat", 2]];

// แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
var removedFromMyArray;
```

# --solutions--

```js
var myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.pop();
```
