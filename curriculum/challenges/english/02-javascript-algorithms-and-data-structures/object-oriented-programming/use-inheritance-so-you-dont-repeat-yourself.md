---
id: 587d7db0367417b2b2512b83
title: Use Inheritance So You Don't Repeat Yourself
challengeType: 1
forumTopicId: 301334
dashedName: use-inheritance-so-you-dont-repeat-yourself
---

# --description--

มีหลักในการเขียนโปรแกรมข้อหนึ่งที่เรียกว่า <dfn>Don't Repeat Yourself (DRY:อย่าเขียนโค้ดซ้ำ)</dfn>  
เพราะว่าถ้าเราเขียนโค้ดที่ทำงานเหมือนกันซ้ำๆกันไว้หลายที่จะทำให้เกิดปัญหาได้ เช่น ถ้าเราอยากเปลี่ยนหรือแก้อะไรบางอย่าง เราก็ต้องบางตามหาว่ามีโค้ดที่ทำงานแบบนี้ตรงไหนบ้าง แล้วต้องไล่แก้ตามทั้งหมด ซึ่งจะทำให้งานของเราหนักขึ้น แล้วก็ยังเพิ่มโอกาสที่จะเกิดบัคในโค้ดด้วย

ลองดูตัวอย่างด้านล่าง ทั้ง `Bird` และ `Dog` มี method `describe` ที่ทำงานเหมือนกัน:

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

method `describe` นี้ถูกเขียนซ้ำกันไว้ 2 ที่ ซึ่งเราจะแก้ให้เป็นตามหลัก DRY ได้ โดยการสร้าง `supertype` (หรือ parent) ที่มีชื่อว่า `Animal`

```js
function Animal() { };

Animal.prototype = {
  constructor: Animal, 
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

เพราะว่ามีการกำหนด method `describe` ใน `Animal` ไว้แล้ว เราก็เอา method `describe` ออกจาก `Bird` และ `Dog` ได้

```js
Bird.prototype = {
  constructor: Bird
};

Dog.prototype = {
  constructor: Dog
};
```

# --instructions--

method `eat` ถูกเขียนไว้ใน `Cat` และ `Bear` ให้แก้โค้ดตามหลักของ DRY โดยให้นำ method `eat` ไปไว้ใน `supertype` ที่ชื่อ `Animal` 

# --hints--

`Animal.prototype` ต้องมี property `eat` 

```js
assert(Animal.prototype.hasOwnProperty('eat'));
```

ใน `Bear.prototype` ต้องไม่มี property `eat`

```js
assert(!Bear.prototype.hasOwnProperty('eat'));
```

ใน `Cat.prototype` ต้องไม่มี property `eat`

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
