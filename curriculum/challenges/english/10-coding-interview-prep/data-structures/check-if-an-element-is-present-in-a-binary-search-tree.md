---
id: 587d8257367417b2b2512c7c
title: Check if an Element is Present in a Binary Search Tree
challengeType: 1
forumTopicId: 301623
dashedName: check-if-an-element-is-present-in-a-binary-search-tree
---

# --description--

ตอนนี้เรารู้คร่าวๆแล้วว่าแล้วว่า binary search tree คืออะไร 
ในแบบทดสอบนี้ เรามาพูดถึงรายละเอียดเพิ่มเติมกันหน่อยดีกว่า 
binary search tree จะใช้เวลาเฉลี่ยในการ lookup, insert, และ delete เป็น O(log n) และจะใช้ O(n) ใน worst case
ทำไมถึงเป็นเช่นนี้? 
การดำเนินการพื้นฐานแต่ละแบบที่ระบุมานั้น ทำให้เราต้องหาข้อมูลที่อยู่ในโครงสร้าง (หรือในกรณีการ insert คือการหาตำแหน่งที่ควรเพิ่มข้อมูลเข้าไป) และเนื่องจากโครงสร้าง tree ที่  parent node แต่ละ node จะแยกกิ่งไปทางซ้ายหรือขวาจะทำให้เราลดประมาณของข้อมูลที่ต้องหาลงครึ่งหนึ่งในทุกชั้น 
ทำให้จำนวนครั้งในการดำเนินการออกมาเป็น log n โดยที่ n คือจำนวน node ใน tree   
แล้วใน worst case ล่ะ? 
ลองดูการสร้าง tree จากค่าต่อไปนี้ โดยเพิ่มจากซ้ายไปขวา: `10`, `12`, `17`, `25` 
ตามกฎของ binary search tree เราจะเพิ่ม `12` ไปทางด้านขวาของ `10` และเพิ่ม `17` ไปทางด้านขวาของ `10` และเพิ่ม `25` ไปทางด้านขวาของ `17` 
ทำให้ตอนนี้ tree ของเราจะมีโครงสร้างคล้ายกับ linked list และในการหา `25` จะทำให้เราต้องอ่านค่าของข้อมูลทั้งหมด ซึ่งจำนวนครั้งในการดำเนินการก็จะเป็น n โดยที่ n คือจำนวน node ใน tree ซึ่งเป็น worst case 
ปัญหาคือโครงสร้าแบบ tree ในกรณีนี้จะทำให้เกิดโครงสร้างที่ไม่สมดุล
เราจะมาศึกษาเรื่องนี้กันในแบบทดสอบนี้

# --instructions--

ในแบบทดสอบนี้ เราจะลองใช้ tree ของเราแล้ว 
ให้เขียน method `isPresent` ซึ่งรับค่าเป็นจำนวนเต็ม และคืนค่าเป็น boolean ซึ่งใช้แสดงว่ามีค่านั้นอยู่ใน binary search tree ของเราหรือไม่

In this challenge, we will create a utility for our tree. Write a method `isPresent` which takes an integer value as input and returns a boolean value for the presence or absence of that value in the binary search tree.

# --hints--

ควรมีโครงสร้างข้อมูล `BinarySearchTree`

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    }
    return typeof test == 'object';
  })()
);
```

binary search tree ควรมี method ชื่อ `isPresent`

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    return typeof test.isPresent == 'function';
  })()
);
```

method `isPresent` ต้องตรวจสอบว่ามี element ใน tree หรือไม่ ได้อย่างถูกต้อง

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.isPresent !== 'function') {
      return false;
    }
    test.add(4);
    test.add(7);
    test.add(411);
    test.add(452);
    return (
      test.isPresent(452) &&
      test.isPresent(411) &&
      test.isPresent(7) &&
      !test.isPresent(100)
    );
  })()
);
```

`isPresent` ต้องจัดการในกรณีที่ tree นั้นว่างได้

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.isPresent !== 'function') {
      return false;
    }
    return test.isPresent(5) == false;
  })()
);
```

# --seed--

## --after-user-code--

```js
BinarySearchTree.prototype = Object.assign(
  BinarySearchTree.prototype,
  {
    add: function(value) {
      var node = this.root;
      if (node == null) {
        this.root = new Node(value);
        return;
      } else {
        function searchTree(node) {
          if (value < node.value) {
            if (node.left == null) {
              node.left = new Node(value);
              return;
            } else if (node.left != null) {
              return searchTree(node.left);
            }
          } else if (value > node.value) {
            if (node.right == null) {
              node.right = new Node(value);
              return;
            } else if (node.right != null) {
              return searchTree(node.right);
            }
          } else {
            return null;
          }
        }
        return searchTree(node);
      }
    }
  }
);
```

## --seed-contents--

```js
var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น

  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
}
```

# --solutions--

```js
var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  this.isPresent = function (value) {
    var current = this.root
    while (current) {
      if (value === current.value) {
        return true;
      }
      current = value < current.value ? current.left : current.right;
    }
    return false;
  }
}
```
