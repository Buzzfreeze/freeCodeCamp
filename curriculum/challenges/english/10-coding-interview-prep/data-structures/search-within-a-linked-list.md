---
id: 587d8251367417b2b2512c64
title: Search within a Linked List
challengeType: 1
forumTopicId: 301715
dashedName: search-within-a-linked-list
---

# --description--

มาเพิ่ม method ที่เป็นประโยชน์อีกสองสาม method ในคลาส linked list ของเรา จะเป็นประโยชน์เพียงใดถ้าเราสามารถบอกได้ว่าลิสต์ของเราว่างเปล่าหรือไม่ เช่นเดียวกับคลาส `Stack` และ `Queue`

เราควรจะสามารถค้นหา element เฉพาะใน linked list ของเราได้ การสำรวจโครงสร้างข้อมูลเป็นสิ่งที่คุณจะต้องการฝึกฝนอย่างมาก! มาสร้าง `indexOf` method ที่รับ `element` เป็น argument และ return `index` ของ element นั้นใน linked list หากไม่พบ element ใน linked list ให้ return `-1`

เรามาลองใช้ method ที่ทำตรงกันข้ามกัน: `elementAt` method ที่ใช้ `index` เป็น argument และ return `element` ที่ `index` ที่กำหนด หากไม่พบ `element` ให้ return `undefined`

# --instructions--

เขียน `isEmpty` method ที่ตรวจสอบว่า linked list ว่างเปล่าหรือไม่ และ `indexOf` method ที่ return `index` ของ element ที่กำหนด และ `elementAt` ที่ return `element` ที่ `index` ที่กำหนด

# --hints--

คลาส `LinkedList` ของคุณควรมี `isEmpty` method

```js
assert(
  (function () {
    var test = new LinkedList();
    return typeof test.isEmpty === 'function';
  })()
);
```

`isEmpty` method ควร return `false` เมื่อ linked list นั้นมี element อย่างน้อยหนึ่ง element

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

`isEmpty` method ของคุณควร return `true` เมื่อ linked list นั้นไม่มี element ใดๆ อยู่

```js
assert(
  (function () {
    var test = new LinkedList();
    return test.isEmpty() === true;
  })()
);
```

คลาส `LinkedList` ของคุณควรมี `indexOf` method

```js
assert(
  (function () {
    var test = new LinkedList();
    return typeof test.indexOf === 'function';
  })()
);
```

`indexOf` method ของคุณควร return index ของ element ที่กำหนดที่ถูกพบใน linked list

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

`indexOf` method ของคุณควร return `-1` ถ้าหาก element ที่กำหนดไม่ได้ถูกพบใน linked list

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

คลาส `LinkedList` ของคุณควรมี `elementAt` method

```js
assert(
  (function () {
    var test = new LinkedList();
    return typeof test.elementAt === 'function';
  })()
);
```

`elementAt` method ควร return element ที่ถูกพบตรง index ที่กำหนดใน linked list

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

`elementAt` method ของคุณควร return `undefined` ถ้าหาก element ที่กำหนดไม่ได้ถูกค้นพบตรง index ที่กำหนดใน linked list

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
