---
id: 587d7da9367417b2b2512b67
title: Add Elements to the End of an Array Using concat Instead of push
challengeType: 1
forumTopicId: 301226
dashedName: add-elements-to-the-end-of-an-array-using-concat-instead-of-push
---

# --description--

Functional programming เกี่ยวข้องกับการสร้างและใช้งานฟังก์ชันที่ไม่เปลี่ยนแปลงค่าอื่น (non-mutating)

แบบทดสอบที่แล้วได้แนะนำให้รู้จักกับ `concat` method ที่นำ array มาต่อกัน โดยไม่เปลี่ยนแปลง array ตั้งต้น หากเปรียบเทียบ `concat` method กับ `push` method กล่าวได้ว่า `push` เพิ่ม item เป็นตัวสุดท้ายของ array และเปลี่ยนแปลง array ตั้งต้นด้วย ดังตัวอย่างต่อไปนี้

```js
var arr = [1, 2, 3];
arr.push([4, 5, 6]);
```

`arr` จะถูกเปลี่ยนเป็น `[1, 2, 3, [4, 5, 6]]` ซึ่งไม่ใช่ลักษณะของ functional programming

`concat` เสนอแนวทางในการเพิ่ม item ใหม่ต่อท้าย array โดยไม่ก่อนให้เกิด mutating side effects

# --instructions--

จงแก้ไขฟังก์ชัน `nonMutatingPush` ให้ใช้ `concat` นำ `newItem` มาต่อท้าย `original` แทนการใช้ `push` โดยฟังก์ชันนี้ควรคืนค่าเป็น array

# --hints--

โค้ดของคุณควรใช้ `concat` method

```js
assert(code.match(/\.concat/g));
```

โค้ดของคุณไม่ควรใช้ `push` method

```js
assert(!code.match(/\.?[\s\S]*?push/g));
```

`first` array ไม่ควรมีการเปลี่ยนแปลง

```js
assert(JSON.stringify(first) === JSON.stringify([1, 2, 3]));
```

`second` array ไม่ควรมีการเปลี่ยนแปลง

```js
assert(JSON.stringify(second) === JSON.stringify([4, 5]));
```

`nonMutatingPush([1, 2, 3], [4, 5])` ควรคืนค่าเป็น `[1, 2, 3, 4, 5]`.

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
  // Only change code below this line
  return original.push(newItem);

  // Only change code above this line
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
