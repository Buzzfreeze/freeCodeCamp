---
id: 56bbb991ad1ed5201cd392d2
title: Add New Properties to a JavaScript Object
challengeType: 1
videoUrl: 'https://scrimba.com/c/cQe38UD'
forumTopicId: 301169
dashedName: add-new-properties-to-a-javascript-object
---

# --description--

เราสามารถเพิ่ม property ใหม่ให้กับ object ใน JavaScript ได้ด้วยวิธีเดียวกับตอนที่เราแก้ไข property

เราเพิ่ม property `bark` ให้กับ `ourDog` ได้ด้วยวิธีนี้:

```js
ourDog.bark = "bow-wow";
```

หรือวิธีนี้:

```js
ourDog["bark"] = "bow-wow";
```

ต่อไปถ้าเราอ่านค่า `ourDog.bark` ค่าเป็น `bow-wow`

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

จงเพิ่ม property `bark` ให้กับ `myDog` และกำหนดค่าเป็นเสียงสุนัข เช่น "woof" 
โดยคุณจะใช้ Dot Notation หรือ Bracket Notation ก็ได้

# --hints--

คุณควรเพิ่ม property `bark` ให้กับ `myDog`

```js
assert(myDog.bark !== undefined);
```

คุณต้องเพิ่ม property `bark` หลังจากการประกาศตัวแปร `myDog` เสร็จแล้ว

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
