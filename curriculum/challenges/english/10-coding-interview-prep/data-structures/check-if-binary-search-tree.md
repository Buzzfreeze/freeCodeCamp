---
id: 5cc0c1b32479e176caf3b422
title: Check if Tree is Binary Search Tree
challengeType: 1
forumTopicId: 301624
dashedName: check-if-tree-is-binary-search-tree
---

# --description--

เนื่องจากคุณรู้อยู่แล้วว่าแผนผังการค้นหาแบบไบนารีคืออะไร แบบทดสอบนี้จะสร้างวิธีการที่คุณสามารถบอกได้ว่า tree เป็น tree การค้นหาแบบไบนารีหรือไม่

ความแตกต่างที่สำคัญของแผนผังการค้นหาแบบไบนารีคือ node ต่างๆ ได้รับการจัดลำดับอย่างเป็นระเบียบ node มี child node ไม่เกิน 2 node (วางไว้ทางด้านขวาและ/หรือซ้าย) ขึ้นอยู่กับว่าค่าของ node ย่อยมากกว่าหรือเท่ากับ (ขวา) หรือน้อยกว่า (ซ้าย) parent node หรือไม่

# --instructions--

ในแบบทดสอบนี้ คุณจะต้องสร้าง utility สำหรับ tree ของคุณ เขียน JavaScript method `isBinarySearchTree` ซึ่งรับ tree เป็นอินพุตและ return ค่าบูลีนไม่ว่าทรีจะเป็น tree การค้นหาแบบไบนารีหรือไม่ ใช้การเรียกซ้ำทุกครั้งที่ทำได้

# --hints--

Binary Search Tree ควร return ค่าเป็น true เมื่อได้รับการตรวจสอบจาก `isBinarySearchTree()`

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    test.push(1);
    test.push(5);
    test.push(3);
    test.push(2);
    test.push(4);
    return isBinarySearchTree(test) == true;
  })()
);
```

# --seed--

## --after-user-code--

```js
BinarySearchTree.prototype.push = function(val) {
  var root = this.root;

  if (!root) {
    this.root = new Node(val);
    return;
  }

  var currentNode = root;
  var newNode = new Node(val);

  while (currentNode) {
    if (val < currentNode.value) {
      if (!currentNode.left) {
        currentNode.left = newNode;
        break;
      } else {
        currentNode = currentNode.left;
      }
    } else {
      if (!currentNode.right) {
        currentNode.right = newNode;
        break;
      } else {
        currentNode = currentNode.right;
      }
    }
  }
};
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
}
function isBinarySearchTree(tree) {
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
}
function isBinarySearchTree(tree) {
  if (tree.root == null) {
    return null;
  } else {
    let isBST = true;
    function checkTree(node) {
      if (node.left != null) {
        const left = node.left;
        if (left.value > node.value) {
          isBST = false;
        } else {
          checkTree(left);
        }
      }
      if (node.right != null) {
        const right = node.right;
        if (right.value < node.value) {
          isBST = false;
        } else {
          checkTree(right);
        }
      }
    }
    checkTree(tree.root);
    return isBST;
  }
};
```
