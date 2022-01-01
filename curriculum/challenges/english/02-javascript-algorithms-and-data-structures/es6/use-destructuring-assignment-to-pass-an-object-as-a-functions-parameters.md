---
id: 587d7b8a367417b2b2512b4d
title: Use Destructuring Assignment to Pass an Object as a Function's Parameters
challengeType: 1
forumTopicId: 301217
dashedName: use-destructuring-assignment-to-pass-an-object-as-a-functions-parameters
---

# --description--

ในบางกรณี เราจะ destructure object ที่เป็น argument ของฟังก์ชันได้


ลองดูโค้ดด้านล่างนี้

```js
const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;

}
```

ตัวอย่างด้านบนเป็นการ destructure object ที่ส่งเข้าไปยังฟังก์ชัน 
หรือว่าเราจะทำ destructured parameter แบบโค้ดด้านล่างนี้ก็ได้:

```js
const profileUpdate = ({ name, age, nationality, location }) => {

}
```

เมื่อส่ง `profileData` เข้าไปยังฟังก์ชันตัวอย่าง ค่าจะถูก destructure ออกจาก parameter ของฟังก์ชันเพื่อเอาไว้ใช้ในฟังก์ชัน

# --instructions--

จงใช้ destructuring assignment กับ argument ของฟังก์ชัน `half` เพื่อส่งแค่ค่า `max` กับ `min` เข้าไปในฟังก์ชัน 

# --hints--

`stats` ต้องเป็นข้อมูลประเภท `object`

```js
assert(typeof stats === 'object');
```

การเรียกใช้ฟังก์ชัน `half(stats)` ต้องคืนค่าออกมาเป็น `28.015`

```js
assert(half(stats) === 28.015);
```

ต้องใช้การ Destructuring 

```js
assert(__helpers.removeWhiteSpace(code).match(/half=\({\w+,\w+}\)/));
```

ต้องใช้ destructured parameter 

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

// แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
const half = (stats) => (stats.max + stats.min) / 2.0; 
// แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
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
