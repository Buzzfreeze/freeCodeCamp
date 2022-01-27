---
id: 587d7dad367417b2b2512b77
title: Define a Constructor Function
challengeType: 1
forumTopicId: 16804
dashedName: define-a-constructor-function
---

# --description--

<dfn>constructor</dfn> เป็นฟังก์ชันที่ใช้สร้าง object ใหม่ โดยจะเป็นตัวกำหนดค่าและพฤติกรรมของ object ใหม่ที่สร้าง  
ให้เรามอง constructor ว่าเป็นพิมพ์เขียวที่ใช้สร้าง object ใหม่ 

โค้ดด้านล่างเป็นตัวอย่างของการใช้ constructor:

```js
function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}
```

constructor นี้กำหนดให้ object `Bird` มี property `name`, `color` และ `numLegs` มีค่าเป็น Albert, blue และ 2 ตามลำดับ โดยการสร้าง Contractor จะมีกฎตามนี้:


<ul><li>constructor ต้องขึ้นต้นด้วยตัวพิมพ์ใหญ่ เพื่อให้แตกต่างจากฟังก์ชันปกติที่ไม่ใช่ <code>constructor</code>
</li><li>constructors จะใช้คีย์เวิร์ด <code>this</code> เพื่อกำหนด property ให้กับ object ซึ่งภายใน constructor คำว่า <code>this</code> จะหมายถึง object ใหม่ที่ constructor กำลังสร้าง</li>
<li>constructor ทำเพียงแค่การกำหนดค่าและพฤติกรรมของ object โดยจะไม่ได้ return ค่าเหมือนกับฟังก์ชันอื่นๆ</li></ul>

# --instructions--

จงสร้าง constructor `Dog` ที่มี property `name`, `color` และ `numLegs` โดยกำหนดให้เป็น string, string และ number ตามลำดับ

# --hints--

`Dog` ต้องมี property `name` ที่มีค่าเป็น string

```js
assert(typeof new Dog().name === 'string');
```

`Dog` ต้องมี property `color` ที่มีค่าเป็น string

```js
assert(typeof new Dog().color === 'string');
```

`Dog` ต้องมี property `numLegs` ที่มีค่าเป็น number

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
