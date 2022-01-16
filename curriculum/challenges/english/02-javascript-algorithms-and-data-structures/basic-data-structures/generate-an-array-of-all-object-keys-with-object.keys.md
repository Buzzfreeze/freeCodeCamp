---
id: 587d7b7d367417b2b2512b1e
title: Generate an Array of All Object Keys with Object.keys()
challengeType: 1
forumTopicId: 301160
dashedName: generate-an-array-of-all-object-keys-with-object-keys
---

# --description--

เราสามารถสร้าง array ของ key ใน object ได้ด้วย `Object.keys()` โดยส่ง object เข้าไปเป็น argument
`Object.keys()` จะคืนค่าเป็น array ของชื่อ property ใน object โดยจะไม่มีการเรียงลำดับชื่อของ property ที่ส่งออกมา

# --instructions--

ให้เขียนฟังก์ชัน `getArrayOfUsers` เพื่อให้ฟังก์ชันนี้คืนค่าเป็น array ของชื่อของ property ทั้งหมดใน object ที่เป็น argument

# --hints--

object `users` ต้องมี key เป็น `Alan`, `Jeff`, `Sarah`, และ `Ryan` เท่านั้น

```js
assert(
  'Alan' in users &&
    'Jeff' in users &&
    'Sarah' in users &&
    'Ryan' in users &&
    Object.keys(users).length === 4
);
```

ฟังก์ชัน `getArrayOfUsers` ต้องคืนค่าเป็น array ที่มี key ทั้งหมดใน object `users`

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
  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น

  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
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
