---
id: 587d7daf367417b2b2512b7d
title: Iterate Over All Properties
challengeType: 1
forumTopicId: 301320
dashedName: iterate-over-all-properties
---

# --description--

ตอนนี้คุณเรียนเรื่อง property ไปแล้ว 2 ประเภท คือ <dfn>own property</dfn> และ `prototype` property 
โดย own property คือ property ที่ถูกกำหนดโดยตรงภายใน instance ของ object ส่วน `prototype` property นั้นจะถูกกำหนดจาก `prototype`

```js
function Bird(name) {
  this.name = name;  //own property
}

Bird.prototype.numLegs = 2; // prototype property

let duck = new Bird("Donald");
```

ตัวอย่างด้านล่างนี้เป็นการนำ own property ของ `duck` ไปเก็บใน array `ownProps` และ `prototype` property ของ `duck` ไปเก็บใน array `prototypeProps`:

```js
let ownProps = [];
let prototypeProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

console.log(ownProps);
console.log(prototypeProps);
```

`console.log(ownProps)` จะแสดง `["name"]` ในหน้า console และ `console.log(prototypeProps)` จะแสดง `["numLegs"]`

# --instructions--

ให้เก็บ own property ของ `beagle` ใน array `ownProps` และเก็บ `prototype` property ของ `Dog` ใน array `prototypeProps`

# --hints--

array `ownProps` ต้องมีค่าเป็น `name` เพียงตัวเดียว

```js
assert.deepEqual(ownProps, ['name']);
```

array `prototypeProps` ต้องมีค่าเป็น `numLegs` เพียงตัวเดียว

```js
assert.deepEqual(prototypeProps, ['numLegs']);
```

ห้ามใช้ method `Object.keys()` ในแบบทดสอบนี้

```js
assert(!/\Object.keys/.test(code));
```

# --seed--

## --seed-contents--

```js
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
```

# --solutions--

```js
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];
for (let prop in beagle) {
  if (beagle.hasOwnProperty(prop)) {
    ownProps.push(prop);
  } else {
    prototypeProps.push(prop);
  }
}
```
