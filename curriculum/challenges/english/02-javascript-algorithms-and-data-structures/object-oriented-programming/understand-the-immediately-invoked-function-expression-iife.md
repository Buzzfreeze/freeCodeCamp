---
id: 587d7db2367417b2b2512b8b
title: Understand the Immediately Invoked Function Expression (IIFE)
challengeType: 1
forumTopicId: 301328
dashedName: understand-the-immediately-invoked-function-expression-iife
---

# --description--

ตัวอย่างข้างล่างจะเป็นวิธีประกาศฟังก์ชัน และเรียกใช้ฟังก์ชันนั้นทันที:

```js
(function () {
  console.log("Chirp, chirp!");
})();
```

ตัวอย่างนี้จะประกาศ anonymous function แล้วเรียกใช้ทันที และจะแสดงผลเป็น `Chirp, chirp!` ใน console

หมายเหตุ สำหรับฟังก์ชันที่ไม่มีชื่อและไม่ได้เก็บฟังก์ชันนั้นในตัวแปร เมื่อมี () ต่อท้ายการประกาศฟังก์ชัน จะทำให้เกิดการเรียกฟังก์ชันนั้นทันที ลักษณะแบบนี้เรียกกันว่า <dfn>immediately invoked function expression</dfn> หรือ <dfn>IIFE</dfn>

# --instructions--

ให้เขียนฟังก์ชัน `makeNest` ใหม่และให้ลบคำสั่งการเรียกใช้ด้วยชื่อฟังก์ชัน `makeNest` เพื่อเปลี่ยนฟังก์ชันนี้เป็น anonymous function ที่มีการเรียกใช้ทันที (IIFE) 

# --hints--

ฟังก์ชันที่เขียนต้องเป็น anonymous function

```js
assert(/\((function|\(\))(=>|\(\)){?/.test(code.replace(/\s/g, '')));
```

ฟังก์ชันที่เขียนต้องมี () ต่อท้ายการประกาศฟังก์ชัน เพื่อให้ฟังก์ชันทำงานทันที

```js
assert(/\(.*(\)\(|\}\(\))\)/.test(code.replace(/[\s;]/g, '')));
```

# --seed--

## --seed-contents--

```js
function makeNest() {
  console.log("A cozy nest is ready");
}

makeNest();
```

# --solutions--

```js
(function () {
  console.log("A cozy nest is ready");
})();
```

---

```js
(function () {
  console.log("A cozy nest is ready");
}());
```

---

```js
(() => {
  console.log("A cozy nest is ready");
})();
```

---

```js
(() =>
  console.log("A cozy nest is ready")
)();
```
