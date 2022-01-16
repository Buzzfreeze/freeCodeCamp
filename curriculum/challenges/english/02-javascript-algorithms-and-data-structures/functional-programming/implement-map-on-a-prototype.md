---
id: 587d7b8f367417b2b2512b62
title: Implement map on a Prototype
challengeType: 1
forumTopicId: 301230
dashedName: implement-map-on-a-prototype
---

# --description--

เราได้เห็นการใช้ `Array.prototype.map()` หรือ `map()` ในบทที่แล้ว method `map` จะคืนค่าเป็น array ที่มีความยาวเท่ากับ array เดิม และ method นี้จะไม่เปลี่ยนแปลง array เดิมด้วย ถ้า callback function ไม่ได้ไปแก้ค่าที่รับเข้ามา

เราจะเห็นว่า `map` นี้เป็น pure function และผลลัพธ์ที่ได้ก็ขึ้นอยู่กับ input เท่านั้น แล้ว `map` ก็ยังรับ argument เป็นฟังก์ชันอีกด้วย

คุณจะเข้าใจ method `map` มากถึง ถ้าลองได้สร้าง method `map` เอง เราแนะนำให้คุณใช้ `for` loop หรือ `Array.prototype.forEach()`

# --instructions--

ให้เขียน `Array.prototype.myMap()` ของคุณเอง โดยให้ทำงานเหมือนกับ `Array.prototype.map()` และห้ามใช้ method `map` ที่มีอยู่แล้ว 
เราสามารถเข้าถึง instance ของ `Array` ใน method `myMap` ได้โดยการใช้ `this`

# --hints--

`new_s` ต้องมีค่าเป็น `[46, 130, 196, 10]`.

```js
assert(JSON.stringify(new_s) === JSON.stringify([46, 130, 196, 10]));
```

ห้ามใช้ method `map` ในโค้ด

```js
assert(!code.match(/\.?[\s\S]*?map/g));
```

# --seed--

## --seed-contents--

```js
// ตัวแปร global
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  var newArray = [];
  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น

  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
  return newArray;
};

var new_s = s.myMap(function(item) {
  return item * 2;
});
```

# --solutions--

```js
// ตัวแปร global
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  var newArray = [];
  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
  for (var elem of this) {
    newArray.push(callback(elem));
  }
  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
  return newArray;
};

var new_s = s.myMap(function(item) {
  return item * 2;
});
```
