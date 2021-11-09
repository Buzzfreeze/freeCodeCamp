---
id: 587d7db1367417b2b2512b85
title: Set the Child's Prototype to an Instance of the Parent
challengeType: 1
forumTopicId: 301325
dashedName: set-the-childs-prototype-to-an-instance-of-the-parent
---

# --description--

แบบทดสอบที่แล้ว คุณได้เห็นขั้นตอนแรกของการสืบทอดพฤติกรรมจาก supertype (หรือ parent) `Animal` คือการสร้าง instance ใหม่ของ `Animal`

แบบทดสอบนี้จะกล่าวถึงขั้นตอนถัดไป นั่นคือการกำหนด `prototype` ของ subtype (หรือ child) สำหรับกรณีนี้ `Bird` เป็น instance ของ `Animal`

```js
Bird.prototype = Object.create(Animal.prototype);
```

จากที่ได้กล่าวมาแล้วว่า `prototype` เปรียบดัง "สูตรสำเร็จ" ในการสร้าง object ดังนี้แล้ว สูตรของ `Bird` ตอนนี้ประกอบด้วย "ส่วนประกอบ" จาก `Animal`

```js
let duck = new Bird("Donald");
duck.eat();
```

`duck` สืบทอด properties ทุกอย่างมาจาก `Animal` รวมถึง `eat` method ด้วย

# --instructions--

จงปรับแก้โค้ด เพื่อให้ instance ของ `Dog` สืบทอดจาก `Animal`

# --hints--

`Dog.prototype` ควรเป็น instance ของ `Animal`.

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

// Only change code below this line


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
