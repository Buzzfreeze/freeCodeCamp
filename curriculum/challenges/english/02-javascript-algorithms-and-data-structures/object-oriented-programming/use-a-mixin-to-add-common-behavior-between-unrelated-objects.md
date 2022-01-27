---
id: 587d7db2367417b2b2512b89
title: Use a Mixin to Add Common Behavior Between Unrelated Objects
challengeType: 1
forumTopicId: 301331
dashedName: use-a-mixin-to-add-common-behavior-between-unrelated-objects
---

# --description--

จากที่เรียนมา คุณจะเห็นแล้วว่าการสืบทอดทำให้เกิดใช้พฤติกรรมร่วมกันได้  
แต่ในบางกรณี การใช้การสืบทอดก็ไม่ใช่วิธีที่ดีที่สุด เพราะว่าการสืบทอดจะทำงานได้ไม่ดีถ้า object ไม่เกี่ยวข้องกัน เช่น `Bird` และ `Airplane` ซึ่งถึงแม่ว่าจะบินได้มั้งคู่ แต่ `Bird` ก็ไม่ได้เป็นประเภทเดียวกับ `Airplane`

สำหรับ object ที่ไม่เกี่ยวข้องกัน ควรใช้ <dfn>mixin</dfn> ซึ่ง mixin ทำให้ object ต่างกันสามารถใช้งานฟังก์ชันชุดเดียวกันได้

```js
let flyMixin = function(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  }
};
```

เราสามารถส่ง object อะไรเข้าไปใน `flyMixin` ก็ได้ และฟังก์ชันนี้จะทำให้ object ที่่ใส่เข้าไปเรียกใช้ method `fly` ได้

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

ตัวอย่างด้านบนส่ง `bird` และ `plane` เข้าไปใน `flyMixin` ซึ่งจะกำหนดฟังก์ชัน `fly` ให้กับ object แต่ละตัว ดังนั้น ตอนนี้ทั้ง `bird` และ `plane` ก็สามารถใช้ฟังก์ชัน `fly` ได้แล้ว

```js
bird.fly();
plane.fly();
```

บน console จะแสดง string `Flying, wooosh!` สองครั้ง เพราะ object ก็เรียกใช้ `.fly()` ทั้งสองตัว

ลองสังเกตการทำงานของ mixin ที่ทำให้ method `fly` ตัวเดียวกัน สามารถเรียกใช้ได้ จากทั้ง `bird` และ `plane` ถึงแม้จะเป็น object ที่ไม่เกี่ยวข้องกันได้ 

# --instructions--

ให้สร้าง mixin ที่มีชื่อว่า `glideMixin` โดยกำหนดให้มี method `glide` จากนั้นให้ใช้ `glideMixin` เพื่อให้ทั้ง `bird` และ `boat` สามารถร่อน (glide) ได้

# --hints--

ตัวแปร `glideMixin` ต้องเป็นฟังก์ชัน

```js
assert(typeof glideMixin === 'function');
```

โค้ดของคุณควรใช้ `glideMixin` กับ object `bird` เพื่อให้มี method `glide`

```js
assert(typeof bird.glide === 'function');
```

โค้ดของคุณควรใช้ `glideMixin` กับ object `boat` เพื่อให้มี method `glide`

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

// แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
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
