---
id: 587d7b7d367417b2b2512b1e
title: Generate an Array of All Object Keys with Object.keys()
challengeType: 1
forumTopicId: 301160
dashedName: generate-an-array-of-all-object-keys-with-object-keys
---

# --description--

นอกจากนี้เรายังสามารถสร้าง array จาก object ด้วย `Object.keys()` โดยส่ง object เข้าไปเป็น argument อย่างไรก็ตาม array ทีได้จาก `Object.keys()` จะประกอบด้วย string ของแต่ละ property ใน object โดย property เหล่านี้จะไม่มีลำดับใน array

# --instructions--

จงเขียนฟังก์ชัน `getArrayOfUsers` ให้สำเร็จ เพื่อให้คืนค่าเป็น array ที่ประกอบด้วย property ทั้งหมดใน object โดย object นั้นเป็น argument 

# --hints--

object `users` ควรประกอบด้วย key  `Alan`, `Jeff`, `Sarah`, และ `Ryan` เท่านั้น

```js
assert(
  'Alan' in users &&
    'Jeff' in users &&
    'Sarah' in users &&
    'Ryan' in users &&
    Object.keys(users).length === 4
);
```

function `getArrayOfUsers` ควรคืนค่า array ซึ่งประกอบด้วย key ทั้งหมดใน object `users`

```js
assert(
  (function () {
    users.Sam = {};
    users.Lewis = {};
    let R = getArrayOfUsers(users);
    return (
      R.indexOf('Alan') !== -1 &&
      R.indexOf('Jeff') !== -1 &&
      R.indexOf('Sarah') !== -1 &&
      R.indexOf('Ryan') !== -1 &&
      R.indexOf('Sam') !== -1 &&
      R.indexOf('Lewis') !== -1
    );
  })() === true
);
```

# --seed--

## --seed-contents--

```js
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  // Only change code below this line

  // Only change code above this line
}

console.log(getArrayOfUsers(users));
```

# --solutions--

```js
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  return Object.keys(obj);
}

console.log(getArrayOfUsers(users));
```
