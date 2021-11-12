---
id: 587d7b7d367417b2b2512b1c
title: Check if an Object has a Property
challengeType: 1
forumTopicId: 301155
dashedName: check-if-an-object-has-a-property
---

# --description--

ตอนนี้เราสามารถเพิ่ม แก้ไข และลบ key ออกจาก object ได้ แต่ถ้าเราแค่อยากรู้ว่า object นั้น มี property ที่ต้องการหรือไม่ JavaScript มีทางเลือก 2 วิธี คือ หนึ่งใช้ method `hasOwnProperty()` และอีกวิธีคือ ใช้ keyword `in` โดยหากเรามี object `users` ที่มี property เป็น `Alan` เราสามารถตรวจสอบการมีอยู่ของ property ด้วยวิธีใดวิธีหนึ่งต่อไปนี้:

```js
users.hasOwnProperty('Alan');
'Alan' in users;
```

ทั้งสองแบบจะคืนค่า `true`

# --instructions--

จงเขียน function ให้เสร็จ เพื่อคืนค่า true ถ้า object ที่ส่งเข้าไปใน function มีทั้ง 4 names คือ  `Alan`, `Jeff`, `Sarah` และ `Ryan` และคืนค่า false หากเงื่อนไขดังกล่าวเป็นเท็จ

# --hints--

object `users` ไม่ควรเข้าถึงโดยตรง

```js 

assert(code.match(/users/gm).length <= 2)

```

object `users` ควรมีแค่ key `Alan`, `Jeff`, `Sarah` และ `Ryan`

```js
assert(
  'Alan' in users &&
    'Jeff' in users &&
    'Sarah' in users &&
    'Ryan' in users &&
    Object.keys(users).length === 4
);
```

function `isEveryoneHere` ควรคืนค่า `true` ถ้า `Alan`, `Jeff`, `Sarah` และ `Ryan` เป็น property ของ object ที่ส่งผ่านเข้าไป

```js
assert(isEveryoneHere(users) === true);
```

function `isEveryoneHere` ควรคืนค่า `false` ถ้า  `Alan` ไม่ใช่ property ของ object ที่ส่งผ่านเข้าไป

```js
assert(
  (function () {
    delete users.Alan;
    return isEveryoneHere(users);
  })() === false
);
```

function `isEveryoneHere` ควรคืนค่า `false` ถ้า  `Jeff` ไม่ใช่ property ของ object ที่ส่งผ่านเข้าไป

```js
assert(
  (function () {
    delete users.Jeff;
    return isEveryoneHere(users);
  })() === false
);
```

function `isEveryoneHere` ควรคืนค่า `false` ถ้า  `Sarah` ไม่ใช่ property ของ object ที่ส่งผ่านเข้าไป

```js
assert(
  (function () {
    delete users.Sarah;
    return isEveryoneHere(users);
  })() === false
);
```

function `isEveryoneHere` ควรคืนค่า `false` ถ้า  `Ryan` ไม่ใช่ property ของ object ที่ส่งผ่านเข้าไป

```js
assert(
  (function () {
    delete users.Ryan;
    return isEveryoneHere(users);
  })() === false
);
```

# --seed--

## --seed-contents--

```js
let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {
  // Only change code below this line
  
  // Only change code above this line
}

console.log(isEveryoneHere(users));
```

# --solutions--

```js
let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {
  return [
    'Alan',
    'Jeff',
    'Sarah',
    'Ryan'
  ].every(user => userObj.hasOwnProperty(user));
}

console.log(isEveryoneHere(users));
```
