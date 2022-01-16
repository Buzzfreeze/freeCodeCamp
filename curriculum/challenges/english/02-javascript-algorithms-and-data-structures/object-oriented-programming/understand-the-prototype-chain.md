---
id: 587d7db0367417b2b2512b82
title: Understand the Prototype Chain
challengeType: 1
forumTopicId: 301329
dashedName: understand-the-prototype-chain
---

# --description--

object เกือบทุก object ใน JavaScript จะมี `prototype` แล้วตัว `prototype` เอง ก็ยังเป็น object อีกด้วย

```js
function Bird(name) {
  this.name = name;
}

typeof Bird.prototype;
```

จากการที่ตัว `prototype` เองก็เป็น object เพราะฉะนั้นตัว `prototype` ก็จะมี `prototype` ของตัวเองได้ 
ในตัวอย่างด้านล่าง `prototype` ของ `Bird.prototype` คือ `Object.prototype`:

```js
Object.prototype.isPrototypeOf(Bird.prototype);
```

เอาล่ะ คุณอาจจะสงสัยว่าแล้วมันจะมีประโยชน์ยังไง 
ถ้ายังจำ method `hasOwnProperty` จากแบบทดสอบที่แล้วได้

```js
let duck = new Bird("Donald");
duck.hasOwnProperty("name");
```

method `hasOwnProperty` อยู่ใน `Object.prototype` ซึ่งจะเข้าถึงได้ผ่าน `Bird.prototype` แล้วก็จะเข้าถึงได้ผ่าน `duck` อีกต่อหนึ่ง
เราเรียกการเข้าถึง `prototype` เป็นชั้นๆนี้ว่า `prototype` chain 
ในตัวอย่าง `prototype` chain นี้ เราจะเรียกว่า `Bird` เป็น `supertype` ของ `duck` และเรียก `duck` ว่าเป็น `subtype` ของ `Bird` 
ส่วน `Object` คือ `supertype` ของทั้ง `Bird` และ `duck` และ `Object` ก็เป็น `supertype` ของทุก object ใน JavaScript ด้วย ดังนั้น ทุก object จึงสามารถเรียกใช้ method `hasOwnProperty` ได้

# --instructions--

จงแก้ไขโค้ดเพื่อแสดง prototype chain ที่ถูกต้อง

# --hints--

โค้ดของคุณต้องตรวจสอบว่า `Object.prototype` เป็น prototype ของ `Dog.prototype`

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

Dog.prototype.isPrototypeOf(beagle);  // บรรทัดนี้เป็น true

// ให้แก้โค้ดด้านล่างเพื่อให้ได้ค่าเป็น true
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
