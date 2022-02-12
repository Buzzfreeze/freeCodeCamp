---
id: 587d8251367417b2b2512c63
title: Remove Elements from a Linked List
challengeType: 1
forumTopicId: 301712
dashedName: remove-elements-from-a-linked-list
---

# --description--

method ที่สำคัญอีกตัวหนึ่งคือ `remove` โดยที่ method นี้ควรใช้ element ที่เราต้องการลบเป็น argument จากนั้นค้นหาภายในลิสต์ เพื่อลบ node ที่มี element นั้น

เมื่อใดก็ตามที่เราลบ node ออกจาก linked list สิ่งสำคัญคือเราต้องไม่ลืมว่า property `next` ของ node ทุก node ชี้ไปที่ node ถัดไป เพราะฉะนั้น ถ้าเราลบ node ออกจาก linked list เราต้องจัดการ property `next` ของ node ที่อ้างอิง node ตัวที่ลบไปด้วย

ถ้ายังงง ลองกลับมาดูที่การยืนต่อแถว 
ลองนึกภาพว่าคุณกำลังยืนต่อแถวอยู่แล้วเอามือแตะไหล่คนข้างหน้าอยู่ 
ถ้าคนข้างหน้าคุณออกจากแถวไป คราวนี้คุณก็จะยืนโดยไม่ได้แตะไหล่ใครอยู่ คุณก็ต้องเปลี่ยนไปแตะไหล่คนต่อไปแทน เพื่อไม่ให้แถวขาด

ถ้า element ที่เราต้องการลบคือ `head` เราต้องกำหนด `head` ใหม่ให้กับ node โดยต้องเลือกเป็น node ที่สองของ linked list นั้น

# --instructions--

เขียน method `remove` ที่ใช้ลบ element ออกจาก linked list 

**หมายเหตุ:** `length` ของลิสต์ควรลดลงทีละ 1 ทุกครั้งที่ element ถูกลบออกจาก linked list 

# --hints--

คลาส `LinkedList` ของคุณควรมี method `remove`

```js
assert(
  (function () {
    var test = new LinkedList();
    return typeof test.remove === 'function';
  })()
);
```

method `remove` ของคุณควรกำหนด `head` ใหม่ให้เป็น node ที่สอง เมื่อ node แรกถูกลบไป

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.remove('cat');
    return test.head().element === 'dog';
  })()
);
```

method `remove` ของคุณควรลด `length` ของ linked list ที่ละ 1 ทุกครั้งที่ node ถูกลบออกไป

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('hamster');
    test.remove('cat');
    test.remove('fish');
    return test.size() === 2;
  })()
);
```

method `remove` เปลี่ยนการอ้างอิงของ node ที่อ้างอิง node ที่ถูกลบไป โดยให้ไปอ้างอิง node ที่อยู่ถัดไปแทน

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('snake');
    test.add('kitten');
    test.remove('snake');
    return test.head().next.next.element === 'kitten';
  })()
);
```

method `remove` ของคุณไม่ควรเปลี่ยน linked list ถ้าไม่มี element นั้นอยู่ใน linked list

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('kitten');
    test.remove('elephant');
    return (
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

  this.remove = function(element){
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

  this.remove = function(element){
    if (head === null) {
      return;
    }
    var previous;
    var currentNode = head;

    while (currentNode.next !== null && currentNode.element !== element) {
      previous = currentNode;
      currentNode = currentNode.next;
    }
    
    if (currentNode.next === null && currentNode.element !== element) {
      return;
    }
    else if (previous) {
      previous.next = currentNode.next;
    } else {
      head = currentNode.next;
    }

    length--;
  };
} 
```
