---
id: 587d7dae367417b2b2512b7c
title: Use Prototype Properties to Reduce Duplicate Code
challengeType: 1
forumTopicId: 301336
dashedName: use-prototype-properties-to-reduce-duplicate-code
---

# --description--

เนื่องด้วย ทุกๆ instance ของ `Bird` อาจมีค่า value ของ `numLegs` ที่เหมือนกันหมด คุณก็จะมีตัวแปร `numLegs`ที่อยู่ในแต่ละ `Bird` instance ที่ซ้ำกัน

เรื่องนี้อาจไม่มีปัญหา หากเรามีเพียง 2 instances แต่หากมีเป็นล้านๆ instance ก็จะมี variable จำนวนมากที่ซ้ำๆ กัน

วิธีการจัดการที่ดีกว่า คือการใช้ `prototype` ของ `Bird` โดย Properties ที่อยู่ใน `prototype` จะแชร์ร่วมกันกับ instance ทั้งหมดของ `Bird` ตัวอย่างต่อไปนี้เป็นการเพิ่ม `numLegs` เข้าไปใน `Bird prototype`:

```js
Bird.prototype.numLegs = 2;
```

ตอนนี้ทุกๆ instance ของ `Bird` ก็จะมี `numLegs` property

```js
console.log(duck.numLegs);
console.log(canary.numLegs);
```

เนื่องด้วยทุก instance จะมี property ที่กำหนดใน `prototype` โดยอัตโนมัติ ให้เรามองว่า `prototype` ก็เหมือน "สูตรสำเร็จ" สำหรับการสร้าง object ดังนั้นแล้ว `prototype` ของ `duck` และ `canary` ก็เป็นส่วนหนึ่งของ `Bird` constructor ซึ่งก็คือ `Bird.prototype` นั่นเอง เกือบทุก JavaScript object ต่างก็มี `prototype` property ซึ่งเป็นส่วนหนึ่งของฟังก์ชัน constructor ที่ใช้ในการสร้าง object

# --instructions--

จงเพิ่ม `numLegs` property ใน `prototype` ของ `Dog`

# --hints--

`beagle` ควรมี `numLegs` property

```js
assert(beagle.numLegs !== undefined);
```

`beagle.numLegs` ควรเป็น number

```js
assert(typeof beagle.numLegs === 'number');
```

`numLegs` ควรเป็น `prototype` property ไม่ใช่ own property

```js
assert(beagle.hasOwnProperty('numLegs') === false);
```

# --seed--

## --seed-contents--

```js
function Dog(name) {
  this.name = name;
}



// Only change code above this line
let beagle = new Dog("Snoopy");
```

# --solutions--

```js
function Dog (name) {
  this.name = name;
}
Dog.prototype.numLegs = 4;
let beagle = new Dog("Snoopy");
```
