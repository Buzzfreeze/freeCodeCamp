---
id: 587d7dae367417b2b2512b7c
title: Use Prototype Properties to Reduce Duplicate Code
challengeType: 1
forumTopicId: 301336
dashedName: use-prototype-properties-to-reduce-duplicate-code
---

# --description--

ถ้าทุกๆ instance ของ `Bird` มีค่าของ `numLegs` ที่เหมือนกันหมด คุณก็จะมีตัวแปร `numLegs` ที่อยู่ในแต่ละ instance `Bird` ทุกตัว ซ้ำๆกัน

ถ้าเรามีแค่ 2 instance เรื่องนี้ก็อาจจะไม่มีปัญหา แต่หากมีเป็นล้านๆ instance ก็จะมีตัวแปรจำนวนมากที่เก็บค่าซ้ำกัน

วิธีการจัดการที่ดีกว่าคือการใช้ `prototype` ของ `Bird` โดย property ที่อยู่ใน `prototype` จะถูกใช้ร่วมกันในทุก instance ของ `Bird`  
ตัวอย่างด้านล่างเป็นการเพิ่ม `numLegs` เข้าไปใน `Bird prototype`:

```js
Bird.prototype.numLegs = 2;
```

ตอนนี้ทุกๆ instance ของ `Bird` ก็จะมี property `numLegs` แล้ว

```js
console.log(duck.numLegs);
console.log(canary.numLegs);
```

ให้ลองมองว่า `prototype` เป็นเหมือนแม่พิมพ์ของ instance เพราะว่าทุกๆ instance จะมี property ที่ถูกกำหนดใน `prototype` โดยอัตโนมัติ  
และควรรู้ไว้ว่า `prototype` ของ `duck` และ `canary` ก็เป็นส่วนหนึ่งของ constructor `Bird` ซึ่งก็คือ `Bird.prototype` นั่นเอง  
JavaScript object เกือบทุกตัวจะมี property ที่เป็น `prototype` ซึ่งเป็นอยู่ในฟังก์ชัน constructor ที่ใช้ในการสร้าง object นั้นๆด้วย

# --instructions--

ให้เพิ่ม property `numLegs` ลงใน `prototype` ของ `Dog`

# --hints--

`beagle` ควรมี property `numLegs`

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



// แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
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
