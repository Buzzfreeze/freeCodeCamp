---
id: 56533eb9ac21ba0edf2244b3
title: Convert Celsius to Fahrenheit
challengeType: 1
forumTopicId: 16806
dashedName: convert-celsius-to-fahrenheit
---

# --description--
Algorithm ในการแปลงหน่วยของอุณหภูมิ จากองศาเซลเซียสให้เป็นองศาฟาเรนไฮต์คือ ให้นำอุณหภูมิองศาเซลเซียสคูณ `9/5` แล้วบวกด้วย `32` 

แบบทดสอบนี้ได้กำหนดให้ตัวแปร `celsius` เป็นอุณหภูมิในหน่วยองศาเซลเซียส 

ให้แปลงอุณหภูมิในหน่วยองศาเซลเซียสเป็นหน่วยองศาฟาเรนไฮต์ และเก็บค่าลงในตัวแปร `fahrenheit` แล้วให้คืนค่าของตัวแปรนี้ออกมา 

ให้ใช้ Algorithm ที่มีให้ด้านบนเพื่อแปลงหน่วยของอุณหภูมิ


# --hints--

`convertToF(0)` ต้องคืนค่าเป็นตัวเลข

```js
assert(typeof convertToF(0) === 'number');
```

การเรียกใช้ฟังก์ชัน `convertToF(-30)` ต้องได้ค่าเป็น `-22`

```js
assert(convertToF(-30) === -22);
```

การเรียกใช้ฟังก์ชัน `convertToF(-10)` ต้องได้ค่าเป็น `14`

```js
assert(convertToF(-10) === 14);
```

การเรียกใช้ฟังก์ชัน `convertToF(0)` ต้องได้ค่าเป็น `32`

```js
assert(convertToF(0) === 32);
```

การเรียกใช้ฟังก์ชัน `convertToF(20)` ต้องได้ค่าเป็น `68`

```js
assert(convertToF(20) === 68);
```

การเรียกใช้ฟังก์ชัน `convertToF(30)` ต้องได้ค่าเป็น `86`

```js
assert(convertToF(30) === 86);
```

# --seed--

## --seed-contents--

```js
function convertToF(celsius) {
  let fahrenheit;
  return fahrenheit;
}

convertToF(30);
```

# --solutions--

```js
function convertToF(celsius) {
  let fahrenheit = celsius * 9/5 + 32;

  return fahrenheit;
}

convertToF(30);
```
