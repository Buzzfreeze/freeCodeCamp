---
id: 587d7b7d367417b2b2512b1f
title: Modify an Array Stored in an Object
challengeType: 1
forumTopicId: 301163
dashedName: modify-an-array-stored-in-an-object
---

# --description--

ตอนนี้คุณได้เห็นการทำงานพื้นฐานทั้งหมดของ JavaScript object แล้ว 
ไม่ว่าจะเป็นการ

- เพิ่ม แก้ไข และลบคู่ key-value 
- ตรวจสอบว่ามี key อยู่หรือไม่ และ
- วนอ่าน key ทั้งหมดในออบเจ็กต์ 

เมื่อคุณเรียนรู้ JavaScript ต่อไป คุณจะเห็นการใช้งาน object ที่หลากหลายยิ่งขึ้น นอกจากนี้ ยังมีบทเรียนเกี่ยวกับโครงสร้างข้อมูลที่อยู่ในส่วน Coding Interview Prep ด้วย หลักสูตรนั้นจะครอบคลุมเรื่อง <dfn>Map</dfn> และ <dfn>Set</dfn> object ของ ES6 ซึ่งทั้งตัวนี้จะคล้ายกับ object ทั่วๆไป แต่แค่มีฟีเจอร์เพิ่มเติมนิดหน่อย 
ตอนนี้เมื่อคุณได้รู้พื้นฐานของ array และ object ไปแล้ว คุณก็พร้อมจะจัดการปัญหาที่ซับซ้อนมากขึ้นโดยใช้ JavaScript แล้ว!

# --instructions--

ลองดู object ที่เราให้ไว้ใน code editor 
object `user` มี key 3 ตัว ใน key `data` จะมี key 5 ตัวอยู่ข้างใน โดยหนึ่งในนั้นจะเป็น key ชื่อ `friends` ซึ่งเป็น array 
ตอนนี้คุณจะเห็นแล้วว่า object เป็นโครงสร้างข้อมูลที่เป็นอิสระขนาดไหน 
ในโจทย์นี้ เราได้เขียนฟังก์ชัน `addFriend` บางส่วนให้แล้ว ให้เขียนฟังก์ชันต่อเพื่อนำค่าของ argument `friend` ไปเพิ่มใน `user.data.friends` ของ object `user` แล้วคืนค่า array นั้นออกมา

# --hints--

object `user` ต้องมี key ที่ชื่อ `name`, `age` และ `data`

```js
assert('name' in user && 'age' in user && 'data' in user);
```

ฟังก์ชัน `addFriend` ต้องรับ argument เป็น object `user` และ string `friend` แล้วต้องทำการเพิ่ม `friend` ไปใน array `friends` ใน object `user` 

```js
assert(
  (function () {
    let L1 = user.data.friends.length;
    addFriend(user, 'Sean');
    let L2 = user.data.friends.length;
    return L2 === L1 + 1;
  })()
);
```

การเรียกใช้ฟังก์ชัน `addFriend(user, "Pete")` ต้องคืนค่ามาเป็น `["Sam", "Kira", "Tomo", "Pete"]`

```js
assert.deepEqual(
  (function () {
    delete user.data.friends;
    user.data.friends = ['Sam', 'Kira', 'Tomo'];
    return addFriend(user, 'Pete');
  })(),
  ['Sam', 'Kira', 'Tomo', 'Pete']
);
```

# --seed--

## --seed-contents--

```js
let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น

  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
}

console.log(addFriend(user, 'Pete'));
```

# --solutions--

```js
let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  userObj.data.friends.push(friend);
  return userObj.data.friends;
}
```
