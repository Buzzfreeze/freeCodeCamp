---
id: 587d7da9367417b2b2512b6a
title: Return a Sorted Array Without Changing the Original Array
challengeType: 1
forumTopicId: 301237
dashedName: return-a-sorted-array-without-changing-the-original-array
---

# --description--
side effect ของ method `sort` คือ method ฟังก์ชันนี้เรียงลำดับ element ใน array เดิมเลย แปลว่า method `sort` นี้ได้เปลี่ยนแปลง array ที่เรียกใช้นั่นเอง  
วิธีที่ป้องกันปัญหานี้ได้ก็คือ ให้นำ array ว่าง (empty array, `[]`) มา concat กับ array ที่จะทำการ sort (ให้นึกถึง `slice` และ `concat` ที่คืนค่าเป็น array ตัวใหม่) จากนั้นค่อยเรียกใช้ method `sort`

# --instructions--

จงใช้ method `sort` ในฟังก์ชัน `nonMutatingSort` เพื่อเรียงลำดับ element ของ array จากน้อยไปมาก โดยฟังก์ชันนี้ต้องคืนค่าเป็น array ตัวใหม่ และไม่เปลี่ยนแปลงค่าตัวแปร `globalArray`

# --hints--

ต้องใช้ method `sort` 

```js
assert(nonMutatingSort.toString().match(/\.sort/g));
```

ตัวแปร `globalArray` ต้องมีค่าเหมือนก่อนเรียกใช้ฟังก์ชัน

```js
assert(JSON.stringify(globalArray) === JSON.stringify([5, 6, 3, 2, 9]));
```

การเรียกใช้ฟังก์ชัน `nonMutatingSort(globalArray)` ต้องได้ค่าเป็น `[2, 3, 5, 6, 9]`

```js
assert(
  JSON.stringify(nonMutatingSort(globalArray)) ===
    JSON.stringify([2, 3, 5, 6, 9])
);
```

ห้าม hard code ผลลัพธ์ในฟังก์ชัน `nonMutatingSort(globalArray)`

```js
assert(!nonMutatingSort.toString().match(/\[.*?[23569].*?\]/gs));
```

ฟังก์ชันนี้ต้องคืนค่าเป็น array ตัวใหม่ ไม่ใช่ array ที่ส่งผ่านเข้าไป

```js
assert(nonMutatingSort(globalArray) !== globalArray);
```

การเรียกใช้ฟังก์ชัน `nonMutatingSort([1, 30, 4, 21, 100000])` ต้องได้ค่าเป็น `[1, 4, 21, 30, 100000]`

```js
assert(JSON.stringify(nonMutatingSort([1, 30, 4, 21, 100000])) ===
    JSON.stringify([1, 4, 21, 30, 100000]))
```

การเรียกใช้ฟังก์ชัน `nonMutatingSort([140000, 104, 99])` ต้องได้ค่าเป็น `[99, 104, 140000]`

```js
assert(JSON.stringify(nonMutatingSort([140000, 104, 99])) ===
    JSON.stringify([99, 104, 140000]))
```

# --seed--

## --seed-contents--

```js
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น


  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
}
nonMutatingSort(globalArray);
```

# --solutions--

```js
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
  return [].concat(arr).sort((a,b) => a-b);
  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
}
nonMutatingSort(globalArray);
```
