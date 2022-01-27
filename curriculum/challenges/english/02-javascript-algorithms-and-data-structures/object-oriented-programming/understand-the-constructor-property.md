---
id: 587d7daf367417b2b2512b7e
title: Understand the Constructor Property
challengeType: 1
forumTopicId: 301327
dashedName: understand-the-constructor-property
---

# --description--

property `constructor` เป็น property พิเศษที่มีอยู่แล้วใน instance ของ `duck` และ `beagle` ที่เราสร้างไปในแบบทดสอบก่อนหน้านี้

```js
let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor === Bird); 
console.log(beagle.constructor === Dog);
```

`console.log` ทั้งสองคำสั่งจะแสดงผลใน console เป็น `true` ทั้งคู่

จะเห็นว่า property `constructor` จะอ้างอิงไปยังฟังก์ชัน constructor ที่ใช้การสร้าง instance นั้นๆ  
ประโยชน์ของ property `constructor` คือ เราสามารถใช้ property นี้ในการหาว่า object นี้เป็นประเภทใด ลองดูตัวอย่างด้านล่าง:

```js
function joinBirdFraternity(candidate) {
  if (candidate.constructor === Bird) {
    return true;
  } else {
    return false;
  }
}
```

**หมายเหตุ:** เราควรใช้ method `instanceof` ในการตรวจสอบประเภทของ object เพราะว่า property `constructor` นั้นถูกเขียนทับได้ (เราจะพูดถึงเรื่องนี้ในแบบทดสอบหน้า)

# --instructions--

ให้เขียนฟังก์ชัน `joinDogFraternity` ซึ่งรับค่า parameter ชื่อ `candidate`  
และให้คืนค่าเป็น `true` ถ้า `candidate` เป็น `Dog` แต่ถ้าไม่ใช่ `Dog` ให้คืนค่าเป็น `false` โดยใช้ตรวจสอบโดยใช้ property `constructor` 

# --hints--

`joinDogFraternity` ต้องเป็นฟังก์ชัน

```js
assert(typeof joinDogFraternity === 'function');
```

การเรียกใช้ฟังก์ชัน `joinDogFraternity` ต้องได้ค่าเป็น `true` ถ้า `candidate` เป็น instance ของ `Dog`

```js
assert(joinDogFraternity(new Dog('')) === true);
```

ต้องใช้ `constructor` property ในฟังก์ชัน `joinDogFraternity`

```js
assert(/\.constructor/.test(code) && !/instanceof/.test(code));
```

# --seed--

## --seed-contents--

```js
function Dog(name) {
  this.name = name;
}

// แก้ไขโค้ดใต้บรรทัดนี้
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
