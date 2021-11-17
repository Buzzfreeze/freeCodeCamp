---
id: 587d8251367417b2b2512c63
title: Remove Elements from a Linked List
challengeType: 1
forumTopicId: 301712
dashedName: remove-elements-from-a-linked-list
---

# --description--

Method ที่สำคัญต่อไปนี้ที่การนำ linked list ไปใช้งานนั้นจะต้องมี `remove` method โดยที่ method นี้ควรใช้ element ที่เราต้องการลบเป็น argument จากนั้นค้นหาภายในลิสต์เพื่อค้นหาและลบ node ที่มี element นั้น

เมื่อใดก็ตามที่เราลบ node ออกจาก linked list สิ่งสำคัญคือเราต้องไม่ละเลยลิสต์ที่เหลือโดยไม่ได้ตั้งใจในการลบนั้น โปรดจำไว้ว่า `next` property ของ node ทุก node ชี้ไปที่ node ที่ตามหลังในลิสต์ หากเรานำ element ตรงกลางออก สมมติว่าเราต้องการให้แน่ใจว่าเรามีการเชื่อมต่อจาก `next` property ของ node ก่อนหน้าของ element นั้นไปยัง`next` property ของ element ตรงกลาง (ซึ่งเป็น node ถัดไปในลิสต์!)

นี่อาจฟังดูสับสนมาก ดังนั้นกลับไปที่ตัวอย่าง conga line เพื่อให้เรามีรูปแบบแนวความคิดที่ดี ลองนึกภาพตัวเองใน conga line และคนตรงหน้าคุณออกจากแถว คนที่เพิ่งออกจากแถวไม่ได้จับมือของเธอกับใครในแถวอีกต่อไป - และคุณไม่ได้จับมือของคุณกับคนที่จากไป คุณก้าวไปข้างหน้าและจับมือกับคนต่อไปที่คุณเห็น

หาก element ที่เราต้องการลบคือ `head` element เราจะกำหนด `head` ใหม่ให้กับ node ที่สองของ linked list

# --instructions--

เขียน `remove` method ที่นำ element และลบมันออกจาก linked list 

**หมายเหตุ:** `length` ของลิสต์ควรลดลงที่ละหนึ่งทุกครั้งที่ element ถูกลบออกจาก linked list 

# --hints--

คลาส `LinkedList` ของคุณควรมี `remove` method

```js
assert(
  (function () {
    var test = new LinkedList();
    return typeof test.remove === 'function';
  })()
);
```

`remove` method ของคุณควรกำหนด `head` ใหม่ให้กับ node ที่สองเมื่อ node แรกถูกลบไป

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

`remove` method ของคุณควรลด `length` ของ linked list ที่ละหนึ่งในทุกๆ node ที่ถูกลบออกไป

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

`remove` method ของคุณควรตั้งค่าใหม่ให้กับการอ้างอิงของ node ที่ถูกลบไปให้กับการอ้างกิงของ node ที่อยู่ถัดไปของ node ที่ถูกลบ

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

`remove` method ของคุณไม่ควรเปลี่ยน linked list ถ้าหากไม่มี element ใดๆ ใน linked list นั้น

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
