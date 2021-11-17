---
id: 587d825a367417b2b2512c88
title: Reverse a Doubly Linked List
challengeType: 1
forumTopicId: 301714
dashedName: reverse-a-doubly-linked-list
---

# --description--

มาสร้าง method เพิ่มอีกหนึ่ง method สำหรับ doubly linked list ของเราที่เรียกว่า reverse ซึ่งจะกลับลิสต์เข้าที่ เมื่อดำเนินการตาม method แล้ว head ควรชี้ไปที่ tail ก่อนหน้า และ tail ควรชี้ไปที่ส่วน head ก่อนหน้า ตอนนี้หากเราสำรวจลิสต์จากหัวถึงท้าย เราควรพบกับ node ในลำดับที่กลับกันเมื่อเทียบกับลิสต์เดิม การพยายามย้อนกลับลิสต์ว่างควร return ค่าเป็น null

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

DoublyLinkedList ควรมี method ที่เรียกว่า reverse

```js
assert(
  (function () {
    var test = false;
    if (typeof DoublyLinkedList !== 'undefined') {
      test = new DoublyLinkedList();
    }
    if (test.reverse == undefined) {
      return false;
    }
    return typeof test.reverse == 'function';
  })()
);
```

การย้อนกลับลิสต์ที่ว่างเปล่าควร return null

```js
assert(
  (function () {
    var test = false;
    if (typeof DoublyLinkedList !== 'undefined') {
      test = new DoublyLinkedList();
    }
    return test.reverse() == null;
  })()
);
```

Reverse method ควรจัดเรียงลิสต์ใหม่แบบย้อนกลับ

```js
assert(
  (function () {
    var test = false;
    if (typeof DoublyLinkedList !== 'undefined') {
      test = new DoublyLinkedList();
    }
    test.add(58);
    test.add(61);
    test.add(32);
    test.add(95);
    test.add(41);
    test.reverse();
    return test.print().join('') == '4195326158';
  })()
);
```

การอ้างอิงต่อไปและก่อนหน้าควรเป็นดังเดิมเมื่อลิสต์ถูกย้อนกลับ

```js
assert(
  (function () {
    var test = false;
    if (typeof DoublyLinkedList !== 'undefined') {
      test = new DoublyLinkedList();
    }
    test.add(11);
    test.add(22);
    test.add(33);
    test.add(44);
    test.add(55);
    test.reverse();
    return test.printReverse().join('') == '1122334455';
  })()
);
```

# --seed--

## --after-user-code--

```js
DoublyLinkedList.prototype = Object.assign(
  DoublyLinkedList.prototype,
  {
    add(data) {
      if (this.head == null) {
        this.head = new Node(data, null);
        this.tail = this.head;
      } else {
        var node = this.head;
        var prev = null;
        while (node.next != null) {
          prev = node;
          node = node.next;
        };
        var newNode = new Node(data, node);
        node.next = newNode;
        this.tail = newNode;
      };
    },
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
  }
);
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
  var Node = function(data, prev) {
    this.data = data;
    this.prev = prev;
    this.next = null;
  };
  var DoublyLinkedList = function() {
    this.head = null;
    this.tail = null;

    this.reverse = function() {
      if (!this.head || !this.head.next) {
        return this.head
      }

      let tail;
      let temp;
      let current = this.head;
      while(current !== null) {
        if(!tail) tail = current;
        temp = current.prev;
        current.prev = current.next;
        current.next = temp;
        current = current.prev;
      }

      this.head = temp.prev;
      this.tail = tail
    }
  };
```
