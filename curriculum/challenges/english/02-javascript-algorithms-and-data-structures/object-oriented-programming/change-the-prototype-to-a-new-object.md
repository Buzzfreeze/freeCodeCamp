---
id: 587d7daf367417b2b2512b7f
title: Change the Prototype to a New Object
challengeType: 1
forumTopicId: 301316
dashedName: change-the-prototype-to-a-new-object
---

# --description--

ถึงขั้นตอนนี้ คุณได้ทำการเพิ่ม properties ให้กับ `prototype` แบบทีละค่าแล้ว

```js
Bird.prototype.numLegs = 2;
```

ซึ่งวิธีการนี้ค่อนข้างน่าเบื่อ หากต้องเพิ่มค่า property ให้กับ prototype ทีละตัวๆ

```js
Bird.prototype.eat = function() {
  console.log("nom nom nom");
}

Bird.prototype.describe = function() {
  console.log("My name is " + this.name);
}
```

วิธีการที่มีประสิทธิภาพมากขึ้น คือการกำหนด `prototype` เป็น object ใหม่ที่ประกอบด้วย properties ซึ่งมีการเพิ่ม properties ทั้งหมดเข้าไปทีเดียว

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

จงเพิ่ม property `numLegs` และ methods `eat()` และ `describe()` ให้กับ `prototype` ของ `Dog` โดยกำหนดให้ `prototype` มีค่าเป็น object ใหม่

# --hints--

`Dog.prototype` ควรกำหนดเป็น object ใหม่

```js
assert(/Dog\.prototype\s*?=\s*?{/.test(code));
```

`Dog.prototype` ควรมี property `numLegs`

```js
assert(Dog.prototype.numLegs !== undefined);
```

`Dog.prototype` ควรมี method `eat()`

```js
assert(typeof Dog.prototype.eat === 'function');
```

`Dog.prototype` ควรมี method `describe()`

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
  // Only change code below this line

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
