---
id: 587d7daf367417b2b2512b7d
title: Iterate Over All Properties
challengeType: 1
forumTopicId: 301320
dashedName: iterate-over-all-properties
---

# --description--

ตอนนี้คุณได้เห็น properties ทั้ง 2 ประเภท คือ <dfn>own properties</dfn> และ `prototype` properties โดย own properties กำหนดโดยตรงภายใน object instance ส่วน prototype properties กำหนดด้วย `prototype` operator

```js
function Bird(name) {
  this.name = name;  //own property
}

Bird.prototype.numLegs = 2; // prototype property

let duck = new Bird("Donald");
```

ตัวอย่างด้านล่างนี้เป็นการนำ own properties ของ `duck` ไปเก็บใน array `ownProps` และ `prototype` properties ของ `duck` ไปเก็บใน array `prototypeProps`:

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

`console.log(ownProps)` ควรแสดง `["name"]` ในหน้า console และ `console.log(prototypeProps)` ควรแสดง `["numLegs"]`

# --instructions--

จงนำ own properties ของ `beagle` ไปเก็บใน array `ownProps` และนำ `prototype` properties ของ `Dog` ไปเก็บใน array `prototypeProps`

# --hints--

`ownProps` array ควรเก็บเพียง `name`

```js
assert.deepEqual(ownProps, ['name']);
```

`prototypeProps` array ควรเก็บเพียง `numLegs`

```js
assert.deepEqual(prototypeProps, ['numLegs']);
```

แบบทดสอบนี้ห้ามใช้ method `Object.keys()`.

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

// Only change code below this line
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
