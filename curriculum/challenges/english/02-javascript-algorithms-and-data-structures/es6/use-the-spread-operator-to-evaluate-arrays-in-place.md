---
id: 587d7b89367417b2b2512b48
title: Use the Spread Operator to Evaluate Arrays In-Place
challengeType: 1
forumTopicId: 301222
dashedName: use-the-spread-operator-to-evaluate-arrays-in-place
---

# --description--

ES6 ได้เพิ่ม <dfn>spread operator</dfn> มาให้ด้วย ซึ่งช่วยให้เราแตก arrays หรือ expression อื่นๆ ออกมาได้ ในโค้ดส่วนที่เราต้องใช้ค่าหลายๆ ตัว

โค้ดด้านล่างเป็นตัวอย่างของ ES5 ซึ่งจะใช้ `apply()` เพื่อหาค่าที่มากที่สุดใน array


```js
var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr);
```

ตัวแปร `maximus` จะมีค่าเป็น `89`


ที่เราต้องใช้ `Math.max.apply(null, arr)` ก็เพราะถ้าเราใช้ `Math.max(arr)` เราจะได้ค่าเป็น `NaN` แต่ `Math.max()` ต้องการ argument ที่คั่นด้วยเครื่องหมาย comma ที่ไม่ใช่ array (เช่น `Math.max(1,2,3,4)`) ดังนั้น การใช้ spread operator เราอ่านโค้ดนี้ได้ง่ายขึ้น

```js
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);
```

ตัวแปร `maximus` จะมีค่าเป็น `89`

การใช้ `...arr` จะเป็นการแตกค่าใน array ออกมา แต่ spread operator จะใช้ได้กับโค้ดบางประเภทเท่านั้น เช่น ใช้กับ argument ที่ส่งไปยังฟังก์ชัน หรือใช้ใน array แต่ถ้าเป็นตัวอย่างด้านล่างนี้ spread operator จะไม่ทำงาน:


```js
const spreaded = ...arr;
```

# --instructions--

จง copy ข้อมูลของ `arr1` ให้กับ array `arr2` โดยใช้ spread operator



# --hints--

`arr2` ควรมีค่าที่ copy จาก `arr1`

```js
assert(arr2.every((v, i) => v === arr1[i]) && arr2.length);
```

 ต้องใช้ spread operator (`...`) เพื่อ copy ข้อมูลจาก `arr1`

```js
assert(code.match(/Array\(\s*\.\.\.arr1\s*\)|\[\s*\.\.\.arr1\s*\]/));
```

ค่าของ `arr2` จะต้องไม่เปลี่ยนไป ถ้า `arr1` ถุกเปลี่ยนหลังจากทำการ copy แล้ว

```js
assert((arr1, arr2) => {
  arr1.push('JUN');
  return arr2.length < arr1.length;
});
```

# --seed--

## --seed-contents--

```js
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [];  // แก้ไขบรรทัดนี้

console.log(arr2);
```

# --solutions--

```js
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];
```
