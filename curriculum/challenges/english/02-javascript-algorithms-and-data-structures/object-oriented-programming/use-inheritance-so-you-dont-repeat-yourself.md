---
id: 587d7db0367417b2b2512b83
title: Use Inheritance So You Don't Repeat Yourself
challengeType: 1
forumTopicId: 301334
dashedName: use-inheritance-so-you-dont-repeat-yourself
---

# --description--

มีหลักการเขียนโปรแกรมข้อหนึ่ง เรียกว่า <dfn>Don't Repeat Yourself (DRY)</dfn> (อย่าเขียนโค้ดที่ซ้ำซ้อน) เนื่องจากโค้ดที่ซ้ำซ้อนจะทำให้เกิดปัญหาได้ เพราะหากมีการเปลี่ยนแปลงอะไรบางอย่าง เราก็ต้องแก้ไขโค้ดหลายที่ ซึ่งนอกจากจะทำให้งานของโปรแกรมเมอร์มากแล้วและยังทำให้โอกาสเกิด error มีมากขึ้นอีกด้วย

```js
Bird.prototype = {
  constructor: Bird,
  describe: function() {
    console.log("My name is " + this.name);
  }
};

Dog.prototype = {
  constructor: Dog,
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

`describe` method มีการเขียนซ้ำซ้อนกัน 2 จุด ซึ่งสามารถปรับแก้ตามหลัก DRY ได้ โดยสร้าง `supertype` (หรือ parent) ที่มีชื่อว่า `Animal`

```js
function Animal() { };

Animal.prototype = {
  constructor: Animal, 
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

เนื่องจาก `Animal` มีการกำหนด `describe` method ไว้แล้ว คุณจึงสามารถนำ `describe` method ออกจาก `Bird` และ `Dog` ได้

```js
Bird.prototype = {
  constructor: Bird
};

Dog.prototype = {
  constructor: Dog
};
```

# --instructions--

`eat` method มีการเขียนซ้ำซ้อนอยู่ในทั้ง `Cat` และ `Bear` จงปรับโค้ดตามหลักของ DRY โดยให้นำ `eat` method ไปไว้ใน `Animal` `supertype`

# --hints--

`Animal.prototype` ควรมี `eat` property

```js
assert(Animal.prototype.hasOwnProperty('eat'));
```

`Bear.prototype` ไม่ควรมี `eat` property

```js
assert(!Bear.prototype.hasOwnProperty('eat'));
```

`Cat.prototype` ไม่ควรมี `eat` property

```js
assert(!Cat.prototype.hasOwnProperty('eat'));
```

# --seed--

## --seed-contents--

```js
function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,

};
```

# --solutions--

```js
function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};
```
