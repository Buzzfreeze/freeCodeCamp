---
id: 5688e62ea601b2482ff8422b
title: Profile Lookup
challengeType: 1
videoUrl: 'https://scrimba.com/c/cDqW2Cg'
forumTopicId: 18259
dashedName: profile-lookup
---

# --description--

เรามี array ที่เก็บ object แทนบุคคลต่างๆ ใน contact list ของเรา

function `lookUpProfile` รับค่า `name` และ property (`prop`) เป็น argument ได้เขียนรอไว้ให้คุณแล้ว

function ควรเช็ค ว่า `name` เป็น `firstName` ที่อยู่ใน contact list หรือไม่ และเช็ค property (`prop`) ว่าเป็น property ของ contact หรือไม่

ถ้าทั้งคู่เป็นจริง ให้คืนค่า "value" ของ property นั้น

ถ้า `name` ไม่มีใน contacts ให้คืนค่า string `No such contact`

ถ้า `prop` ไม่มี property ของ contact ที่ match กับ `name` ให้คืนค่า string `No such property`

# --hints--

`lookUpProfile("Kristian", "lastName")` ควรคืนค่า string `Vos`

```js
assert(lookUpProfile('Kristian', 'lastName') === 'Vos');
```

`lookUpProfile("Sherlock", "likes")` ควรคืนค่า `["Intriguing Cases", "Violin"]`

```js
assert.deepEqual(lookUpProfile('Sherlock', 'likes'), [
  'Intriguing Cases',
  'Violin'
]);
```

`lookUpProfile("Harry", "likes")` ควรคืนค่า array

```js
assert(typeof lookUpProfile('Harry', 'likes') === 'object');
```

`lookUpProfile("Bob", "number")` ควรคืนค่า string `No such contact`

```js
assert(lookUpProfile('Bob', 'number') === 'No such contact');
```

`lookUpProfile("Bob", "potato")` ควรคืนค่า string `No such contact`

```js
assert(lookUpProfile('Bob', 'potato') === 'No such contact');
```

`lookUpProfile("Akira", "address")` ควรคืนค่า string `No such property`

```js
assert(lookUpProfile('Akira', 'address') === 'No such property');
```

# --seed--

## --seed-contents--

```js
// Setup
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
  // Only change code below this line

  // Only change code above this line
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


//Write your function in between these comments
function lookUpProfile(name, prop){
    for(var i in contacts){
      if(contacts[i].firstName === name) {
        return contacts[i][prop] || "No such property";
      }
    }
   return "No such contact";
}
//Write your function in between these comments

lookUpProfile("Akira", "likes");
```
