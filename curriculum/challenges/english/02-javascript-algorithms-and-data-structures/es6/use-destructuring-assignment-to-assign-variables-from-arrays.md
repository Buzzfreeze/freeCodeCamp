---
id: 587d7b89367417b2b2512b4b
title: Use Destructuring Assignment to Assign Variables from Arrays
challengeType: 1
forumTopicId: 301213
dashedName: use-destructuring-assignment-to-assign-variables-from-arrays
---

# --description--

ES6 ทำให้การ destructuring array ง่ายเหมือน destructuring object

ข้อแตกต่างที่สำคัญอย่างหนึ่งระหว่าง spread operator (`...`) และ array destructuring คือ spread operator จะแยกข้อมูลทั้งหมดของ array ออกเป็นข้อมูลที่คั่นด้วย comma คุณจึงไม่สามารถเลือก element ที่คุณต้องการกำหนดให้กับตัวแปรได้

แต่การ destructure array จะให้คุณเลือก element ได้:

```js
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b);
```

console จะแสดงค่า `a` และ `b` เป็น `1, 2`

ตัวแปร `a` เป็นค่าแรกใน array และ  `b` เป็นค่าที่สองใน array แล้วเราก็ยังดึงค่าจาก index ไหนก็ได้ใน array โดยการเพิ่ม comma เข้าไปเพื่อเข้าถึง index ที่ต้องการ:

```js
const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);
```

console จะแสดงค่า `a`, `b`, และ `c` เป็น `1, 2, 5`

# --instructions--

จงใช้ destructuring assignment ในการสลับค่าของ `a` และ `b` 
เพื่อให้ `a` เก็บค่าของ `b` และ `b` เก็บค่าของ `a` แทน

# --hints--

ค่าของ `a` ควรเป็น `6` หลังจากสลับ

```js
assert(a === 6);
```

ค่าของ `b` ควรเป็น `8` หลังจากสลับ

```js
assert(b === 8);
```

ต้องใช้ array destructuring ในการสลับค่าของ `a` และ `b`

```js
assert(/\[\s*(\w)\s*,\s*(\w)\s*\]\s*=\s*\[\s*\2\s*,\s*\1\s*\]/g.test(code));
```

# --seed--

## --seed-contents--

```js
let a = 8, b = 6;
// แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
```

# --solutions--

```js
let a = 8, b = 6;
[a, b] = [b, a];
```
