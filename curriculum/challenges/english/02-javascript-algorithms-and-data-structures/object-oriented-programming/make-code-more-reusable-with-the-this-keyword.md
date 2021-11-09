---
id: 587d7dad367417b2b2512b76
title: Make Code More Reusable with the this Keyword
challengeType: 1
forumTopicId: 301321
dashedName: make-code-more-reusable-with-the-this-keyword
---

# --description--

แบบทดสอบที่แล้ว เราได้กำหนด method ให้กับ object `duck` และใน return statement ได้มีการใช้ `duck.name` ในการเข้าถึงค่าของ property `name` 

```js
sayName: function() {return "The name of this duck is " + duck.name + ".";}
```

แม้ว่าวิธีนี้สามารถเข้าถึง property ของ object ได้ แต่ก็ยังมีข้อควรระวัง กล่าวคือ หาก object `duck` เปลี่ยนชื่อเป็นชื่ออื่น โค้ดต่างๆ ที่อ้างถึง object นี้ก็จะต้องเปลี่ยนชื่อตามไปด้วย ซึ่งหาก object มีโค้ดไม่กี่บรรทัด ก็คงไม่ได้ทำให้เกิดปัญหา แต่หาก object มีโค้ดที่อ้างอิงหลายบรรทัด ก็มีโอกาสที่เราอาจเปลี่ยนชื่อตามไม่ครบและทำให้เกิด error ได้

วิธีการป้องกันไม่ให้เกิดเหตุการณ์นี้คือ การใช้ `this`

```js
let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + this.name + ".";}
};
```

`this` มีเนื้อหาที่มีรายละเอียดค่อนข้างมาก และด้านบนก็เป็นตัวอย่างนึงที่ใช้ `this` โดยบริบทในตัวอย่างนี้ มีการใช้ `this` อ้างอิง object `duck` ภายใน method ซึ่งถ้าชื่อของ object เปลี่ยนเป็น `mallard` เราก็ไม่จำเป็นต้องหาโค้ดทั้งหมดที่อ้างอิงถึง `duck` วิธีนี้ทำให้เราสามารถนำโค้ดกลับมาใช้ซ้ำได้ (reusable) และอ่านโค้ดได้ง่ายด้วย

# --instructions--

จงปรับแก้ method `dog.sayLegs` ให้นำการอ้างอิงด้วย `dog` ออก โดยดูตัวอย่าง `duck` ประกอบ

# --hints--

`dog.sayLegs()` ควรคืนค่าเป็น string

```js
assert(dog.sayLegs() === 'This dog has 4 legs.');
```

โค้ดของคุณควรใช้ `this` ในการเข้าถึง property `numLegs` ของ object `dog`.

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
