---
id: 587d7b7a367417b2b2512b12
title: Copy Array Items Using slice()
challengeType: 1
forumTopicId: 301158
dashedName: copy-array-items-using-slice
---

# --description--

method ต่อไปที่เราจะพูดถึงคือ `slice()`ซึ่งแทนที่จะแก้ไข array `slice()` จะคัดลอกหรือ *extracts* elements ตามจำนวนที่กำหนดไปยัง array ใหม่ โดยไม่แก้ไข array ที่ถูกเรียกใช้ โดย `slice()` รับเพียง 2 พารามิเตอร์ — พารามิเตอร์แรกคือ index ที่เริ่มต้นการแยก และตัวที่สองคือ index ที่จะหยุดการแยก (แต่ไม่รวม element ที่ index นี้) ให้พิจารณาโค้ดต่อไปนี้

```js
let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

let todaysWeather = weatherConditions.slice(1, 3);
```

`todaysWeather` ควรมีค่า `['snow', 'sleet']` ในขณะที่ `weatherConditions` ควรมีค่า `['rain', 'snow', 'sleet', 'hail', 'clear']`

ผลที่ได้คือ array ใหม่ที่ประกอบด้วย element ที่ดึงออกจาก array เดิม 

# --instructions--

เราได้ประกาศฟังก์ชัน `forecast` ที่รับ array เป็น argument จงแก้ไขฟังก์ชันโดยใช้ `slice()` เพื่อดึงข้อมูลจาก array argument และคืนค่าเป็น array ใหม่ที่มี string elements `warm` และ `sunny`


# --hints--

`forecast` ควรคืนค่า `["warm", "sunny"]`

```js
assert.deepEqual(
  forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']),
  ['warm', 'sunny']
);
```

function `forecast` ควรใช้ `slice()` method

```js
assert(/\.slice\(/.test(code));
```

# --seed--

## --seed-contents--

```js
function forecast(arr) {
  // Only change code below this line

  return arr;
}

// Only change code above this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
```

# --solutions--

```js
function forecast(arr) {
  return arr.slice(2,4);
}
```
