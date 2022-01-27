---
id: 587d7dae367417b2b2512b7b
title: Understand Own Properties
challengeType: 1
forumTopicId: 301326
dashedName: understand-own-properties
---

# --description--

ในตัวอย่างด้านล่าง constructor `Bird` มีการกำหนด property 2 ค่า คือ `name` และ `numLegs`:

```js
function Bird(name) {
  this.name  = name;
  this.numLegs = 2;
}

let duck = new Bird("Donald");
let canary = new Bird("Tweety");
```

เราจะเรียก `name` และ `numLegs` ว่าเป็น <dfn>own property</dfn> เพราะว่า property สองตัวนี้ถูกกำหนดให้กับ instance โดยตรง  
แปลว่าทั้ง `duck` และ `canary` จะมี property สองตัวนี้เป็นของตัวเอง (เราจะเรียนเรื่อง property ที่ไม่ใช่ own property ในภายหลัง)  
ทุกๆ instance ของ `Bird` ที่เราเรียนมากจนถึงตอนนี้ ต่างก็มี property นี้เป็นของตัวเองเหมือนกัน  
ตัวอย่างด้านล่างเป็นการอ่านชื่อ property ทั้งหมดของ `duck` และเก็บค่าลงใน array `ownProps`:

```js
let ownProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps);
```

จากตัวอย่างด้านบนจะแสดงค่า `["name", "numLegs"]` บน console

# --instructions--

ให้อ่านชื่อของ own property จาก `canary` และเก็บลงใน array `ownProps`

# --hints--

array `ownProps` ต้องมีค่าเป็น `"numLegs"` และ `"name"`

```js
assert(ownProps.indexOf('name') !== -1 && ownProps.indexOf('numLegs') !== -1);
```

ห้ามใช้ method `Object.keys()` ในแบบทดสอบนี้

```js
assert(!/Object(\.keys|\[(['"`])keys\2\])/.test(code));
```

ห้ามกำหนดค่าของ array `ownProps` ด้วยวิธี hardcode

```js
assert(
  !/\[\s*(?:'|")(?:name|numLegs)|(?:push|concat)\(\s*(?:'|")(?:name|numLegs)/.test(
    code
  )
);
```

# --seed--

## --seed-contents--

```js
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
```

# --solutions--

```js
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
function getOwnProps (obj) {
  const props = [];

  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      props.push(prop);
    }
  }

  return props;
}

const ownProps = getOwnProps(canary);
```
