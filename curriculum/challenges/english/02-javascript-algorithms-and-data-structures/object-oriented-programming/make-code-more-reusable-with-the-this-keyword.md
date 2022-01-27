---
id: 587d7dad367417b2b2512b76
title: Make Code More Reusable with the this Keyword
challengeType: 1
forumTopicId: 301321
dashedName: make-code-more-reusable-with-the-this-keyword
---

# --description--

แบบทดสอบที่แล้ว เราได้กำหนด method ให้กับ object `duck` และในคำสั่ง return ได้มีการใช้ `duck.name` เพื่อเข้าถึงค่าของ property `name` 

```js
sayName: function() {return "The name of this duck is " + duck.name + ".";}
```

ถึงเราจะใช้วิธีนี้เพื่อเข้าถึง property ของ object ได้ แต่ถ้า object ที่ชื่อ `duck` เปลี่ยนชื่อเป็นชื่ออื่น โค้ดต่างๆที่มาอ่านค่าของ object นี้ก็จะต้องเปลี่ยนชื่อตามไปด้วย  
ซึ่งถ้า object เป็นแค่โค้ดไม่กี่บรรทัด ก็คงไม่ได้มีปัญหาอะไร แต่ถ้า object มีโค้ดที่มาอ่านค่าหลายๆตัว ก็มีโอกาสที่เราจะเปลี่ยนชื่อตามไม่ครบและทำให้เกิด error ได้

วิธีการป้องกันไม่ให้เกิดเรื่องแบบนี้คือการใช้ `this`

```js
let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + this.name + ".";}
};
```

การใช้ `this` จริงๆแล้วจะมีรายละเอียดอีกมาก ตัวอย่างด้านบนเป็นแค่ 1 ในหลายๆวิธีที่เราจะใช้ `this` ได้  
ในตัวอย่างนี้ การใช้ `this` จะเป็นเหมือนการใช้ object `duck` ภายใน method ซึ่งถ้าชื่อของ object เปลี่ยนเป็น `mallard` เราก็ไม่จำเป็นต้องหาไล่โค้ดที่ยังใช้คำว่า `duck` อยู่  
วิธีนี้ทำให้เราสามารถนำโค้ดกลับมาใช้ซ้ำได้ และทำให้โค้ดอ่านได้ง่ายด้วย

# --instructions--

ให้แก้ method `dog.sayLegs` โดยลบการอ่านค่าจาก `dog` ออกและใช้ `this` แทน โดยให้ดูตัวอย่าง `duck` ประกอบ

# --hints--

การเรียกใช้ `dog.sayLegs()` ต้องได้ค่าเป็น string

```js
assert(dog.sayLegs() === 'This dog has 4 legs.');
```

ต้องใช้ `this` เพื่อเข้าถึง property `numLegs` ของ object `dog`

```js
assert(code.match(/this\.numLegs/g));
```

# --seed--

## --seed-contents--

```js
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + dog.numLegs + " legs.";}
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
