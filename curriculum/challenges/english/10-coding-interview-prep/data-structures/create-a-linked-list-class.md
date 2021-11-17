---
id: 587d8251367417b2b2512c62
title: Create a Linked List Class
challengeType: 1
forumTopicId: 301628
dashedName: create-a-linked-list-class
---

# --description--

มาสร้างคลาส `linked list` กันเถอะ ทุก linked list (ลิสต์ที่เชื่อมโยง) ควรเริ่มต้นด้วย property พื้นฐานสองสามอย่าง: `head` (รายการแรกในลิสต์ของคุณ) และ `length` (จำนวนรายการในลิสต์ของคุณ) บางครั้ง คุณจะเห็นการใช้งาน linked list ที่รวม `tail` สำหรับ element สุดท้ายของลิสต์ แต่สำหรับตอนนี้เราจะใช้แค่สองตัวแรกเท่านั้น เมื่อใดก็ตามที่เราเพิ่ม element ลงใน linked list  แล้ว `length` property  ของเราควรเพิ่มขึ้นทีละหนึ่ง

เราต้องการวิธีเพิ่มรายการลงใน linked list  ดังนั้น method แรกที่เราจะต้องสร้างคือ `add` method

หากลิสต์ของเราว่างเปล่า การเพิ่ม element ลงใน linked list ของเรานั้นทำอย่างง่ายๆ: เราเพียงแค่รวม element นั้นไว้ในคลาส `Node` และเรากำหนด node นั้นให้กับ `head` ของ linked list ของเรา

แต่ถ้าลิสต์ของเรามีรายการอยู่แล้วหนึ่งอย่างขึ้นไปล่ะ เราจะเพิ่ม element ในลิสต์ได้อย่างไร โปรดจำไว้ว่าแต่ละ node ใน linked list มี `next` property แล้วในการเพิ่ม node ในลิสต์นั้นให้เราให้ค้นหา node สุดท้ายในลิสต์ และชี้ไปที่`next` property ของ node สุดท้ายที่ node ใหม่ของเรา (คำแนะนำ: คุณรู้ว่าคุณมาถึงจุดสิ้นสุดของ linked list แล้วเมื่อ `next` property ของ node เป็น `null`)

# --instructions--

เขียน add method ที่กำหนด node แรกที่คุณ push ไปยัง linked list ไปยัง `head` หลังจากนั้นเมื่อใดก็ตามที่เพิ่ม node  ทุก node ควรได้รับการอ้างอิงโดย `next` property ของ node ก่อนหน้า

หมายเหตุ

`length` ของลิสต์ควรเพิ่มขึ้นหนึ่ง ทุกครั้งที่มีการเพิ่ม element ลงใน linked list 
Your list's `length` should increase by one every time an element is added to the linked list.

# --hints--

`LinkedList` class ของคุณควรมี `add` method

```js
assert(
  (function () {
    var test = new LinkedList();
    return typeof test.add === 'function';
  })()
);
```

`LinkedList` class ควรกำหนดให้ node แรกที่ถูกเพิ่มเข้ามาเป็น `head`

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    return test.head().element === 'cat';
  })()
);
```

`node` ก่อนหน้านี้ใน `LinkedList` class ควรมีการอ้างอิงถึง node ใหม่ที่ถูกสร้างขึ้น

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

ขนาด `size` ของ `LinkedList` class ควรเท่ากับจำนวนของ node ใน linked list

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
    // Only change code below this line

    // Only change code above this line
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
    // Only change code below this line
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
    // Only change code above this line
  };
}
```
