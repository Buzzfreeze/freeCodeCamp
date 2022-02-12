---
id: 587d825a367417b2b2512c87
title: Create a Doubly Linked List
challengeType: 1
forumTopicId: 301626
dashedName: create-a-doubly-linked-list
---

# --description--

linked list ที่เราได้สร้างมาเป็นรูปแบบที่เรียกว่า singly linked list 
ทีนี้เราจะสร้าง <dfn>doubly linked list</dfn> ซึ่ง linked list แบบนี้จะอ้างอิงทั้ง node ก่อนหน้า และ node ถัดไปในลิสต์

linked list แบบนี้จะทำให้เราอ้านค่าไปข้างหน้า และย้อนหลังได้ แต่จะทำให้เราใช้หน่วยความจำมากขึ้นในการเก็บข้อมูล

# --instructions--

เราได้เขียน `Node` object และ `DublyLinkedList` ไว้ให้แล้ว 
ให้เพิ่ม method 2 ตัวใน doubly linked list ของเราคือ 

1. method `add` ต้องเพิ่ม element ที่ระบุในลิสต์ 
2. method `remove` ต้องลบ element ที่ระบุในลิสต์

โปรดระวังในการเขียน method ที่ลบ element แรกหรือ element สุดท้าย  
และการลบ element จากลิสต์ที่ไม่มีข้อมูลอยู่ต้องคืนค่าเป็น `null`

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

การลบ element จากลิสต์ที่ไม่มีข้อมูลอยู่ ต้องคืนค่าเป็น `null`

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

method Add ควรเพิ่มข้อมูลเข้าไปยังลิสต์

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

แต่ละ node ต้องอ้างอิง node ก่อนหน้า

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

ต้องลบข้อมูลแรกออกจากลิสต์ได้

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

ต้องลบข้อมูลสุดท้ายออกจากลิสต์ได้

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
  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น

  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
};
```

# --solutions--

```js
// solution required
```
