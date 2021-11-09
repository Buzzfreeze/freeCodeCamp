---
id: 587d7db0367417b2b2512b81
title: Understand Where an Object’s Prototype Comes From
challengeType: 1
forumTopicId: 301330
dashedName: understand-where-an-objects-prototype-comes-from
---

# --description--

object สืบทอด `prototype` มาจากฟังก์ชัน constructor ที่สร้าง object นั้นมา เช่นเดียวกันกับคนที่สืบทอดยีนส์จากบิดามารดา ดังตัวอย่างนี้ `Bird` constructor สร้าง `duck` object


```js
function Bird(name) {
  this.name = name;
}

let duck = new Bird("Donald");
```

`duck` สืบทอด `prototype` มาจากฟังก์ชัน `Bird` constructor ซึ่งคุณสามารถตรวจสอบความสัมพันธ์โดยใช้ `isPrototypeOf` method

```js
Bird.prototype.isPrototypeOf(duck);
```

ควรคืนค่า `true`

# --instructions--

จงใช้ `isPrototypeOf` เพื่อตรวจสอบ `prototype` ของ `beagle`

# --hints--

คุณควรแสดงว่า `Dog.prototype` เป็น `prototype` ของ `beagle`

```js
assert(/Dog\.prototype\.isPrototypeOf\(beagle\)/.test(code));
```

# --seed--

## --seed-contents--

```js
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

// Only change code below this line
```

# --solutions--

```js
function Dog(name) {
  this.name = name;
}
let beagle = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle);
```
