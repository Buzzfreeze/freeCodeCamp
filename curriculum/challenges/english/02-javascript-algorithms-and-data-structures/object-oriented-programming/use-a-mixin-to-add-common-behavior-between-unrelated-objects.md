---
id: 587d7db2367417b2b2512b89
title: Use a Mixin to Add Common Behavior Between Unrelated Objects
challengeType: 1
forumTopicId: 301331
dashedName: use-a-mixin-to-add-common-behavior-between-unrelated-objects
---

# --description--

คุณได้เห็นมาแล้วว่า การสืบทอดก่อให้เกิดการแชร์พฤติกรรมร่วมกัน อย่างไรก็ตาม การสืบทอดอาจไม่ใช่วิธีแก้ปัญหาที่ดีที่สุด กล่าวคือ การสืบทอดจะทำงานได้ไม่ดีกับ object ที่ไม่เกี่ยวข้องกัน (unrelated objects) เช่น `Bird` และ `Airplane` ทั้งคู่สามารถบินได้ แต่ `Bird` ไม่ได้เป็นประเภทเดียวกับ `Airplane`

สำหรับ object ที่ไม่เกี่ยวข้องกัน (unrelated objects) ควรใช้ <dfn>mixins</dfn> ซึ่ง mixin ทำให้ object ต่างกันสามารถใช้งานฟังก์ชันชุดเดียวกันได้

```js
let flyMixin = function(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  }
};
```

`flyMixin` รับค่าได้ทุก object และทำให้ object เรียกใช้ `fly` method ได้

```js
let bird = {
  name: "Donald",
  numLegs: 2
};

let plane = {
  model: "777",
  numPassengers: 524
};

flyMixin(bird);
flyMixin(plane);
```

`bird` และ `plane` ถูกส่งเข้าไปใน `flyMixin` ซึ่งมีการกำหนดฟังก์ชัน `fly` ให้กับแต่ละ object ดังนั้น ตอนนี้ทั้ง `bird` และ `plane` สามารถบินได้ (fly)

```js
bird.fly();
plane.fly();
```

หน้าจอ console ควรแสดง string `Flying, wooosh!` สองครั้ง เพราะแต่ละ object มีการเรียก `.fly()`

นี่เป็นวิธีที่ mixin ทำให้ `fly` method เดียวกัน สามารถเรียกใช้ซ้ำโดย `bird` และ `plane` ซึ่งเป็น object ที่ไม่เกี่ยวข้องกันได้ 

# --instructions--

จงสร้าง mixin ที่มีชื่อว่า `glideMixin` โดยกำหนดให้มี method `glide` จากนั้นให้ใช้ `glideMixin` เพื่อให้ทั้ง `bird` และ `boat` สามารถร่อน (glide) ได้

# --hints--

โค้ดของคุณควรกำหนดให้ตัวแปร `glideMixin` เป็นฟังก์ชัน

```js
assert(typeof glideMixin === 'function');
```

โค้ดของคุณควรใช้ `glideMixin` กับ `bird` object เพื่อให้มี `glide` method

```js
assert(typeof bird.glide === 'function');
```

โค้ดของคุณควรใช้ `glideMixin` กับ `boat` object เพื่อให้มี `glide` method

```js
assert(typeof boat.glide === 'function');
```

# --seed--

## --seed-contents--

```js
let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Only change code below this line
```

# --solutions--

```js
let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};
function glideMixin (obj) {
  obj.glide = () => 'Gliding!';
}

glideMixin(bird);
glideMixin(boat);
```
