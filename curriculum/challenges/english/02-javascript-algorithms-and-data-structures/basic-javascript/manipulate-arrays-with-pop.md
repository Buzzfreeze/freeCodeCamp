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

`.pop()` ใช้เพื่อดึงข้อมูลที่ส่วนท้ายของ array ออก เราสามารถเก็บค่าที่ดึงออกมานี้ให้กับตัวแปร กล่าวอีกนัยหนึ่งคือ `.pop()` จะลบ element สุดท้ายออกจาก array และคืนค่าเป็น element นั้น

รายการทุกประเภทสามารถดึงออกจาก array ได้ ไม่ว่าจะเป็น number, string, หรือแม้แต่ array ที่ซ้อนกัน

```js
var threeArr = [1, 4, 6];
var oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);
```

`console.log` ครั้งแรกจะแสดงค่า `6` และครั้งแรกสองจะแสดงค่า `[1, 4]`

# --instructions--

จงใช้ฟังก์ชัน `.pop()` เพื่อลบรายการสุดท้ายออกจาก `myArray` โดยนำ element ที่ดึงออกมากำหนดค่าให้กับ `removedFromMyArray`

# --hints--

`myArray` ควรมี `[["John", 23]]` เท่านั้น

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

คุณควรใช้ `pop()` กับ `myArray`

```js
assert(/removedFromMyArray\s*=\s*myArray\s*.\s*pop\s*(\s*)/.test(code));
```

`removedFromMyArray` ควรมี `["cat", 2]` เท่านั้น

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
// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
var removedFromMyArray;
```

# --solutions--

```js
var myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.pop();
```
