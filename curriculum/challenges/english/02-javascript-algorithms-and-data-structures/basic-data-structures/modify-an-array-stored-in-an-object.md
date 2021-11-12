---
id: 587d7b7d367417b2b2512b1f
title: Modify an Array Stored in an Object
challengeType: 1
forumTopicId: 301163
dashedName: modify-an-array-stored-in-an-object
---

# --description--

ตอนนี้คุณได้เห็นการทำงานพื้นฐานทั้งหมดของ JavaScript object แล้ว คุณสามารถเพิ่ม แก้ไข และลบคู่ key-value ตรวจสอบว่ามี key อยู่หรือไม่ และวนอ่าน key ทั้งหมดในออบเจ็กต์ ในขณะที่คุณเรียนรู้ JavaScript ต่อ คุณจะเห็นการใช้งาน object ที่หลากหลายยิ่งขึ้น นอกจากนี้ ยังมีบทเรียนเกี่ยวกับโครงสร้างข้อมูลที่อยู่ในส่วน Coding Interview Prep ด้วย หลักสูตรนั้นยังครอบคลุมถึง <dfn>Map</dfn> และ <dfn>Set</dfn> object ของ ES6 ซึ่งทั้งสองอย่างนี้คล้ายกับ object ทั่วไป แต่มีฟีเจอร์เพิ่มเติมบางส่วน เมื่อคุณได้เรียนรู้พื้นฐานของ array และ object แล้ว คุณก็พร้อมที่จะเริ่มจัดการกับปัญหาที่ซับซ้อนมากขึ้นโดยใช้ JavaScript!

# --instructions--

เมื่อดู object ที่เราให้ไว้ใน code editor ซึ่งก็คือ object `user` ที่มี 3 key ได้แก่ `data` key ซึ่งมี 5 key โดยหนึ่งในนั้นมี array ของ `friends` จากจุดนี้ คุณจะเห็นได้ว่า object มีความยืดหยุ่นเพียงใดในฐานะที่เป็นโครงสร้างข้อมูล ในโจทย์นี้ เราได้เขียนฟังก์ชัน `addFriend` บางส่วนให้แล้ว จงเขียนฟังก์ชันให้เสร็จ เพื่อรับค่า object `user` และเพิ่ม name ของ `friend` argument มาเก็บใน array โดยเก็บใน `user.data.friends` แล้วคืนค่า array นั้น

# --hints--

`user` object ควรมี key `name`, `age` และ `data`

```js
assert('name' in user && 'age' in user && 'data' in user);
```

`addFriend` function ควรรับ `user` object และ string `friend` เป็น arguments และเพิ่ม friend ไปยัง array `friends` ใน object `user` 

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

`addFriend(user, "Pete")` ควรคืนค่า `["Sam", "Kira", "Tomo", "Pete"]`

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
  // Only change code below this line

  // Only change code above this line
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
