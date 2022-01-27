---
id: 587d7db0367417b2b2512b81
title: Understand Where an Object’s Prototype Comes From
challengeType: 1
forumTopicId: 301330
dashedName: understand-where-an-objects-prototype-comes-from
---

# --description--

object จะสืบทอด `prototype` มาจากฟังก์ชัน constructor ที่สร้าง object นั้นมา เหมือนกับคนที่สืบทอดยีนส์มาจากพ่อแม่  
ลองดูตัวอย่างเวลาใช้ `Bird` constructor สร้าง object `duck`:


```js
function Bird(name) {
  this.name = name;
}

let duck = new Bird("Donald");
```

`duck` จะสืบทอด `prototype` มาจากฟังก์ชัน constructor ที่ชื่อ `Bird` ซึ่งคุณสามารถตรวจสอบความสัมพันธ์โดยใช้ method `isPrototypeOf`

```js
Bird.prototype.isPrototypeOf(duck);
```

โค้ดด้านบนจะได้ค่าเป็น `true`

# --instructions--

ให้ใช้ `isPrototypeOf` เพื่อตรวจสอบ `prototype` ของ `beagle`

# --hints--

คุณต้องตรวจสอบว่า `Dog.prototype` เป็น `prototype` ของ `beagle`

```js
assert(/Dog\.prototype\.isPrototypeOf\(beagle\)/.test(code));
```

# --seed--

## --seed-contents--

```js
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

// แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
```

# --solutions--

```js
function Dog(name) {
  this.name = name;
}
let beagle = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle);
```
