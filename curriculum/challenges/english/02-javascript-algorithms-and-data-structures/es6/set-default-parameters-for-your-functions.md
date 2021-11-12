---
id: 587d7b88367417b2b2512b46
title: Set Default Parameters for Your Functions
challengeType: 1
forumTopicId: 301209
dashedName: set-default-parameters-for-your-functions
---

# --description--
 
เพื่อช่วยให้เราสร้างฟังก์ชันที่ยืดหยุ่นมากขึ้น ES6 ได้เสนอ <dfn>default parameters</dfn> สำหรับฟังก์ชัน

ลองดูโค้ดนี้

```js
const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));
console.log(greeting());
```

หน้า console จะแสดง string `Hello John` และ `Hello Anonymous`

default parameter จะถูกส่งเข้าไปเมื่อไม่ได้ระบุ argument ดังที่คุณเห็นในตัวอย่างข้างต้น parameter `name` จะได้รับค่าเริ่มต้น `Anonymous` เมื่อคุณไม่ได้ระบุค่า parameter นั้น คุณสามารถเพิ่มค่าเริ่มต้นให้กับ parameter ได้มากเท่าที่คุณต้องการ

# --instructions--

จงแก้ไข function `increment` โดยการเพิ่ม default parameter เพื่อให้บวก 1 ให้กับ `number` ถ้าไม่ได้ระบุค่า `value`

# --hints--

ผลลัพธ์ของ `increment(5, 2)` ควรเป็น `7`

```js
assert(increment(5, 2) === 7);
```

ผลลัพธ์ของ `increment(5)` ควรเป็น `6`

```js
assert(increment(5) === 6);
```

default parameter ที่มีค่าเป็น `1` ควรใช้สำหรับ `value`

```js
assert(code.match(/value\s*=\s*1/g));
```

# --seed--

## --seed-contents--

```js
// Only change code below this line
const increment = (number, value) => number + value;
// Only change code above this line
```

# --solutions--

```js
const increment = (number, value = 1) => number + value;
```
