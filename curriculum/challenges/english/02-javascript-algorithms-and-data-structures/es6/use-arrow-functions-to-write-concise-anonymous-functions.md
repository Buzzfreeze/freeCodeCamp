---
id: 587d7b87367417b2b2512b43
title: Use Arrow Functions to Write Concise Anonymous Functions
challengeType: 1
forumTopicId: 301211
dashedName: use-arrow-functions-to-write-concise-anonymous-functions
---

# --description--

ใน JavaScript เราไม่จำเป็นต้องตั้งชื่อฟังก์ชันของเรา โดยเฉพาะอย่างยิ่งเมื่อส่งฟังก์ชันเป็น argument ไปยังฟังก์ชันอื่น แต่เราสร้าง inline functions แทน เราไม่จำเป็นต้องตั้งชื่อฟังก์ชันเหล่านี้เพราะเราไม่ได้นำกลับมาใช้ใหม่จากที่อื่น

เพื่อทำสิ่งเรานี้ เราจะต้องใช้ syntax ดังนี้

```js
const myFunc = function() {
  const myVar = "value";
  return myVar;
}
```

ES6 เสนอรูปแบบ anonymous function ที่ง่ายกว่าเดิมโดยการใช้ **arrow function syntax**


```js
const myFunc = () => {
  const myVar = "value";
  return myVar;
}
```

เมื่อไม่มี function body และมีเพียงการคืนค่า ดังนั้น arrow function อนุญาตให้คุณไม่ต้องมี keyword `return` เช่นเดียวกับวงเล็บที่ล้อมรอบโค้ด ซึ่งช่วยลดความซับซ้อนของฟังก์ชันขนาดเล็ก เพราะสามารถเขียนด้วยคำสั่งบรรทัดเดียว:

```js
const myFunc = () => "value";
```

โค้ดนี้จะคืนค่า string `value` by default

# --instructions--

จงปรับแก้ฟังก์ชันที่กำหนดค่าให้กับตัวแปร `magic` ซึ่งคืนค่าเป็น `new Date()` โดยใช้ arrow function นอกจากนี้ให้ตรวจสอบว่าไม่มีการกำหนด keyword `var` ในฟังก์ชัน


# --hints--

คุณควรแทนที่ keyword `var`

```js
(getUserInput) => assert(!getUserInput('index').match(/var/g));
```

`magic` ควรเป็นตัวแปรคงที่ (โดยใช้ `const` )

```js
(getUserInput) => assert(getUserInput('index').match(/const\s+magic/g));
```

`magic` ควรเป็น `function`

```js
assert(typeof magic === 'function');
```

`magic()` ควรคืนค่าวันที่ที่ถูกต้อง

```js
assert(magic().setHours(0, 0, 0, 0) === new Date().setHours(0, 0, 0, 0));
```

keyword `function` ไม่ควรถูกใช้

```js
(getUserInput) => assert(!getUserInput('index').match(/function/g));
```

# --seed--

## --seed-contents--

```js
var magic = function() {
  return new Date();
};
```

# --solutions--

```js
const magic = () => {
  return new Date();
};
```
