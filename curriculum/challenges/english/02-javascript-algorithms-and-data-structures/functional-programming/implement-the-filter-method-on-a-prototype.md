---
id: 587d7b8f367417b2b2512b64
title: Implement the filter Method on a Prototype
challengeType: 1
forumTopicId: 301231
dashedName: implement-the-filter-method-on-a-prototype
---

# --description--

คุณจะเข้าใจ method `filter` มากถึง ถ้าลองได้สร้าง method `filter` เอง เราแนะนำให้คุณใช้ `for` loop หรือ `Array.prototype.forEach()`

# --instructions--

ให้เขียน `Array.prototype.myFilter()` ของคุณเอง โดยให้ทำงานเหมือนกับ `Array.prototype.filter()` และห้ามใช้ method `filter` ที่มีอยู่แล้ว  
เราสามารถเข้าถึง instance ของ `Array` ใน method `myFilter` ได้โดยการใช้ `this`

# --hints--

`new_s` ต้องมีค่าเป็น `[23, 65, 5]`

```js
assert(JSON.stringify(new_s) === JSON.stringify([23, 65, 5]));
```

ห้ามใช้ method `filter`

```js
assert(!code.match(/\.?[\s\S]*?filter/g));
```

# --seed--

## --seed-contents--

```js
// ตัวแปร globavariable
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
  var newArray = [];
  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
  return newArray;
};

var new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});
```

# --solutions--

```js
// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  var newArray = [];
  // Only change code below this line
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) newArray.push(this[i]);
  }
  // Only change code above this line
  return newArray;
};

var new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});
```
