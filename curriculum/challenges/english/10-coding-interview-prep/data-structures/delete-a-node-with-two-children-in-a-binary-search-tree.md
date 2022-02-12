---
id: 587d8258367417b2b2512c82
title: Delete a Node with Two Children in a Binary Search Tree
challengeType: 1
forumTopicId: 301639
dashedName: delete-a-node-with-two-children-in-a-binary-search-tree
---

# --description--

การลบ node ที่มีสอง child เป็นกรณีที่ยากที่สุดในสามกรณีนี้แล้ว การลบ node ในลักษณะนี้จะสร้าง tree ย่อยสอง tree ที่ไม่ได้เชื่อมต่อกับโครงสร้าง tree  
เราจะเชื่อม tree ใหม่นี้เข้ากับ tree เดิมได้อย่างไร? 

วิธีหนึ่งคือการหาค่าที่น้อยที่สุดใน tree ย่อยด้านขวาของ node ที่จะลบและแทนที่ node ที่จะลบด้วยค่านี้  
การเลือกการใช้การแทนที่แบบนี้จะทำให้ node ตัวนี้มีค่ามากกว่าทุก node ใน tree ย่อยด้านซ้าย จะกลายเป็น parent ใหม่ แต่ก็จะยังมีค่าน้อยกว่า node ทุกตัวใน tree ย่อยด้านขวา  
เมื่อทำการแทนที่นี้แล้ว เราจะต้องลบ node ตัวนี้ออกจาก subtree ทางด้านขวาด้วย  
การลบ node ที่เอาไปแทนที่นี้ก็จะยาก เพราะว่า node นี้อาจจะเป็น leaf หรือเป็น parent ของ subtree ด้านขวาเลยก็ได้ 

ถ้า node นี้เป็น leaf เราต้องลบการอ้างอิง node นี้ของ parent ออกไปด้วย แต่ถ้า node นี้เป็น parent ของ subtree ด้านขวา เปลี่ยนค่าของ node ที่จะลบเป็น node ตัวนี้ และเปลี่ยน child ด้านขวาของ node ที่จะลบเป็น child ด้านขวาของ node นี้แทน

# --instructions--

คราวนี้ ได้เวลาเขียน method `remove` ให้จบได้แล้ว

เราได้เขียนโค้ดของสองกรณีแรกให้แล้ว ให้คุณเพิ่มโค้ดเพื่อจัดการในกรณีที่ node ที่จะลบมี child สองตัวกัน 

edge case ที่ควรระวังคือ จะเกิดอะไรขึ้นถ้า tree มีแค่สาม node ? 

ถ้าเขียนกรณีนี้เสร็จ การลบข้อมูลใน binary search tree ก็จะเสร็จสมบูรณ์แล้ว! 

คุณเก่งมาก เพราะโจทย์นี้ยากพอตัวเลยล่ะ!

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
    return typeof test.remove == 'function' ? test.remove(100) == null : false;
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
    test.add(500);
    test.remove(500);
    return typeof test.remove == 'function' ? test.inorder() == null : false;
  })()
);
```

method `remove` ตองลบ leaf node ออกจาก tree

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

method `remove` ตองลบ node ที่ไม่มี child ออกจาก tree ได้

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

method `remove` ต้องลบ node ที่มี child สองตัวได้ โดยที่ยังโครงสร้างของ binary search tree ต้องเหมือนเดิม

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

ต้องลบ root ได้ ถ้า tree มีแค่สาม node

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
    // กรณีที่ 3: node ที่จะลบมี child สองตัว
    // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
  };
}
```

# --solutions--

```js
// solution required
```
