---
id: 587d8259367417b2b2512c83
title: Invert a Binary Tree
challengeType: 1
forumTopicId: 301704
dashedName: invert-a-binary-tree
---

# --description--

ที่นี่เราจะสร้างฟังก์ชันเพื่อสลับ binary tree จาก binary tree เราต้องการสร้าง tree ใหม่ที่มีคุรสมบัติเทียบเท่ากับ tree นี้ การเรียกใช้การสำรวจผ่านแบบไม่เรียงลำดับบน tree ที่กลับหัวจะสำรวจ node ในลำดับที่กลับกันเมื่อเปรียบเทียบกับการสำรวจผ่านแบบไม่เรียงลำดับของ tree ดั้งเดิม เขียน method ที่เรียกว่า `invert` บน binary treeของเรา การเรียก method นี้ควรกลับโครงสร้าง tree ปัจจุบัน ตามหลักการแล้วเราต้องการทำสิ่งนี้ในตำแหน่งในเวลาเชิงเส้น นั่นคือเราเข้าหาแต่ละ node เพียงครั้งเดียวและเราปรับเปลี่ยนโครงสร้างต้นไม้ที่มีอยู่ในขณะที่เราเข้าหาโดยไม่ต้องใช้หน่วยความจำเพิ่มเติม ขอให้โชคดี!

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

binary search tree ควรมี method ที่เรียกว่า `invert`

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    return typeof test.invert == 'function';
  })()
);
```

`invert` method ควรกลับโครงสร้างของ tree อย่างถูกต้อง

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.invert !== 'function') {
      return false;
    }
    test.add(4);
    test.add(1);
    test.add(7);
    test.add(87);
    test.add(34);
    test.add(45);
    test.add(73);
    test.add(8);
    test.invert();
    return test.inorder().join('') == '877345348741';
  })()
);
```

การกลับ tree ที่ว่างเปล่าควร return `null`

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.invert !== 'function') {
      return false;
    }
    return test.invert() == null;
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
            return searchTree(node.left)
          };
        } else if (value > node.value) {
          if (node.right == null) {
            node.right = new Node(value);
            return;
          } else if (node.right != null) {
            return searchTree(node.right);
          };
        } else {
          return null;
        };
      }

      var node = this.root;
      if (node == null) {
        this.root = new Node(value);
        return;
      } else {
        return searchTree(node);
      };
    },
    inorder: function() {
      if (this.root == null) {
        return null;
      } else {
        var result = new Array();
        function traverseInOrder(node) {
          if (node.left != null) {
            traverseInOrder(node.left);
          };
          result.push(node.value);
          if (node.right != null) {
            traverseInOrder(node.right);
          };
        }
        traverseInOrder(this.root);
        return result;
      };
    }
  }
);
```

## --seed-contents--

```js
var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
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
var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // Only change code below this line
  this.invert = function(node = this.root) {
    if (node) {
      const temp = node.left;
      node.left = node.right;
      node.right = temp;
      this.invert(node.left);
      this.invert(node.right);
    }
    return node;
  }
    // Only change code above this line
}
```
