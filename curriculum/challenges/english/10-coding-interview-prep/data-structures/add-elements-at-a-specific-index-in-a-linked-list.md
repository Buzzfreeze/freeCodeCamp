---
id: 587d8252367417b2b2512c67
title: Add Elements at a Specific Index in a Linked List
challengeType: 1
forumTopicId: 301619
dashedName: add-elements-at-a-specific-index-in-a-linked-list
---

# --description--

คราวนี้ให้สร้าง method `addAt(index,element)` ที่จะเพิ่ม element ไปที่ index ที่กำหนด 
วิธีนี้ก็จะเหมือนกับตอนที่เราลบ element ออกจาก index ที่กำหนด เราจำเป็นต้องนับค่าของ currentIndex ในระหว่างที่เรากำลังอ่านค่าของ แต่ละ node ด้วย และเมื่อ currentIndex ตรงกับ index ที่กำหนด เราจะต้องกำหนด property `next` ของ node ก่อนหน้าใหม่เพื่อให้อ้างอิง node ที่เพิ่มเข้ามาใหม่ และ node ใหม่ควรอ้างอิง node ถัดไปใน index ปัจจุบัน 

กลับมาที่ตัวอย่างการยืนต่อแถว 
ถ้ามีคนใหม่จะมาแทรกแถวหน้าคุณ คุณต้องปล่อยมือจากคนที่อยู่ข้างหน้าคุณ และแตะไหล่คนที่มาต่อใหม่แทน

# --instructions--

ให้สร้าง method `addAt(index,element)` ที่เพิ่ม element ที่ index ที่กำหนด โดยคืนค่าเป็น false ถ้าไม่สามารถเพิ่ม element ได้ 
**หมายเหตุ:** อย่าลืมตรวจสอบว่า index ต้องไม่ติดลบ และไม่มากกว่าหรือเท่ากับความยาวของ linked list

# --hints--

เมื่อมีการเพิ่ม element ที่ index 0 แล้ว method `addAt` ของคุณควรกำหนด `head` ให้เป็น node ตัวใหม่แทน

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

method `addAt` ของคุณควรเพิ่มความยาวของ linked list ที่ละหนึ่ง mทุครั้งที่เพิ่ม node ใหม่เข้าไปในลิสต์

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

method `addAt` ของคุณควรคืนค่าเป็น `false` เมื่อไม่สามารถเพิ่ม node เข้าไปได้

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

  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น

  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
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
