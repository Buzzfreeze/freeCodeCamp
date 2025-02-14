---
id: 587d7db2367417b2b2512b8a
title: >-
  Use Closure to Protect Properties Within an Object from Being Modified
  Externally
challengeType: 1
forumTopicId: 18234
dashedName: >-
  use-closure-to-protect-properties-within-an-object-from-being-modified-externally
---

# --description--

จากแบบทดสอบที่แล้ว `bird` มี public property ที่ชื่อว่า `name` สาเหตุที่เป็น public เพราะว่าจะเข้าถึงและเปลี่ยนแปลง property นี้จากภายนอก `bird` ได้  
เช่น:

```js
bird.name = "Duffy";
```

ดังนั้น คุณสามารถแก้ไข name ของ `bird` ด้วยโค้ดส่วนไหนก็ได้ง่ายๆ 
ลองนึกภาพว่าถ้าเราเปลี่ยนรหัสผ่านและเลขบัญชีธนาคารได้ง่ายๆแบบนี้ จะเกิดปัญหาขนาดไหน

วิธีที่ง่ายที่สุดที่เปลี่ยน public property ให้เป็น private property ก็คือการสร้างตัวแปรภายในฟังก์ชัน constructor วิธีนี้เป็นการเปลี่ยนแปลงขอบเขตของตัวแปรให้อยู่ภายในฟังก์ชัน constructor แทนที่จะเปิดให้เป็น global ซึ่งวิธีการนี้จะทำให้ตัวแปรสามารถเข้าถึงและเปลี่ยนแปลงโดย method ที่อยู่ภายในฟังก์ชัน constructor เท่านั้น

```js
function Bird() {
  let hatchedEgg = 10;

  this.getHatchedEggCount = function() { 
    return hatchedEgg;
  };
}
let ducky = new Bird();
ducky.getHatchedEggCount();
```

`getHatchedEggCount` เป็น method ที่ได้รับสิทธิ์ในการเข้าถึง private variable `hatchedEgg` เนื่องจาก `hatchedEgg` ถูกกำหนดใน context เดียวกันกับ `getHatchedEggCount` ซึ่งใน JavaScript ฟังก์ชันสามารถเข้าถึงสิ่งต่างๆ ที่อยู่ใน context เดียวกันได้เสมอ ลักษณะนี้เรียกว่า `closure`

# --instructions--

จงทำให้ `weight` ที่กำหนดในฟังก์ชัน `Bird` เป็นตัวแปร private จากนั้นให้สร้าง method `getWeight` เพื่อคืนค่า `weight` เป็น 15

# --hints--

property `weight` ต้องเป็นตัวแปรแบบ private และต้องมีค่าเป็น `15`

```js
assert(code.match(/(var|let|const)\s+weight\s*\=\s*15\;?/g));
```

คุณต้องสร้าง method `getWeight` ใน `Bird` ให้คืนค่าของตัวแปร private `weight`

```js
assert(new Bird().getWeight() === 15);
```

ฟังก์ชัน `getWeight` ต้องคืนค่าของตัวแปร private `weight`

```js
assert(code.match(/((return\s+)|(\(\s*\)\s*\=\>\s*))weight\;?/g));
```

# --seed--

## --seed-contents--

```js
function Bird() {
  this.weight = 15;


}
```

# --solutions--

```js
function Bird() {
  let weight = 15;

  this.getWeight = () => weight;
}
```
