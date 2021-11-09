---
id: 587d7daf367417b2b2512b7e
title: Understand the Constructor Property
challengeType: 1
forumTopicId: 301327
dashedName: understand-the-constructor-property
---

# --description--

`constructor` property เป็น property พิเศษที่มีอยู่แล้วใน instances `duck` และ `beagle` ซึ่งสร้างในแบบทดสอบก่อนหน้านี้

```js
let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor === Bird); 
console.log(beagle.constructor === Dog);
```

ทั้งสองคำสั่ง `console.log` จะแสดงผลเป็น `true` ใน console

หมายเหตุ `constructor` property คือสิ่งที่อ้างอิงฟังก์ชัน constructor ที่ใช้ในการสร้าง instance โดยข้อดีของ `constructor` property ก็คือ เราสามารถใช้ property นี้ในการหาว่า object นี้เป็นประเภทใด ดังตัวอย่างต่อไปนี้

```js
function joinBirdFraternity(candidate) {
  if (candidate.constructor === Bird) {
    return true;
  } else {
    return false;
  }
}
```

**หมายเหตุ:** เนื่องด้วย `constructor` property สามารถถูกเขียนทับได้ (overwritten) (จะกล่าวต่อไปในอีก 2 แบบทดสอบ) ดังนั้น เราจึงควรใช้ method `instanceof` ในการตรวจสอบประเภทของ object มากกว่าที่จะใช้ `constructor` property

# --instructions--

จงเขียนฟังก์ชัน `joinDogFraternity` ซึ่งรับค่า `candidate` parameter และใช้ `constructor` property โดยให้ return `true` หาก candidate เป็น `Dog` แต่หากไม่ใช่ `Dog` ให้ return `false`

# --hints--

`joinDogFraternity` ควรกำหนดให้เป็นฟังก์ชัน

```js
assert(typeof joinDogFraternity === 'function');
```

`joinDogFraternity` ควรคืนค่า `true` ถ้า `candidate` เป็น instance ของ `Dog`

```js
assert(joinDogFraternity(new Dog('')) === true);
```

`joinDogFraternity` ควรใช้ `constructor` property

```js
assert(/\.constructor/.test(code) && !/instanceof/.test(code));
```

# --seed--

## --seed-contents--

```js
function Dog(name) {
  this.name = name;
}

// Only change code below this line
function joinDogFraternity(candidate) {

}
```

# --solutions--

```js
function Dog(name) {
  this.name = name;
}
function joinDogFraternity(candidate) {
  return candidate.constructor === Dog;
}
```
