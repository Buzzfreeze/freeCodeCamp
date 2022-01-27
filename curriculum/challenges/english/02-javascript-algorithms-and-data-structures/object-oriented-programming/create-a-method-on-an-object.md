---
id: 587d7dad367417b2b2512b75
title: Create a Method on an Object
challengeType: 1
forumTopicId: 301318
dashedName: create-a-method-on-an-object
---

# --description--

object สามารถมี property ชนิดพิเศษ เรียกว่า <dfn>method</dfn> ได้ด้วย

method ก็คือ property ที่เป็นฟังก์ชัน ซึ่งจะทำให้ object ทำอย่างอื่นได้ 
ตัวอย่างด้านล่างเป็น object `duck` ที่มี method ด้วย

```js
let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + duck.name + ".";}
};
duck.sayName();
```

ในตัวอย่างจะมี method `sayName` ซึ่งเป็นฟังก์ชันที่คืนค่าเป็นประโยคที่มีชื่อของ `duck` อยู่ด้วย  
จะเห็นว่า method ที่เข้าถึง property `name` ในคำสั่ง return มีการใช้ `duck.name` ด้วย สำหรับแบบทดสอบถัดไปจะสินวิธีการเข้าถึง property ในรูปแบบอื่น 

# --instructions--

ให้สร้าง object `dog` ที่มี method `sayLegs` โดย method นี้ต้องคืนค่าเป็นประโยค `This dog has 4 legs.`

# --hints--

`dog.sayLegs()` ต้องเป็นฟังก์ชัน

```js
assert(typeof dog.sayLegs === 'function');
```

`dog.sayLegs()` ต้องคืนค่าเป็น string โดยต้องมีเครื่องหมายจุด (`.`) และเว้นวรรคตามที่กำหนด

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
