---
id: 587d7dac367417b2b2512b73
title: Create a Basic JavaScript Object
challengeType: 1
forumTopicId: 301317
dashedName: create-a-basic-javascript-object
---

# --description--

เมื่อพูดถึง object ให้เรานึกถึงสิ่งต่างๆ ที่เราสามารถมองเห็นหรือสัมผัสได้ เช่น รถยนต์, ร้านค้า, นก ฯลฯ สิ่งต่างๆ เหล่านี้ก็คือ <dfn>object</dfn>  

แล้วคุณสมบัติของ object เหล่านี้มีอะไรบ้างล่ะ คำตอบก็เช่น รถยนต์มีล้อรถ, ร้านค้ามีสินค้า, นกมีปีก

โดยคุณสมบัติหรือ <dfn>property</dfn> ใช้กำหนดส่วนประกอบของ object ซึ่ง object ที่คล้ายกันก็มักมี property ชนิดเดียวกัน แต่อาจมี value ต่างกัน เช่น รถยนต์มีล้อรถ รถทุกคันก็ไม่ได้มีจำนวนล้อเท่ากัน

object ในภาษา JavaScript มักจำลองแบบจาก object ในโลกจริงๆ โดยมีการกำหนดคุณสมบัติและความสามารถต่างๆ เหมือนกับของจริงเลย ตัวอย่างต่อไปนี้เป็นการนำหลักการดังกล่าวมาสร้าง object `duck`:

```js
let duck = {
  name: "Aflac",
  numLegs: 2
};
```

object `duck` นี้มีคู่ของ property/value อยู่ 2 ชุด คือ property `name` (ชื่อ) ซึ่งมีค่าเป็น `Aflac` และ property `numLegs` (จำนวนขา) ซึ่งมีค่าเป็น `2`

# --instructions--

ให้สร้าง object `dog` ที่มี property เป็น `name` และ `numLegs` แล้วให้กำหนดค่า string และ number ให้กับ property นั้นตามลำดับ 

# --hints--

`dog` ต้องเป็น object

```js
assert(typeof dog === 'object');
```

`dog` ต้องมี property `name` ซึ่งเก็บข้อมูลประเภท string

```js
assert(typeof dog.name === 'string');
```

`dog` ต้องมี property `numLegs` ซึ่งเก็บข้อมูลประเภท number

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
