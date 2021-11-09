---
id: 587d7dac367417b2b2512b73
title: Create a Basic JavaScript Object
challengeType: 1
forumTopicId: 301317
dashedName: create-a-basic-javascript-object
---

# --description--

เมื่อพูดถึง object ให้เรานึกถึงสิ่งต่างๆ ที่เราเห็นทุกวัน เช่น รถยนต์, ร้านค้า, นก ฯลฯ สิ่งต่างๆ เหล่านี้ก็คือ <dfn>objects</dfn> หรือสิ่งต่างๆ ที่เราสามารถมองเห็นหรือสัมผัสได้

แล้วคุณสมบัติของ object เหล่านี้มีอะไรบ้างล่ะ คำตอบก็เช่น รถยนต์มีล้อรถ, ร้านค้าขายสินค้า, นกมีปีก

โดยคุณสมบัติหรือ <dfn>properties</dfn> ใช้กำหนดส่วนประกอบของ object ซึ่ง object ที่คล้ายกันก็มักมี property ที่เหมือนกัน แต่อาจมี value ที่ต่างกัน เช่น รถยนต์มีล้อรถ แต่ไม่ใช่ว่าทุกคันจะมีจำนวนล้อเท่ากัน

object ในภาษา JavaScript มักจำลองแบบจาก object ของโลกแห่งความเป็นจริง โดยมีการกำหนดคุณสมบัติและความสามารถต่างๆ เทียบเคียงกับของจริงเลย ตัวอย่างต่อไปนี้เป็นการนำหลักการดังกล่าวมาสร้าง `duck` object

```js
let duck = {
  name: "Aflac",
  numLegs: 2
};
```

`duck` object นี้มีคู่ property/value อยู่ 2 ชุด คือ a `name` of `Aflac` และ a `numLegs` of 2

# --instructions--

ให้สร้าง `dog` object ที่มี property เป็น `name` และ `numLegs` แล้วให้กำหนดค่า string และ number ตามลำดับ 

# --hints--

`dog` ควรเป็น object

```js
assert(typeof dog === 'object');
```

`dog` ควรมี property `name` โดยกำหนดให้เป็น string

```js
assert(typeof dog.name === 'string');
```

`dog` ควรมี property `numLegs` โดยกำหนดให้เป็น number

```js
assert(typeof dog.numLegs === 'number');
```

# --seed--

## --seed-contents--

```js
let dog = {

};
```

# --solutions--

```js
let dog = {
  name: '',
  numLegs: 4
};
```
