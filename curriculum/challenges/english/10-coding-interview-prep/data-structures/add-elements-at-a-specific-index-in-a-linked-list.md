---
id: 587d8252367417b2b2512c67
title: Add Elements at a Specific Index in a Linked List
challengeType: 1
forumTopicId: 301619
dashedName: add-elements-at-a-specific-index-in-a-linked-list
---

# --description--

มาสร้าง addAt(index,element) method ที่เพิ่ม element ไปที่ index ที่กำหนด เช่นเดียวกับที่เราลบ element ออกจาก index ที่กำหนด เราจำเป็นต้องติดตาม currentIndex ขณะที่เราสำรวจรายการที่เชื่อมโยง เมื่อ currentIndex ตรงกับ index ที่กำหนด เราจะต้องกำหนดคุณสมบัติถัดไปของ node ก่อนหน้าใหม่เพื่ออ้างอิง node ที่เพิ่มใหม่ และ node ใหม่ควรอ้างอิง node ถัดไปใน index ปัจจุบัน กลับมาที่ตัวอย่าง conga line คนใหม่ต้องการร่วม line นี้ แต่เขาต้องการร่วมสายกลาง คุณอยู่ตรงกลางแถว ดังนั้นคุณจึงปล่อยมือจากคนที่อยู่ข้างหน้าคุณ คนใหม่เดินเข้ามาและจับมือกับคนที่คุณเคยสัมผัส และตอนนี้คุณก็ได้จับมือกับคนใหม่แล้ว

# --instructions--

สร้าง `addAt(index,element)` method ที่เพิ่ม element ที่ index ที่กำหนด return ค่า false หากไม่สามารถเพิ่ม element ได้ **หมายเหตุ:** อย่าลืมตรวจสอบว่า index ที่ระบุเป็นค่าลบหรือยาวกว่าความยาวของรายการที่เชื่อมโยง

# --hints--

`addAt` method ของคุณควรกำหนด `head` ใหม่ให้กับ node ใหม่ เมื่อมีการกำหนดให้ index เท่ากับ 0

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.addAt(0, 'cat');
    return test.head().element === 'cat';
  })()
);
```

`addAt` method ของคุณควรเพิ่มความยาวของลิสต์ที่เชื่อมโยงที่ละหนึ่งต่อ node ใหม่แต่ละ node ที่ถูกเพิ่มเข้าไปยังลิสต์นั้น

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.addAt(0, 'cat');
    return test.size() === 3;
  })()
);
```

`addAt` method ของคุณควร return `false` เมื่อไม่สามารถเพิ่ม node เข้าไปได้

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    return test.addAt(4, 'cat') === false;
  })()
);
```

# --seed--

## --seed-contents--

```js
function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element) {
    this.element = element;
    this.next = null;
  };

  this.size = function() {
    return length;
  };

  this.head = function() {
    return head;
  };

  this.add = function(element) {
    var node = new Node(element);
    if (head === null) {
      head = node;
    } else {
      var currentNode = head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }
    length++;
  };

  // Only change code below this line

  // Only change code above this line
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

  this.size = function(){
    return length;
  };

  this.head = function(){
    return head;
  };

  this.add = function(element){
    var node = new Node(element);
    if (head === null){
        head = node;
    } else {
      var currentNode = head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }
    length++;
  };
  this.addAt = function (index, element) {
    if (index > length || index < 0) {
      return false;
    }
    var newNode = new Node(element);
    var currentNode = head;
    if (index === 0) {
      head = newNode;
    } else {
      var previousNode = null;
      var i = 0;
      while (currentNode && i < index) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        i++;
      }
      previousNode.next = newNode;
    }
    newNode.next = currentNode;
    length++;
  }
}
```
