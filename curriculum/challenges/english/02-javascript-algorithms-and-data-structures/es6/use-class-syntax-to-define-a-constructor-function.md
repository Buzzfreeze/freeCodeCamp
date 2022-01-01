---
id: 587d7b8b367417b2b2512b53
title: Use class Syntax to Define a Constructor Function
challengeType: 1
forumTopicId: 301212
dashedName: use-class-syntax-to-define-a-constructor-function
---

# --description--

ใน ES6 มี syntax ใหม่สำหรับสร้าง object โดยใช้ keyword <dfn>class</dfn>

ต้องบอกไว้ก่อนว่า syntax `class` เป็นแค่ syntax เฉยๆ และไม่ใช่ OOP เต็มรูปแบบ ไม่เหมือนภาษาอื่น เช่น Java, Python, Ruby, C# ฯลฯ

ใน ES5 เรามักจะกำหนดฟังก์ชัน `constructor` และใช้ keyword `new` เพื่อสร้าง instance ของ object


```js
var SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');
```

syntax `class` จะมาแทนที่การสร้างฟังก์ชัน `constructor` เลย


```js
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}
const zeus = new SpaceShuttle('Jupiter');
```

จะเห็นว่า keyword `class` จะประกาศฟังก์ชันใหม่ที่มี constructor อยู่ในนั้น โดย constructor ถูกเรียกใช้เมื่อมีการใช้คำสั่ง `new` เพื่อสร้าง object ใหม่


 **หมายเหตุ:** ควรใช้ UpperCamelCase ในการตั้งชื่อคลาสตามกฎของ ES6 ดังที่เห็นใน `SpaceShuttle` ด้านบน (ตัวอักษรตัวแรกของทุกคำเป็นตัวใหญ่)

`constructor` method เป็น method พิเศษสำหรับการสร้างและเริ่มใช้ object ที่สร้างด้วยคลาส คุณจะได้เรียนเรื่องนี้เพิ่มในบทเรียน Object Oriented Programming ของ JavaScript Algorithms และ Data Structures Certification


# --instructions--

จงสร้าง class `Vegetable` โดยใช้ keyword `class` และเขียน `constructor` ของ `class` นี้ด้วย

class `Vegetable` จะใช้สร้าง object vegetable ที่มี property ชื่อ `name` ที่รับค่าจาก `constructor`

# --hints--

`Vegetable` ควรเป็น `class` ที่ประกาศ `constructor` method

```js
assert(
  typeof Vegetable === 'function' && typeof Vegetable.constructor === 'function'
);
```

ต้องใช้ keyword `class`

```js
assert(code.match(/class/g));
```

ต้องใช้คำสั่ง `new` กับ `Vegetable` ได้

```js
assert(() => {
  const a = new Vegetable('apple');
  return typeof a === 'object';
});
```

`carrot.name` มีค่าเป็น `carrot`

```js
assert(carrot.name == 'carrot');
```

# --seed--

## --seed-contents--

```js
// แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น

// แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น

const carrot = new Vegetable('carrot');
console.log(carrot.name); // ต้องแสดงผลเป็นคำว่า 'carrot'
```

# --solutions--

```js
class Vegetable {
  constructor(name) {
    this.name = name;
  }
}
const carrot = new Vegetable('carrot');
```
