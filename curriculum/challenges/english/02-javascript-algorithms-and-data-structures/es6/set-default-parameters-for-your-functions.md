---
id: 587d7b88367417b2b2512b46
title: Set Default Parameters for Your Functions
challengeType: 1
forumTopicId: 301209
dashedName: set-default-parameters-for-your-functions
---

# --description--
 
ES6 ได้เพิ่ม <dfn>default parameter</dfn> (ค่าเริ่มต้น) ให้กับฟังก์ชัน เพื่อให้เราเขียนฟังก์ชันได้ยืดหยุ่นมากขึ้น

ลองดูโค้ดนี้:

```js
const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));
console.log(greeting());
```

หน้า console จะแสดง string `Hello John` และ `Hello Anonymous`

ถ้าเราไม่ได้ใส่ argument ฟังก์ชันจะใช้ค่าของ default parameter แทน จากตัวอย่างข้างบน parameter `name` จะมีค่าเริ่มต้นเป็น `Anonymous` ไม่ได้ระบุ parameter มา คุณสามารถเพิ่มค่าเริ่มต้นให้กับ parameter ตัวไหนก็ได้ที่ต้องการ

# --instructions--

จงแก้ไขฟังก์ชัน `increment` โดยการเพิ่ม default parameter เพื่อให้บวก 1 ให้กับ `number` ถ้าไม่ได้ระบุค่า `value`

# --hints--

ผลลัพธ์ของ `increment(5, 2)` ควรเป็น `7`

```js
assert(increment(5, 2) === 7);
```

ผลลัพธ์ของ `increment(5)` ควรเป็น `6`

```js
assert(increment(5) === 6);
```

`value` ควรมีค่าของ default parameter เป็น `1`  

```js
assert(code.match(/value\s*=\s*1/g));
```

# --seed--

## --seed-contents--

```js
// แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
const increment = (number, value) => number + value;
// แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
```

# --solutions--

```js
const increment = (number, value = 1) => number + value;
```
