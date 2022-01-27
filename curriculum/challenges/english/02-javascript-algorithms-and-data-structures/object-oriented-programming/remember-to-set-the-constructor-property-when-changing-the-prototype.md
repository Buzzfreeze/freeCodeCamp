---
id: 587d7daf367417b2b2512b80
title: Remember to Set the Constructor Property when Changing the Prototype
challengeType: 1
forumTopicId: 301323
dashedName: remember-to-set-the-constructor-property-when-changing-the-prototype
---

# --description--

การกำหนด prototype ให้มีค่าเป็น object ใหม่แบบที่เราได้เรียนมา จะทำให้เกิดผลกระทบใหญ่ๆ อย่างหนึ่งก็คือ `constructor` property จะถูกเขียนทับไปด้วย ซึ่ง `constructor` property สามารถใช้ตรวจสอบว่า instance สร้างจากฟังก์ชัน constructor ตัวไหน ซึ่งการที่ property นี้ถูกเขียนทับ จะทำให้การเรียกใช้ property นี้เกิดผลลัพธ์ที่ผิด

```js
duck.constructor === Bird;
duck.constructor === Object;
duck instanceof Bird;
```

ตัวอย่างด้านบน จะได้ค่าเป็น `false`, `true` และ `true` ตามลำดับ

แต่เราก็แก้ปัญหานี้ได้ ถ้าเวลาที่กำหนดค่า prototype ด้วย object ตัวใหม่ แล้วเรากำหนด `constructor` property เข้าไปด้วย
เหมือนในตัวอย่างนี้:

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

ให้กำหนด `constructor` property ให้กับ `Dog` `prototype`

# --hints--

ต้องกำหนด `constructor` property ให้กับ `Dog.prototype`

```js
assert(Dog.prototype.constructor === Dog);
```

# --seed--

## --seed-contents--

```js
function Dog(name) {
  this.name = name;
}

// แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
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
