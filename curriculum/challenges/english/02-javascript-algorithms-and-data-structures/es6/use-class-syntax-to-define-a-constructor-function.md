---
id: 587d7b8b367417b2b2512b53
title: Use class Syntax to Define a Constructor Function
challengeType: 1
forumTopicId: 301212
dashedName: use-class-syntax-to-define-a-constructor-function
---

# --description--

ES6 มี syntax ใหม่ สำหรับสร้าง object โดยใช้ keyword <dfn>class</dfn>

แจ้งไว้ก่อนว่า syntax `class` เป็นเพียง syntax และไม่ใช่ object oriented ที่สมบูรณ์ ซึ่งแตกต่างจากภาษาอื่น เช่น Java, Python, Ruby เป็นต้น

ใน ES5 เรามักจะกำหนดฟังก์ชัน `constructor` และใช้ keyword `new` เพื่อสร้าง instance ของ object


```js
var SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');
```

`class` syntax สามารถใช้แทนการสร้าง `constructor` ได้อย่างง่ายๆ


```js
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}
const zeus = new SpaceShuttle('Jupiter');
```

สังเกตว่า keyword `class` ใช้ประกาศฟังก์ชันใหม่ที่มี constructor อยู่ในนั้น โดย constructor ถูกเรียกใช้เมื่อมีการใช้คำสั่ง `new` เพื่อสร้าง object ใหม่


**Note:** UpperCamelCase should be used by convention for ES6 class names, as in `SpaceShuttle` used above.

 **หมายเหตุ:** ควรใช้ UpperCamelCase ในการตั้งชื่อคลาสตามกฎของ ES6 ดังที่เห็นใน `SpaceShuttle` ด้านบน

`Constructor` method เป็น method พิเศษสำหรับการสร้างและเริ่มต้นค่า object ที่สร้างด้วยคลาส คุณจะได้เรียนรู้เพิ่มเติมเกี่ยวกับเรื่องนี้ในบทเรียน Object Oriented Programming ของ JavaScript Algorithms และ Data Structures Certification


# --instructions--

จงใช้ keyword `class` และเขียน `constructor` เพื่อสร้าง class `Vegetable`

class `Vegetable` ทำให้คุณสามารถสร้าง object vegetable ด้วย property `name` ที่ส่งผ่านไปยัง `constructor`

# --hints--

`Vegetable` ควรเป็น `class` ที่ประกาศ `constructor` method

```js
assert(
  typeof Vegetable === 'function' && typeof Vegetable.constructor === 'function'
);
```

ควรใช้ `class` keyword 

```js
assert(code.match(/class/g));
```

`Vegetable` ควรสามารถเป็นอินสแตนซ์

```js
assert(() => {
  const a = new Vegetable('apple');
  return typeof a === 'object';
});
```

`carrot.name` should return `carrot`.

```js
assert(carrot.name == 'carrot');
```

# --seed--

## --seed-contents--

```js
// Only change code below this line

// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'
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
