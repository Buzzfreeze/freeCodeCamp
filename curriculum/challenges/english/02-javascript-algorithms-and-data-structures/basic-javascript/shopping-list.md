---
id: 56533eb9ac21ba0edf2244bc
title: Shopping List
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9MEKHZ'
forumTopicId: 18280
dashedName: shopping-list
---

# --description--

จงสร้างลิสต์รายการซื้อของ (shopping list) ในตัวแปร `myList` โดยลิสต์รายการควรเป็น array หลายมิติ (multi-dimensional) ที่มีหลาย array ย่อย

element แรกในแต่ละ array ย่อยควรเป็น string ชื่อสิ่งของที่ต้องการซื้อ ส่วน element ที่สองควรเป็นตัวเลขที่แสดงจำนวน เช่น

```js
["Chocolate Bar", 15]
```

ควรมีอย่างน้อย 5 array ย่อยในลิสต์

# --hints--

`myList` ควรเป็น array

```js
assert(isArray);
```

element แรกในแต่ละ array ย่อยของคุณควรเป็น string ทั้งหมด


```js
assert(hasString);
```

element ที่สองในแต่ละ array ย่อยของคุณควรเป็น number ทั้งหมด

```js
assert(hasNumber);
```

คุณควรมีอย่างน้อย 5 รายการในลิสต์

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
