---
id: 5688e62ea601b2482ff8422b
title: Profile Lookup
challengeType: 1
videoUrl: 'https://scrimba.com/c/cDqW2Cg'
forumTopicId: 18259
dashedName: profile-lookup
---

# --description--

เรามี array ที่เก็บ object ที่เป็นคนที่อยู่ใน contact list ของเรา

เราได้เขียนฟังก์ชัน `lookUpProfile` ที่รับค่า `name` และ property (`prop`) เป็น argument ไว้ให้แล้ว

ฟังก์ชันนี้จะต้องเช็คว่าใน contact list ของเรามีรายชื่อที่ `firstName` ตรงกับ `name` ที่ใส่เข้ามาหรือไม่ และต้องเช็คด้วยว่าใน contact นี้มี property ที่ชื่อตรงกับ `prop` หรือไม่

ถ้าเจอว่าเป็น `true` ทั้งคู่ให้อ่านค่าของ property นั้นและคืนค่าออกไป  
ถ้าใน `contacts` ไม่มีคนที่ `firstName` ตรงกับ `name` ให้คืนค่าออกไปเป็น string `No such contact`  
ถ้าเจอว่าใน contact นี้ไม่มี property ที่ชื่อตรงกับ `prop` ให้คืนค่า string `No such property`

# --hints--

การเรียกใช้ฟังก์ชัน `lookUpProfile("Kristian", "lastName")` ต้องคืนค่าออกมาเป็น string `Vos`

```js
assert(lookUpProfile('Kristian', 'lastName') === 'Vos');
```

การเรียกใช้ฟังก์ชัน `lookUpProfile("Sherlock", "likes")` ต้องคืนค่าออกมาเป็น `["Intriguing Cases", "Violin"]`

```js
assert.deepEqual(lookUpProfile('Sherlock', 'likes'), [
  'Intriguing Cases',
  'Violin'
]);
```

การเรียกใช้ฟังก์ชัน `lookUpProfile("Harry", "likes")` ต้องคืนค่าออกมาเป็น array

```js
assert(typeof lookUpProfile('Harry', 'likes') === 'object');
```

การเรียกใช้ฟังก์ชัน `lookUpProfile("Bob", "number")` ต้องคืนค่าออกมาเป็น string `No such contact`

```js
assert(lookUpProfile('Bob', 'number') === 'No such contact');
```

การเรียกใช้ฟังก์ชัน `lookUpProfile("Bob", "potato")` ต้องคืนค่าออกมาเป็น string `No such contact`

```js
assert(lookUpProfile('Bob', 'potato') === 'No such contact');
```

การเรียกใช้ฟังก์ชัน `lookUpProfile("Akira", "address")` ต้องคืนค่าออกมาเป็น string `No such property`

```js
assert(lookUpProfile('Akira', 'address') === 'No such property');
```

# --seed--

## --seed-contents--

```js
// เตรียมข้อมูล
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop) {
  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น

  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
}

lookUpProfile("Akira", "likes");
```

# --solutions--

```js
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    },
];


// แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
function lookUpProfile(name, prop){
    for(var i in contacts){
      if(contacts[i].firstName === name) {
        return contacts[i][prop] || "No such property";
      }
    }
   return "No such contact";
}
// แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น

lookUpProfile("Akira", "likes");
```
