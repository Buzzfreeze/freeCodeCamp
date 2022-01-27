---
id: 5cfa550e84205a357704ccb6
title: Use Destructuring Assignment to Extract Values from Objects
challengeType: 1
forumTopicId: 301216
dashedName: use-destructuring-assignment-to-extract-values-from-objects
---

# --description--

<dfn>Destructuring assignment</dfn> เป็น syntax พิเศษที่เพิ่มมาใน ES6 ที่ใช้เพื่อกำหนดค่าตัวแปรโดยการดึงค่าจาก object โดยตรง

ลองดูโค้ดของ ES5 กันก่อน:

```js
const user = { name: 'John Doe', age: 34 };

const name = user.name;
const age = user.age;
```

ในตัวอย่างนี้ `name` จะมีค่าเป็น string `John Doe` และ `age` จะมีค่าเป็น number `34`

เราสามารถแปลงโค้ดด้านบนให้สั้นลงโดยใช้ ES6 ได้ตามนี้:

```js
const { name, age } = user;
```

ในตัวอย่างนี้ `name` ก็จะมีค่าเป็น string `John Doe` และ `age` ก็จะมีค่าเป็น number `34`

ตัวแปร `name` และ `age` จะถูกสร้างขึ้น และดึงค่าจาก parameter ที่มีชื่อเดียวกันใน object `user` 
จะเห็นได้ว่าการเขียนแบบ ES6 นั้นสั้นและสบายตากว่ามาก

เราจะแยกค่าจากออกมาจาก object กี่ค่าก็ได้ตามที่เราต้องการ

# --instructions--

การกำหนดค่าเป็นแบบ destructuring assignment โดยกำหนดค่าให้ `today` และ `tomorrow` ด้วยค่าของ parameter `today` และ `tomorrow` จาก object ที่ชื่อ `HIGH_TEMPERATURES`


# --hints--

ต้องลบ assignment syntax ของ ES5 ออก

```js
assert(
  !code.match(/today\s*=\s*HIGH_TEMPERATURES\.(today|tomorrow)/g)
);
```

ต้องใช้การ destructuring ในการสร้างตัวแปร `today` 

```js
assert(
  code.match(/(var|let|const)\s*{\s*(today[^}]*|[^,]*,\s*today)\s*}\s*=\s*HIGH_TEMPERATURES(;|\s+|\/\/)/g)
);
```

ต้องใช้การ destructuring ในการสร้างตัวแปร `tomorrow`

```js
assert(
  code.match(/(var|let|const)\s*{\s*(tomorrow[^}]*|[^,]*,\s*tomorrow)\s*}\s*=\s*HIGH_TEMPERATURES(;|\s+|\/\/)/g)
);
```

`today` ต้องมีค่าเป็น `77` และ `tomorrow` ต้องมีค่าเป็น `80`


```js
assert(today === 77 && tomorrow === 80);
```

# --seed--

## --seed-contents--

```js
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น

const today = HIGH_TEMPERATURES.today;
const tomorrow = HIGH_TEMPERATURES.tomorrow;

// แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
```

# --solutions--

```js
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const { today, tomorrow } = HIGH_TEMPERATURES;
```
