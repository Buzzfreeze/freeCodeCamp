---
id: 587d7dae367417b2b2512b79
title: Extend Constructors to Receive Arguments
challengeType: 1
forumTopicId: 18235
dashedName: extend-constructors-to-receive-arguments
---

# --description--


แม้ว่า `Bird` และ `Dog` constructors ที่ได้จากแบบทดสอบที่แล้วจะทำงานได้ดี แต่สังเกตว่า ทุก `Birds` ที่สร้างจาก `Bird` constructor จะมี  name เป็น Albert มี color สีฟ้าและมี 2 ขาเสมอ ถ้าหากคุณต้องการให้นกแต่ละตัวมี name และ color ต่างกัน ก็มีวิธีที่เปลี่ยน property ของนกทีละตัวอยู่ แต่ค่อนข้างใช้เวลา

```js
let swan = new Bird();
swan.name = "Carlos";
swan.color = "white";
```

สมมติว่าคุณกำลังเขียนโปรแกรมเพื่อเก็บข้อมูลของนกหลายร้อยหลายพันตัวที่อยู่ในกรง ซึ่งใช้เวลามากในการสร้างนกทั้งหมดและเปลี่ยน property ของแต่ละตัวให้เป็นค่าที่แตกต่างกัน ดังนั้น หากคุณต้องการสร้าง `Bird` objects ที่มีค่าแตกต่างกันให้ง่ายขึ้น คุณต้องออกแบบให้ Bird constructor สามารถรับ parameter ได้

```js
function Bird(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}
```

จากนั้นก็ส่งค่าที่แตกต่างกันนั้นเป็น arguments เพื่อเข้าไปกำหนดคุณสมบัติของนกภายใน `Bird` constructor: `let cardinal = new Bird("Bruce", "red");` คำสั่งนี้เป็นการสร้าง instance ใหม่ของ `Bird` โดยกำหนดให้ `name` และ `color` properties มีค่าเป็น `Bruce` และ `red` ตามลำดับ ส่วน `numLegs` property ก็ยังคงมีค่าเป็น 2 ซึ่ง `cardinal` มี property ดังนี้

```js
cardinal.name
cardinal.color
cardinal.numLegs
```

การกำหนด constructor แบบนี้มีความยืดหยุ่นมากกว่า เพราะสามารถกำหนด properties ของ `Bird` แต่ละตัวได้ในจังหวะการสร้างเลย ซึ่งวิธีนี้ทำให้ JavaScript constructor มีประโยชน์อย่างมาก เนื่องจากมีการจัดกลุ่ม object เข้าด้วยกันตามคุณสมบัติและพฤติกรรมที่เหมือนกัน และสามารถกำหนดพิมพ์เขียวที่ใช้ในการสร้าง instance ได้

# --instructions--

จงสร้าง `Dog` constructor อีกชุดนึง แต่ครั้งนี้ให้มีการรับค่า parameters `name` และ `color` และกำหนดให้ property `numLegs` มีค่าเป็น 4 จากนั้นให้สร้าง `Dog` instance ใหม่ โดยเก็บในตัวแปร `terrier` แล้วส่ง string 2 ค่าเข้าไปเป็น argument สำหรับ properties `name` และ `color`

# --hints--

`Dog` ควรรับ argument ที่เป็น `name` เข้ามา

```js
assert(new Dog('Clifford').name === 'Clifford');
```

`Dog` ควรรับ argument ที่เป็น `color` เข้ามา

```js
assert(new Dog('Clifford', 'yellow').color === 'yellow');
```

`Dog` ควรกำหนดให้ property `numLegs` มีค่าเป็น 4

```js
assert(new Dog('Clifford').numLegs === 4);
```

`terrier` ควรสร้างจาก `Dog` constructor

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
