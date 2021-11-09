---
id: 587d7da9367417b2b2512b6a
title: Return a Sorted Array Without Changing the Original Array
challengeType: 1
forumTopicId: 301237
dashedName: return-a-sorted-array-without-changing-the-original-array
---

# --description--
side effect ของ `sort` method คือ มันเรียงลำดับ elements ใน array ตั้งต้น กล่าวได้อีกแบบว่า `sort` method ได้เปลี่ยนแปลง array ตั้งต้นนั่นเอง วิธีนึงที่ป้องกันปัญหานี้ได้ก็คือ ให้นำ array เปล่า (empty array) มา concat กับ array ที่จะทำการ sort (ให้นึกถึง `slice` และ `concat` ที่คืนค่าเป็น array ตัวใหม่) จากนั้นค่อยรัน `sort` method

# --instructions--

จงใช้ `sort` method ในฟังก์ชัน `nonMutatingSort` เพื่อเรียงลำดับ elements ของ array จากน้อยไปมาก (ascending order) โดยฟังก์ชันควรคืนค่าเป็น array ตัวใหม่ และไม่เปลี่ยนแปลงค่าตัวแปร `globalArray`

# --hints--

โค้ดของคุณควรใช้ `sort` method

```js
assert(nonMutatingSort.toString().match(/\.sort/g));
```

ตัวแปร `globalArray` ไม่ควรมีการเปลี่ยนแปลง

```js
assert(JSON.stringify(globalArray) === JSON.stringify([5, 6, 3, 2, 9]));
```

`nonMutatingSort(globalArray)` ควรคืนค่าเป็น `[2, 3, 5, 6, 9]`.

```js
assert(
  JSON.stringify(nonMutatingSort(globalArray)) ===
    JSON.stringify([2, 3, 5, 6, 9])
);
```

`nonMutatingSort(globalArray)` ไม่ควรใช้วิธี hard code

```js
assert(!nonMutatingSort.toString().match(/\[.*?[23569].*?\]/gs));
```

ฟังก์ชันควรคืนค่าเป็น array ตัวใหม่ ไม่ใช่ array ที่ส่งผ่านเข้าไป

```js
assert(nonMutatingSort(globalArray) !== globalArray);
```

`nonMutatingSort([1, 30, 4, 21, 100000])` ควรคืนค่าเป็น `[1, 4, 21, 30, 100000]`.

```js
assert(JSON.stringify(nonMutatingSort([1, 30, 4, 21, 100000])) ===
    JSON.stringify([1, 4, 21, 30, 100000]))
```

`nonMutatingSort([140000, 104, 99])` ควรคืนค่าเป็น `[99, 104, 140000]`.

```js
assert(JSON.stringify(nonMutatingSort([140000, 104, 99])) ===
    JSON.stringify([99, 104, 140000]))
```

# --seed--

## --seed-contents--

```js
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Only change code below this line


  // Only change code above this line
}
nonMutatingSort(globalArray);
```

# --solutions--

```js
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Only change code below this line
  return [].concat(arr).sort((a,b) => a-b);
  // Only change code above this line
}
nonMutatingSort(globalArray);
```
