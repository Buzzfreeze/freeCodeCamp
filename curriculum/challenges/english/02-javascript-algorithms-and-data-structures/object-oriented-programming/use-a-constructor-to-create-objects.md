---
id: 587d7dad367417b2b2512b78
title: Use a Constructor to Create Objects
challengeType: 1
forumTopicId: 18233
dashedName: use-a-constructor-to-create-objects
---

# --description--

นี่คือ `Bird` constructor จากแบบทดสอบที่แล้ว

```js
function Bird() {
  this.name = "Albert";
  this.color  = "blue";
  this.numLegs = 2;
}

let blueBird = new Bird();
```

**หมายเหตุ:** `this` ที่อยู่ภายใน constructor อ้างอิงถึง object ที่กำลังถูกสร้างเสมอ

สังเกตว่า เราใช้คำว่า `new` ในการเรียก (call) constructor โดยเป็นการบอกให้ JavaScript สร้าง instance ของ `Bird` ที่ชื่อว่า `blueBird` หากไม่มีคำว่า `new` ก็จะทำให้ `this` ที่อยู่ภายใน constructor ไม่สามารถชี้ไปยัง object ที่สร้างใหม่ได้ ก่อให้เกิดผลลัพธ์ที่ไม่ถูกต้อง
ในขั้นตอนนี้ `blueBird` ก็มี properties ทั้งหมดที่กำหนดอยู่ใน `Bird` constructor แล้ว

```js
blueBird.name;
blueBird.color;
blueBird.numLegs;
```

object ที่สร้างจาก Constructor ก็เหมือนกับ object อื่นๆ คือ สามารถเข้าถึงและแก้ไข property ได้

```js
blueBird.name = 'Elvira';
blueBird.name;
```

# --instructions--

จงใช้ `Dog` constructor จากบทเรียนที่แล้วในการสร้าง instance ใหม่ของ `Dog` แล้วกำหนดชื่อตัวแปรเป็น `hound`

# --hints--

ตัวแปร `hound` ถูกสร้างขึ้นมา โดยใช้ `Dog` constructor

```js
assert(hound instanceof Dog);
```

โค้ดของคุณควรใช้ `new` operator ในการสร้าง instance ของ `Dog`

```js
assert(code.match(/new/g));
```

# --seed--

## --seed-contents--

```js
function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
// Only change code below this line
```

# --solutions--

```js
function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
const hound = new Dog();
```
