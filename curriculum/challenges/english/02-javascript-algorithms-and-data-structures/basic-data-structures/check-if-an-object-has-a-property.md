---
id: 587d7b7d367417b2b2512b1c
title: Check if an Object has a Property
challengeType: 1
forumTopicId: 301155
dashedName: check-if-an-object-has-a-property
---

# --description--

ตอนนี้เราสามารถเพิ่ม แก้ไข และลบ key ออกจาก object ได้ แต่ถ้าเราแค่อยากรู้ว่า object นั้น มี property ที่ต้องการหรือไม่ JavaScript ก็มีทางเลือกให้เรา 2 วิธี คือ 

1. ใช้ method `hasOwnProperty()` และ
2. ใช้ keyword `in` 

ถ้าเรามี object `users` ที่มี property เป็น `Alan` เราสามารถตรวจสอบการมีอยู่ของ property ได้ตามตัวอย่างนี้:

```js
users.hasOwnProperty('Alan');
'Alan' in users;
```

ทั้งสองแบบจะคืนค่าเป็น `true`

# --instructions--

จงเขียนฟังก์ชัน `isEveryoneHere` เพื่อคืนค่า `true` ถ้า object ที่ส่งเข้าไปในฟังก์ชันมี key ครบทั้ง 4 ตัวคือ  `Alan`, `Jeff`, `Sarah` และ `Ryan` และคืนค่า false หากมั key ไม่ครบทั้ง 4 ตัว

# --hints--

ห้ามเข้าถึง object `users` โดยตรง

```js 

assert(code.match(/users/gm).length <= 2)

```

object `users` ต้องมี key เป็น `Alan`, `Jeff`, `Sarah` และ `Ryan` เท่านั้น

```js
assert(
  'Alan' in users &&
    'Jeff' in users &&
    'Sarah' in users &&
    'Ryan' in users &&
    Object.keys(users).length === 4
);
```

ฟังก์ชัน `isEveryoneHere` ต้องเป็น `true` ถ้า object ที่ส่งผ่านเข้าไปมี property ชื่อ `Alan`, `Jeff`, `Sarah` และ `Ryan` ครบทั้ง 4 ตัว

```js
assert(isEveryoneHere(users) === true);
```

ฟังก์ชัน `isEveryoneHere` ต้องเป็น `false` ถ้า object ที่ส่งผ่านเข้าไปไม่มี property ชื่อ `Alan`

```js
assert(
  (function () {
    delete users.Alan;
    return isEveryoneHere(users);
  })() === false
);
```

ฟังก์ชัน `isEveryoneHere` ต้องเป็น `false` ถ้า object ที่ส่งผ่านเข้าไปไม่มี property ชื่อ `Jeff`

```js
assert(
  (function () {
    delete users.Jeff;
    return isEveryoneHere(users);
  })() === false
);
```

ฟังก์ชัน `isEveryoneHere` ต้องเป็น `false` ถ้า object ที่ส่งผ่านเข้าไปไม่มี property ชื่อ `Sarah`

```js
assert(
  (function () {
    delete users.Sarah;
    return isEveryoneHere(users);
  })() === false
);
```

ฟังก์ชัน `isEveryoneHere` ต้องเป็น `false` ถ้า object ที่ส่งผ่านเข้าไปไม่มี property ชื่อ `Ryan`

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
  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
  
  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
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
