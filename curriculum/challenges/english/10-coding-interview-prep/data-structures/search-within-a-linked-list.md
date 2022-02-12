---
id: 587d8251367417b2b2512c64
title: Search within a Linked List
challengeType: 1
forumTopicId: 301715
dashedName: search-within-a-linked-list
---

# --description--

มาเพิ่ม method ที่เหลือ ที่จะต้องใช้ในคลาส linked list ของเรากัน 
จะดีมั้ยถ้าเราจะดูได้ว่าใน linked list ของเรามีข้อมูลอยู่หรือเปล่า เหมือนกับ method ที่เรามีในคลาส `Stack` และ `Queue`

เราควรจะสามารถค้นหา element ที่ระบุ ใน linked list ของเราได้ 
การดูข้อมูลในโครงสร้างข้อมูลเป็นเรื่องจำเป็นที่ต้องฝึกฝน! 
ให้สร้าง method `indexOf` ที่รับ `element` เป็น argument และคืนค่าเป็น `index` ของ element นั้นใน linked list ถ้าไม่เจอ element นั้นใน linked list ให้คืนค่าเป็น `-1`

และให้สร้าง method ที่ทำตรงกันข้ามกัน คือ method `elementAt` ที่รับ `index` เป็น argument และคืนค่าเป็น `element` ที่ `index` ที่ระบุ ถ้าไม่เจอ `element` นั้น ให้คืนค่าเป็น `undefined`

# --instructions--

ให้เขียน method ตามเงื่อนไขนี้

1. method `isEmpty` ที่ตรวจสอบว่า linked list ว่างเปล่าหรือไม่ 
2. method `indexOf` ที่จะคืนค่าเป็น `index` ของ element ที่ระบุ และ
3. method `elementAt` ที่จะคืนค่าเป็น `element` ที่ `index` ที่ระบุ

# --hints--

คลาส `LinkedList` ของคุณควรมี method `isEmpty`

```js
assert(
  (function () {
    var test = new LinkedList();
    return typeof test.isEmpty === 'function';
  })()
);
```

method `isEmpty` ควรคืนค่าเป็น `false` เมื่อ linked list นั้นมี element อย่างน้อยหนึ่ง element

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('kitten');
    return test.isEmpty() === false;
  })()
);
```

method `isEmpty` ของคุณควรคืนค่าเป็น `true` เมื่อ linked list นั้นไม่มี element ใดๆ อยู่

```js
assert(
  (function () {
    var test = new LinkedList();
    return test.isEmpty() === true;
  })()
);
```

คลาส `LinkedList` ของคุณควรมี method `indexOf`

```js
assert(
  (function () {
    var test = new LinkedList();
    return typeof test.indexOf === 'function';
  })()
);
```

method `indexOf` ของคุณควรคืนค่าเป็น index ของ element ที่ระบุใน linked list

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('kitten');
    return test.indexOf('cat') === 0;
  })()
);
```

method `indexOf` ของคุณควรคืนค่าเป็น `-1` ถ้าหาก element ที่ระบุไม่มีอยู่ใน linked list

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('kitten');
    return test.indexOf('pony') === -1;
  })()
);
```

คลาส `LinkedList` ของคุณควรมี method `elementAt`

```js
assert(
  (function () {
    var test = new LinkedList();
    return typeof test.elementAt === 'function';
  })()
);
```

method `elementAt` ควรคืนค่าเป็น element ที่ index ที่ระบุใน linked list

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('kitten');
    return test.elementAt(1) === 'dog';
  })()
);
```

method `elementAt` ของคุณควรคืนค่าเป็น `undefined` ถ้าไม่พบ element ตาม index ที่ระบุใน linked list

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('kitten');
    return test.elementAt(5) === undefined;
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

  this.size = function() {
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
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }

    length++;
  };

  this.remove = function(element){
    var currentNode = head;
    var previousNode;
    if(currentNode.element === element){
      head = currentNode.next;
    } else {
      while(currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      previousNode.next = currentNode.next;
    }

    length --;
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

  this.size = function() {
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
    var currentNode = head;
    var previousNode;
    if(currentNode.element === element){
        head = currentNode.next;
    } else {
        while(currentNode.element !== element) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        previousNode.next = currentNode.next;
    }

    length --;
  };

  this.indexOf = function(element) {
    if (head === null) return -1

    let current = head;
    let index = 0;

    while (current.element !== element && current.next !== null) {
      current = current.next;
      index++
    }

    if (current.element !== element && current.next === null) {
      return -1
    }

    return index;
  }

  this.elementAt = function(index) {
    if (head === null) return undefined;

    let current = head;
    let currentIndex = 0;

    while (currentIndex !== index && current.next !== null) {
      current = current.next;
      currentIndex++
    }

    if (currentIndex !== index && current.next === null) {
      return undefined;
    }

    return current.element;
  }

  this.isEmpty = function() {
    return length === 0;
  }
}
```
