---
id: 587d7db2367417b2b2512b8b
title: Understand the Immediately Invoked Function Expression (IIFE)
challengeType: 1
forumTopicId: 301328
dashedName: understand-the-immediately-invoked-function-expression-iife
---

# --description--

รูปแบบปกติใน JavaScript คือการรันฟังก์ชันทันทีที่ประกาศ

```js
(function () {
  console.log("Chirp, chirp!");
})();
```

ตัวอย่างนี้คือ การประกาศ anonymous function ซึ่งรันทันที และได้ผลลัพธ์เป็น `Chirp, chirp!`

หมายเหตุ สำหรับฟังก์ชันที่ไม่มีชื่อและไม่ได้เก็บในตัวแปร เมื่อมี () อยู่ท้ายของการประกาศฟังก์ชัน จะทำให้เกิดการรันหรือเรียกฟังก์ชันนั้นขึ้นมาทำงานทันที ลักษณะแบบนี้เรียกกันว่า <dfn>immediately invoked function expression</dfn> หรือ <dfn>IIFE</dfn>

# --instructions--

จงปรับแก้ฟังก์ชัน `makeNest` ให้กลายเป็น anonymous ที่มีการรันทันที (IIFE) และให้ลบคำสั่งการเรียกด้วยชื่อฟังก์ชัน `makeNest`

# --hints--

ฟังก์ชันควรเป็น anonymous

```js
assert(/\((function|\(\))(=>|\(\)){?/.test(code.replace(/\s/g, '')));
```

ฟังก์ชันของคุณควรมี () ต่อจากการประกาศฟังก์ชัน เพื่อให้รันฟังก์ชันทันที

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
