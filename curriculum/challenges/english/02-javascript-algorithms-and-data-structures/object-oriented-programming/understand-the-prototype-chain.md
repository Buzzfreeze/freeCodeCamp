---
id: 587d7db0367417b2b2512b82
title: Understand the Prototype Chain
challengeType: 1
forumTopicId: 301329
dashedName: understand-the-prototype-chain
---

# --description--

ทุก JavaScript object (มีเพียงบาง object ที่ยกเว้น) มี `prototype` นอกจากนี้ `prototype` ของ object เอง ก็ยังเป็น object

```js
function Bird(name) {
  this.name = name;
}

typeof Bird.prototype;
```

เนื่องจาก `prototype` เป็น object ดังนั้น `prototype` จึงมี `prototype` ของตัวเองได้ ในกรณีนี้ `prototype` ของ `Bird.prototype` เป็น `Object.prototype`:

```js
Object.prototype.isPrototypeOf(Bird.prototype);
```

คำสั่งนี้มีประโยชน์ไหม? คุณอาจจำ `hasOwnProperty` method ได้ จากแบบทดสอบที่แล้ว

```js
let duck = new Bird("Donald");
duck.hasOwnProperty("name");
```

`hasOwnProperty` method มีการกำหนดใน `Object.prototype` ซึ่งสามารถเข้าถึงได้โดย `Bird.prototype` และสามารถเข้าถึงได้โดย `duck` ซึ่งตัวอย่างนี้เรียกว่า `prototype` chain โดยใน `prototype` chain นั้น `Bird` คือ `supertype` ของ `duck` ในขณะที่ `duck` คือ `subtype` ส่วน `Object` คือ `supertype` ของทั้ง `Bird` และ `duck` อีกทั้ง `Object` ก็เป็น `supertype` ของทุก object ใน JavaScript ด้วย ดังนั้น ทุก object จึงสามารถเรียกใช้ `hasOwnProperty` method ได้

# --instructions--

จงแก้ไขโค้ดเพื่อแสดง prototype chain ที่ถูกต้อง

# --hints--

โค้ดของคุณควรแสดงว่า `Object.prototype` คือ prototype ของ `Dog.prototype`

```js
assert(/Object\.prototype\.isPrototypeOf/.test(code));
```

# --seed--

## --seed-contents--

```js
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // yields true

// Fix the code below so that it evaluates to true
???.isPrototypeOf(Dog.prototype);
```

# --solutions--

```js
function Dog(name) {
  this.name = name;
}
let beagle = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle);
Object.prototype.isPrototypeOf(Dog.prototype);
```
