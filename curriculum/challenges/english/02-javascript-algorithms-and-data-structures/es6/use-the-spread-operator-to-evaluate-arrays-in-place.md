---
id: 587d7b89367417b2b2512b48
title: Use the Spread Operator to Evaluate Arrays In-Place
challengeType: 1
forumTopicId: 301222
dashedName: use-the-spread-operator-to-evaluate-arrays-in-place
---

# --description--

ES6 แนะนำ <dfn>spread operator</dfn> ซึ่งช่วยให้เราขยาย arrays และ expression อื่นๆ ในตำแหน่งที่ต้องการพารามิเตอร์หรือองค์ประกอบหลายรายการ

โค้ด ES5 ด้านล่างใช้ `apply()` ในการค้นหาค่าที่มากที่สุดใน array


```js
var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr);
```

`maximus` ควรมีค่า `89`


เราต้องใช้ `Math.max.apply(null, arr)` เพราะ `Math.max(arr)` คืนค่า `NaN` แต่ `Math.max()` ต้องการ argument ที่คั่นด้วยเครื่องหมาย comma ที่ไม่ใช่ array ดังนั้น การใช้ spread operator ทำให้โค้ดนี้อ่านและปรับแก้ได้ง่าย

```js
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);
```

`maximus` ควรมีค่า `89`

`...arr` คืนค่า array ที่แกะออกมา (unpacked) กล่าวอีกนัยหนึ่งคือ มันกระจาย *spreads* ข้อมูลใน array ออกมา อย่างไรก็ตาม spread operator สามารถใช้ได้กับโค้ดบางตำแหน่งเท่านั้น เช่น ใช้กับ argument ที่ส่งไปยังฟังก์ชัน หรือใน array ตัวอย่างด้านล่างต่อไปนี้ spread operator จะไม่ทำงาน 


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

`...` spread operator ควรถูกใช้เพื่อทำคัดลอก `arr1`

```js
assert(code.match(/Array\(\s*\.\.\.arr1\s*\)|\[\s*\.\.\.arr1\s*\]/));
```

`arr2` ไม่ควรเปลี่ยน ถ้า `arr1` ถุกเปลี่ยน

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

arr2 = [];  // Change this line

console.log(arr2);
```

# --solutions--

```js
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];
```
