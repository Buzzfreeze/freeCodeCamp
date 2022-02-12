---
id: 587d8259367417b2b2512c83
title: Invert a Binary Tree
challengeType: 1
forumTopicId: 301704
dashedName: invert-a-binary-tree
---

# --description--

คราวนี้ให้สร้างฟังก์ชันเพื่อกลับข้าง binary tree 

โดยให้ตั้งชื่อ method นี้ว่า `invert` ที่จะทำการกลับข้าง binary tree (กลับซ้าย-ขวา เหมือนส่งกระจก) การเรียกใช้ method นี้จะต้องกลับข้าวโครงสร้าง tree ที่มีอยู่ 

ซึ่งตามหลักการแล้วเราต้องทำให้ฟังก์ชันนี้อ่านค่าแต่ละ node แค่ครั้งเดียว พร้อมๆกับการปรับโครงสร้างไปด้วย โดยไม่ต้องใช้หน่วยความจำเพิ่มเติม 

ขอให้โชคดี!

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

ใน binary search tree ต้องมี method ชื่อ `invert`

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

method `invert` ต้องกลับข้างโครงสร้างของ tree ให้ถูกต้อง

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

การกลับข้าง tree ที่ไม่มีข้อมูลอยู่ด้านใน ต้องคืนค่าเป็น `null`

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
  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
  
  // แก้ไขโค้เหนือบรรทัดนี้เท่านั้น
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
  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
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
    // แก้ไขโค้เหนือบรรทัดนี้เท่านั้น
}
```
