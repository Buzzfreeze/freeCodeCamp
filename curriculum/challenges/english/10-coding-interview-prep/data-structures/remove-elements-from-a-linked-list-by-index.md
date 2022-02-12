---
id: 587d8251367417b2b2512c65
title: Remove Elements from a Linked List by Index
challengeType: 1
forumTopicId: 301711
dashedName: remove-elements-from-a-linked-list-by-index
---

# --description--

ก่อนที่เราจะไปต่อที่โครงสร้างข้อมูลอื่น เรามาฝึกใช้ linked list กันต่ออีกหน่อย

ให้เขียน method `removeAt` ที่จะลบ `element` ที่ `index` ที่กำหนด 
ซึ่ง method นี้จะต้องเรียกใช้แบบนี้ `removeAt(index)` 
ในการลบ `element` ที่ `index` ที่ระบุนั้น เราจำเป็นต้องนับว่าเราถึง node ทีเท่าไหร่แล้ว ในระหว่างที่เราอ่านค่าแต่ละ node ใน linked list

วิธีทั่วๆไปที่ใช้ในการวนอ่านค่าของ linked list คือการใช้ <dfn>'runner'</dfn> หรือ `sentinel` ที่จะ 'ชี้' ไปที่ node ที่โค้ดของคุณกำลังอ่านอยู่
ในกรณีของเรา ให้เริ่มที่ `head` ของลิสต์ 
เราจะเริ่มต้นโดยการมีตัวแปร `currentIndex` ซึ่งมีค่าเริ่มต้นเป็น `0`
และ `currentIndex` ต้องมีค่าเพิ่มขึ้นทีละหนึ่ง ทุกครั้งที่เราอ่านค่าของ node

ก็จะเหมือนกับใน method `remove(element)` ที่เราได้สอนใน [บทเรียนที่แล้ว](/learn/coding-interview-prep/data-structures/remove-elements-from-a-linked-list) 
ในการใช้ method `removeAt(index)` เราจำเป็นต้องระวังไม่ให้ node ที่เหลืออ้างอิงไปยัง node ที่ถูกลบไปแล้ว 
เราต้องทำให้ node ของเรายังเชื่อมต่อกัน โดยดูว่า node ที่อ้างอิง node ที่ถูกลบไปนั้น ได้เปลี่ยนการอ้างอิงไปยัง node ถัดไปแทนแล้ว

# --instructions--

เขียน method `removeAt(index)` ที่จะลบและคืนค่าเป็น node ที่ `index` ที่ระบุ โดยที่ method นี้ต้องคืนค่าเป็น `null` ถ้า `index` ที่ระบุเป็นค่าลบ หรือมากกว่าหรือเท่ากับ `length` ของ linked list

**หมายเหตุ:** อย่าลืมว่าต้องนับ node ที่อ่านไปแล้วโดยใช้ `currentIndex` ด้วย

# --hints--

คลาส `LinkedList` ของคุณ ควรมี method `removeAt`

```js
assert(
  (function () {
    var test = new LinkedList();
    return typeof test.removeAt === 'function';
  })()
);
```

method `removeAt` ของคุณควรลด `length` ของ linked list ที่ละหนึ่ง

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

method `removeAt` ของคุณควรลบ element ที่ index ที่กำหนดออกจาก linked list

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

เมื่อมี element เพียง element เดียวภายใน linked list แล้ว method `removeAt` ของคุณควรลบและคืนค่าเป็น element นั้นที่ index ที่ระบุ และลดค่า length ของ linked list ด้วย

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

method `removeAt` ของคุณควรคืนค่าเป็น element ของ node ที่ถูกลบออก

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

ถ้า index ที่กำหนดมานั้นมีค่าน้อยกว่า `0` แล้ว method `removeAt` ของคุณควรคืนค่าเป็น `null` และ linked list ต้องไม่เปลี่ยนแปลง 

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

ถ้า index ที่กำหนดมานั้นมีค่ามากกว่าหรือเท่ากับ `length` ของลิสต์นั้น แล้ว method `removeAt` ของคุณควรคืนค่าเป็น `null` และ linked list ต้องไม่เปลี่ยนแปลง 

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

  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น

  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
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
