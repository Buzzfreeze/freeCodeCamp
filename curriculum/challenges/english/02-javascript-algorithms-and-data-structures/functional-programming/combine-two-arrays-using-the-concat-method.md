---
id: 587d7da9367417b2b2512b66
title: Combine Two Arrays Using the concat Method
challengeType: 1
forumTopicId: 301229
dashedName: combine-two-arrays-using-the-concat-method
---

# --description--

<dfn>Concatenation</dfn> แปลว่าการเอามาต่อกัน 
โดย JavaScript มี method `concat` ที่ใช้ได้กับทั้ง string และ array ซึ่งวิธีการใช้จะเหมือนกันเลย 
การใช้ method นี้จะเรียกใช้กับ array ตัวแรก และจะรับ array ตัวที่สองจะเป็น argument ของ method `concat` 
method นี้จะนำ array ตัวที่สองมาต่อท้าย array ตัวแรก แต่ method นี้ไม่เปลี่ยนค่าของ array ทั้งสองตัว ลองดูตัวอย่างด้านล่าง:

```js
[1, 2, 3].concat([4, 5, 6]);
```

ตัวอย่างด้านบนจะได้ค่าเป็น array `[1, 2, 3, 4, 5, 6]`

# --instructions--

ให้ใช้ method `concat` ในฟังก์ชัน `nonMutatingConcat` เพื่อนำ `attach` มาต่อท้าย `original` แล้วคืนค่าออกมาเป็น array ที่ต่อกันแล้ว

# --hints--

ต้องใช้ method `concat` ในโค้ด

```js
assert(code.match(/\.concat/g));
```

array `first` ต้องมีค่าเหมือนเดิม

```js
assert(JSON.stringify(first) === JSON.stringify([1, 2, 3]));
```

array `second` ต้องมีค่าเหมือนเดิม

```js
assert(JSON.stringify(second) === JSON.stringify([4, 5]));
```

การเรียกใช้ฟังก์ชัน `nonMutatingConcat([1, 2, 3], [4, 5])` ต้องได้ค่าเป็น `[1, 2, 3, 4, 5]`.

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
  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น


  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingConcat(first, second);
```

# --solutions--

```js
function nonMutatingConcat(original, attach) {
  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
  return original.concat(attach);
  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingConcat(first, second);
```
