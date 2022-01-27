---
id: 587d7dae367417b2b2512b79
title: Extend Constructors to Receive Arguments
challengeType: 1
forumTopicId: 18235
dashedName: extend-constructors-to-receive-arguments
---

# --description--

ถึง constructor `Bird` และ `Dog` ที่ได้จากแบบทดสอบที่แล้วจะใช้งานดี แต่เราจะเห็นว่า ทุก `instance` ของนกที่สร้างจาก constructor `Bird` จะมี name เป็น Albert มี color เป็น blue และมี numLegs เป็น 2 เสมอ  
ถ้าคุณต้องการให้นกแต่ละตัวมี name และ color ต่างกัน ก็มีวิธีที่เปลี่ยน property ของนกทีละตัวอยู่ แต่จะลำบากหน่อย ลองดูตัวอย่างด้านล่างนี้:

```js
let swan = new Bird();
swan.name = "Carlos";
swan.color = "white";
```

สมมติว่าคุณกำลังเขียนโปรแกรมเพื่อเก็บข้อมูลของนกหลายร้อยหลายพันตัวที่อยู่ในกรง เราจะเสียเวลาในการสร้างและเปลี่ยน property ของแต่ละตัวมากๆ  
ถ้าคุณอยากทำให้การสร้าง object `Bird` แต่ละตัวทำได้ง่ายๆ คุณต้องออกแบบให้ constructor `Bird` สามารถรับ parameter ได้

```js
function Bird(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}
```

วิธีใช้ก็คือให้ส่ง argument เข้าไปเพื่อกำหนด property ใน constructor `Bird`  
เช่น `let cardinal = new Bird("Bruce", "red");`  
คำสั่งนี้เป็นการสร้าง instance ใหม่ของ `Bird` โดยกำหนดให้ property `name` และ `color` มีค่าเป็น `Bruce` และ `red` ตามลำดับ ส่วน property `numLegs` ก็ยังคงมีค่าเป็น 2 ซึ่ง `cardinal` จะมี property ตามนี้:

```js
cardinal.name
cardinal.color
cardinal.numLegs
```

การกำหนด constructor แบบนี้มีความอิสระมากกว่า เพราะเราจะกำหนด property ของ `Bird` แต่ละตัวได้ในตอนสร้างเลย การสร้าง instance ด้วยวิธีนี้ทำให้ constructor ของ JavaScript มีประโยชน์อย่างมาก เพราะว่าเป็นการสร้างกลุ่มของ object ที่มีคุณสมบัติและพฤติกรรมที่เหมือนกัน และเหมือนเป็นการใช้แม่พิมพ์การสร้าง object ด้วย

# --instructions--

จงสร้าง constructor `Dog` อีกตัวหนึ่ง แต่ครั้งนี้ให้มีการรับค่า parameter `name` และ `color` และกำหนดให้ property `numLegs` มีค่าเป็น 4 จากนั้นให้สร้าง instance ของ `Dog` ใหม่ โดยเก็บในตัวแปร `terrier` แล้วส่ง string 2 ค่าเข้าไปเป็น argument สำหรับ property `name` และ `color`

# --hints--

`Dog` ต้องรับ argument ชื่อ `name` เข้ามา

```js
assert(new Dog('Clifford').name === 'Clifford');
```

`Dog` ต้องรับ argument ชื่อ `color` เข้ามา

```js
assert(new Dog('Clifford', 'yellow').color === 'yellow');
```

`Dog` ต้องกำหนดให้ property `numLegs` มีค่าเป็น 4

```js
assert(new Dog('Clifford').numLegs === 4);
```

ต้องสร้าง instance ของ `terrier` โดยใช้ constructor `Dog`

```js
assert(terrier instanceof Dog);
```

# --seed--

## --seed-contents--

```js
function Dog() {

}
```

# --solutions--

```js
function Dog (name, color) {
  this.numLegs = 4;
  this.name = name;
  this.color = color;
}

const terrier = new Dog();
```
