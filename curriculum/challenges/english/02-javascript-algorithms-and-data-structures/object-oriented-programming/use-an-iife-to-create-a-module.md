---
id: 587d7db2367417b2b2512b8c
title: Use an IIFE to Create a Module
challengeType: 1
forumTopicId: 301332
dashedName: use-an-iife-to-create-a-module
---

# --description--

immediately invoked function expression (IIFE) มักใช้ในการรวมกลุ่มฟังก์ชันที่เกี่ยวข้องกันเข้ามาเป็น object เดียวกัน หรือ <dfn>module</dfn> เดียวกัน ตัวอย่างเช่น แบบทดสอบที่ผ่านมามีการกำหนด 2 mixins

```js
function glideMixin(obj) {
  obj.glide = function() {
    console.log("Gliding on the water");
  };
}
function flyMixin(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  };
}
```

เราสามารถรวม mixins เหล่านี้ให้อยู่ใน module เดียวกันได้ดังนี้

```js
let motionModule = (function () {
  return {
    glideMixin: function(obj) {
      obj.glide = function() {
        console.log("Gliding on the water");
      };
    },
    flyMixin: function(obj) {
      obj.fly = function() {
        console.log("Flying, wooosh!");
      };
    }
  }
})();
```

หมายเหตุ คุณมี immediately invoked function expression (IIFE) ซึ่งคืนค่าเป็น object `motionModule` โดย object นี้ประกอบด้วย properties ที่เป็นพฤติกรรมต่างๆ ของ mixin ซึ่งข้อดีของการทำให้เป็นรูปแบบ module ก็คือ พฤติกรรมต่างๆ สามารถรวมอยู่ใน object เดียว และสามารถเรียกใช้จากโค้ดส่วนต่างๆ ได้ โค้ดด้านล่างนี้เป็นตัวอย่างการใช้งาน

```js
motionModule.glideMixin(duck);
duck.glide();
```

# --instructions--

จงสร้าง module ที่มีชื่อว่า `funModule` เพื่อรวบ maxin `isCuteMixin` และ `singMixin` เข้าด้วยกัน โดย `funModule` ควรคืนค่าเป็น object

# --hints--

`funModule` ควรถูกกำหนดและคืนค่าเป็น object

```js
assert(typeof funModule === 'object');
```

`funModule.isCuteMixin` ควรเข้าถึงฟังก์ชันได้

```js
assert(typeof funModule.isCuteMixin === 'function');
```

`funModule.singMixin` ควรเข้าถึงฟังก์ชันได้

```js
assert(typeof funModule.singMixin === 'function');
```

# --seed--

## --seed-contents--

```js
let isCuteMixin = function(obj) {
  obj.isCute = function() {
    return true;
  };
};
let singMixin = function(obj) {
  obj.sing = function() {
    console.log("Singing to an awesome tune");
  };
};
```

# --solutions--

```js
const funModule = (function () {
  return {
    isCuteMixin: obj => {
      obj.isCute = () => true;
    },
    singMixin: obj => {
      obj.sing = () => console.log("Singing to an awesome tune");
    }
  };
})();
```
