---
id: 587d7dae367417b2b2512b7a
title: Verify an Object's Constructor with instanceof
challengeType: 1
forumTopicId: 301337
dashedName: verify-an-objects-constructor-with-instanceof
---

# --description--

เมื่อฟังก์ชัน constructor สร้าง object ใหม่ เราจะเรียกว่า object เป็น <dfn>instance</dfn> ของ constructor 
ซึ่ง JavaScript มีวิธีให้เราตรวจสอบว่า object นั้นเป็น instance ของอะไรโดยใช้คำสั่ง `instanceof` 
`instanceof` จะทำการเปรียบเทียบ object กับ constructor ที่ระบุแล้ว return ค่าเป็น `true` หรือ `false` ขึ้นอยู่กับว่า object นั้นมีถูกสร้างจาก constructor นั้นหรือไม่ 
ลองดูตัวอย่างด้านล่างนี้:

```js
let Bird = function(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

let crow = new Bird("Alexis", "black");

crow instanceof Bird;
```

ในตัวอย่างนี้ method `instanceof` นี้จะคืนค่าเป็น `true`

ถ้า object ไม่ได้ถูกสร้างจาก constructor คำสั่ง `instanceof` จะรู้ว่า object ไม่ใช่ instance ของ constructor:

```js
let canary = {
  name: "Mildred",
  color: "Yellow",
  numLegs: 2
};

canary instanceof Bird;
```

ในตัวอย่างนี้ method `instanceof` นี้จะคืนค่าเป็น `false`

# --instructions--

จงสร้าง instance ใหม่จาก constructor `House` แล้วตั้งชื่อว่า `myHouse` แล้วให้ส่งค่าจำนวนห้องนอนเข้าไปใน constructor จากนั้นให้ใช้ `instanceof` เพื่อตรวจสอบว่าเป็น instance ของ `House` หรือไม่

# --hints--

ตัวแปร `myHouse` ต้องมี attribute `numBedrooms` ซึ่งมีค่าเป็น number

```js
assert(typeof myHouse.numBedrooms === 'number');
```

ต้องตรวจสอบด้วยว่า `myHouse` เป็น instance ของ `House` หรือไม่ โดยใช้คำสั่ง `instanceof`

```js
assert(/myHouse\s*instanceof\s*House/.test(code));
```

# --seed--

## --seed-contents--

```js
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// แก้ไขโค้ดใต้บรทัดนี้เท่านั้น
```

# --solutions--

```js
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}
const myHouse = new House(4);
console.log(myHouse instanceof House);
```
