---
id: 587d7db1367417b2b2512b88
title: Override Inherited Methods
challengeType: 1
forumTopicId: 301322
dashedName: override-inherited-methods
---

# --description--

ในบทเรียนที่แล้ว คุณได้เรียนรู้ว่า object สามารถสืบทอดพฤติกรรม (methods) มาจาก object อื่น โดยอ้างอิงถึง `prototype` object

```js
ChildObject.prototype = Object.create(ParentObject.prototype);
```

จากนั้น `ChildObject` ก็จะได้รับ methods ของตนเอง โดยการ chain (คล้องโซ๋) กับ `prototype`

```js
ChildObject.prototype.methodName = function() {...};
```

อย่างไรก็ตาม เราสามารถ override method (เขียนทับ method) ที่สืบทอดมาได้ โดยทำวิธีเดียวกัน นั่นคือการเพิ่ม method ให้กับ `ChildObject.prototype` โดยการใช้ชื่อ method เดียวกับ method ที่เราจะ override ตัวอย่างต่อไปนี้ที่ `Bird` override `eat()` method ที่สืบทอดจาก `Animal`

```js
function Animal() { }
Animal.prototype.eat = function() {
  return "nom nom nom";
};
function Bird() { }

Bird.prototype = Object.create(Animal.prototype);

Bird.prototype.eat = function() {
  return "peck peck peck";
};
```

ถ้าคุณมี instance `let duck = new Bird();` และคุณเรียก `duck.eat()` ต่อไปนี้เป็นวิธีการที่ JavaScript ใช้ค้นหา method ใน `prototype` chain ของ `duck`:

1.  `duck` => มี `eat()` กำหนดไว้หรือไม่? ไม่มี
2.  `Bird` => มี `eat()` กำหนดไว้หรือไม่? => มี ทำการรันและหยุดค้นหาต่อ
3.  `Animal` => มี `eat()` กำหนดไว้เช่นกัน แต่ JavaScript หยุดค้นหาใน step ก่อนหน้านี้แล้ว จึงไม่ได้ทำที่ step นี้
4.  Object => JavaScript หยุดค้นหาก่อนถึง step นี้

# --instructions--

จง override `fly()` method ให้กับ `Penguin` เพื่อให้คืนค่า string `Alas, this is a flightless bird.`

# --hints--

`penguin.fly()` ควรคืนค่าเป็น string `Alas, this is a flightless bird.`

```js
assert(penguin.fly() === 'Alas, this is a flightless bird.');
```

`bird.fly()` method ควรคืนค่าเป็น string `I am flying!`

```js
assert(new Bird().fly() === 'I am flying!');
```

# --seed--

## --seed-contents--

```js
function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Only change code below this line



// Only change code above this line

let penguin = new Penguin();
console.log(penguin.fly());
```

# --solutions--

```js
function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;
Penguin.prototype.fly = () => 'Alas, this is a flightless bird.';
let penguin = new Penguin();
console.log(penguin.fly());
```
