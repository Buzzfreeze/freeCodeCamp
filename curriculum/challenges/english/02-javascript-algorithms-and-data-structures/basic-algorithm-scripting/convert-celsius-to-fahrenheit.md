---
id: 56533eb9ac21ba0edf2244b3
title: Convert Celsius to Fahrenheit
challengeType: 1
forumTopicId: 16806
dashedName: convert-celsius-to-fahrenheit
---

# --description--
สูตรในการแปลงอุณหภูมิองศาเซลเซียสให้เป็นองศาฟาเรนไฮต์คือ ให้นำอุณหภูมิองศาเซลเซียสคูณ `9/5` แล้วบวกด้วย `32` 

แบบทดสอบนี้ กำหนดให้ตัวแปร `celsius` ใช้แทนค่าอุณหภูมิองศาเซลเซียส ตัวแปร `fahrenheit` ใช้แทนค่าอุณหภูมิองศาฟาเรนไฮต์ และกำหนดให้ตัวแปร `celsius` มีค่าเท่ากับตัวแปร `fahrenheit` จงใช้สูตรที่ได้กล่าวมาแล้วข้างต้น เพื่อแปลงอุณหภูมิองศาเซลเซียสให้เป็นองศาฟาเรนไฮต์


# --hints--

`convertToF(0)` ควรได้ผลลัพธ์เป็นตัวเลข

```js
assert(typeof convertToF(0) === 'number');
```

`convertToF(-30)` ควรได้ผลลัพธ์คือ `-22`

```js
assert(convertToF(-30) === -22);
```

`convertToF(-10)` ควรได้ผลลัพธ์คือ `14`

```js
assert(convertToF(-10) === 14);
```

`convertToF(0)` ควรได้ผลลัพธ์คือ `32`

```js
assert(convertToF(0) === 32);
```

`convertToF(20)` ควรได้ผลลัพธ์คือ `68`

```js
assert(convertToF(20) === 68);
```

`convertToF(30)` ควรได้ผลลัพธ์คือ `86`

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
