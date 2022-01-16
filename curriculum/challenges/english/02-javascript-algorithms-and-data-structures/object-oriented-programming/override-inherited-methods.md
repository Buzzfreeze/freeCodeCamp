---
id: 587d7db1367417b2b2512b88
title: Override Inherited Methods
challengeType: 1
forumTopicId: 301322
dashedName: override-inherited-methods
---

# --description--

ในบทเรียนที่แล้ว คุณรู้แล้วว่า object สามารถสืบทอดพฤติกรรม (method) มาจาก object อื่นโดยอ้างอิงถึง `prototype` object ได้ ตามตัวอย่างนี้:

```js
ChildObject.prototype = Object.create(ParentObject.prototype);
```

จากนั้นเราก็จะสร้าง method ให้กับ `ChildObject` โดยการ chain กับ `prototype`

```js
ChildObject.prototype.methodName = function() {...};
```

แล้วเราก็สามารถสร้าง method มาทับ method ที่สืบทอดมาได้ วิธีทำก็เหมือนข้างบนเลยคือการเพิ่ม method ให้กับ `ChildObject.prototype` โดยการใช้ชื่อ method เดียวกับ method ที่เราจะเขียนทับ 
ลองดูตัวอย่างด้านล่าง ที่เราจะเขียน method ใหม่มาทับ `eat()` ใน `Bird` ที่สืบทอดมาจาก `Animal`:

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

ถ้าคุณมี instance `let duck = new Bird();` และเรียกใช้ `duck.eat()` JavaScript จะใช้ขั้นตอนนี้ในการหา method ใน `prototype` chain ของ `duck`:

1.  `duck` => กำหนดค่าของ `eat()` ไว้หรือไม่? ไม่มี
2.  `Bird` => กำหนดค่าของ `eat()` ไว้หรือไม่? => มี ก็จะเรียกใช้ method และหยุดหาต่อ
3.  `Animal` => กำหนดค่าของ `eat()` ไว้เหมือนกัน แต่ JavaScript หยุดค้นหาไปแล้วเลยมาไม่ถึงขั้นนี้
4.  Object => JavaScript หยุดค้นหาก่อนถึงขั้นนี้

# --instructions--

ให้เขียนทับ method `fly()` ใน `Penguin` และให้คืนค่าเป็น string `Alas, this is a flightless bird.`

# --hints--

การเรียกใช้ `penguin.fly()` ต้องคืนค่าเป็น string `Alas, this is a flightless bird.`

```js
assert(penguin.fly() === 'Alas, this is a flightless bird.');
```

method `bird.fly()` ต้องคืนค่าเป็น string `I am flying!`

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

// แก้ไขโค้ดใต้บรทัดนี้เท่านั้น



// แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น

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
