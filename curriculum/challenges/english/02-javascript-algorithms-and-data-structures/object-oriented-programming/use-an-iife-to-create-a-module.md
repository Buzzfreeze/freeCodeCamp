---
id: 587d7db2367417b2b2512b8c
title: Use an IIFE to Create a Module
challengeType: 1
forumTopicId: 301332
dashedName: use-an-iife-to-create-a-module
---

# --description--

immediately invoked function expression (IIFE) มักใช้ในการรวมกลุ่มฟังก์ชันที่เกี่ยวข้องกันเข้ามาเป็น object เดียวกัน หรือ <dfn>module</dfn> เดียวกัน 
เช่น ในแบบทดสอบที่ผ่านมาเราได้สร้าง mixin 2 ตัว ตามนี้:

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

เราจะรวม mixin ทั้งสองตัวให้อยู่ใน module เดียวกันได้แบบนี้:

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

ตอนนี้คุณจะมี IIFE ที่คืนค่าเป็น object `motionModule` โดย object นี้จะมี property ที่เป็นพฤติกรรมต่างๆ ของ mixin ซึ่งข้อดีของการทำให้เป็นรูปแบบ module ก็คือ เราจะรวมพฤติกรรมต่างๆให้อยู่ใน object เดียว และสามารถเรียกใช้จากโค้ดส่วนอื่นได้ 
ลองดูตัวอย่างการใช้งานในโค้ดด้านล่าง:

```js
motionModule.glideMixin(duck);
duck.glide();
```

# --instructions--

ให้สร้าง module ที่มีชื่อว่า `funModule` เพื่อรวม maxin `isCuteMixin` และ `singMixin` เข้าด้วยกัน โดย `funModule` ต้องคืนค่าออกมาเป็น object

# --hints--

ต้องประกาศ `funModule` และให้คืนค่าเป็น object

```js
assert(typeof funModule === 'object');
```

การเรียกใช้ `funModule.isCuteMixin` ต้องเป็นการเข้าถึงฟังก์ชัน `isCuteMixin`

```js
assert(typeof funModule.isCuteMixin === 'function');
```

การเรียกใช้ `funModule.singMixin` ต้องเป็นการเข้าถึงฟังก์ชัน `singMixin`

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
