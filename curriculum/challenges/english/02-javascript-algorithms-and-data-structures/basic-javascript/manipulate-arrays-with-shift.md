---
id: 56bbb991ad1ed5201cd392cd
title: Manipulate Arrays With shift()
challengeType: 1
videoUrl: 'https://scrimba.com/c/cRbVETW'
forumTopicId: 18238
dashedName: manipulate-arrays-with-shift
---

# --description--

การ `pop()` จะดึงแค่ element สุดท้ายของ array เสมอ แล้วถ้าคุณต้องการดึง element แรกออกล่ะ?

เราขอเสนอฟังก์ชัน `.shift()` โดย `.shift()` นั้นจะทำงานคล้ายๆ กับ `.pop()` แต่ว่า `.shift()` จะดึง element แรกออก แทนที่จะเป็น element สุดท้าย

ตัวอย่าง:

```js
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
```

ตัวแปร `removedFromOurArray` จะเป็น string ที่มีค่าเป็น `Stimpson` และตัวแปร `ourArray` จะมีค่าเป็น `["J", ["cat"]]`


# --instructions--

จงใช้ฟังก์ชัน `.shift()` เพื่อดึง element แรกออกจากตัวแปร `myArray` แล้วนำ element ที่ดึงออกมานั้น มากำหนดค่าให้กับตัวแปร `removedFromMyArray`

# --hints--

ตัวแปร `myArray` ต้องมีค่าเป็น `[["dog", 3]]`

```js
assert(
  (function (d) {
    if (d[0][0] == 'dog' && d[0][1] === 3 && d[1] == undefined) {
      return true;
    } else {
      return false;
    }
  })(myArray)
);
```

ตัวแปร `removedFromMyArray` ต้องมีค่าเป็น `["John", 23]`

```js
assert(
  (function (d) {
    if (
      d[0] == 'John' &&
      d[1] === 23 &&
      typeof removedFromMyArray === 'object'
    ) {
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
var myArray = [["John", 23], ["dog", 3]];

// แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
var removedFromMyArray;
```

# --solutions--

```js
var myArray = [["John", 23], ["dog", 3]];

// แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
var removedFromMyArray = myArray.shift();
```
