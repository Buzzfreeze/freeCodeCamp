---
id: 56bbb991ad1ed5201cd392d1
title: Updating Object Properties
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9yEJT4'
forumTopicId: 18336
dashedName: updating-object-properties
---

# --description--

หลังจากที่คุณสร้าง JavaScript object แล้ว คุณสามารถอัปเดต properties ของ object ได้ตลอดเวลา เช่นเดียวกับที่คุณอัปเดตตัวแปรอื่นๆ คุณสามารถใช้เครื่องหมายจุดหรือวงเล็บเพื่ออัปเดต

ยกตัวอย่าง `ourDog`

```js
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};
```

เนื่องจากสุนัขตัวนี้มีความสุขเป็นพิเศษ เรามาเปลี่ยนชื่อสุนัขเป็น string `Happy Camper` กัน นี่คือวิธีที่เราอัปเดต name property ของ object `ourDog.name = "Happy Camper";` หรือ `ourDog["name"] = "Happy Camper";` ตอนนี้ถ้าเราเรียก `ourDog.name` แทนที่จะได้รับ `Camper` เราจะได้ชื่อใหม่ว่า `Happy Camper`


# --instructions--

จงอัปเดต name property ของ object `myDog` จาก `Coder` ให้มีค่าเป็น `Happy Coder` โดยคุณสามารถใช้เครื่องหมายจุดหรือเครื่องหมายวงเล็บก็ได้


# --hints--

คุณควรอัปเตต property `name` ของ `myDog` ให้เป็น string `Happy Coder`

```js
assert(/happy coder/gi.test(myDog.name));
```

คุณไม่ควรแก้ไข `myDog` definition

```js
assert(/"name": "Coder"/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(z){return z;})(myDog);
```

## --seed-contents--

```js
// Setup
var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line
```

# --solutions--

```js
var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog.name = "Happy Coder";
```
