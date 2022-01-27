---
id: 587d7b90367417b2b2512b65
title: Return Part of an Array Using the slice Method
challengeType: 1
forumTopicId: 301239
dashedName: return-part-of-an-array-using-the-slice-method
---

# --description--

ค่าที่ method `slice` คืนออกมาจะเป็นค่าที่คัดลอกจาก element ใน array  
method `slice` รับ arguments 2 ตัวคือ 

1. index ที่ต้องการเริ่ม slice (ตัด) 
2. index ที่ต้องการจบการ slice (ค่าที่ได้จะไม่รวม element ที่ตำแหน่งนี้) 
  
แต่ถ้าเราไม่ส่ง argument เข้าไปเลย ฟังก์ชันจะทำการตัด array ตั้งแต่ element แรกจนถึง element สุดท้าย วิธีนี้เป็นวิธีง่ายๆ ในการสร้างสำเนาทั้งชุดของ array นอกจากนี้ `slice` method ก็ไม่เปลี่ยนแปลง array เดิมด้วย แต่จะคืนค่าเป็น array ตัวใหม่เลย

ตัวอย่างของการใช้งาน method นี้

```js
var arr = ["Cat", "Dog", "Tiger", "Zebra"];
var newArray = arr.slice(1, 3);
```

`newArray` จะมีค่าเป็น `["Dog", "Tiger"]`

# --instructions--

จงใช้ method `slice` ในฟังก์ชัน `sliceArray` เพื่อคืนค่าเป็น array ที่ตัดมาจาก array `anim` โดยกำหนดให้ index เป็น `beginSlice` และ `endSlice`

# --hints--

ต้องใช้ method `slice` ในโค้ด

```js
assert(code.match(/\.slice/g));
```

ตัวแปร `inputAnim` ต้องมีค่าคงเดิม

```js
assert(
  JSON.stringify(inputAnim) ===
    JSON.stringify(['Cat', 'Dog', 'Tiger', 'Zebra', 'Ant'])
);
```

การเรียกใช้ฟังก์ชัน `sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 3)` ต้องได้ค่าเป็น `["Dog", "Tiger"]`

```js
assert(
  JSON.stringify(sliceArray(['Cat', 'Dog', 'Tiger', 'Zebra', 'Ant'], 1, 3)) ===
    JSON.stringify(['Dog', 'Tiger'])
);
```

การเรียกใช้ฟังก์ชัน `sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 0, 1)` ต้องได้ค่าเป็น `["Cat"]`

```js
assert(
  JSON.stringify(sliceArray(['Cat', 'Dog', 'Tiger', 'Zebra', 'Ant'], 0, 1)) ===
    JSON.stringify(['Cat'])
);
```

การเรียกใช้ฟังก์ชัน `sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 4)` ต้องได้ค่าเป็น `["Dog", "Tiger", "Zebra"]`

```js
assert(
  JSON.stringify(sliceArray(['Cat', 'Dog', 'Tiger', 'Zebra', 'Ant'], 1, 4)) ===
    JSON.stringify(['Dog', 'Tiger', 'Zebra'])
);
```

# --seed--

## --seed-contents--

```js
function sliceArray(anim, beginSlice, endSlice) {
  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น


  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);
```

# --solutions--

```js
function sliceArray(anim, beginSlice, endSlice) {
  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
  return anim.slice(beginSlice, endSlice)
  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);
```
