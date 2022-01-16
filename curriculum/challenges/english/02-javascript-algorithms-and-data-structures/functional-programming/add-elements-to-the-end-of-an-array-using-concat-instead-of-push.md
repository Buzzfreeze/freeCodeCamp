---
id: 587d7da9367417b2b2512b67
title: Add Elements to the End of an Array Using concat Instead of push
challengeType: 1
forumTopicId: 301226
dashedName: add-elements-to-the-end-of-an-array-using-concat-instead-of-push
---

# --description--

ถ้าให้สรุป Functional programming สั้นๆก็คือการสร้างฟังก์ชันที่จะไม่เปลี่ยนแปลงค่า (non-mutating)

เราได้เรียนเรื่อง method `concat` ไปในแบบฝึกหัดที่แล้ว โดย method นี้จะนำ array มาต่อกัน โดยไม่เปลี่ยนแปลง array เดิม 
ถ้าลองเปรียบเทียบ method `concat` กับ `push` ดู จะเห็นว่า `push` เพิ่ม element เข้าไปท้าย array และทำให้ค่าของ array เดิมเปลี่ยนไป ตามตัวอย่างด้านล่าง:

```js
var arr = [1, 2, 3];
arr.push([4, 5, 6]);
```

`arr` จะเปลี่ยนเป็น `[1, 2, 3, [4, 5, 6]]` ซึ่งการทำให้ค่าเปลี่ยนไปแบบนี้ จะไม่ใช่หลักการของ functional programming

`concat` เป็นการที่เราเอา element ใหม่มาต่อท้าย array โดยไม่ทำให้เกิด side effect ที่เกิดจากการเปลี่ยนแปลงค่า

# --instructions--

จงแก้ไขฟังก์ชัน `nonMutatingPush` ให้ใช้ `concat` เพื่อเอา `newItem` มาต่อท้าย `original` แทนการใช้ `push` 
ฟังก์ชันนี้ต้องคืนค่าเป็น array

# --hints--

ต้องใช้ method `concat` ในโค้ด

```js
assert(code.match(/\.concat/g));
```

ห้ามใช้ method `push` ในโค้ด

```js
assert(!code.match(/\.?[\s\S]*?push/g));
```

array `first` ต้องมีค่าเหมือนเดิม

```js
assert(JSON.stringify(first) === JSON.stringify([1, 2, 3]));
```

array `second` ต้องมีค่าเหมือนเดิม

```js
assert(JSON.stringify(second) === JSON.stringify([4, 5]));
```

จารเรียกใช้ฟังก์ชัน `nonMutatingPush([1, 2, 3], [4, 5])` ต้องได้ค่าเป็น `[1, 2, 3, 4, 5]`.

```js
assert(
  JSON.stringify(nonMutatingPush([1, 2, 3], [4, 5])) ===
    JSON.stringify([1, 2, 3, 4, 5])
);
```

# --seed--

## --seed-contents--

```js
function nonMutatingPush(original, newItem) {
  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
  return original.push(newItem);

  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingPush(first, second);
```

# --solutions--

```js
function nonMutatingPush(original, newItem) {
  return original.concat(newItem);
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingPush(first, second);
```
