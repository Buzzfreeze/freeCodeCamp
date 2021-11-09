---
id: 587d7da9367417b2b2512b66
title: Combine Two Arrays Using the concat Method
challengeType: 1
forumTopicId: 301229
dashedName: combine-two-arrays-using-the-concat-method
---

# --description--

<dfn>Concatenation</dfn> หมายถึงการนำ items มาต่อกัน โดย JavaScript มี `concat` method ที่ใช้ได้กับทั้ง strings และ arrays สามารถเรียกใช้ได้ในรูปแบบเดียวกัน สำหรับการใช้งานใน arrays นั้น array ตัวแรกทำการเรียก method ส่วน array ตัวที่สองจะเป็น argument ของ `concat` ซึ่ง array ตัวที่สองจะถูกนำมาต่อท้าย array ตัวแรก อย่างไรก็ตาม method นี้ไม่เปลี่ยนแปลงค่าของ array ตั้งต้นทั้งสองตัว ดังตัวอย่างต่อไปนี้

```js
[1, 2, 3].concat([4, 5, 6]);
```

array ที่เป็นผลลัพธ์มีค่าดังนี้ `[1, 2, 3, 4, 5, 6]`.

# --instructions--

จงใช้ `concat` method ในฟังก์ชัน `nonMutatingConcat` เพื่อนำ `attach` มาต่อท้าย `original` โดยฟังก์ชันควรคืนค่าเป็น array ที่มีการต่อกันแล้ว (concatenated)

# --hints--

โค้ดของคุณควรใช้ `concat` method

```js
assert(code.match(/\.concat/g));
```

`first` array ไม่ควรมีการเปลี่ยนแปลง

```js
assert(JSON.stringify(first) === JSON.stringify([1, 2, 3]));
```

`second` array ไม่ควรมีการเปลี่ยนแปลง

```js
assert(JSON.stringify(second) === JSON.stringify([4, 5]));
```

`nonMutatingConcat([1, 2, 3], [4, 5])` ควรคืนค่าเป็น `[1, 2, 3, 4, 5]`.

```js
assert(
  JSON.stringify(nonMutatingConcat([1, 2, 3], [4, 5])) ===
    JSON.stringify([1, 2, 3, 4, 5])
);
```

# --seed--

## --seed-contents--

```js
function nonMutatingConcat(original, attach) {
  // Only change code below this line


  // Only change code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingConcat(first, second);
```

# --solutions--

```js
function nonMutatingConcat(original, attach) {
  // Only change code below this line
  return original.concat(attach);
  // Only change code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingConcat(first, second);
```
