---
id: 587d8255367417b2b2512c73
title: Use Spread and Notes for ES5 Set() Integration
challengeType: 1
forumTopicId: 301720
dashedName: use-spread-and-notes-for-es5-set-integration
---

# --description--

คุณจำ `…` ที่เป็น spread operator ของ ES6 ได้ไหม?

`…` จะรับค่า iterable object (object ที่วนอ่านค่าได้) ใน ES6 และเปลี่ยน object นั้นเป็น array

มาลองสร้าง Set และลองใช้ spread กัน

```js
var set = new Set([1,2,3]);
var setToArr = [...set]
console.log(setToArr) // คืนค่าเป็น [ 1, 2, 3 ]
```

# --instructions--

ในแบบฝึกหัดนี้เราจะส่ง set object ไปยังฟังก์ชัน `checkSet` แล้วฟังก์ชันนี้จะต้องคืนค่าเป็น array ที่สร้างจาก Set นั้น

คราวนี้คุณก็จะใช้ `Set()` object ของ ES6 เป็นแล้ว เยี่ยมมาก!

# --hints--

`checkSet(new Set([1,2,3,4,5,6,7])` ต้องคืนค่าเป็น `[1, 2, 3, 4, 5, 6, 7]`.

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
  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น

  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
}
```

# --solutions--

```js
function checkSet(set){
return [...set];}
```
