---
id: 587d7db0367417b2b2512b84
title: Inherit Behaviors from a Supertype
challengeType: 1
forumTopicId: 301319
dashedName: inherit-behaviors-from-a-supertype
---

# --description--

คุณได้ทำการสร้าง `supertype` ที่มีชื่อว่า `Animal`ซึ่งกำหนดพฤติกรรม (behaviors) ร่วมกันของสัตว์ทุกชนิด ในแบบทดสอบก่อนหน้าแล้ว

```js
function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
```

แบบทดสอบนี้และแบบทดสอบถัดไปจะกล่าวถึงวิธีเรียกใช้ method ของ `Animal` ภายใน `Bird` และ `Dog` โดยที่เราไม่ต้องกำหนด method เหล่านั้นอีกครั้งใน `Bird` และ `Dog` วิธีการนี้ใช้เทคนิคที่เรียกว่า inheritance สำหรับแบบทดสอบนี้จะกล่าวถึงขั้นตอนแรก ก็คือ การสร้าง instance ของ `supertype` (หรือ parent) จริงๆ แล้ว คุณก็ทราบวิธีสร้าง instance ของ `Animal` ไปแล้ววิธีนึง นั่นคือการใช้ `new` operator

```js
let animal = new Animal();
```

การใช้ syntax ด้านบนนี้ในการทำ inheritance มีข้อเสียคือ ทำให้การทำแบบทดสอบนี้ค่อนข้างยากและซับซ้อน ดังนั้น จึงแนะนำให้ใช้อีกวิธีนึงดังนี้

```js
let animal = Object.create(Animal.prototype);
```

`Object.create(obj)` สร้าง object ใหม่ และกำหนด `obj` เป็น object ใหม่ของ `prototype` อย่างที่กล่าวไปแล้วว่า `prototype` เปรียบดัง "สูตรสำเร็จ" (recipe) ในการสร้าง object โดยการกำหนดให้ `prototype` ของ `animal` เป็น `prototype` ของ `Animal` ก็จะเป็นการทำให้ `animal` instance มีสูตรสำเร็จเช่นเดียวกับ instance อื่นๆ ของ `Animal`

```js
animal.eat();
animal instanceof Animal;
```

`instanceof` method ควรคืนค่า `true`.

# --instructions--

จงใช้ `Object.create` เพื่อสร้าง instance 2 ตัวของ `Animal` โดยตั้งชื่อว่า `duck` และ `beagle`.

# --hints--

ตัวแปร `duck` ควรถูกกำหนดขึ้นมา (ไม่เป็น undefined)

```js
assert(typeof duck !== 'undefined');
```

ตัวแปร `beagle` ควรถูกกำหนดขึ้นมา (ไม่เป็น undefined)

```js
assert(typeof beagle !== 'undefined');
```

ตัวแปร `duck` ควรสร้างด้วย `Object.create`

```js
assert(
  /(let|const|var)\s{1,}duck\s*=\s*Object\.create\s*\(\s*Animal\.prototype\s*\)\s*/.test(
    code
  )
);
```

ตัวแปร `beagle` ควรสร้างด้วย `Object.create`

```js
assert(
  /(let|const|var)\s{1,}beagle\s*=\s*Object\.create\s*\(\s*Animal\.prototype\s*\)\s*/.test(
    code
  )
);
```

`duck` ควรมี `prototype` ของ `Animal`

```js
assert(duck instanceof Animal);
```

`beagle` ควรมี `prototype` ของ `Animal`

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

// Only change code below this line

let duck; // Change this line
let beagle; // Change this line
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
