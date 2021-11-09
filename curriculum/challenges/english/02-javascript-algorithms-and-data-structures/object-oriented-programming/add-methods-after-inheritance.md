---
id: 587d7db1367417b2b2512b87
title: Add Methods After Inheritance
challengeType: 1
forumTopicId: 301315
dashedName: add-methods-after-inheritance
---

# --description--

ฟังก์ชัน constructor ที่สืบทอด `prototype` object มาจากฟังก์ชัน constructor ของ supertype สามารถมี method ของตนเองเพิ่มเติมจาก method ที่สืบทอดมาได้ 

ตัวอย่างเช่น `Bird` เป็น constructor ที่สืบทอด `prototype` มาจาก `Animal`

```js
function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
```

นอกเหนือจากสิ่งที่สืบทอดมาจาก `Animal` แล้ว คุณต้องการเพิ่มพฤติกรรมเฉพาะตัวของ `Bird` objects อย่างเช่นกรณีนี้ `Bird` จะมีฟังก์ชัน `fly()` ซึ่งเราสามารถเพิ่มฟังก์ชันให้กับ `Bird's` `prototype` ด้วยวิธีเดียวกับฟังก์ชัน constructor อื่นๆ

```js
Bird.prototype.fly = function() {
  console.log("I'm flying!");
};
```

ตอนนี้ instance ของ `Bird` จะมีทั้ง `eat()` และ `fly()` methods

```js
let duck = new Bird();
duck.eat();
duck.fly();
```

`duck.eat()` ควรแสดงค่า string `nom nom nom` ในหน้า console และ `duck.fly()` ควรแสดงค่า string `I'm flying!`.

# --instructions--

จงปรับแก้โค้ด เพื่อให้ `Dog` object สืบทอดมาจาก `Animal` และกำหนดให้ `prototype` constructor ของ `Dog` มีค่าเป็น `Dog` จากนั้นให้เพิ่ม `bark()` method ให้กับ `Dog` object เพื่อให้ `beagle` สามารถทำทั้ง `eat()` และ `bark()` ได้ และ `bark()` method ควรพิมพ์ `Woof!` ในหน้า console

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

`beagle` ควรเป็น `instanceof` `Animal`.

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

// Only change code below this line




// Only change code above this line

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
