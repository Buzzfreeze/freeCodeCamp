---
id: 587d7b89367417b2b2512b4b
title: Use Destructuring Assignment to Assign Variables from Arrays
challengeType: 1
forumTopicId: 301213
dashedName: use-destructuring-assignment-to-assign-variables-from-arrays
---

# --description--

ES6 ทำให้การ destructuring arrays ง่ายเหมือน destructuring objects

ข้อแตกต่างที่สำคัญอย่างหนึ่งระหว่าง spread operator และ array destructuring คือ spread operator จะแยกข้อมูลทั้งหมดของ array ลงในรายการที่คั่นด้วยเครื่องหมาย comma ดังนั้น คุณไม่สามารถเลือก elements ที่คุณต้องการกำหนดให้กับตัวแปรได้

ลองมาทำ destructuring array 

```js
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b);
```

console จะแสดงค่า `a` และ `b` เป็น `1, 2`

ตัวแปร `a` ถูกกำหนดเป็นค่าแรกของ array และ  `b` ถูกกำหนดเป็นค่าที่สองของ array นอกจากนี้เรายังสามารถเข้าถึงค่าที่ index ใดก็ได้ใน array ที่มีการแยกค่าโดยใช้เครื่องหมาย comma เพื่อเข้าถึง index ที่ต้องการ:

```js
const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);
```

console จะแสดงค่า `a`, `b`, และ `c` เป็น `1, 2, 5`

# --instructions--

จงใช้ destructuring assignment ในการสลับค่าของ `a` และ `b` เพื่อ `a` จะรับค่าที่เก็บใน `b` และ `b` รับค่าที่เก็บใน `a`

# --hints--

ค่าของ `a` ควรเป็น `6` หลังจากสลับ

```js
assert(a === 6);
```

ค่าของ `b` ควรเป็น `8` หลังจากสลับ

```js
assert(b === 8);
```

คุณควรใช้ array destructuring ในการสลับ `a` และ `b`

```js
assert(/\[\s*(\w)\s*,\s*(\w)\s*\]\s*=\s*\[\s*\2\s*,\s*\1\s*\]/g.test(code));
```

# --seed--

## --seed-contents--

```js
let a = 8, b = 6;
// Only change code below this line
```

# --solutions--

```js
let a = 8, b = 6;
[a, b] = [b, a];
```
