---
id: 587d825a367417b2b2512c87
title: Create a Doubly Linked List
challengeType: 1
forumTopicId: 301626
dashedName: create-a-doubly-linked-list
---

# --description--

รายการที่เชื่อมโยงทั้งหมดที่เราได้สร้างไว้เป็นรายการที่เชื่อมโยงเดี่ยว ทีนี้เราจะสร้าง <dfn>doubly linked list</dfn> (รายการเชื่อโยงคู่) ตามความหมายของชื่อ node ในรายการที่เชื่อมโยงคู่มีการอ้างอิงไปยัง node ถัดไปและ node ก่อนหน้าในรายการ

ซึ่งช่วยให้เราสามารถสำรวจรายการในทั้งสองทิศทาง แต่ยังต้องใช้หน่วยความจำมากขึ้น เนื่องจากทุก node ต้องมีการอ้างอิงเพิ่มเติมไปยัง node ก่อนหน้าในรายการ

# --instructions--

เราได้จัดเตรียม `Node` object และเริ่ม `DublyLinkedList` ของเรา มาเพิ่มสอง method ในรายการที่เชื่อมโยงคู่ของเราที่เรียกว่า `add` และ `remove` โดยที่  `add` method ควรเพิ่ม element ที่กำหนดในรายการ ขณะที่ `remove` method ควรลบ element ที่เกิดขึ้นทั้งหมดที่ระบุในรายการ

โปรดใช้ความระมัดระวังในการจัดการกรณีขอบใดๆ ที่อาจเกิดขึ้นเมื่อเขียน method เหล่านี้ เช่น การลบ element แรกหรือ element สุดท้าย นอกจากนี้ การลบรายการใดๆ ในรายการว่างควร return `null`

# --hints--

ควรมีโครงสร้างข้อมูล DoublyLinkedList

```js
assert(
  (function () {
    var test = false;
    if (typeof DoublyLinkedList !== 'undefined') {
      test = new DoublyLinkedList();
    }
    return typeof test == 'object';
  })()
);
```

DoublyLinkedList ควรมี method ชื่อว่า add

```js
assert(
  (function () {
    var test = false;
    if (typeof DoublyLinkedList !== 'undefined') {
      test = new DoublyLinkedList();
    }
    if (test.add == undefined) {
      return false;
    }
    return typeof test.add == 'function';
  })()
);
```

DoublyLinkedList ควรมี method ชื่อว่า remove

```js
assert(
  (function () {
    var test = false;
    if (typeof DoublyLinkedList !== 'undefined') {
      test = new DoublyLinkedList();
    }
    if (test.remove == undefined) {
      return false;
    }
    return typeof test.remove == 'function';
  })()
);
```

การลบรายการใดๆ ออกจากลิสต์ที่ว่างควร return null

```js
assert(
  (function () {
    var test = false;
    if (typeof DoublyLinkedList !== 'undefined') {
      test = new DoublyLinkedList();
    }
    return test.remove(100) == null;
  })()
);
```

Add method ควรเพิ่มรายการเข้าไปยังลิสต์

```js
assert(
  (function () {
    var test = false;
    if (typeof DoublyLinkedList !== 'undefined') {
      test = new DoublyLinkedList();
    }
    test.add(5);
    test.add(6);
    test.add(723);
    return test.print().join('') == '56723';
  })()
);
```

แต่ละ node ควรติดตาม node ก่อนหน้า

```js
assert(
  (function () {
    var test = false;
    if (typeof DoublyLinkedList !== 'undefined') {
      test = new DoublyLinkedList();
    }
    test.add(50);
    test.add(68);
    test.add(73);
    return test.printReverse().join('') == '736850';
  })()
);
```

รายการแรกควรสามารถถูกลบออกจากลิสต์ได้

```js
assert(
  (function () {
    var test = false;
    if (typeof DoublyLinkedList !== 'undefined') {
      test = new DoublyLinkedList();
    }
    test.add(25);
    test.add(35);
    test.add(60);
    test.remove(25);
    return test.print().join('') == '3560';
  })()
);
```

รายการสุดท้ายควรสามารถถูกลบออกจากลิสต์ได้

```js
assert(
  (function () {
    var test = false;
    if (typeof DoublyLinkedList !== 'undefined') {
      test = new DoublyLinkedList();
    }
    test.add(25);
    test.add(35);
    test.add(60);
    test.remove(60);
    return test.print().join('') == '2535';
  })()
);
```

# --seed--

## --after-user-code--

```js
DoublyLinkedList.prototype = Object.assign(
  DoublyLinkedList.prototype,
  {
  
  print() {
    if (this.head == null) {
      return null;
    } else {
      var result = new Array();
      var node = this.head;
      while (node.next != null) {
        result.push(node.data);
        node = node.next;
      };
      result.push(node.data);
      return result;
    };
  },
  printReverse() {
    if (this.tail == null) {
      return null;
    } else {
      var result = new Array();
      var node = this.tail;
      while (node.prev != null) {
        result.push(node.data);
        node = node.prev;
      };
      result.push(node.data);
      return result;
    };
  }
});
```

## --seed-contents--

```js
var Node = function(data, prev) {
  this.data = data;
  this.prev = prev;
  this.next = null;
};
var DoublyLinkedList = function() {
  this.head = null;
  this.tail = null;
  // Only change code below this line
  
  // Only change code above this line
};
```

# --solutions--

```js
// solution required
```
