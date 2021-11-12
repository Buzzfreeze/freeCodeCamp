---
id: 587d7b8c367417b2b2512b54
title: Use getters and setters to Control Access to an Object
challengeType: 1
forumTopicId: 301220
dashedName: use-getters-and-setters-to-control-access-to-an-object
---

# --description--

คุณสามารถรับค่าจาก object และกำหนด value ของ property ภายใน object

สิ่งเหล่านี้เรียกว่า <dfn>getters</dfn> และ <dfn>setters</dfn>.

function Getter มีไว้เพื่อส่งคืน (get) ค่าของตัวแปร private ให้ผู้ใช้ โดยที่ผู้ใช้ไม่ต้องเข้าถึงตัวแปร private โดยตรง

function Setter มีไว้เพื่อแก้ไข (set) ค่าของตัวแปร private ของ object ตามค่าที่ส่งผ่านไปยังฟังก์ชัน setter การเปลี่ยนแปลงนี้อาจเกี่ยวข้องกับการคำนวณ หรือแม้แต่เขียนทับค่าก่อนหน้าทั้งหมด

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

สังเกตว่า syntax ที่เรียกใช้ getter และ setter ไม่ได้ดูเหมือน function อย่างไรก็ตาม Getters และ setters 
มีความสำคัญเนื่องจากมีการซ่อนรายละเอียดการใช้งานภายใน

**หมายเหตุ:** เป็นธรรมเนียมปฏิบัติที่เขียนขีดล่าง (`_`) นำหน้าตัวแปร private อย่างไรก็ตาม การใช้ขีดล่างไม่ได้ทำให้ตัวแปรเป็นแบบ private

# --instructions--

จงใช้ keyword `class` เพื่อสร้าง class `Thermostat` โดย `constructor` จะรับอุณหภูมิฟาเรนไฮต์

ใน class ให้สร้าง `getter` เพื่ออ่านค่าอุณหภูมิเป็นเซลเซียส และ `setter` เพื่อตั้งอุณหภูมิเป็นเซลเซียส

โปรดจำไว้ว่า `C = 5/9 * (F - 32)` และ `F = C * 9.0 / 5 + 32` เมื่อ `F` เป็นค่าของอุณหภูมิฟาเรนไฮต์ และ `C` เป็นค่าของอุณหภูมิเป็นเซลเซียส

**หมายเหตุ:** เมื่อคุณทำแบบฝึกหัดนี้ คุณจะติดตามอุณหภูมิภายใน class ได้จากที่เดียว ไม่ว่าจะเป็นฟาเรนไฮต์หรือเซลเซียส

นี่คือพลังของ getter และ setter หากคุณสร้าง API ให้กับผู้ใช้รายอื่น เขาจะได้รับผลลัพธ์ที่ถูกต้อง โดยไม่สนใจว่าจะได้ค่ามาได้อย่างไร

# --hints--

`Thermostat` ควรเป็น `class` ที่ประกาศ `constructor` method

```js
assert(
  typeof Thermostat === 'function' &&
    typeof Thermostat.constructor === 'function'
);
```

ควรใช้ keyword `class` 

```js
assert(code.match(/class/g));
```

`Thermostat`  ควรสามารถเป็นอินสแตนซ์



```js
assert(
  (() => {
    const t = new Thermostat(122);
    return typeof t === 'object';
  })()
);
```

When instantiated with a Fahrenheit value, `Thermostat` should set the correct `temperature`.

เมื่อสร้าง instance ด้วย Fahrenheit value แล้ว `Thermostat` ควร set `temperature` ที่ถูกต้อง

```js
assert(
  (() => {
    const t = new Thermostat(122);
    return t.temperature === 50;
  })()
);
```

ควรประกาศ `getter`


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

ควรประกาศ `setter` 

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

การเรียกใช้ `setter` ด้วยค่าองศาเซลเซียส ควร set `temperature`

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
// Only change code below this line

// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
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

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
```
