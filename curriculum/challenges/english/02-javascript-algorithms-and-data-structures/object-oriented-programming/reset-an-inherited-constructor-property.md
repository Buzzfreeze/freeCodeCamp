---
id: 587d7db1367417b2b2512b86
title: Reset an Inherited Constructor Property
challengeType: 1
forumTopicId: 301324
dashedName: reset-an-inherited-constructor-property
---

# --description--

เมื่อ object สืบทอด `prototype` มาจากอีก object นึง ก็มีการสืบทอด constructor property มาจาก supertype ด้วย 

ดังตัวอย่างนี้

```js
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird();
duck.constructor
```

แต่ `duck` และ instances อื่นๆ ของ `Bird` ควรแสดงให้เห็นว่า สร้างมาจาก `Bird` ไม่ใช่ `Animal` ในการทำดังกล่าว คุณสามารถกำหนด constructor property ของ `Bird` ให้กับ `Bird` object แบบ manual ได้

```js
Bird.prototype.constructor = Bird;
duck.constructor
```

# --instructions--

จงปรับแก้โค้ด โดยให้ `duck.constructor` และ `beagle.constructor` คืนค่าเป้น constructor ของตัวเอง

# --hints--

`Bird.prototype` ควรเป็น instance ของ `Animal`.

```js
assert(Animal.prototype.isPrototypeOf(Bird.prototype));
```

`duck.constructor` ควรคืนค่า `Bird`.

```js
assert(duck.constructor === Bird);
```

`Dog.prototype` ควรเป็น instance ของ `Animal`.

```js
assert(Animal.prototype.isPrototypeOf(Dog.prototype));
```

`beagle.constructor` ควรคืนค่า `Dog`.

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

// Only change code below this line



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
