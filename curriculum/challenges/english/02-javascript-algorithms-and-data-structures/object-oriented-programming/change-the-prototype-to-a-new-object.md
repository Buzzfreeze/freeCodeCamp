---
id: 587d7daf367417b2b2512b7f
title: Change the Prototype to a New Object
challengeType: 1
forumTopicId: 301316
dashedName: change-the-prototype-to-a-new-object
---

# --description--

ตอนนี้คุณเพิ่ม property ทีละตัวใน `prototype` เป็นแล้ว

```js
Bird.prototype.numLegs = 2;
```

ถ้าใช้วิธีนี้เราจะลำบากหน่อย เวลาเราต้องเพิ่ม property หลายๆตัว 

```js
Bird.prototype.eat = function() {
  console.log("nom nom nom");
}

Bird.prototype.describe = function() {
  console.log("My name is " + this.name);
}
```

เรามีอีกวิธีที่ง่ายกว่า คือการกำหนด `prototype` ให้เป็น object ใหม่ที่มี property ที่เราต้องการเพิ่มอยู่แล้ว
การใช้วิธีนี้จะเป็นการเพิ่ม property ทั้งหมดเข้าไปรวดเดียวเลย
ลองดูตัวอย่าง:

```js
Bird.prototype = {
  numLegs: 2, 
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

# --instructions--

ให้เพิ่ม property `numLegs` และ method `eat()` และ `describe()` ลงใน `prototype` ของ `Dog` โดยการกำหนดให้ `prototype` เป็น object ใหม่

# --hints--

`Dog.prototype` ต้องเป็น object ใหม่

```js
assert(/Dog\.prototype\s*?=\s*?{/.test(code));
```

`Dog.prototype` ต้องมี property `numLegs`

```js
assert(Dog.prototype.numLegs !== undefined);
```

`Dog.prototype` ต้องมี method `eat()`

```js
assert(typeof Dog.prototype.eat === 'function');
```

`Dog.prototype` ต้องมี method `describe()`

```js
assert(typeof Dog.prototype.describe === 'function');
```

# --seed--

## --seed-contents--

```js
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น

};
```

# --solutions--

```js
function Dog(name) {
  this.name = name;
}
Dog.prototype = {
numLegs: 4,
  eat () {
    console.log('nom nom nom');
  },
  describe () {
    console.log('My name is ' + this.name);
  }
};
```
