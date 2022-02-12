---
id: 5cc0c1b32479e176caf3b422
title: Check if Tree is Binary Search Tree
challengeType: 1
forumTopicId: 301624
dashedName: check-if-tree-is-binary-search-tree
---

# --description--

เนื่องจากคุณรู้อยู่แล้วว่า binary search tree คืออะไร แบบทดสอบนี้จะสร้างวิธีการที่คุณสามารถบอกได้ว่า tree เป็น binary search tree หรือไม่

ความแตกต่างที่สำคัญของ binary search tree คือ node ต่างๆ ได้รับการจัดลำดับอย่างเป็นระเบียบ โดยแต่ละ node จะมี child node ไม่เกิน 2 node (วางไว้ทางด้านขวาและ/หรือซ้าย) ขึ้นอยู่กับว่าค่าของ node ย่อยมากกว่าหรือเท่ากับ (ขวา) หรือน้อยกว่า (ซ้าย) parent node

# --instructions--

ในแบบทดสอบนี้ คุณจะต้องเขียน JavaScript method `isBinarySearchTree` ซึ่งรับค่า tree และคืนค่าเป็น boolean เพื่อเแสดงว่าข้อมูลที่ส่งเข้ามา เป็น binary search tree หรือไม่ (พยายามใช้ recursion ทุกที่ที่ใช้ได้)

# --hints--

เมื่อใส่ Binary Search Tree ของคุณลงใน `isBinarySearchTree()` ต้องคืนค่าเป็น true 

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
