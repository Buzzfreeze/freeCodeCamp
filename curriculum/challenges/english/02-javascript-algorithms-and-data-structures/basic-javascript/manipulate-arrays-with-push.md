---
id: 56bbb991ad1ed5201cd392cb
title: Manipulate Arrays With push()
challengeType: 1
videoUrl: 'https://scrimba.com/c/cnqmVtJ'
forumTopicId: 18237
dashedName: manipulate-arrays-with-push
---

# --description--

การนำข้อมูลมาต่อท้าย array ทำได้ง่ายๆ โดยการใช้ฟังก์ชัน `push()`

ในการใช้ `.push()` ต้องระบุ <dfn>parameter</dfn> อย่างน้อยหนึ่งตัวแล้ว <dfn>parameter</dfn> นั้นจะถูกนำไปต่อท้ายใน array


ตัวอย่าง:

```js
var arr1 = [1,2,3];
arr1.push(4);

var arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);
```

ตัวแปร `arr1` จะมีค่าเป็น `[1, 2, 3, 4]` และตัวแปร `arr2` จะมีค่าเป็น `["Stimpson", "J", "cat", ["happy", "joy"]]`

# --instructions--

จงนำ array `["dog", 3]` ไปที่ต่อท้ายในตัวแปร `myArray`

# --hints--

ตัวแปร `myArray` ต้องมีค่าเป็น `[["John", 23], ["cat", 2], ["dog", 3]]`

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
// เตรียมข้อมูล
var myArray = [["John", 23], ["cat", 2]];

// แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
```

# --solutions--

```js
var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog",3]);
```
