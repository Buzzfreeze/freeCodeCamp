---
id: 587d7b90367417b2b2512b65
title: Return Part of an Array Using the slice Method
challengeType: 1
forumTopicId: 301239
dashedName: return-part-of-an-array-using-the-slice-method
---

# --description--

`slice` method คืนค่าเป็นสำเนา (copy) ของ elements ใน array โดย `slice` method รับค่า arguments ได้ 2 ค่า argument แรกคือ index ที่ต้องการเริ่ม slice (ตัด) ส่วน argument ที่สองคือ index ที่ต้องการจบการ slice (ไม่รวม index ตัวท้าย) แต่หากเราไม่ระบุ argument ใดๆ มัันจะทำการตัด array ตั้งแต่ element แรกจนถึง element สุดท้าย วิธีนี้เป็นวิธีง่ายๆ ในการสร้างสำเนาทั้งชุดของ array นอกจากนี้ `slice` method ก็ไม่เปลี่ยนแปลง array ตั้งต้นด้วย แต่จะคืนค่าเป็น array ตัวใหม่

ตัวอย่างของการใช้งาน method นี้

```js
var arr = ["Cat", "Dog", "Tiger", "Zebra"];
var newArray = arr.slice(1, 3);
```

`newArray` ควรมีค่าเป็น `["Dog", "Tiger"]`.

# --instructions--

จงใช้ `slice` method ในฟังก์ชัน `sliceArray` เพื่อคืนค่าเป็น array ที่ตัดมาจาก `anim` array โดยกำหนดให้ index เป็น `beginSlice` และ `endSlice`

# --hints--

โค้ดของคุณควรใช้ `slice` method

```js
assert(code.match(/\.slice/g));
```

ตัวแปร `inputAnim` ไม่ควรมีการเปลี่ยนแปลง

```js
assert(
  JSON.stringify(inputAnim) ===
    JSON.stringify(['Cat', 'Dog', 'Tiger', 'Zebra', 'Ant'])
);
```

`sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 3)` ควรคืนค่าเป็น `["Dog", "Tiger"]`.

```js
assert(
  JSON.stringify(sliceArray(['Cat', 'Dog', 'Tiger', 'Zebra', 'Ant'], 1, 3)) ===
    JSON.stringify(['Dog', 'Tiger'])
);
```

`sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 0, 1)` ควรคืนค่าเป็น `["Cat"]`.

```js
assert(
  JSON.stringify(sliceArray(['Cat', 'Dog', 'Tiger', 'Zebra', 'Ant'], 0, 1)) ===
    JSON.stringify(['Cat'])
);
```

`sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 4)` ควรคืนค่าเป็น `["Dog", "Tiger", "Zebra"]`.

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
  // Only change code below this line


  // Only change code above this line
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);
```

# --solutions--

```js
function sliceArray(anim, beginSlice, endSlice) {
  // Only change code below this line
  return anim.slice(beginSlice, endSlice)
  // Only change code above this line
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);
```
