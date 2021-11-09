---
id: 587d7b8f367417b2b2512b62
title: Implement map on a Prototype
challengeType: 1
forumTopicId: 301230
dashedName: implement-map-on-a-prototype
---

# --description--

จากที่คุณได้เห็นการทำงานของ `Array.prototype.map()` หรือ `map()` ในบทที่แล้ว `map` method คืนค่าเป็น array ที่มีความยาวเท่ากับ array ตั้งต้น และ method นี้จะไม่เปลี่ยนแปลง array ตั้งต้นด้วย ตราบใดที่ callback function ไม่ได้ทำการเปลี่ยน

หรือกล่าวได้ว่า `map` เป็น pure function และผลลัพธ์ที่ได้ก็ขึ้นอยู่กับ input เท่านั้น นอกจากนี้ `map` ยังรับค่าฟังก์ชันอื่นเป็น argument ได้อีกด้วย

คุณจะมีเชี่ยวชาญขึ้นมากเกี่ยวกับ `map` method หากคุณได้สร้าง `map` method ที่เป็นเวอร์ชันของคุณเอง แนะนำให้คุณใช้ `for` loop หรือ `Array.prototype.forEach()`

# --instructions--

จงเขียน `Array.prototype.myMap()` ของคุณเอง โดยให้ทำงานเหมือนกับ `Array.prototype.map()` อย่างไรก็ตาม คุณไม่ควรใช้ built-in `map` method นอกจากนี้ `Array` instance สามารถเข้าถึงได้ใน `myMap` method โดยการใช้ `this`

# --hints--

`new_s` ควรมีค่าเป็น `[46, 130, 196, 10]`.

```js
assert(JSON.stringify(new_s) === JSON.stringify([46, 130, 196, 10]));
```

โค้ดของคุณไม่ควรใช้ `map` method

```js
assert(!code.match(/\.?[\s\S]*?map/g));
```

# --seed--

## --seed-contents--

```js
// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  var newArray = [];
  // Only change code below this line

  // Only change code above this line
  return newArray;
};

var new_s = s.myMap(function(item) {
  return item * 2;
});
```

# --solutions--

```js
// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  var newArray = [];
  // Only change code below this line
  for (var elem of this) {
    newArray.push(callback(elem));
  }
  // Only change code above this line
  return newArray;
};

var new_s = s.myMap(function(item) {
  return item * 2;
});
```
