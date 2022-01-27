---
id: 587d7db0367417b2b2512b84
title: Inherit Behaviors from a Supertype
challengeType: 1
forumTopicId: 301319
dashedName: inherit-behaviors-from-a-supertype
---

# --description--

ในแบบทดสอบที่แล้ว เราได้สร้าง `supertype` ที่มีชื่อว่า `Animal` ซึ่งกำหนดพฤติกรรมที่สัตว์ทุกตัวจะมีเหมือนกันแล้ว

```js
function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
```

แบบทดสอบนี้และแบบทดสอบถัดไปจะสอนวิธีเรียกใช้ method ของ `Animal` ภายใน `Bird` และ `Dog` โดยที่เราไม่ต้องกำหนด method เหล่านั้นอีกครั้งใน `Bird` และ `Dog` วิธีการนี้ใช้เทคนิคที่เรียกว่า inheritance (การสืบทอด)  
แบบทดสอบนี้จะสอนขั้นตอนแรก ก็คือ การสร้าง instance ของ `supertype` (หรือ parent) จริงๆ แล้ว คุณก็รู้วิธีสร้าง instance ของ `Animal` ไปแล้ววิธีนึง นั่นคือการใช้ `new` operator

```js
let animal = new Animal();
```

การใช้ syntax ด้านบนนี้ในการทำ inheritance ก็จะมีข้อเสียอยู่ แต่ว่ามันจะลึกเกินไปที่จะให้คุณเรียนตอนนี้ แต่เราก็อยากให้คุณเปลี่ยนมาใช้วิธีนี้แทน:

```js
let animal = Object.create(Animal.prototype);
```

`Object.create(obj)` จะสร้าง object ใหม่ และใช้ `obj` เป็น `prototype` ของ object ใหม่ที่เราสร้าง  
ถ้ายังจำได้ เราเคยบอกว่า `prototype` เป็นเหมือนแม่พิมพ์ที่ใช้สร้าง object การกำหนดให้ `prototype` ของ `animal` เป็น `prototype` ของ `Animal` ก็จะเป็นการทำให้ instance `animal` ถูกสร้างด้วยพิมพ์เดียวกับ instance คัวอื่นๆ ของ `Animal`

```js
animal.eat();
animal instanceof Animal;
```

method `instanceof` จะได้ค่าเป็น `true`

# --instructions--

จงใช้ `Object.create` เพื่อสร้าง instance 2 ตัวโดยใช้ `Animal` และให้ตั้งชื่อว่า `duck` และ `beagle`

# --hints--

ต้องกำหนดค่าให้ตัวแปร `duck` (ไม่เป็น undefined)

```js
assert(typeof duck !== 'undefined');
```

ต้องกำหนดค่าให้ตัวแปร `beagle` (ไม่เป็น undefined)

```js
assert(typeof beagle !== 'undefined');
```

ต้องสร้างตัวแปร `duck` ด้วย `Object.create`

```js
assert(
  /(let|const|var)\s{1,}duck\s*=\s*Object\.create\s*\(\s*Animal\.prototype\s*\)\s*/.test(
    code
  )
);
```

ต้องสร้างตัวแปร `beagle` ด้วย `Object.create`

```js
assert(
  /(let|const|var)\s{1,}beagle\s*=\s*Object\.create\s*\(\s*Animal\.prototype\s*\)\s*/.test(
    code
  )
);
```

ใน `duck` ต้องมี `prototype` ของ `Animal`

```js
assert(duck instanceof Animal);
```

ใน `beagle` ต้องมี `prototype` ของ `Animal`

```js
assert(beagle instanceof Animal);
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

// แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น

let duck; // แก้บรรทัดนี้
let beagle; // แก้บรรทัดนี้
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
let duck = Object.create(Animal.prototype);
let beagle = Object.create(Animal.prototype);

duck.eat();
beagle.eat();
```
