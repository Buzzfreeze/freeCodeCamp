---
id: 587d7dad367417b2b2512b77
title: Define a Constructor Function
challengeType: 1
forumTopicId: 16804
dashedName: define-a-constructor-function
---

# --description--

<dfn>Constructors</dfn> เป็นฟังก์ชันที่สร้าง object ใหม่ โดยมีการกำหนด property (คุณลักษณะ) และ behavior (พฤติกรรม) ของ object ใหม่เอาไว้ ให้เรามอง Constructor เปรียบดังพิมพ์เขียวที่ใช้สร้าง object ใหม่ 

โค้ดด้านล่างเป็นตัวอย่างของ Constructor:

```js
function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}
```

Constructor นี้กำหนดให้ object `Bird` มี property `name`, `color` และ `numLegs` มีค่าเป็น Albert, blue และ 2 ตามลำดับ อย่างไรก็ดี การสร้าง Contractor มีกฎเกณฑ์ดังนี้ 

Constructor ต้องขึ้นต้นด้วยตัวพิมพ์ใหญ่ เพื่อให้แตกต่างจากฟังก์ชันปกติที่ไม่ใช่ Constructor


<ul><li>Constructor ต้องขึ้นต้นด้วยตัวพิมพ์ใหญ่ เพื่อให้แตกต่างจากฟังก์ชันปกติที่ไม่ใช่ <code>Constructor</code>.
</li><li>Constructors ใช้คีย์เวิร์ด <code>this</code> เพื่อกำหนด properties ให้กับ object ซึ่งภายใน constructor คำว่า <code>this</code> จะอ้างอิงถึง object ใหม่ที่ constructor กำลังสร้าง</li>
<li>Constructor ทำเพียงกำหนด properties และ behaviors โดยไม่ได้ return ค่าเหมือนกับฟังก์ชันอื่นๆ</li></ul>

# --instructions--

จงสร้าง constructor `Dog` ที่มี property `name`, `color` และ `numLegs` โดยกำหนดให้เป็น string, string และ number ตามลำดับ

# --hints--

`Dog` ควรมี property `name` กำหนดให้เป็น string

```js
assert(typeof new Dog().name === 'string');
```

`Dog` ควรมี property `color` กำหนดให้เป็น string

```js
assert(typeof new Dog().color === 'string');
```

`Dog` ควรมี property `numLegs` กำหนดให้เป็น number

```js
assert(typeof new Dog().numLegs === 'number');
```

# --seed--

## --seed-contents--

```js

```

# --solutions--

```js
function Dog (name, color, numLegs) {
  this.name = 'name';
  this.color = 'color';
  this.numLegs = 4;
}
```
