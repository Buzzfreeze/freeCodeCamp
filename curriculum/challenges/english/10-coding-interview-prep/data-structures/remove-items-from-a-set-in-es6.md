---
id: 587d8254367417b2b2512c71
title: Remove items from a set in ES6
challengeType: 1
forumTopicId: 301713
dashedName: remove-items-from-a-set-in-es6
---

# --description--

มาลองฝึกการลบข้อมูลออกจาก Set ของ ES6 โดยใช้ method `delete` กัน

ก่อนอื่นให้สร้าง ES6 Set:

```js
var set = new Set([1,2,3]);
```

ทีนี้ลบข้อมูลออกจาก Set ของคุณด้วย method `delete`

```js
set.delete(1);
console.log([...set]) // จะคืนค่าเป็น [ 2, 3 ]
```

# --instructions--

ตอนนี้เรามาสร้าง set ที่เก็บค่าตัวเลข 1, 2, 3, 4, และ 5

แล้วให่ลบค่า 2 และ 5 ออกจาก set แล้วจึงคืนค่า set นั้นออกมา

# --hints--

Set ของคุณควรมีค่าเป็น 1, 3, และ 4

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
  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
  var set = null;

  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
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
