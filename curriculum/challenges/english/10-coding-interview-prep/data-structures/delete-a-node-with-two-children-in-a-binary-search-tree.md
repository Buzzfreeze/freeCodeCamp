---
id: 587d8258367417b2b2512c82
title: Delete a Node with Two Children in a Binary Search Tree
challengeType: 1
forumTopicId: 301639
dashedName: delete-a-node-with-two-children-in-a-binary-search-tree
---

# --description--

การลบ node ที่มีสอง child เป็นกรณีที่ยากที่สุดในเขียนโค้ด การลบ node ในลักษณะนี้จะสร้าง tree ย่อยสอง tree ที่ไม่ได้เชื่อมต่อกับโครงสร้าง tree เดิมอีกต่อไป เราจะเชื่อมต่อมันใหม่ได้อย่างไร วิธีหนึ่งคือการหาค่าที่น้อยที่สุดใน tree ย่อยด้านขวาของ node เป้าหมายและแทนที่ node เป้าหมายด้วยค่านี้ การเลือกการแทนที่ในลักษณะนี้ช่วยให้แน่ใจว่า node มากกว่าทุก node ใน tree ย่อยด้านซ้าย จะกลายเป็น parent ใหม่ แต่ยังน้อยกว่าทุก node ใน tree ย่อยด้านขวา ซึ่งมันจะกลายเป็น parent ใหม่ของพวกมัน เมื่อทำการแทนที่นี้แล้ว  node ทดแทนจะต้องถูกลบออกจาก tree ย่อยด้านขวา แม้การดำเนินการนี้จะยุ่งยากเนื่องจากการแทนที่อาจเป็น leaf หรืออาจเป็น parent ของ tree ย่อยด้านขวา หากเป็น leaf เราต้องลบการอ้างอิงของ parent ออกไปด้วย มิฉะนั้นจะกลายเป็น child ด้านขวาของเป้าหมาย ในกรณีนี้เราต้องแทนที่ค่าเป้าหมายด้วยมูลค่าการแทนที่ และทำให้เป้าหมายอ้างอิงถึงส่วน child ด้านขวาของ node ที่แทนที่

# --instructions--

มาทำให้ `remove` method ของเราสำเร็จโดยรับมือกับการจัดการกับกรณีที่สามกัน เราได้ให้โค้ดเริ่มต้นแล้วอีกครั้งจากสองกรณีแรก คราวนี้เรามาเพิ่มโค้ดเพื่อจัดการ node เป้าหมายที่มีสอง child  แล้วจะมีกรณี edge ใด ๆ ที่ควรระวัง? เกิดอะไรขึ้นถ้า tree มีเพียงสาม node ? เมื่อคุณทำเสร็จแล้ว การดำเนินการลบของเราสำหรับ binary search trees จะเสร็จสมบูรณ์ เยี่ยมเลย นี่เป็นโจทย์ที่ค่อนข้างยาก!

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

binary search tree ควรมี method ที่เรียกว่า `remove`

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

การพยายามที่จะลบ element ที่ไม่มีอยู่ควร return `null`

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    return typeof test.remove == 'function' ? test.remove(100) == null : false;
  })()
);
```

ถ้า root node ไม่มี child การลบมันควรตั้งค่า root เป็น `null`

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    test.add(500);
    test.remove(500);
    return typeof test.remove == 'function' ? test.inorder() == null : false;
  })()
);
```

`remove` method ควรลบ leaf node ออกจาก tree

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
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
    return typeof test.remove == 'function'
      ? test.inorder().join('') == '567'
      : false;
  })()
);
```

`remove` method ควรลบ node ที่ไม่มี child

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

การลบ root ใน tree ที่มีสอง node ควรตั้งค่า node ที่สองเป็น root

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

`remove` method ควรลบ node ที่มีสอง child และยังคงโครงสร้างเดิมของ binary search tree

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
    test.add(1);
    test.add(4);
    test.add(3);
    test.add(7);
    test.add(9);
    test.add(11);
    test.add(14);
    test.add(15);
    test.add(19);
    test.add(50);
    test.remove(9);
    if (!test.isBinarySearchTree()) {
      return false;
    }
    test.remove(11);
    if (!test.isBinarySearchTree()) {
      return false;
    }
    test.remove(14);
    if (!test.isBinarySearchTree()) {
      return false;
    }
    test.remove(19);
    if (!test.isBinarySearchTree()) {
      return false;
    }
    test.remove(3);
    if (!test.isBinarySearchTree()) {
      return false;
    }
    test.remove(50);
    if (!test.isBinarySearchTree()) {
      return false;
    }
    test.remove(15);
    if (!test.isBinarySearchTree()) {
      return false;
    }
    return test.inorder().join('') == '147';
  })()
);
```

Root ควรถูกลบได้บน tree ที่มีสาม node

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
    test.add(100);
    test.add(50);
    test.add(300);
    test.remove(100);
    return test.inorder().join('') == 50300;
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
    },
    isBinarySearchTree() {
      if (this.root == null) {
        return null;
      } else {
        var check = true;
        function checkTree(node) {
          if (node.left != null) {
            var left = node.left;
            if (left.value > node.value) {
              check = false;
            } else {
              checkTree(left);
            }
          }
          if (node.right != null) {
            var right = node.right;
            if (right.value < node.value) {
              check = false;
            } else {
              checkTree(right);
            }
          }
        }
        checkTree(this.root);
        return check;
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
    // Find the target value and its parent
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
    // Count the children of the target to delete
    var children =
      (target.left !== null ? 1 : 0) + (target.right !== null ? 1 : 0);
    // Case 1: Target has no children
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
    // Case 2: Target has one child
    else if (children == 1) {
      var newChild = target.left !== null ? target.left : target.right;
      if (parent === null) {
        target.value = newChild.value;
        target.left = null;
        target.right = null;
      } else if (newChild.value < parent.value) {
        parent.left = newChild;
      } else {
        parent.right = newChild;
      }
      target = null;
    }
    // Case 3: Target has two children
    // Only change code below this line
  };
}
```

# --solutions--

```js
// solution required
```
