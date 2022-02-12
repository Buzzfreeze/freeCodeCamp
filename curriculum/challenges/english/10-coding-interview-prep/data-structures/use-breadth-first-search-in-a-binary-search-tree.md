---
id: 587d8258367417b2b2512c7f
title: Use Breadth First Search in a Binary Search Tree
challengeType: 1
forumTopicId: 301718
dashedName: use-breadth-first-search-in-a-binary-search-tree
---

# --description--

เราจะแนะนำวิธีการอ่านข้อมูลในโครงสร้างข้อมูลแบบ tree อีกแบบหนึ่ง ซึ่งก็คือ การค้นหาตามแนวกว้าง (breadth-first search)
วิธีนี้จะตรงกันข้ามกับวิธี depth-first search ที่เราได้เรียนไปในแบบทดสอบที่แล้ว

การค้นหาตามแนวกว้างจะอ่านค่าของ node ทั้งหมดในระดับที่กำหนดใน tree แล้วจึงอ่านค่า node ในลำดับถัดไป ปกติแล้วเราจะใช้ queue เพื่อช่วยในการออกแบบอัลกอริธึมการค้นหาตามแนวกว้าง

ในวิธี breadth-first search นี้ เราจะเริ่มจาก

1. เพิ่ม root node ลงใน queue 
2. ลูปข้อมูลใน queue โดยทำการ dequeue ข้อมูลแรกใน queue แล้วนำค่าของข้อมูลนั้นไปเก็บลงในอีก array นึง
3. อ่านค่าของ child subtree ทั้งสองตัวของข้อมูลนั้น 
4. ถ้า child ไม่เป็น null เราจะนำ child node นั้นไปเพิ่มลงใน queue 
5. ทำไปเรื่อยๆ จนกว่า queue จะว่าง

# --instructions--

ลองใช้ breadth-first search ใน method ที่ชื่อว่า `levelOrder` 

method นี้ต้องคืนค่าเป็น array ที่มีค่าของ tree node ทั้งหมด เรียงตามลำดับแบบ breadth-first ให้คืนค่าเป็นค่าใน array ไม่ใช่ตัว node เอง และในการอ่านค่า ต้องเรียงจากซ้ายไปขวา 

แล้วให้เขียน method ที่คล้ายกันชื่อ `reverseLevelOrder` ซึ่งทำการค้นหาแบบเดียวกัน แต่ในทิศทางย้อนกลับ (จากขวาไปซ้าย)

# --hints--

ต้องมีโครงสร้างข้อมูลแบบ `BinarySearchTree`

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

Binary search tree ต้องมี method ชื่อ `levelOrder`

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    return typeof test.levelOrder == 'function';
  })()
);
```

Binary search tree ต้องมี method ชื่อ `reverseLevelOrder`

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    return typeof test.reverseLevelOrder == 'function';
  })()
);
```

method `levelOrder` ต้องคืนค่าเป็น array ของค่าทั้งหมดใน tree node ที่เรียงตามลำดับการอ่านค่าแบบ breath-first

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.levelOrder !== 'function') {
      return false;
    }
    test.add(7);
    test.add(1);
    test.add(9);
    test.add(0);
    test.add(3);
    test.add(8);
    test.add(10);
    test.add(2);
    test.add(5);
    test.add(4);
    test.add(6);
    return test.levelOrder().join('') == '719038102546';
  })()
);
```

method `levelOrder` ต้องคืนค่าเป็น array ของค่าทั้งหมดใน tree node ที่เรียงตามลำดับการอ่านค่าแบบ breath-first แบบย้อนกลับ

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.reverseLevelOrder !== 'function') {
      return false;
    }
    test.add(7);
    test.add(1);
    test.add(9);
    test.add(0);
    test.add(3);
    test.add(8);
    test.add(10);
    test.add(2);
    test.add(5);
    test.add(4);
    test.add(6);
    return test.reverseLevelOrder().join('') == '791108305264';
  })()
);
```

method `levelOrder` ต้องคืนค่าเป็น `null` ถ้าไม่มีข้อมูลใน tree

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.levelOrder !== 'function') {
      return false;
    }
    return test.levelOrder() == null;
  })()
);
```

method `reverseLevelOrder` ต้องคืนค่าเป็น `null` ถ้าไม่มีข้อมูลใน tree

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.reverseLevelOrder !== 'function') {
      return false;
    }
    return test.reverseLevelOrder() == null;
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
      var node = this.root;
      if (node == null) {
        this.root = new Node(value);
        return;
      } else {
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
var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
  this.levelOrder = (root = this.root) => {
    if(!root) return null;
    let queue = [root];
    let results = [];
    while(queue.length > 0) {
      let node = queue.shift();
      results.push(node.value);
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }
    return results;
  }

  this.reverseLevelOrder = (root = this.root) => {
    if(!root) return null;
    let queue = [root];
    let results = [] ;
    while ( queue.length > 0) {
      let node = queue.shift();
      results.push(node.value);
      if(node.right) queue.push(node.right);
      if(node.left ) queue.push(node.left);
    }
    return results;
  }
  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
}
```
