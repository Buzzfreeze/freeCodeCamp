---
id: 587d7b8c367417b2b2512b54
title: Use getters and setters to Control Access to an Object
challengeType: 1
forumTopicId: 301220
dashedName: use-getters-and-setters-to-control-access-to-an-object
---

# --description--

เราสามารถอ่านและกำหนดค่าของ property ของ object ได้

เราเรียกสองส่วนนี้ว่า <dfn>getter</dfn> (ตัวอ่านค่า) และ <dfn>setter</dfn> (ตัวกำหนดค่า)

ฟังก์ชัน getter มีไว้เพื่ออ่าน (get) ค่าของตัวแปรที่เป็น private โดยที่ผู้ใช้ไม่ต้องเข้าถึงตัวแปร private โดยตรง

ฟังก์ชัน setter มีไว้เพื่อกำหนด (set) ค่าของตัวแปรที่เป็น private ของ object ตามค่าที่ส่งเข้าไปในฟังก์ชัน setter การใช้ setter นี้อาจทำการเปลี่ยนแปลงค่าที่ใส่เข้ามาก่อนเอาไปกำหนดให้ตัวแปร หรืออาจเอาไปกำหนดให้ตัวแปรตรงๆ เลยก็ได้

```js
class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const novel = new Book('anonymous');
console.log(novel.writer);
novel.writer = 'newAuthor';
console.log(novel.writer);
```

console จะแสดง string `anonymous` และ `newAuthor`

จะเห็นว่า syntax ที่เรียกใช้ getter และ setter จะดูเหมือนไม่ใช่ฟังก์ชัน แต่ getter และ setter 
นั้นสำคัญเพราะว่าจะซ่อนรายละเอียดการใช้งานไว้ข้างใน

**หมายเหตุ:** ปกติแล้วจะใช้ underscore (`_`) นำหน้าตัวแปรที่เป็น private แต่การตั้งชื่อตัวแปรโดยใช้ underscore นำหน้าจะไม่ได้เป็นการทำให้ตัวแปรเป็น private

# --instructions--

จงใช้ keyword `class` เพื่อสร้าง class `Thermostat` โดย `constructor` จะรับอุณหภูมิเป็นฟาเรนไฮต์

ใน class ให้สร้าง `getter` เพื่ออ่านค่าอุณหภูมิเป็นเซลเซียส และ `setter` เพื่อเก็บค่าอุณหภูมิเป็นเซลเซียส

สมการในการแปลงอุณหภูมิคือ `C = 5/9 * (F - 32)` และ `F = C * 9.0 / 5 + 32` 
โดยที่ `F` เป็นอุณหภูมิในหน่วยฟาเรนไฮต์ และ `C` เป็นอุณหภูมิในหน่วยเซลเซียส

**หมายเหตุ:** เมื่อคุณทำแบบฝึกหัดนี้ คุณจะอ่านค่าอุณหภูมิภายใน class ได้ทั้งฟาเรนไฮต์และเซลเซียสโดยใช้ข้อมูลตัวเดียว

คุณจะเห็นศักยภาพของการใช้ getter และ setter แบบฝึกหัดนี้จะเหมือนกับการสร้าง API ให้คนอื่น คนที่มาอ่านค่าจะได้ค่าที่ถูกต้อง โดยไม่ต้องรู้ว่าได้ค่ามาได้อย่างไร

การทำแบบนี้ก็จะเหมือนกับว่าคุณได้ซ่อนวิธีการทำงานของระบบคุณโดยไม่ให้คนที่มาใช้เห็นแล้ว 

# --hints--

`Thermostat` ต้องเป็น `class` ที่มีการประกาศ `constructor` method

```js
assert(
  typeof Thermostat === 'function' &&
    typeof Thermostat.constructor === 'function'
);
```

ต้องใช้ keyword `class` 

```js
assert(code.match(/class/g));
```

ต้องใช้คำสั่ง `new` กับ `Thermostat` ได้


```js
assert(
  (() => {
    const t = new Thermostat(122);
    return typeof t === 'object';
  })()
);
```

เมื่อสร้าง instance ด้วย Fahrenheit แล้ว `Thermostat` เก็บค่า `temperature` ที่ถูกต้อง

```js
assert(
  (() => {
    const t = new Thermostat(122);
    return t.temperature === 50;
  })()
);
```

ต้องประกาศ `getter`


```js
assert(
  (() => {
    const desc = Object.getOwnPropertyDescriptor(
      Thermostat.prototype,
      'temperature'
    );
    return !!desc && typeof desc.get === 'function';
  })()
);
```

ต้องประกาศ `setter` 

```js
assert(
  (() => {
    const desc = Object.getOwnPropertyDescriptor(
      Thermostat.prototype,
      'temperature'
    );
    return !!desc && typeof desc.set === 'function';
  })()
);
```

การเรียกใช้ `setter` ด้วยค่าองศาเซลเซียส ควรเปลี่ยนค่า `temperature` เป็นค่าที่ระบุ

```js
assert(
  (() => {
    const t = new Thermostat(32);
    t.temperature = 26;
    const u = new Thermostat(32);
    u.temperature = 50;
    return t.temperature === 26 && u.temperature === 50;
  })()
);
```

# --seed--

## --seed-contents--

```js
// แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น

// แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น

const thermos = new Thermostat(76); // รับค่าอุณหภูมิในหน่วยองศาฟาเรนไฮต์
let temp = thermos.temperature; // ต้องได้ค่าเป็น 24.44 องศาเซลเซียส
thermos.temperature = 26;
temp = thermos.temperature; // ต้องได้ค่าเป็น 26 องศาเซลเซียส
```

# --solutions--

```js
class Thermostat {
  constructor(fahrenheit) {
    this._tempInCelsius = 5/9 * (fahrenheit - 32);
  }
  get temperature(){
    return this._tempInCelsius;
  }
  set temperature(newTemp){
    this._tempInCelsius = newTemp;
  }
}

const thermos = new Thermostat(76); // รับค่าอุณหภูมิในหน่วยองศาฟาเรนไฮต์
let temp = thermos.temperature; // ต้องได้ค่าเป็น 24.44 องศาเซลเซียส
thermos.temperature = 26;
temp = thermos.temperature; // ต้องได้ค่าเป็น 26 องศาเซลเซียส
```
