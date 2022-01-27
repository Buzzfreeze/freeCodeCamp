---
id: 587d7b8a367417b2b2512b4f
title: Write Concise Object Literal Declarations Using Object Property Shorthand
challengeType: 1
forumTopicId: 301225
dashedName: write-concise-object-literal-declarations-using-object-property-shorthand
---

# --description--

ES6 ช่วยทำให้การประกาศ object literal ง่ายขึ้นด้วย Object Property Shorthand

ลองดูโค้ดด้านล่างนี้

```js
const getMousePosition = (x, y) => ({
  x: x,
  y: y
});
```

`getMousePosition` เป็นฟังก์ชันง่ายๆ ที่คืนค่าออกมาเป็น object ที่มี property สองตัว (`x` กับ `y`) ซึ่ง ES6 ลดจะความซ้ำซ้อนตรงนี้ลง  
โดยแทนที่เราจะเขียน `x: x` เราก็เขียนแค่ `x` ก็ได้ แล้ว `x` จะถูกแปลงเป็น `x: x` ให้โดยอัตโนมัติ  
ฟังก์ชันด้านบน จะเอามาเขียนใหม่ได้แบบนี้:

```js
const getMousePosition = (x, y) => ({ x, y });
```

# --instructions--

จงใช้ object property shorthand กับ object literal เพื่อสร้าง object ที่มี property `name`, `age` และ `gender` และคืนค่า object ออกมา


# --hints--

`createPerson("Zodiac Hasbro", 56, "male")` ต้องคืนค่าเป็น `{name: "Zodiac Hasbro", age: 56, gender: "male"}`

```js
assert.deepEqual(
  { name: 'Zodiac Hasbro', age: 56, gender: 'male' },
  createPerson('Zodiac Hasbro', 56, 'male')
);
```

ต้องไม่ใช้การสร้าง property ใน object แบบ `key:value`

```js
(getUserInput) => assert(!getUserInput('index').match(/:/g));
```

# --seed--

## --seed-contents--

```js
const createPerson = (name, age, gender) => {
  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
  return {
    name: name,
    age: age,
    gender: gender
  };
  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
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
