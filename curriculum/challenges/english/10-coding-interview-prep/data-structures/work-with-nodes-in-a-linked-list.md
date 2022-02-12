---
id: 587d8251367417b2b2512c61
title: Work with Nodes in a Linked List
challengeType: 1
forumTopicId: 301721
dashedName: work-with-nodes-in-a-linked-list
---

# --description--

โครงสร้างข้อมูลอีกโครงสร้างหนึ่งที่คุณจะพบได้บ่อยคือ <dfn>linked list</dfn> 
ซึ่ง linked list เก็บข้อมูลของ element แบบ linear ที่เรียกว่า 'node' ซึ่งแต่ละ node จะเก็บข้อมูลว่า node ต่อไปอยู่ที่ไหน 
แต่ละ <dfn>node</dfn> ใน linked list มีข้อมูลสำคัญสองส่วนคือ `element` ของตัวเอง และอ้างอิงถึง `node` ถัดไป

ลองนึกภาพว่าคุณยืนต่อแถวเรียงหนึ่ง โดยที่คุณเอามือแตะไหล่คนข้างหน้า และคนข้างหลังก็เอามือแตะไหล่คุณ 
ถ้าต่อแถวแบบนี้ คุณจะเห็นคนข้างหน้าคุณ แต่คุณจะมองไม่เห็นคนถัดไป เพราะคนข้างหน้าคุณยืนบังอยู่
node ก็เหมือนกับคนที่ต่อแถวกันอยู่ ซึ่งจะเห็นแค่คนที่อยู่ข้างหน้าแค่คนเดียวเท่านั้น แต่ไม่เห็นคนอื่นที่ยืนอยู่ในแถวอีก

# --instructions--

ใน code editor ของเรา เราได้สร้างสอง node ขึ้นมา คือ `Kitten` และ `Puppy` และเราก็ได้เชื่อม node `Kiiten` และ node `Puppy` ด้วยตัวเอง

ให้สร้าง node `Cat` และ `Dog` และเพิ่ม node ทั้งสองตัวนี้ไปในแถว

# --hints--

node `Puppy` ของคุณควรมีการอ้างอิงไปยัง node `Cat`

```js
assert(Puppy.next.element === 'Cat');
```

node `Cat` ของคุณควรมีการอ้างอิงไปยัง node `Dog`

```js
assert(Cat.next.element === 'Dog');
```

# --seed--

## --seed-contents--

```js
var Node = function(element) {
  this.element = element;
  this.next = null;
};
var Kitten = new Node('Kitten');
var Puppy = new Node('Puppy');

Kitten.next = Puppy;
// แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
```

# --solutions--

```js
var Node = function(element) {
  this.element = element;
  this.next = null;
};
var Kitten = new Node('Kitten');
var Puppy = new Node('Puppy');

Kitten.next = Puppy;
// แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น

var Cat = new Node('Cat');
Puppy.next = Cat;

var Dog = new Node('Dog');
Cat.next = Dog;

```
