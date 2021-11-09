---
id: 587d7b8f367417b2b2512b64
title: Implement the filter Method on a Prototype
challengeType: 1
forumTopicId: 301231
dashedName: implement-the-filter-method-on-a-prototype
---

# --description--

คุณจะมีเชี่ยวชาญขึ้นมากเกี่ยวกับ `filter` method หากคุณได้สร้าง `filter` method ที่เป็นเวอร์ชันของคุณเอง แนะนำให้คุณใช้ `for` loop หรือ `Array.prototype.forEach()`

# --instructions--

จงเขียน `Array.prototype.myFilter()` ของคุณเอง โดยให้ทำงานเหมือนกับ `Array.prototype.filter()` อย่างไรก็ตาม คุณไม่ควรใช้ built-in `filter` method นอกจากนี้ `Array` instance สามารถเข้าถึงได้ใน `myFilter` method โดยการใช้ `this`

# --hints--

`new_s` ควรมีค่าเป็น `[23, 65, 5]`.

```js
assert(JSON.stringify(new_s) === JSON.stringify([23, 65, 5]));
```

โค้ดของคุณไม่ควรใช้ `filter` method

```js
assert(!code.match(/\.?[\s\S]*?filter/g));
```

# --seed--

## --seed-contents--

```js
// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  // Only change code below this line
  var newArray = [];
  // Only change code above this line
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
