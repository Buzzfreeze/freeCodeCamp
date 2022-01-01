---
id: 587d7b88367417b2b2512b47
title: Use the Rest Parameter with Function Parameters
challengeType: 1
forumTopicId: 301221
dashedName: use-the-rest-parameter-with-function-parameters
---

# --description--

ES6 ได้สร้าง <dfn>rest parameter</dfn> มาเพื่อให้เราเขียนโค้ดได้ยืดหยุ่นมากขึ้นอีก ถ้าเราใช้ rest parameter เราสามารถรับ argument หลายตัวได้โดยที่ไม่ต้องระบุจำนวนของ argument ที่จะรับ ซึ่ง argument ที่เข้ามาในฟังก์ชันนี้จะเข้ามาในรูปแบบของ array

ลองดูโค้ดนี้:

```js
function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], { }));
```

console จะแสดง string `You have passed 3 arguments.` และ `You have passed 4 arguments`

rest parameter ช่วยลดขั้นตอนการตรวจสอบ array `args` และทำให้เราสามารถใช้ `map()`, `filter()` และ `reduce()` กับ array ของ parameter ได้

# --instructions--

จงแก้ไขฟังก์ชัน `sum` โดยใช้ rest parameter เพื่อให้ฟังก์ชัน `sum` สามารถรับ argument กี่ตัวก็ได้และให้ฟังก์ชันคืนค่าเป็นผลรวมของ parameter เหล่านั้น

# --hints--

การเรียกใช้ฟังก์ชัน `sum(0,1,2)` ควรได้ค่าเป็น 3

```js
assert(sum(0, 1, 2) === 3);
```

การเรียกใช้ฟังก์ชัน `sum(1,2,3,4)` ควรได้ค่าเป็น 10

```js
assert(sum(1, 2, 3, 4) === 10);
```

การเรียกใช้ฟังก์ชัน `sum(5)` ควรได้ค่าเป็น 5

```js
assert(sum(5) === 5);
```

การเรียกใช้ฟังก์ชัน `sum()` ควรได้ค่าเป็น 0

```js
assert(sum() === 0);
```

`sum` ต้องเป็น arrow function ที่ใช้ rest parameter (`...`) ที่ parameter `args`


```js
assert(__helpers.removeWhiteSpace(code).match(/sum=\(\.\.\.args\)=>/));
```

# --seed--

## --seed-contents--

```js
const sum = (x, y, z) => {
  const args = [x, y, z];
  return args.reduce((a, b) => a + b, 0);
}
```

# --solutions--

```js
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}
```
