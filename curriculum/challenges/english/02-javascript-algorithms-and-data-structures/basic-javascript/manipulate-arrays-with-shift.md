---
id: 56bbb991ad1ed5201cd392cd
title: Manipulate Arrays With shift()
challengeType: 1
videoUrl: 'https://scrimba.com/c/cRbVETW'
forumTopicId: 18238
dashedName: manipulate-arrays-with-shift
---

# --description--

`pop()` นำ element สุดท้ายของ array ออกเสมอ แต่หากคุณต้องการนำ element แรกออกล่ะ?

นั่นคือสิ่งที่ `.shift()` ทำได้ โดย `.shift()` ทำงานคล้ายกับ `.pop()` แต่ `.shift()` จะนำ element แรกออกแทนที่จะเป็น element สุดท้าย

ตัวอย่าง:

```js
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
```

`removedFromOurArray` ควรมีค่า string  `Stimpson` และ `ourArray` ควรมี `["J", ["cat"]]`


# --instructions--

จงใช้ฟังก์ชัน `.shift()` เพื่อนำ element แรกออกจาก `myArray` โดยนำ element ที่ดึงออกมากำหนดค่าให้กับ `removedFromMyArray`

# --hints--

`myArray` ควรเท่ากับ `[["dog", 3]]`

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

`removedFromMyArray` ควรมีค่าเป็น `["John", 23]`

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
// Setup
var myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
var removedFromMyArray;
```

# --solutions--

```js
var myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
var removedFromMyArray = myArray.shift();
```
