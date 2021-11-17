---
id: 587d8258367417b2b2512c7f
title: Use Breadth First Search in a Binary Search Tree
challengeType: 1
forumTopicId: 301718
dashedName: use-breadth-first-search-in-a-binary-search-tree
---

# --description--

เราจะแนะนำวิธีการ tree traversal method หรือ การค้นหาแบบกว้างก่อน ตรงกันข้ามกับวิธีการค้นหาที่เน้นความลึกจากแบบทดสอบครั้งก่อน การค้นหาแบบกว้างก่อนจะสำรวจโหนดทั้งหมดในระดับที่กำหนดภายใน tree ก่อนที่จะดำเนินการต่อไปในระดับถัดไป โดยปกติ queue จะถูกใช้เป็นโครงสร้างข้อมูลตัวช่วยในการออกแบบอัลกอริธึมการค้นหาแบบกว้างก่อน

ในวิธีนี้ เราเริ่มต้นด้วยการเพิ่ม root node ไปยัง queue จากนั้นเราเริ่มการวนซ้ำตรงที่เรา dequeue รายการแรกใน queue เพิ่มลงใน array ใหม่ จากนั้นตรวจสอบ child subtrees ทั้งสองรายการ ถ้า child ของมันไม่เป็น null พวกเขาจะถูก enqueued กระบวนการนี้จะดำเนินต่อไปจนกว่า queue จะว่าง

# --instructions--

มาสร้างวิธีการค้นหาแบบกว้างก่อน (breadth-first search method) ใน tree ของเราที่ชื่อว่า `levelOrder` เมธอดนี้ควร return array ที่มีค่าของ tree node ทั้งหมด โดยสำรวจในลักษณะกว้างก่อน ให้แน่ใจว่ามันจะ return ค่าใน array ไม่ใช่ตัว node เอง ควรข้ามระดับจากซ้ายไปขวา ต่อไปเรามาเขียน method ที่คล้ายกันที่เรียกว่า `reverseLevelOrder` ซึ่งทำการค้นหาแบบเดียวกัน แต่ในทิศทางย้อนกลับ (จากขวาไปซ้าย) ในแต่ละระดับ

# --hints--

ควรมี `BinarySearchTree` data structure

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

Binary search tree ควรมี method ที่เรียกว่า `levelOrder`

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

Binary search tree ควรมี method ที่เรียกว่า `reverseLevelOrder`.

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

`levelOrder` method ควร return array ของค่าต่างๆ  tree node ที่ได้ถูกสำรวจในลำดับตามระดับ

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

`reverseLevelOrder` method ควร return array ของค่าต่างๆ  tree node ที่ได้ถูกสำรวจในลำดับที่กลับกันของระดับ

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

`levelOrder` method ควร return `null` สำหรับ tree ที่ว่างเปล่า

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

`reverseLevelOrder` method ควร return `null` สำหรับ tree ที่ว่างเปล่า

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
  // Only change code below this line
  
  // Only change code above this line
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
  // Only change code below this line
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
  // Only change code above this line
}
```
