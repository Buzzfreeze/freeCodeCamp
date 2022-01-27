---
id: 587d7db1367417b2b2512b87
title: Add Methods After Inheritance
challengeType: 1
forumTopicId: 301315
dashedName: add-methods-after-inheritance
---

# --description--

ฟังก์ชัน constructor ที่สืบทอด `prototype` object มาจากฟังก์ชัน constructor ของ supertype ก็จะมี method ของตัวเองนอกเหนือจาก method ที่สืบทอดมาได้ด้วย

ตัวอย่างเช่น `Bird` เป็น constructor ที่สืบทอด `prototype` มาจาก `Animal`:

```js
function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
```

ถ้าคุณอยากให้ object `Bird` ทำอะไรได้มากกว่าแค่ที่สืบทอดมาจาก `Animal` เช่นในตัวอย่างนี้ที่คุณอยากให้ `Bird` มีฟังก์ชัน `fly()` ด้วย  
ถ้าเราจะเพิ่มฟังก์ชันให้กับ `Bird` `prototype` เราจะใช้วิธีเดียวกับการกำหนดค่าให้ฟังก์ชัน constructor อื่นๆ

```js
Bird.prototype.fly = function() {
  console.log("I'm flying!");
};
```

ตอนนี้ instance ของ `Bird` จะมีทั้ง method `eat()` และ `fly()`

```js
let duck = new Bird();
duck.eat();
duck.fly();
```

การเรียกใช้ `duck.eat()` ต้องแสดง string `nom nom nom` ในหน้า console และการเรียกใช้ `duck.fly()` ต้องแสดง string `I'm flying!`

# --instructions--

ให้แก้โค้ดตามเงื่อนไขดังนี้

1. ให้ object `Dog` สืบทอดมาจาก `Animal` 
2. กำหนดให้ `prototype` constructor ของ `Dog` มีค่าเป็น `Dog` 
3. ให้เพิ่ม method `bark()` ให้กับ object `Dog` เพื่อให้ `beagle` ใช้ทั้งฟังก์ชัน `eat()` และ `bark()` ได้ 
4. method `bark()` ต้องแสดงผลเป็นคำว่า `Woof!` บนหน้า console

# --hints--

`Animal` ไม่ควรเรียก `bark()` method ได้

```js
assert(typeof Animal.prototype.bark == 'undefined');
```

`Dog` ควรสืบทอด `eat()` method มาจาก `Animal`

```js
assert(typeof Dog.prototype.eat == 'function');
```

`Dog` ควรมี `bark()` method

```js
assert('bark' in Dog.prototype);
```

`beagle` ควรเป็น `instanceof` ของ `Animal`

```js
assert(beagle instanceof Animal);
```

constructor ของ `beagle` ควรกำหนดเป็น `Dog`

```js
assert(beagle.constructor === Dog);
```

`beagle.eat()` ควรแสดงค่า string `nom nom nom`

```js
console.log = function (msg) {
  throw msg;
};
assert.throws(() => beagle.eat(), 'nom nom nom');
```

`beagle.bark()` ควรแสดงค่า string `Woof!`

```js
console.log = function (msg) {
  throw msg;
};
assert.throws(() => beagle.bark(), 'Woof!');
```

# --seed--

## --seed-contents--

```js
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// แก้ไขโค้ดใต้บรทัดนี้เท่านั้น




// แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น

let beagle = new Dog();
```

# --solutions--

```js
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function () {
  console.log('Woof!');
};
let beagle = new Dog();

beagle.eat();
beagle.bark();
```
