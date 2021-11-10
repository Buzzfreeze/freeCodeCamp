---
id: 56bbb991ad1ed5201cd392d2
title: Add New Properties to a JavaScript Object
challengeType: 1
videoUrl: 'https://scrimba.com/c/cQe38UD'
forumTopicId: 301169
dashedName: add-new-properties-to-a-javascript-object
---

# --description--

คุณสามารถเพิ่ม properties ใหม่ให้กับ JavaScript object ได้ด้วยวิธีเดียวกับการแก้ไข properties

นี่เป็นวิธีที่เราเพิ่ม property `bark` ให้กับ `ourDog`

```js
ourDog.bark = "bow-wow";
```

or

```js
ourDog["bark"] = "bow-wow";
```

ตอนนี้เมื่อเราใช้งาน `ourDog.bark`เราจะได้การเห่า `bow-wow`

ตัวอย่าง:

```js
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.bark = "bow-wow";
```

# --instructions--

จงเพิ่ม property `bark` ให้กับ `myDog` และกำหนดค่าเป็นเสียงสุนัข เช่น  "woof" โดยคุณอาจใช้เครื่องหมายจุด หรือวงเล็บ

# --hints--

คุณควรเพิ่ม property `bark` ให้กับ `myDog`

```js
assert(myDog.bark !== undefined);
```

คุณไม่ควรเพิ่ม `bark` เป็นค่าเริ่มต้นของ `myDog`

```js
assert(!/bark[^\n]:/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(z){return z;})(myDog);
```

## --seed-contents--

```js
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};


```

# --solutions--

```js
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog.bark = "Woof Woof";
```
