---
id: 56bbb991ad1ed5201cd392cb
title: Manipulate Arrays With push()
challengeType: 1
videoUrl: 'https://scrimba.com/c/cnqmVtJ'
forumTopicId: 18237
dashedName: manipulate-arrays-with-push
---

# --description--

การนำข้อมูลมาต่อท้าย array ทำได้ง่ายๆ โดยการใช้ ฟังก์ชัน `push()`

`.push()` รับ <dfn>parameter</dfn> ตั้งแต่หนึ่งตัวขึ้นไป แล้ว "pushes (ดัน)" ไปไว้ที่ส่วนท้ายของ array


ตัวอย่าง:

```js
var arr1 = [1,2,3];
arr1.push(4);

var arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);
```

`arr1` ควรมีค่า `[1, 2, 3, 4]` และ `arr2` ควรมีค่า `["Stimpson", "J", "cat", ["happy", "joy"]]`

# --instructions--

จง Push `["dog", 3]` ไปที่ด้านท้ายของตัวแปร `myArray`

# --hints--

`myArray` ควรมีค่าเท่ากับ `[["John", 23], ["cat", 2], ["dog", 3]]`

```js
assert(
  (function (d) {
    if (
      d[2] != undefined &&
      d[0][0] == 'John' &&
      d[0][1] === 23 &&
      d[2][0] == 'dog' &&
      d[2][1] === 3 &&
      d[2].length == 2
    ) {
      return true;
    } else {
      return false;
    }
  })(myArray)
);
```

# --seed--

## --after-user-code--

```js
(function(z){return 'myArray = ' + JSON.stringify(z);})(myArray);
```

## --seed-contents--

```js
// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
```

# --solutions--

```js
var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog",3]);
```
