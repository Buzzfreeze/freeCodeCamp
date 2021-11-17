---
id: 587d8254367417b2b2512c71
title: Remove items from a set in ES6
challengeType: 1
forumTopicId: 301713
dashedName: remove-items-from-a-set-in-es6
---

# --description--

มาลองฝึกการลบรายการต่างๆ ออกจาก ES6 Set โดยใช้ `delete` method กัน

ก่อนอื่นให้สร้าง ES6 Set:

```js
var set = new Set([1,2,3]);
```

ทีนี้ลบรายการออกจาก Set ของคุณด้วย `delete` method

```js
set.delete(1);
console.log([...set]) // should return [ 2, 3 ]
```

# --instructions--

ตอนนี้เรามาสร้าง set ด้วยจำนวนเต็ม 1, 2, 3, 4, & 5.

ลบค่า 2 และ 5 แล้วจึง return set นั้น

# --hints--

Set ของคุณควรมีค่า 1, 3, และ 4 อยู่

```js
assert(
  (function () {
    var test = checkSet();
    return test.has(1) && test.has(3) && test.has(4) && test.size === 3;
  })()
);
```

# --seed--

## --seed-contents--

```js
function checkSet(){
  // Only change code below this line
  var set = null;

  // Only change code above this line
  return set;   
}
```

# --solutions--

```js
function checkSet(){
var set = new Set([1,2,3,4,5]);
set.delete(2);
set.delete(5);
return set;}
```
