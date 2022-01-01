---
id: 56533eb9ac21ba0edf2244bc
title: Shopping List
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9MEKHZ'
forumTopicId: 18280
dashedName: shopping-list
---

# --description--

จงสร้างรายการซื้อของ (shopping list) ในตัวแปร `myList` โดยรายการซื้อของควรเป็น array หลายมิติ (multi-dimensional) ที่มี array ย่อยข้างในหลายๆ อัน

element แรกในแต่ละ array ย่อยควรเป็น string ที่มีค่าเป็นชื่อสิ่งของที่ต้องการซื้อ ส่วน element ที่สองควรเป็นตัวเลขที่แสดงจำนวน เช่น

```js
["Chocolate Bar", 15]
```

ในรายการซื้อของต้องมีอย่างน้อย 5 array ย่อย

# --hints--

ตวแปร `myList` ควรเป็นข้อมูลประเภท array

```js
assert(isArray);
```

element แรกในแต่ละ array ย่อยของคุณต้องป็น string ทั้งหมด


```js
assert(hasString);
```

element ที่สองในแต่ละ array ย่อยของคุณต้องเป็น number ทั้งหมด

```js
assert(hasNumber);
```

ในรายการซื้อของต้องมีอย่างน้อย 5 array

```js
assert(count > 4);
```

# --seed--

## --after-user-code--

```js
var count = 0;
var isArray = false;
var hasString = false;
var hasNumber = false;
(function(list){
  if(Array.isArray(myList)) {
    isArray = true;
    if(myList.length > 0) {
      hasString = true;
      hasNumber = true;
      for (var elem of myList) {
        if(!elem || !elem[0] || typeof elem[0] !== 'string') {
          hasString = false;
        }
        if(!elem || typeof elem[1] !== 'number') {
          hasNumber = false;
        }
      }
    }
    count = myList.length;
    return JSON.stringify(myList);
  } else {
    return "myList is not an array";
  }

})(myList);
```

## --seed-contents--

```js
var myList = [];
```

# --solutions--

```js
var myList = [
  ["Candy", 10],
  ["Potatoes", 12],
  ["Eggs", 12],
  ["Catfood", 1],
  ["Toads", 9]
];
```
