---
id: 587d7dab367417b2b2512b70
title: Introduction to Currying and Partial Application
challengeType: 1
forumTopicId: 301232
dashedName: introduction-to-currying-and-partial-application
---

# --description--

<dfn>arity</dfn> ของฟังก์ชัน คือ จำนวน argument ที่ฟังก์ชันต้องการ ส่วน <dfn>Currying</dfn> หมายถึงการแปลงฟังก์ชันที่รับ parameter N ตัว มาเป็นฟังก์ชันที่รับ parameter เพียงตัวเดียว

กล่าวได้อีกแบบว่า <dfn>Currying</dfn> เป็นการปรับโครงสร้างของฟังก์ชันให้รับ argument ค่าเดียว แล้วคืนค่าเป็นฟังก์ชันอีกตัวนึงที่รับ argument ตัวถัดไป และทำแบบนี้ไปเรื่อยๆ

ดังตัวอย่างต่อไปนี้

```js
function unCurried(x, y) {
  return x + y;
}

function curried(x) {
  return function(y) {
    return x + y;
  }
}

const curried = x => y => x + y

curried(1)(2)
```

`curried(1)(2)` ควรคืนค่า `3`.

วิธีนี้มีประโยชน์มากในการเขียนโปรแกรม หากคุณไม่สามารถระบุค่าให้กับทุก argument ของฟังก์ชันได้ภายในครั้งเดียว คุณสามารถเก็บการเรียกฟังก์ชันแต่ละครั้งไว้ในตัวแปร โดยตัวแปรจะเก็บ function referece ที่มีการคืนค่าออกมา ซึ่งเราสามารถระบุ argument ตัวถัดไปได้ในภายหลังที่ทราบค่า argument แล้ว ตัวอย่างต่อไปนี้เป็นการเรียกใช้ curried function ที่ประกาศตามตัวอย่างด้านบน

```js
var funcForY = curried(1);
console.log(funcForY(2)); // 3
```

เช่นเดียวกันกับ <dfn>partial application</dfn> เป็นการระบุ argument เพียงบางตัวให้กับฟังก์ชัน แล้วคืนค่าเป็นฟังก์ชันอีกตัวนึงที่เราสามารถระบุ argument ที่เหลือได้ในภายหลัง ดังตัวอย่างต่อไปนี้

```js
function impartial(x, y, z) {
  return x + y + z;
}
var partialFn = impartial.bind(this, 1, 2);
partialFn(10); // 13
```

# --instructions--

จงเขียนโค้ดในฟังก์ชัน `add` เพื่อใช้ currying ในการเพิ่ม parameters `x`, `y` และ `z`

# --hints--

`add(10)(20)(30)` ควรคืนค่า `60`.

```js
assert(add(10)(20)(30) === 60);
```

`add(1)(2)(3)` ควรคืนค่า `6`.

```js
assert(add(1)(2)(3) === 6);
```

`add(11)(22)(33)` ควรคืนค่า `66`.

```js
assert(add(11)(22)(33) === 66);
```

โค้ดของคุณควรมี statement สุดท้ายที่คืนค่าเป็น `x + y + z`.

```js
assert(code.match(/[xyz]\s*?\+\s*?[xyz]\s*?\+\s*?[xyz]/g));
```

# --seed--

## --seed-contents--

```js
function add(x) {
  // Only change code below this line


  // Only change code above this line
}
add(10)(20)(30);
```

# --solutions--

```js
const add = x => y => z => x + y + z
```
