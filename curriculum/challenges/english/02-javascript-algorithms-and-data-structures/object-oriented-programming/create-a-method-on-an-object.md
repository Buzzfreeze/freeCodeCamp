---
id: 587d7dad367417b2b2512b75
title: Create a Method on an Object
challengeType: 1
forumTopicId: 301318
dashedName: create-a-method-on-an-object
---

# --description--

object สามารถมี property ชนิดพิเศษ เรียกว่า <dfn>method</dfn>
method ก็คือ property ที่เป็นฟังก์ชัน ซึ่งกำหนดพฤติกรรม (behavior) ต่างๆ ให้กับ object ตัวอย่างต่อไปนี้เป็น object `duck` ที่มีการกำหนด mehtod

```js
let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + duck.name + ".";}
};
duck.sayName();
```

จากตัวอย่าง ได้มีการเพิ่ม method `sayName` ซึ่งเป็นฟังก์ชันที่คืนค่าเป็นประโยคที่มีชื่อของ `duck` สังเกตว่า method ที่เข้าถึง property `name` ในคำสั่ง return มีการใช้ `duck.name` ด้วย สำหรับแบบทดสอบถัดไปจะแสดงการเข้าถึง property ในอีกรูปแบบนึง 

# --instructions--

ให้สร้าง object `dog` ที่มี mehtod `sayLegs` โดย method นี้ควรคืนค่าเป็นประโยค `This dog has 4 legs.`

# --hints--

`dog.sayLegs()` ควรเป็นฟังก์ชัน

```js
assert(typeof dog.sayLegs === 'function');
```

`dog.sayLegs()` ควรคืนค่าเป็น string โดยต้องมีเครื่องหมาย เช่น . และช่องว่าง (space) ต่างๆ ตามที่กำหนด

```js
assert(dog.sayLegs() === 'This dog has 4 legs.');
```

# --seed--

## --seed-contents--

```js
let dog = {
  name: "Spot",
  numLegs: 4,

};

dog.sayLegs();
```

# --solutions--

```js
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs () {
    return 'This dog has ' + this.numLegs + ' legs.';
  }
};

dog.sayLegs();
```
