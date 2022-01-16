---
id: 587d7dab367417b2b2512b70
title: Introduction to Currying and Partial Application
challengeType: 1
forumTopicId: 301232
dashedName: introduction-to-currying-and-partial-application
---

# --description--

<dfn>arity</dfn> ของฟังก์ชัน คือจำนวน argument ที่ฟังก์ชันต้องการ ส่วน <dfn>currying</dfn> หมายถึงการแปลงฟังก์ชันที่รับ parameter N ตัว มาเป็นฟังก์ชัน N ฟังก์ชัน ที่แต่ละฟังก์ชันจะรับ parameter เพียงตัวเดียว

ถ้าให้อธิบายก็คือ <dfn>currying</dfn> เป็นการปรับโครงสร้างของฟังก์ชันให้รับ argument แค่ตัวเดียว แล้วคืนค่าเป็นฟังก์ชันอีกตัวนึงที่รับ argument ตัวถัดไป และทำแบบนี้ไปเรื่อยๆ

ถ้ายังงงอยู่ลองดูตัวอย่างด้านล่าง:

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

การเรียกใช้ฟังก์ชัน `curried(1)(2)` ต้องได้ค่าเป็น `3`
โดยฟังก์ชันนี้จะทำงานแบบนี้

1. เรียกใช้ `curried(1)` ก่อน และฟังก์ชันนี้จะคืนค่าเป็น `y => 1 + y` ซึ่งก็จะยังไม่ได้ผลลัพธ์ออกมา
2. หลังจากนั้นพอเราเรียกใช้ฟังก์ชันนี้ด้วย `(2)` ฟังก์ชันก็จะรู้แล้วว่า y มีค่าเป็น 2 ฟังก์ชันก็จะทำงานต่อและคืนค่าออกมา

วิธีนี้มีประโยชน์มากถ้าเราส่ง argument ทุกตัวของฟังก์ชันไปพร้อมกันไม่ได้ เราจะเก็บการเรียกฟังก์ชันแต่ละครั้งไว้ในตัวแปร แล้วตัวแปรจะเก็บค่าเป็น function ที่คืนออกมา ทำให้เราเรียกใช้ฟังก์ชันนี้หลังจากที่เรามีค่าของ argument ตัวต่อไปแล้วได้
ตัวอย่างด้านล่างจะเรียกใช้ฟังก์ชัน curried ที่ประกาศในตัวอย่างด้านบน

```js
var funcForY = curried(1);
console.log(funcForY(2)); // 3
```

<dfn>partial application</dfn> ก็จะคล้ายๆกัน คือเป็นการระบุ argument เพียงบางตัวให้กับฟังก์ชัน แล้วคืนค่าเป็นฟังก์ชันอีกตัวนึงที่เราสามารถระบุ argument ที่เหลือได้ในภายหลัง ดังตัวอย่างต่อไปนี้

```js
function impartial(x, y, z) {
  return x + y + z;
}
var partialFn = impartial.bind(this, 1, 2);
partialFn(10); // 13
```

# --instructions--

จงเขียนโค้ดในฟังก์ชัน `add` เพื่อใช้ currying ในการเพิ่ม parameter `x`, `y` และ `z`

# --hints--

การเรียกใช้ฟังก์ชัน `add(10)(20)(30)` ต้องได้ค่าเป็น `60`

```js
assert(add(10)(20)(30) === 60);
```

การเรียกใช้ฟังก์ชัน `add(1)(2)(3)` ต้องได้ค่าเป็น `6`

```js
assert(add(1)(2)(3) === 6);
```

การเรียกใช้ฟังก์ชัน `add(11)(22)(33)` ต้องได้ค่าเป็น `66`

```js
assert(add(11)(22)(33) === 66);
```

คำสั่งสุดท้ายที่ใช้คืนค่าออกมาต้องเป็น `x + y + z`

```js
assert(code.match(/[xyz]\s*?\+\s*?[xyz]\s*?\+\s*?[xyz]/g));
```

# --seed--

## --seed-contents--

```js
function add(x) {
  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น


  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
}
add(10)(20)(30);
```

# --solutions--

```js
const add = x => y => z => x + y + z
```
