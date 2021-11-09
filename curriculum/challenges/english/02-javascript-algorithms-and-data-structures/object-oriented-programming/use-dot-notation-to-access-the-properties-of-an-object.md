---
id: 587d7dac367417b2b2512b74
title: Use Dot Notation to Access the Properties of an Object
challengeType: 1
forumTopicId: 301333
dashedName: use-dot-notation-to-access-the-properties-of-an-object
---

# --description--

จากแบบทดสอบที่แล้ว คุณได้สร้าง object ที่มี property หลายค่า สำหรับแบบทดสอบนี้ คุณจะได้เรียนรู้วิธีการเข้าถึง value ของ property เหล่านี้ ดังตัวอย่างต่อไปนี้

```js
let duck = {
  name: "Aflac",
  numLegs: 2
};
console.log(duck.name);
```

การเข้าถึงค่า `Aflac` ซึ่งเป็นค่าของ property `name` ได้นั้น สามารถทำได้โดยการนำ object `duck` มาพิมพ์จุด (.) ต่อ แล้วตามด้วยชื่อของ property `name` 

# --instructions--

แบบทดสอบนี้ต้องการให้พิมพ์ property ทั้งสองค่าของ object `dog` มาแสดงบน console

# --hints--

คุณควรใช้คำสั่ง `console.log` เพื่อพิมพ์ค่าของ property `name` ของ object `dog` 

```js
assert(/console.log\(.*dog\.name.*\)/g.test(code));
```

คุณควรใช้คำสั่ง `console.log` เพื่อพิมพ์ค่าของ property `numLegs` ของ object `dog` 

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
// Only change code below this line
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
