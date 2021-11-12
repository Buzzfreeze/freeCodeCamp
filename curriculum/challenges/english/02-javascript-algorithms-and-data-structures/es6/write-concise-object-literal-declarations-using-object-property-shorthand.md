---
id: 587d7b8a367417b2b2512b4f
title: Write Concise Object Literal Declarations Using Object Property Shorthand
challengeType: 1
forumTopicId: 301225
dashedName: write-concise-object-literal-declarations-using-object-property-shorthand
---

# --description--

ES6 รองรับการประกาศ object literal ที่มีรูปแบบง่ายขึ้น 

พิจารณาโค้ดดังนี้

```js
const getMousePosition = (x, y) => ({
  x: x,
  y: y
});
```

`getMousePosition` เป็นฟังก์ชันง่ายๆ ที่คืนค่าเป็น object ที่มีสอง property ซึ่ง ES6 ขจัดความซ้ำซ้อนของการเขียน `x: x` โดยคุณสามารถเขียน `x` เพียงครั้งเดียว แล้วมันจะแปลงเป็น `x: x` (หรือสิ่งที่เทียบเท่า) ให้อัตโนมัติ นี่คือฟังก์ชันเหมือนกันกับด้านบน โดยเขียนใหม่ได้ดังนี้:

```js
const getMousePosition = (x, y) => ({ x, y });
```

# --instructions--

จงใช้ object property shorthand กับ object literal เพื่อสร้างและคืนค่า object ด้วย property `name`, `age` และ `gender`


# --hints--

`createPerson("Zodiac Hasbro", 56, "male")` ควรคืนค่า `{name: "Zodiac Hasbro", age: 56, gender: "male"}`

```js
assert.deepEqual(
  { name: 'Zodiac Hasbro', age: 56, gender: 'male' },
  createPerson('Zodiac Hasbro', 56, 'male')
);
```

โค้ดของคุณไม่ควรใช้ `key:value`

```js
(getUserInput) => assert(!getUserInput('index').match(/:/g));
```

# --seed--

## --seed-contents--

```js
const createPerson = (name, age, gender) => {
  // Only change code below this line
  return {
    name: name,
    age: age,
    gender: gender
  };
  // Only change code above this line
};
```

# --solutions--

```js
const createPerson = (name, age, gender) => {
  return {
    name,
    age,
    gender
  };
};
```
