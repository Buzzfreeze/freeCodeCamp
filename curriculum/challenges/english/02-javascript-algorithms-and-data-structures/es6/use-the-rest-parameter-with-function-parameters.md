---
id: 587d7b88367417b2b2512b47
title: Use the Rest Parameter with Function Parameters
challengeType: 1
forumTopicId: 301221
dashedName: use-the-rest-parameter-with-function-parameters
---

# --description--

In order to help us create more flexible functions, ES6 introduces the <dfn>rest parameter</dfn> for function parameters. With the rest parameter, you can create functions that take a variable number of arguments. These arguments are stored in an array that can be accessed later from inside the function.


เพื่อช่วยให้เราสร้างฟังก์ชันที่ยืดหยุ่นมากขึ้น ES6 ได้เสนอ <dfn>rest parameter</dfn> เพื่อเป็นพารามิเตอร์ของฟังก์ชัน ถ้าคุณใช้ rest parameter คุณจะสามารถสร้างฟังก์ชันที่รับค่า arguments ที่มีจำนวนหลายหลาย (variable number of arguments) ได้ โดย argument เหล่านี้ถูกเก็บไว้ใน array ที่สามารถเข้าถึงได้ในภายหลังจากภายในฟังก์ชัน

ลองดูโค้ดนี้

```js
function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], { }));
```

console จะแสดง string `You have passed 3 arguments.` และ `You have passed 4 arguments`

rest parameter ช่วยลดขั้นตอนการตรวจสอบ array `args` และทำให้เราสามารถใช้ `map()`, `filter()` และ `reduce()` กับอาร์เรย์พารามิเตอร์ได้

# --instructions--

จงแก้ไขฟังก์ชัน `sum` โดยใช้ rest parameter เพื่อให้ฟังก์ชัน `sum` สามารถรับ argument จำนวนเท่าใดก็ได้และคืนค่าเป็นผลบวกของ parameter เหล่านั้น

# --hints--

ผลลัพธ์ของ `sum(0,1,2)` ควรเป็น 3

```js
assert(sum(0, 1, 2) === 3);
```

ผลลัพธ์ของ `sum(1,2,3,4)` ควรเป็น 10

```js
assert(sum(1, 2, 3, 4) === 10);
```

ผลลัพธ์ของ `sum(5)` ควรเป็น 5

```js
assert(sum(5) === 5);
```

ผลลัพธ์ของ `sum()` ควรเป็น 0

```js
assert(sum() === 0);
```

`sum` ควรเป็น  arrow function ซึ่งใช้ rest parameter ทีมี syntax (`...`) ที่ `args` parameter 


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
