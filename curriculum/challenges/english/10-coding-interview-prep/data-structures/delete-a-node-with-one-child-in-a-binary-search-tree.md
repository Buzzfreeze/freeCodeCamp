---
id: 587d8258367417b2b2512c81
title: Delete a Node with One Child in a Binary Search Tree
challengeType: 1
forumTopicId: 301638
dashedName: delete-a-node-with-one-child-in-a-binary-search-tree
---

# --description--

ตอนนี้เราสามารถลบ leaf node ได้แล้ว ไปต่อที่กรณีที่สองกันเลย: การลบ node ที่มีหนึ่ง child สำหรับกรณีนี้สมมติว่าเรามี tree ที่มี node ต่อไปนี้ 1 — 2 — 3 โดยที่ 1 คือ root ในการลบ 2 เราเพียงแค่ต้องทำการอ้างอิงที่ถูกต้องใน 1 จุดถึง 3 โดยทั่วไปแล้วในการลบ node ที่มีเพียง child เดียว เราทำให้ node หลักนั้นอ้างอิง node ถัดไปใน tree 

# --instructions--

เราได้จัดเตรียมโค้ดบางส่วนไว้ใน `remove` method ของเราซึ่งทำงานได้ดีจากแบบทดสอบครั้งที่แล้ว เราค้นหาเป้าหมายที่จะลบและ parent ของมัน และกำหนดจำนวน child ที่ node เป้าหมายมี มาเพิ่มกรณีต่อไปที่นี่สำหรับ node เป้าหมายที่มีเพียง child เดียว ที่นี่เราจะต้องพิจารณาว่า child เดียวเป็นกิ่งซ้ายหรือขวาใน tree จากนั้นตั้งค่าการอ้างอิงที่ถูกต้องใน  parent ให้ชี้ไปที่ node นี้ นอกจากนี้เรามาพิจารณากรณีที่เป้าหมายเป็น root node (ซึ่งหมายความว่า parent node จะเป็น `null`) อย่าลังเลที่จะเขียนโค้ดทับโค้ดเริ่มต้นทั้งหมดด้วยโค้ดของคุณเองตราบเท่าที่มันผ่านการทดสอบ

# --hints--

ควรมีโคงสร้างข้อมูล `BinarySearchTree`

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

การพยายามลบ element ที่ไม่มีอยู่ควร return `null`

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

ถ้าหาก root node ไม่มี child การลบมันควรตั้งค่า root เป็น `null`

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

`remove` method ควรลบ node ที่มี child เดียว

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
    // Only change code below this line
  };
}
```

# --solutions--

```js
// solution required
```
