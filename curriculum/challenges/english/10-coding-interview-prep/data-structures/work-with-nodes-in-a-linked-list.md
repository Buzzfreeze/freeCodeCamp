---
id: 587d8251367417b2b2512c61
title: Work with Nodes in a Linked List
challengeType: 1
forumTopicId: 301721
dashedName: work-with-nodes-in-a-linked-list
---

# --description--

โครงสร้างข้อมูลทั่วไปอีกโครงสร้างหนึ่งที่คุณจะพบในวิทยาการคอมพิวเตอร์คือ <dfn>linked list</dfn> ซึ่ง linked list คือการรวบรวมข้อมูล element เชิงเส้นที่เรียกว่า 'nodes' ซึ่งแต่ละส่วนจะชี้ไปที่รายการถัดไป แต่ละ <dfn>node</dfn> ใน linked list มีข้อมูลสำคัญสองส่วน: `element` ของมันเองและการอ้างอิงถึง `node` ถัดไป

ลองนึกภาพว่าคุณอยู่ในแนว conga line คุณจับมือของคุณกับคนต่อไปในแถวและคนข้างหลังคุณใช้มือมาจับคุณ คุณสามารถมองเห็นคนตรงหน้าคุณได้ แต่พวกเขากำลังปิดกั้นมุมมองของคนอื่นต่อไปข้างหน้าในแถว  node ก็เหมือนกับคนใน conga line พวกมันรู้ว่าตัวเองเป็นใครและมองเห็นได้เฉพาะคนถัดไปในแถว แต่ไม่รู้ไม่เห็นถึงคนอื่นที่อยู่ข้างหน้าหรือข้างหลัง

# --instructions--

ใน code editor ของเรา เราได้สร้างสอง node ขึ้นมา คือ `Kitten` และ `Puppy` และเราก็ได้เชื่อม node `Kiiten` และ node `Puppy` ด้วยตัวเอง

ให้สร้าง node `Cat` และ `Dog` และเพิ่มพวกมันด้วยตัวเองไปยังแถวข้อมูล

# --hints--

`Puppy` node ของคุณควรมีการอ้างอิงไปยัง `Cat` node

```js
assert(Puppy.next.element === 'Cat');
```

`Cat` node ของคุณควรมีการอ้างอิงไปยัง `Dog` node

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
// Only change code below this line
```

# --solutions--

```js
// solution required
```
