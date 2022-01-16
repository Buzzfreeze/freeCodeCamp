---
id: 587d78b2367417b2b2512b10
title: Remove Items Using splice()
challengeType: 1
forumTopicId: 301166
dashedName: remove-items-using-splice
---

# --description--

ตอนนี้เราได้เรียนรู้วิธีลบ element จากหน้าและหลัง array โดยใช้ `shift()` และ `pop()` ไปแล้ว แต่ถ้าเราอยากลบ element ที่อยู่ตรงกลางล่ะ หรือถ้าเราอยากลบ element มากกว่าหนึ่งตัวล่ะ? นั่นคือที่มาของ `splice()` โดย `splice()` ช่วยให้เรา **ลบ elements ที่ติดกันกี่ตัวก็ได้** ที่ตำแหน่งใดก็ได้ใน array

`splice()` สามารถรับพารามิเตอร์ได้สูงสุด 3 ตัว แต่ตอนนี้เราจะดูแค่ 2 ตัวแรกก่อน 
พารามิเตอร์สองตัวแรกของ `splice()` คือจำนวนเต็มที่เป็น index หรือตำแหน่งที่เราจะใช้ ` splice()` ใน array จำได้ใช่ไหมว่า array เป็น *zero-indexed* ดังนั้นถ้าเราจะเลือก element แรกของ array เราจะใช้ `0` 
`splice()` รับพารามิเตอร์ตัวแรกเป็น index แรกที่อยากให้ใน array ที่อยากให้ลบ และพารามิเตอร์ตัวที่สองเป็นจำนวน element ที่ต้องการลบ เช่น:

```js
let array = ['today', 'was', 'not', 'so', 'great'];

array.splice(2, 2);
```

ตัวอย่างข่างบนนี้จะลบ element 2 ตัว เริ่มจาก element ที่สาม (index เป็น 2) เมื่อเสร็จแล้ว `array` จะกลายเป็น `['today', 'was', 'great']`

การใช้ `splice()` ไม่ได้แค่ทำแค่การแก้ไข array เท่านั้น แต่จะคืนค่า array อีกตัวหนึ่งที่มีค่าของ element ที่ถูกลบออกด้วย:

```js
let array = ['I', 'am', 'feeling', 'really', 'happy'];

let newArray = array.splice(3, 2);
```

ตัวแปร `newArray` จะมีค่าเป็น `['really', 'happy']`

# --instructions--

เราได้สร้างและกำหนดค่าให้ `arr` แล้ว ให้คุณใช้ `splice()` เพื่อนำ element ออกจาก `arr` เพื่อให้ผลรวมของตัวเลขใน `arr` บวกกันได้เท่ากับ `10`

# --hints--

ห้ามแก้ไขข้อมูลบรรทัดนี้ `const arr = [2, 4, 5, 1, 7, 5, 2, 1];`

```js
assert(
  __helpers.removeWhiteSpace(code).match(/constarr=\[2,4,5,1,7,5,2,1\];?/)
);
```

ผลรวมของตัวเลขใน `arr` ต้องเท่ากับ `10`

```js
assert.strictEqual(
  arr.reduce((a, b) => a + b),
  10
);
```

โค้ดของคุณต้องใช้ method `splice()` กับ `arr`

```js
assert(__helpers.removeWhiteSpace(code).match(/arr\.splice\(/));
```

ห้ามใช้ splice เพื่อเพิ่ม element ให้กับ `arr`

```js
assert(
  !__helpers.removeWhiteSpace(code).match(/arr\.splice\(\d+,\d+,\d+.*\)/g)
);
```

# --seed--

## --seed-contents--

```js
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น

// แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
console.log(arr);
```

# --solutions--

```js
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(1, 4);
```
