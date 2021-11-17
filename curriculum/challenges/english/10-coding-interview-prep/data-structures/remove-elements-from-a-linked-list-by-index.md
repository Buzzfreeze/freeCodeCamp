---
id: 587d8251367417b2b2512c65
title: Remove Elements from a Linked List by Index
challengeType: 1
forumTopicId: 301711
dashedName: remove-elements-from-a-linked-list-by-index
---

# --description--

ก่อนที่เราจะไปต่อที่โครงสร้างข้อมูลอื่น เรามาฝึกปฏิบัติกับ linked list ให้คล้องกันก่อน

มาเขียน method `removeAt` ที่จะลบ `element` ที่ `index` ที่กำหนด `element` นี้ควรเรียกว่า `removeAt(index)` ในการลบ `element` ที่ `index` ดังกล่าวนั้นเราจำเป็นต้องนับแต่ละ node ในขณะที่เราย้ายไปตาม linked list (รายการที่เชื่อมโยง)

เทคนิคทั่วไปที่ใช้ในการวนซ้ำองค์ประกอบของรายการที่เชื่อมโยงนั้นเกี่ยวข้องกับ <dfn>'runner'</dfn> หรือผู้พิทักษ์ที่ 'ชี้' ไปที่ node ที่โค้ดของคุณกำลังเปรียบเทียบ ในกรณีของเรา เริ่มต้นที่ "ส่วนหัว" ของรายการ เราจะเริ่มต้นด้วยตัวแปร "currentIndex" ที่เริ่มต้นที่ "0" `currentIndex` ควรเพิ่มขึ้นทีละหนึ่งสำหรับแต่ละ node ที่เราส่งผ่าน
A common technique used to iterate through the elements of a linked list involves a <dfn>'runner'</dfn>, or sentinel, that 'points' at the nodes that your code is comparing. In our case, starting at the `head` of our list, we start with a `currentIndex` variable that starts at `0`. The `currentIndex` should increment by one for each node we pass.

เช่นเดียวกับวิธีการ `remove(element)` ซึ่ง [เราได้กล่าวถึงในบทเรียนก่อนหน้านี้](/learn/coding-interview-prep/data-structures/remove-elements-from-a-linked-list) เราจำเป็นต้องระวังอย่าให้ลิสต์ที่เหลือของเราไร้การอ้างอิงเมื่อเราลบ node ในวิธี `removeAt(index)` ของเรา เราทำให้ node ของเราอยู่ติดกันโดยตรวจสอบให้แน่ใจว่า node ที่มีการอ้างอิงไปยัง node ที่ถูกลบมีการอ้างอิงไปยัง node ถัดไป

# --instructions--

เขียนวิธี `removeAt(index)` ที่จะลบและ return node ที่ `index` ที่กำหนด โดยที่ method ควร return `null` หาก `index` ที่ระบุเป็นค่าลบ หรือมากกว่าหรือเท่ากับ `length` ของ linked list

**หมายเหตุ:** อย่าลืมว่ายังคงต้องดำเนอนการนับจากการนับ `currentIndex`.

# --hints--

คลาส `LinkedList` ของคุณ ควรมี `removeAt` method

```js
assert(
  (function () {
    var test = new LinkedList();
    return typeof test.removeAt === 'function';
  })()
);
```

`removeAt` method ของคุณควรลด `length` ของ linked list ที่ละหนึ่ง

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('kitten');
    test.removeAt(1);
    return test.size() === 2;
  })()
);
```

`removeAt` method ของคุณควรลบ element ที่ index ที่กำหนดออกจาก linked list

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('kitten');
    test.add('bird');
    test.removeAt(1);
    return (
      JSON.stringify(test.head()) ===
      '{"element":"cat","next":{"element":"kitten","next":{"element":"bird","next":null}}}'
    );
  })()
);
```

เมื่อมี element เพียง element เดียวภายใน linked list `removeAt` method ของคุณควรลบและ return element นั้นที่ index ที่กำหนด และลดค่า length ของ linked list ด้วย

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    var removedItem = test.removeAt(0);
    return test.head() === null && test.size() === 0 && removedItem === 'cat';
  })()
);
```

`removeAt` method ของคุณควร return element ของ node ที่ถูกลบออก

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('kitten');
    return test.removeAt(1) === 'dog';
  })()
);
```

`removeAt` method ของคุณควร return `null` และ linked list ไม่ควรเปลี่ยน หาก index ที่กำหนดมานั้นมีค่าน้อยกว่า `0`

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('kitten');
    var removedItem = test.removeAt(-1);
    return (
      removedItem === null &&
      JSON.stringify(test.head()) ===
        '{"element":"cat","next":{"element":"dog","next":{"element":"kitten","next":null}}}'
    );
  })()
);
```

`removeAt` method ของคุณควร return `null` และ linked list ไม่ควรเปลี่ยน หาก index ที่กำหนดมานั้นมีค่ามากกว่าหรือเท่ากับ `length` ของลิสต์นั้น

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('kitten');
    var removedItem = test.removeAt(3);
    return (
      removedItem === null &&
      JSON.stringify(test.head()) ===
        '{"element":"cat","next":{"element":"dog","next":{"element":"kitten","next":null}}}'
    );
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

  this.size = function(){
    return length;
  };

  this.head = function(){
    return head;
  };

  this.add = function(element){
    var node = new Node(element);
    if(head === null){
      head = node;
    } else {
      var currentNode = head;

      while(currentNode.next){
        currentNode  = currentNode.next;
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

  var Node = function (element) {
    this.element = element;
    this.next = null;
  };

  this.size = function () {
    return length;
  };

  this.head = function () {
    return head;
  };

  this.add = function (element) {
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

  this.removeAt = function (index) {
    var currentNode = head;
    var previous = head;
    var count = 0;
    if (index >= length || index < 0) {
      return null;
    }
    if (index === 0) {
      var removed = head.element;
      head = currentNode.next;
    } else {
      while (count < index) {
        previous = currentNode;
        currentNode = currentNode.next;
        count++;
      }
      var removed = previous.next.element;
      previous.next = currentNode.next;
    }
    length--;
    return removed;
  };
}
```
