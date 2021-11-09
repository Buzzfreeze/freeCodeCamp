---
id: 587d7b85367417b2b2512b38
title: Catch Use of Assignment Operator Instead of Equality Operator
challengeType: 1
forumTopicId: 301191
dashedName: catch-use-of-assignment-operator-instead-of-equality-operator
---

# --description--

Branching programs เช่น โปรแกรมที่สั่งให้ทำงานอย่างนึงหากเข้าเงื่อนไขหนึ่งๆ และทำงานอีกแบบหากไม่เข้าเงื่อนไข โดย Branching programs มักมีการใช้ `if`, `else if` และ `else` statements ซึ่งเงื่อนไขบางครั้งก็เป็นการตรวจสอบว่า ผลลัพธ์มีค่าเท่ากับค่าหนึ่งๆ หรือไม่

เมื่อพูดถึง logic การทำงานที่เป็นภาษาอังกฤษก็เขียนเป็น if x equals y, then ..." ทำให้เราอาจแปลงโค้ดเป็นการใช้ `=` หรือ assignment operator ได้ ซึ่งก่อให้เกิดการทำงานที่ไม่ถูกต้อง

จากแบบทดสอบก่อนหน้านี้ assignment operator (`=`) ใน JavaScript ใช้กำหนดค่าให้กับตัวแปร ส่วน `==` และ `===` ใช้ในการตรวจสอบเงื่อนไขว่าเท่ากันหรือไม่ (`===` ใช้ในการตรวจสอบ strict equality หมายถึงต้องเหมือนกันทั้งค่าและชนิดข้อมูล)

โค้ดด้านล่างนี้กำหนดค่า 2 ให้ตัวแปร `x` ซึ่งมีค่าเป็น `true` อย่างไรก็ตาม ค่าเกือบทุกค่าใน JavaScript มีค่าเป็น `true` ทั้งนั้น ยกเว้นค่าที่เรียกว่า "falsy" values ได้แก่ `false`, `0`, `""` (an empty string), `NaN`, `undefined` และ `null`

```js
let x = 1;
let y = 2;
if (x = y) {

} else {

}
```

จากตัวอย่างนี้ โค้ดที่อยู่ภายใน `if` statement จะรันเสมอไม่ว่าค่า `y` จะเป็นอะไรก็ตาม เว้นแต่ `y` เป็น falsy ดังนั้น โค้ดภายใน `else` ที่เราคาดหวังให้รัน ก็จะไม่ถูกรัน

# --instructions--

จงปรับแก้เงื่อนไข เพื่อให้โปรแกรมรันได้ถูกต้อง และ `result` แสดงผลลัพธ์ได้ถูกต้อง

# --hints--

ควรแก้ไขเงื่อนไข เพื่อให้ตรวจสอบว่าเท่ากันหรือไม่ แทนที่จะเป็นการกำหนดค่าให้ตัวแปร

```js
assert(result == 'Not equal!');
```

เงื่อนไขควรใช้ `==` หรือ `===` เพื่อตรวจสอบว่าเท่ากันหรือไม่

```js
assert(code.match(/x\s*?===?\s*?y/g));
```

# --seed--

## --seed-contents--

```js
let x = 7;
let y = 9;
let result = "to come";

if(x = y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}

console.log(result);
```

# --solutions--

```js
let x = 7;
let y = 9;
let result = "to come";

if(x === y) {
 result = "Equal!";
} else {
 result = "Not equal!";
}

console.log(result);
```
