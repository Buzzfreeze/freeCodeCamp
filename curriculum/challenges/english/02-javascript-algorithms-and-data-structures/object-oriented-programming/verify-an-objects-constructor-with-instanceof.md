---
id: 587d7dae367417b2b2512b7a
title: Verify an Object's Constructor with instanceof
challengeType: 1
forumTopicId: 301337
dashedName: verify-an-objects-constructor-with-instanceof
---

# --description--

เมื่อใดก็ตามที่ฟังก์ชัน constructor มีการสร้าง object ใหม่ object นั้นก็คือ <dfn>instance</dfn> ของ constructor ซึ่ง JavaScript มีวิธีให้เราตรวจสอบได้สะดวกโดยใช้ `instanceof` operator โดย `instanceof` ทำการเปรียบเทียบ object กับ constructor แล้ว return ค่าเป็น `true` หรือ `false` ขึ้นกับว่า object นั้นมีการสร้างจาก constructor นั้นหรือไม่ ดังตัวอย่างด้านล่างนี้

```js
let Bird = function(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

let crow = new Bird("Alexis", "black");

crow instanceof Bird;
```

`instanceof` method นี้จะคืนค่าเป็น `true`

หาก object ไม่ได้ถูกสร้างจาก constructor คำสั่ง `instanceof` จะตรวจสอบว่ามันไม่ใช่ instance ของ constructor:

```js
let canary = {
  name: "Mildred",
  color: "Yellow",
  numLegs: 2
};

canary instanceof Bird;
```

`instanceof` method นี้จะคืนค่าเป็น `false`

# --instructions--

จงสร้าง instance ใหม่จาก constructor `House`  แล้วตั้งชื่อว่า `myHouse` แล้วให้ส่ง (pass) ค่าจำนวนห้องนอนเข้าไป จากนั้นให้ใช้`instanceof` เพื่อตรวจสอบว่าเป็น instance ของ `House` หรือไม่

# --hints--

`myHouse` ควรมี `numBedrooms` attribute และกำหนดให้เป็น number

```js
assert(typeof myHouse.numBedrooms === 'number');
```

คุณควรตรวจสอบว่า `myHouse` เป็น instance ของ `House` หรือไม่ โดยใช้ `instanceof` operator

```js
assert(/myHouse\s*instanceof\s*House/.test(code));
```

# --seed--

## --seed-contents--

```js
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Only change code below this line
```

# --solutions--

```js
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}
const myHouse = new House(4);
console.log(myHouse instanceof House);
```
