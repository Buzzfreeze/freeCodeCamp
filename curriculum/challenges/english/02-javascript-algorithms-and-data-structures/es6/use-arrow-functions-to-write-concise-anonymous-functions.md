---
id: 587d7b87367417b2b2512b43
title: Use Arrow Functions to Write Concise Anonymous Functions
challengeType: 1
forumTopicId: 301211
dashedName: use-arrow-functions-to-write-concise-anonymous-functions
---

# --description--

ใน JavaScript เราไม่จำเป็นต้องตั้งชื่อฟังก์ชันของเราเสมอไป โดยถ้าเราจะส่งฟังก์ชันนี้เป็น argument ไปยังฟังก์ชันอื่น ในกรณีนี้เราจะสร้างเป็น inline function แทน เราไม่จำเป็นต้องตั้งชื่อฟังก์ชันนี้เพราะเราจะไม่ได้เอาฟังก์ชันนี้ไปใช้ที่อื่นอีกแล้ว

ในการสร้างฟังก์ชันแบบนี้ เราจะใช้ syntax ตามนี้:

```js
const myFunc = function() {
  const myVar = "value";
  return myVar;
}
```

ใน ES6 จะใช้ anonymous function ได้ง่ายกว่าเดิมโดยการใช้ **arrow function syntax**


```js
const myFunc = () => {
  const myVar = "value";
  return myVar;
}
```

ถ้าฟังก์ชันของเราทำแค่การคืนค่าอย่างเดียว arrow function จะยอมไม่ต้องใส่คำว่า `return` และปีกกา (`{}`) ได้ ซึ่งจะลดความซับซ้อนของฟังก์ชันเล็กๆ ได้ แล้วเราจะเขียนฟังก์ชันให้อยู่ในบรรทัดเดียวได้ตามนี้:

```js
const myFunc = () => "value";
```

โค้ดนี้จะคืนค่าเป็น string `value`

# --instructions--

จงเปลี่ยนฟังก์ชันของตัวแปร `magic` ที่คืนค่าเป็น `new Date()` โดยให้เปลี่ยนไปใช้ arrow function แล้วก็ห้ามใช้ `var` ในโค้ดด้วย


# --hints--

ต้องเปลี่ยน `var` เป็น keyword อื่น

```js
(getUserInput) => assert(!getUserInput('index').match(/var/g));
```

`magic` ต้องเป็นตัวแปรคงที่ (ประกาศโดยใช้ `const` )

```js
(getUserInput) => assert(getUserInput('index').match(/const\s+magic/g));
```

`magic` ต้องเป็น `function`

```js
assert(typeof magic === 'function');
```

`magic()` ต้องคืนค่าเป็นวันที่ที่ถูกต้อง

```js
assert(magic().setHours(0, 0, 0, 0) === new Date().setHours(0, 0, 0, 0));
```

ต้องไม่ใช้ keyword `function` 

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
