---
id: 587d7daf367417b2b2512b80
title: Remember to Set the Constructor Property when Changing the Prototype
challengeType: 1
forumTopicId: 301323
dashedName: remember-to-set-the-constructor-property-when-changing-the-prototype
---

# --description--

การกำหนด prototype ให้มีค่าเป็น object ใหม่แบบ manual ทำให้เกิดผลกระทบที่สำคัญคือ มีการลบ `constructor` property ไปด้วย ซึ่ง `constructor` property สามารถใช้ตรวจสอบว่า instance สร้างจากฟังก์ชัน constructor ใด แต่เนื่องจาก property นี้ถูกเขียนทับ (overwritten) ดังนั้น หากมีการเรียกใช้ property นี้ ก็จะทำให้เกิดผลลัพธ์ที่ผิดได้

```js
duck.constructor === Bird;
duck.constructor === Object;
duck instanceof Bird;
```

จากคำสั่งด้านบน ได้ผลลัพธ์เป็น `false`, `true` และ `true` ตามลำดับ

อย่างไรก็ตาม ปัญหานี้สามารถแก้ไขได้ โดยเมื่อมีการกำหนด prototype ให้มีค่าเป็น object ใหม่แบบ manual ให้เรากำหนด `constructor` property เข้าไปด้วย

```js
Bird.prototype = {
  constructor: Bird,
  numLegs: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name); 
  }
};
```

# --instructions--

กำหนด `constructor` property ให้กับ `Dog` `prototype`

# --hints--

`Dog.prototype` ควรกำหนด `constructor` property

```js
assert(Dog.prototype.constructor === Dog);
```

# --seed--

## --seed-contents--

```js
function Dog(name) {
  this.name = name;
}

// Only change code below this line
Dog.prototype = {

  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

# --solutions--

```js
function Dog(name) {
  this.name = name;
}
Dog.prototype = {
  constructor: Dog,
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```
