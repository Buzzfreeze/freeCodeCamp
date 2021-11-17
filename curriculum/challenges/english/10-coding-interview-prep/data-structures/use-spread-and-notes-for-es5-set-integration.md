---
id: 587d8255367417b2b2512c73
title: Use Spread and Notes for ES5 Set() Integration
challengeType: 1
forumTopicId: 301720
dashedName: use-spread-and-notes-for-es5-set-integration
---

# --description--

คุณจำ `…` ที่เป็น ES6 spread operator ได้หรือไม่?

`…` สามารถรับค่า iterable object ใน ES6 และเปลี่ยนพวกมันเป็น array

มาลองสร้าง Set และตรวจสอบฟังก์ชันขอ spread กัน

```js
var set = new Set([1,2,3]);
var setToArr = [...set]
console.log(setToArr) // returns [ 1, 2, 3 ]
```

# --instructions--

ในแบบฝึกหัดนี้เราจะส่งผ่าน set object ไปยัง `checkSet` function แล้วมันควร return array ที่มีค่าของ Set อยู่

ตอนนี้คุณเรียนรู้การใช้งาน ES6 `Set()` object เป็นที่เรียบร้อยแล้ว เยี่ยมมาก!

# --hints--

`checkSet(new Set([1,2,3,4,5,6,7])` ควร return `[1, 2, 3, 4, 5, 6, 7]`.

```js
assert(
  (function () {
    var test = checkSet(new Set([1, 2, 3, 4, 5, 6, 7]));
    return DeepEqual(test, [1, 2, 3, 4, 5, 6, 7]);
  })()
);
```

# --seed--

## --seed-contents--

```js
function checkSet(set){
   // Only change code below this line

   // Only change code above this line
}
```

# --solutions--

```js
function checkSet(set){
return [...set];}
```
