---
id: 587d7dac367417b2b2512b74
title: Use Dot Notation to Access the Properties of an Object
challengeType: 1
forumTopicId: 301333
dashedName: use-dot-notation-to-access-the-properties-of-an-object
---

# --description--

ในบททดสอบที่แล้ว เราได้สร้าง object ที่มี property ไปแล้ว ในบททดสอบนี้ เราจะได้เรียนวิธีการเข้าถึง value ของ property เหล่านี้ ลองดูตัวอย่างด้านล่าง:

```js
let duck = {
  name: "Aflac",
  numLegs: 2
};
console.log(duck.name);
```

การเข้าถึงค่า `Aflac` ซึ่งเป็นค่าของ property `name` นั้นสามารถทำได้โดยการนำ object `duck` มาพิมพ์จุด (.) แล้วตามด้วยชื่อของ property `name` 

# --instructions--

ให้แสดงค่าของ property ทั้งสองใน object `dog` บน console

# --hints--

ต้องใช้คำสั่ง `console.log` เพื่อแสดงค่าของ property `name` ของ object `dog` บน console

```js
assert(/console.log\(.*dog\.name.*\)/g.test(code));
```

ต้องใช้คำสั่ง `console.log` เพื่อแสดงค่าของ property `numLegs` ของ object `dog` บน console

```js
assert(/console.log\(.*dog\.numLegs.*\)/g.test(code));
```

# --seed--

## --seed-contents--

```js
let dog = {
  name: "Spot",
  numLegs: 4
};
// แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
```

# --solutions--

```js
let dog = {
  name: "Spot",
  numLegs: 4
};
console.log(dog.name);
console.log(dog.numLegs);
```
