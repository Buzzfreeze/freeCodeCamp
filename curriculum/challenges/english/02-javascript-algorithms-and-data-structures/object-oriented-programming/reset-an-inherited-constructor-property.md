---
id: 587d7db1367417b2b2512b86
title: Reset an Inherited Constructor Property
challengeType: 1
forumTopicId: 301324
dashedName: reset-an-inherited-constructor-property
---

# --description--

เมื่อ object สืบทอด `prototype` มาจากอีก object นึง ก็จะสืบทอด constructor property มาจาก supertype ด้วย 

ลองดูตัวอย่างด้านล่าง:

```js
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird();
duck.constructor
```

แต่ `duck` และ instances อื่นๆ ของ `Bird` ควรแสดงให้เห็นว่าถูกสร้างมาจาก `Bird` ไม่ใช่ `Animal` 
ซึ่งเราจะแก้ constructor property ของ `Bird` โดยเปลี่ยนให้เป็น object `Bird` ได้ ตามตัวอย่างด้านล่าง:

```js
Bird.prototype.constructor = Bird;
duck.constructor
```

# --instructions--

ให้แก้โค้ด เพื่อทำให้ `duck.constructor` และ `beagle.constructor` คืนค่าเป้น constructor ของตัวเอง

# --hints--

`Bird.prototype` ต้องเป็น instance ของ `Animal`

```js
assert(Animal.prototype.isPrototypeOf(Bird.prototype));
```

`duck.constructor` ต้องมีค่าเป็น `Bird`

```js
assert(duck.constructor === Bird);
```

`Dog.prototype` ต้องเป็น instance ของ `Animal`

```js
assert(Animal.prototype.isPrototypeOf(Dog.prototype));
```

`beagle.constructor` ต้องมีค่าเป็น `Dog`

```js
assert(beagle.constructor === Dog);
```

# --seed--

## --seed-contents--

```js
function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น



let duck = new Bird();
let beagle = new Dog();
```

# --solutions--

```js
function Animal() { }
function Bird() { }
function Dog() { }
Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Bird.prototype.constructor = Bird;
let duck = new Bird();
let beagle = new Dog();
```
