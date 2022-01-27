---
id: 587d7db1367417b2b2512b85
title: Set the Child's Prototype to an Instance of the Parent
challengeType: 1
forumTopicId: 301325
dashedName: set-the-childs-prototype-to-an-instance-of-the-parent
---

# --description--

แบบทดสอบที่แล้ว เราได้สร้าง instance ใหม่ของ `Animal` ไปแล้ว ซึ่งเป็นขั้นตอนแรกในการสืบทอดพฤติกรรมจาก supertype (หรือ parent) ที่ชื่อว่า `Animal`

แบบทดสอบนี้จะสอนขั้นตอนถัดไป นั่นคือการกำหนด `prototype` ของ subtype (หรือ child)  
ในกรณีนี้ `Bird` จะเป็น instance ของ `Animal`:

```js
Bird.prototype = Object.create(Animal.prototype);
```

ถ้ายังจำได้ `prototype` จะเป็นเหมือนแม่พิมพ์ที่ใช้สร้าง object ดังนั้นถ้าใช้แม่พิมพ์เดียวกัน `Bird` ก็ต้องมีลักษณะเหมือน `Animal`

```js
let duck = new Bird("Donald");
duck.eat();
```

`duck` จะสืบทอด property ทุกตัวมาจาก `Animal` รวมถึง method `eat` ด้วย

# --instructions--

ให้แก้โค้ด เพื่อให้ instance ของ `Dog` สืบทอดมาจาก `Animal`

# --hints--

`Dog.prototype` ต้องเป็น instance ของ `Animal`

```js
assert(Animal.prototype.isPrototypeOf(Dog.prototype));
```

# --seed--

## --seed-contents--

```js
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

// แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น


let beagle = new Dog();
```

# --solutions--

```js
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }
Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog();
beagle.eat();
```
