---
id: 587d7dad367417b2b2512b78
title: Use a Constructor to Create Objects
challengeType: 1
forumTopicId: 18233
dashedName: use-a-constructor-to-create-objects
---

# --description--

ตัวอย่างด้านล่างเป็น constructor `Bird` จากแบบทดสอบที่แล้ว:

```js
function Bird() {
  this.name = "Albert";
  this.color  = "blue";
  this.numLegs = 2;
}

let blueBird = new Bird();
```

**หมายเหตุ:** `this` ที่อยู่ภายใน constructor จะเป็น object ที่กำลังถูกสร้างเสมอ

จะเห็นว่าเราใช้คำว่า `new` ในการเรียกใช้ constructor โดยเป็นการบอกให้ JavaScript สร้าง instance ของ `Bird` ที่ชื่อว่า `blueBird` ถ้าไม่มีคำว่า `new` ก็จะทำให้ `this` ที่อยู่ภายใน constructor ไม่สามารถชี้ไปยัง object ที่สร้างใหม่ได้ ทำให้เกิดผลลัพธ์ที่ไม่ถูกต้อง  
ตอนนี้ `blueBird` ก็มี property เหมือนกับที่ constructor `Bird` กำหนดให้แล้ว

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

จงใช้ constructor `Dog` จากบทเรียนที่แล้วในการสร้าง instance ใหม่ของ `Dog` แล้วกำหนดชื่อตัวแปรเป็น `hound`

# --hints--

ให้สร้างตัวแปร `hound` โดยใช้ constructor `Dog`

```js
assert(hound instanceof Dog);
```

ต้องใช้คำสั่ง `new` ในการสร้าง instance ของ `Dog`

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
// แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
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
