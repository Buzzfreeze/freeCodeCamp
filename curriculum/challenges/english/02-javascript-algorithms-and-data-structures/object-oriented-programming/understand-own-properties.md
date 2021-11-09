---
id: 587d7dae367417b2b2512b7b
title: Understand Own Properties
challengeType: 1
forumTopicId: 301326
dashedName: understand-own-properties
---

# --description--

จากตัวอย่างต่อไปนี้ `Bird` constructor มีการกำหนด properties 2 ค่า คือ `name` และ `numLegs`:

```js
function Bird(name) {
  this.name  = name;
  this.numLegs = 2;
}

let duck = new Bird("Donald");
let canary = new Bird("Tweety");
```

`name` และ `numLegs` เรียกว่า <dfn>own properties</dfn> เนื่องจากมีการกำหนดโดยตรงใน instance object นั่นหมายความว่า `duck` and `canary` ต่างก็มีสำเนาของ property เหล่านี้ในตัวเช่นกัน แต่จริงๆ แล้ว ทุก instance ของ `Bird` ก็จะมีสำเนาของ property เหล่านี้ โค้ดต่อไปนี้เป็นการเพิ่ม properties ของ `duck` เข้าไปใน array `ownProps`:

```js
let ownProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps);
```

console ควรแสดงค่าเป็น `["name", "numLegs"]`.

# --instructions--

จงเพิ่ม own properties ของ `canary` เข้าไปใน array `ownProps`.

# --hints--

ผลลัพธ์ของ `ownProps` ควรมีค่า `numLegs` และ `name`.

```js
assert(ownProps.indexOf('name') !== -1 && ownProps.indexOf('numLegs') !== -1);
```

ห้ามใช้ method `Object.keys()` ในแบบทดสอบนี้

```js
assert(!/Object(\.keys|\[(['"`])keys\2\])/.test(code));
```

ห้ามกำหนดค่า `ownProps` array ด้วยวิธี hardcode

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
// Only change code below this line
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
