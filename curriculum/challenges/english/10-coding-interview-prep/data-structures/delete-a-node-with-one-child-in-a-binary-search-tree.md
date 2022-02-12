---
id: 587d8258367417b2b2512c81
title: Delete a Node with One Child in a Binary Search Tree
challengeType: 1
forumTopicId: 301638
dashedName: delete-a-node-with-one-child-in-a-binary-search-tree
---

# --description--

ตอนนี้เราลบ leaf node ได้แล้ว ไปต่อที่กรณีที่สองกันเลย ซึ่งก็คือ การลบ node ที่มี child หนึ่งตัว

ในกรณีนี้ สมมติว่าเรามี tree ที่มี node เป็น 1 — 2 — 3 โดยที่ 1 คือ root  
ในการลบ 2 เราแค่ต้องทำให้ 1 มี right เป็น 3  
ปกติแล้วในการลบ node ที่มี child ตัวเดียว เราจะทำให้ parent node นั้นอ้างอิง node ถัดไปใน tree 

# --instructions--

เราได้เขียนโค้ดใน method `remove` ซึ่งใช้แก้โจทย์ในแบบทดสอบที่แล้วไว้ให้แล้ว 

ซึ่งจะหา node ที่จะลบและ parent ของ node นั้น และเก็บจำนวนของ child ของ node ที่จะลบ 

คราวนี้ให้เขียนโค้ดให้รองรับกรณีที่ node ที่จะลบมี child ตัวเดียว เราต้องดูว่า child ตัวเดียวที่มีนั้นเป็น left หรือ right ใน tree จากนั้นให้เปลี่ยนให้ parent ให้ชี้ไปที่ node นี้ 

และต้องจัดการการลบ root node ได้ด้วย (แปลว่า parent node จะเป็น `null`) 

คุณจะเปลี่ยนโค้ดที่เรามีให้เป็นโค้ดของคุณจากแบบทดสอบที่แล้วก็ได้

# --hints--

ต้องมีโครงสร้างข้อมูล `BinarySearchTree`

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

ใน binary search tree ต้องมี method ชื่อ `remove`

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    return typeof test.remove == 'function';
  })()
);
```

ถ้าไม่เจอ element ที่จะลบ method `remove` จะต้องคืนค่าเป็น `null`

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.remove !== 'function') {
      return false;
    }
    return test.remove(100) == null;
  })()
);
```

ถ้า root node ไม่มี child แล้วเราลบ root node นั้น เราต้องตั้งค่า root node ให้เป็น `null`

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.remove !== 'function') {
      return false;
    }
    test.add(500);
    test.remove(500);
    return test.inorder() == null;
  })()
);
```

method `remove` ต้องลบ leaf node ออกจาก tree

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.remove !== 'function') {
      return false;
    }
    test.add(5);
    test.add(3);
    test.add(7);
    test.add(6);
    test.add(10);
    test.add(12);
    test.remove(3);
    test.remove(12);
    test.remove(10);
    return test.inorder().join('') == '567';
  })()
);
```

method `remove` ต้องลบ node ที่มี child ตัวเดียวได้

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.remove !== 'function') {
      return false;
    }
    test.add(-1);
    test.add(3);
    test.add(7);
    test.add(16);
    test.remove(16);
    test.remove(7);
    test.remove(3);
    return test.inorder().join('') == '-1';
  })()
);
```

ถ้าใน tree มีสอง node แล้วเราลบ root node ออกไป เราต้องทำให้ node ที่สองเป็น root

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.remove !== 'function') {
      return false;
    }
    test.add(15);
    test.add(27);
    test.remove(15);
    return test.inorder().join('') == '27';
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
    },
    inorder: function() {
      if (this.root == null) {
        return null;
      } else {
        var result = new Array();
        function traverseInOrder(node) {
          if (node.left != null) {
            traverseInOrder(node.left);
          }
          result.push(node.value);
          if (node.right != null) {
            traverseInOrder(node.right);
          }
        }
        traverseInOrder(this.root);
        return result;
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
  this.remove = function(value) {
    if (this.root === null) {
      return null;
    }
    var target;
    var parent = null;
    // หาค่าของ node ที่จะลบ และหา parent ของ node นั้น
    (function findValue(node = this.root) {
      if (value == node.value) {
        target = node;
      } else if (value < node.value && node.left !== null) {
        parent = node;
        return findValue(node.left);
      } else if (value < node.value && node.left === null) {
        return null;
      } else if (value > node.value && node.right !== null) {
        parent = node;
        return findValue(node.right);
      } else {
        return null;
      }
    }.bind(this)());
    if (target === null) {
      return null;
    }
    // นับจำนวน child ของ node ที่จะลบ
    var children =
      (target.left !== null ? 1 : 0) + (target.right !== null ? 1 : 0);
    // กรณีที่ 1: node ที่จะลบไม่มี child
    if (children === 0) {
      if (target == this.root) {
        this.root = null;
      } else {
        if (parent.left == target) {
          parent.left = null;
        } else {
          parent.right = null;
        }
      }
    }
    // กรณีที่ 2: node ที่จะลบมี child หนึ่งตัว
    // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
  };
}
```

# --solutions--

```js
// solution required
```
