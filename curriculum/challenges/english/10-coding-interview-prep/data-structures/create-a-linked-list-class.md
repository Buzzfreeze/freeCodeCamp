---
id: 587d8251367417b2b2512c62
title: Create a Linked List Class
challengeType: 1
forumTopicId: 301628
dashedName: create-a-linked-list-class
---

# --description--

คราวนี้มาสร้างคลาส `linked list` กัน 
โดยทุก linked list ต้องมี property พื้นฐานดังนี้ 
`head` (รายการแรกในลิสต์ของคุณ) และ `length` (จำนวนรายการในลิสต์ของคุณ) บางครั้ง 
และบาง linked list ก็จะมี `tail` ที่เป็นค่าของ element สุดท้ายของลิสต์ แต่สำหรับตอนนี้เราจะใช้แค่สองตัวแรกเท่านั้น 
เมื่อใดก็ตามที่เราเพิ่ม element ลงใน linked list แล้ว `length` property  ของเราควรเพิ่มขึ้นทีละหนึ่ง

เราต้องสร้าง method ในการเพิ่มข้อมูลลงใน linked list ดังนั้น method แรกที่เราจะต้องสร้างคือ `add`

หากลิสต์ของเรายังไม่มีข้อมูล การเพิ่ม element ลงใน linked list ของเรานั้นทำอย่างง่ายๆ เราเพียงแค่ครอบ element นั้นไว้ในคลาส `Node` และเรากำหนด node นั้นให้กับ `head` ของ linked list ของเรา

แต่ถ้าลิสต์ของเรามีข้อมูลอยู่แล้วล่ะ เราจะเพิ่ม element ในลิสต์ได้อย่างไร 
ถ้ายังจำได้ node ใน linked list มี property `next` อยู่
เพราะฉะนั้นในการเพิ่ม node ในลิสต์ ให้เราให้ค้นหา node สุดท้ายของลิสต์ และกำหนดค่าให้ property `next` ของ node สุดท้ายชี้ไปที่ node ใหม่ของเรา 
(คำแนะนำ: วิธีดูว่าเป็น node สุดท้ายของ linked list คือเมื่อ node นั้นมี property `next` เป็น `null`)

# --instructions--

เขียน method add muที่ทำให้เมื่อเพิ่ม node แรกลงไป จะใช้ node นั้นเป็น `head` ของ linked list 
และเมื่อเพิ่ม node ถัดไป node ใหม่ที่เพิ่มต้องถูกอ้างอิงใน property `next` ของ node ก่อนหน้า

หมายเหตุ

`length` ของลิสต์ควรเพิ่มขึ้นทีละ 1 ทุกครั้งที่มีการเพิ่ม element ลงใน linked list 

# --hints--

class `LinkedList` ของคุณควรมี method `add`

```js
assert(
  (function () {
    var test = new LinkedList();
    return typeof test.add === 'function';
  })()
);
```

class `LinkedList` ควรกำหนดให้ node แรกที่ถูกเพิ่มเข้ามาเป็น `head`

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    return test.head().element === 'cat';
  })()
);
```

`node` ก่อนหน้าใน class `LinkedList` ต้องอ้างอิงถึง node ใหม่ที่ถูกสร้างขึ้น

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    return test.head().next.element === 'dog';
  })()
);
```

`size` ของ class `LinkedList` ควรเท่ากับจำนวนของ node ใน linked list

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    return test.size() === 2;
  })()
);
```

# --seed--

## --seed-contents--

```js
function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element){
    this.element = element;
    this.next = null;
  };

  this.head = function(){
    return head;
  };

  this.size = function(){
    return length;
  };

  this.add = function(element){
    // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น

    // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
  };
}
```

# --solutions--

```js
function LinkedList() { 
  var length = 0; 
  var head = null; 

  var Node = function(element){
    this.element = element; 
    this.next = null; 
  }; 

  this.head = function(){
    return head;
  };

  this.size = function(){
    return length;
  };

  this.add = function(element){
    // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
    if (head == null) {
      head = new Node(element);
    } 
    else {
      let currentNode = head;
      while (currentNode.next != null) {
        // currentNode.next will be last node of linked list after loop
        currentNode = currentNode.next;
      }
      currentNode.next = new Node(element);
    }
    length++;
    // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
  };
}
```
