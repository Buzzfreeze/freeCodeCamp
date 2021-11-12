---
id: 587d7b8b367417b2b2512b50
title: Write Concise Declarative Functions with ES6
challengeType: 1
forumTopicId: 301224
dashedName: write-concise-declarative-functions-with-es6
---

# --description--

กำหนดฟังก์ชันภายใน object ใน ES5 เราต้องใช้ keyword `function` ดังนี้:

```js
const person = {
  name: "Taylor",
  sayHello: function() {
    return `Hello! My name is ${this.name}.`;
  }
};
```

ใน ES6 คุณสามารถลบ keyword `function` และเครื่องหมาย colon ได้ เมื่อกำหนด funcion ใน object ดังตัวอย่างนี้


```js
const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};
```

# --instructions--

จงปรับแก้ function `setGear` ภายใน object `bicycle` เพื่อใช้ syntax อย่างย่อตามที่ได้อธิบายไว้ข้างต้น


# --hints--

ไม่ควรใช้ function expression แบบเดิม

```js
(getUserInput) => assert(!code.match(/function/));
```

`setGear` ควรประกาศเป็น function

```js
assert(
  typeof bicycle.setGear === 'function' && code.match(/setGear\s*\(.+\)\s*\{/)
);
```

`bicycle.setGear(48)` ควรแก้ไขค่า `gear` เป็น 48

```js
assert(new bicycle.setGear(48).gear === 48);
```

# --seed--

## --seed-contents--

```js
// Only change code below this line
const bicycle = {
  gear: 2,
  setGear: function(newGear) {
    this.gear = newGear;
  }
};
// Only change code above this line
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
