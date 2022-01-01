---
id: 587d7b8b367417b2b2512b50
title: Write Concise Declarative Functions with ES6
challengeType: 1
forumTopicId: 301224
dashedName: write-concise-declarative-functions-with-es6
---

# --description--

ใน ES5 ถ้าเราจะกำหนดฟังก์ชันภายใน object เราต้องใช้ keyword `function` แบบตัวอย่างนี้:

```js
const person = {
  name: "Taylor",
  sayHello: function() {
    return `Hello! My name is ${this.name}.`;
  }
};
```

แต่ใน ES6 เราไม่ต้องใช้ keyword `function` และเครื่องหมาย colon แล้ว เราจะกำหนดฟังก์ชันใน object ได้แบบตัวอย่างนี้เลย:


```js
const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};
```

# --instructions--

เปลี่ยนการกำหนดฟังก์ชัน `setGear` ภายใน object `bicycle` เพื่อให้ใช้ syntax เหมือนตัวอย่างด้านบน


# --hints--

ไม่ควรใช้ function expression แบบเดิม

```js
(getUserInput) => assert(!code.match(/function/));
```

`setGear` ต้องเป็น function

```js
assert(
  typeof bicycle.setGear === 'function' && code.match(/setGear\s*\(.+\)\s*\{/)
);
```

การเรียกใช้ฟังก์ชัน `bicycle.setGear(48)` ต้องเปลี่ยนค่า `gear` เป็น 48

```js
assert(new bicycle.setGear(48).gear === 48);
```

# --seed--

## --seed-contents--

```js
// แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
const bicycle = {
  gear: 2,
  setGear: function(newGear) {
    this.gear = newGear;
  }
};
// แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
bicycle.setGear(3);
console.log(bicycle.gear);
```

# --solutions--

```js
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};
bicycle.setGear(3);
```
