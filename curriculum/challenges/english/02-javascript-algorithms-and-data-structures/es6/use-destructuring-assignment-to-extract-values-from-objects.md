---
id: 5cfa550e84205a357704ccb6
title: Use Destructuring Assignment to Extract Values from Objects
challengeType: 1
forumTopicId: 301216
dashedName: use-destructuring-assignment-to-extract-values-from-objects
---

# --description--

<dfn>Destructuring assignment</dfn> เป็น syntax พิเศษที่แนะนำใน ES6 เพื่อกำหนดค่า object โดยตรง


วิเคราะห์โค้ด ES5 ต่อไปนี้

```js
const user = { name: 'John Doe', age: 34 };

const name = user.name;
const age = user.age;
```

`name` ควรมีค่า string `John Doe` และ `age` ควรเป็น number `34`

โค้ดด้านบนนี้เทียบเท่ากับการใช้ ES6 ดังนี้


```js
const { name, age } = user;
```

`name` ควรมีค่า string `John Doe` และ `age` ควรเป็น number `34`

ตัวแปร `name` และ `age` จะถูกสร้างและกำหนดค่าที่เกี่ยวข้องจาก object `user` คุณจะเห็นว่า แบบ ES6 เขียนได้สั้นและสบายตามากกว่า

คุณสามารถแยกค่าหลายค่า หรือบางค่าจาก object ตามที่คุณต้องการ

# --instructions--

จงแทนที่การกำหนดค่าด้วย destructuring assignment โดยยังคงนำตัวแปร `today` และ `tomorrow` มากำหนดด้วยค่าของ `today` และ `tomorrow` จาก object `HIGH_TEMPERATURES`


# --hints--

คุณควรเอา ES5 assignment syntax ออก

```js
assert(
  !code.match(/today\s*=\s*HIGH_TEMPERATURES\.(today|tomorrow)/g)
);
```

คุณควรใช้ destructuring ในการสร้างตัวแปร `today` 

```js
assert(
  code.match(/(var|let|const)\s*{\s*(today[^}]*|[^,]*,\s*today)\s*}\s*=\s*HIGH_TEMPERATURES(;|\s+|\/\/)/g)
);
```

คุณควรใช้ destructuring ในการสร้างตัวแปร `tomorrow`

```js
assert(
  code.match(/(var|let|const)\s*{\s*(tomorrow[^}]*|[^,]*,\s*tomorrow)\s*}\s*=\s*HIGH_TEMPERATURES(;|\s+|\/\/)/g)
);
```

`today` ควรเท่ากับ `77` และ `tomorrow` ควรเท่ากับ `80`


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

// Only change code below this line

const today = HIGH_TEMPERATURES.today;
const tomorrow = HIGH_TEMPERATURES.tomorrow;

// Only change code above this line
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
