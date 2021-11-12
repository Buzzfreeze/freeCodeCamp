---
id: 587d7b8a367417b2b2512b4d
title: Use Destructuring Assignment to Pass an Object as a Function's Parameters
challengeType: 1
forumTopicId: 301217
dashedName: use-destructuring-assignment-to-pass-an-object-as-a-functions-parameters
---

# --description--

ในบางกรณี คุณสามารถdestructur object ใน argument ของฟังก์ชันได้


พิจารณาโค้ดดังนี้

```js
const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;

}
```

นี่คือการ destructure object ที่ส่งเข้าไปยังฟังก์ชัน นอกจากนี้ยังสามารถทำได้ดังนี้:

```js
const profileUpdate = ({ name, age, nationality, location }) => {

}
```

เมื่อ `profileData` ผ่านเข้าไปยัง function ด้านบน ค่าจะถูก destructured (แยก) ออกจาก function parameter ที่ใช้ภายใน function

# --instructions--

จงใช้ destructuring assignment ภายใน argument ของ function `half` เพื่อส่งค่า `max` และ `min` เท่านั้น เข้าไปข้างใน function 

# --hints--

`stats` ควรเป็น `object`.

```js
assert(typeof stats === 'object');
```

`half(stats)` ควรมีค่า `28.015`

```js
assert(half(stats) === 28.015);
```

ควรใช้ Destructuring 

```js
assert(__helpers.removeWhiteSpace(code).match(/half=\({\w+,\w+}\)/));
```

ควรใช้ Destructured parameter 

```js
assert(!code.match(/stats\.max|stats\.min/));
```

# --seed--

## --seed-contents--

```js
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
const half = (stats) => (stats.max + stats.min) / 2.0; 
// Only change code above this line
```

# --solutions--

```js
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

const half = ( {max, min} ) => (max + min) / 2.0;
```
