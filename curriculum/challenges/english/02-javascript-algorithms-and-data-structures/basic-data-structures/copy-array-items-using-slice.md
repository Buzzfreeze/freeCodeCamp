---
id: 587d7b7a367417b2b2512b12
title: Copy Array Items Using slice()
challengeType: 1
forumTopicId: 301158
dashedName: copy-array-items-using-slice
---

# --description--

method ต่อไปที่เราจะพูดถึงคือ `slice()` ซึ่ง `slice()` จะคัดลอก element ตามจำนวนที่กำหนดไปยัง array ใหม่โดยไม่แก้ไข array เดิม โดย `slice()` รับพารามิเตอร์แค่สองตัว — พารามิเตอร์แรกคือ index ที่จะเริ่มคัดลอก และตัวที่สองคือ index ที่จะหยุดคัดลอก (แต่ไม่รวม element ที่ index นี้) 

ลองดูโค้ดตัวอย่าง:

```js
let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

let todaysWeather = weatherConditions.slice(1, 3);
```

`todaysWeather` จะมีค่าเป็น `['snow', 'sleet']` ในขณะที่ `weatherConditions` จะมีค่าเป็น `['rain', 'snow', 'sleet', 'hail', 'clear']`

เราจะได้ array ใหม่ที่ประกอบด้วย element ที่คัดลอกมาจาก array เดิม 

# --instructions--

เราได้ประกาศฟังก์ชัน `forecast` ที่รับ array เป็น argument ให้แล้ว 
ให้แก้ไขฟังก์ชันโดยใช้ `slice()` เพื่อดึงข้อมูลจาก argument และคืนค่าเป็น array ใหม่ที่มี element เป็น string คำว่า `warm` และ `sunny`


# --hints--

การเรียกใช้ `forecast` ต้องได้ค่าเป็น `["warm", "sunny"]`

```js
assert.deepEqual(
  forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']),
  ['warm', 'sunny']
);
```

ต้องใช้ method `slice()` ในฟังก์ชัน `forecast`

```js
assert(/\.slice\(/.test(code));
```

# --seed--

## --seed-contents--

```js
function forecast(arr) {
  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น

  return arr;
}

// แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
```

# --solutions--

```js
function forecast(arr) {
  return arr.slice(2,4);
}
```
