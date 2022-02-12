---
id: 587d8257367417b2b2512c7d
title: Find the Minimum and Maximum Height of a Binary Search Tree
challengeType: 1
forumTopicId: 301641
dashedName: find-the-minimum-and-maximum-height-of-a-binary-search-tree
---

# --description--

ในแบบทดสอบผ่านมา เราได้อธิบายสถานการณ์สมมติที่ tree ไม่สมดุลไปแล้ว
คราวนี้ เพื่อให้เข้าใจแนวคิดเรื่องความสมดุล ลองมาดู property อื่นๆของ tree กันบ้าง 
`height` แสดงถึงระยะทางจาก root node ไปยัง leaf node ที่ระบุ เส้นทางที่แตกต่างกันในโครงสร้าง tree ที่มีกิ่งก้านมากๆ อาจมีความสูงต่างกัน 
แต่โดยทั่วไปสำหรับ tree หนึ่งๆ จะมี `height` ที่ต่ำที่สุด และ `height` ที่สูงที่สุด 
ถ้า tree มีความสมดุล ค่าเหล่านี้จะแตกต่างกันไม่เกิน 1 ซึ่งหมายความว่าใน tree ที่สมดุล leaf node ทั้งหมดจะอยู่ในระดับเดียวกัน หรือหาก node เหล่านี้ไม่อยู่ในระดับเดียวกัน leaf node ทั้งหมดจะห่างกันไม่เกินหนึ่งระดับ

คุณสมบัติของความสมดุลมีความสำคัญสำหรับ tree เพราะเป็นสิ่งที่กำหนดประสิทธิภาพของการทำงานของ tree  
ตามที่เราอธิบายในแบบทดสอบที่ผ่านมา ได้เห็น time complexity ใน worst case ที่ tree ที่ไม่สมดุลอย่างมากไปแล้ว 
โดยทั่วไปแล้ว tree ที่ปรับสมดุลในตัวเองมักใช้เพื่อแก้ปัญหานี้ใน tree ที่มีชุดข้อมูลที่เปลี่ยนไปมาได้ 
ตัวอย่างของ trree แบบนี้คือ AVL tree, red-black tree และ B-tree 
ซึ่ง tree เหล่านี้ทั้งหมดมีตรรกะภายในเพิ่มเติมซึ่งใช้ปรับสมดุลของ tree ใหม่ เมื่อการแทรกหรือการลบที่ทำให้เกิดความไม่สมดุลขึ้นมา 

**หมายเหตุ:** property อีกตัวที่คล้ายกับความสูงคือความลึก (depth)  ซึ่งเป็นค่าระยะห่างของ node ที่กำหนดกับ root node

# --instructions--

ให้เขียน 2 method ใน binary tree ของเรา
คือ `findMinHeight` และ `findMaxHeight` โดยที่ method เหล่านี้ควร คืนค่าเป็นจำนวนเต็ม ที่เป็นความสูงต่ำสุดและสูงสุดภายใน binary tree ที่กำหนด 
ถ้าใน tree ไม่มี node ให้กำหนดความสูงเป็น `-1` (ค่าต่ำสุด) 
สุดท้ายให้เพิ่ม method ที่สามชื่อ `isBalanced` ซึ่งจะคืนค่าเป็น `true` หรือ `false` ขึ้นอยู่กับว่า tree นี้มีความสมดุลหรือไม่ 
คุณสามารถใช้ method สองตัวแรกที่คุณเพิ่งเขียนไป เพื่อตรวจสอบได้

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

binary search tree ควรมี method ที่ชื่อ `findMinHeight`

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    return typeof test.findMinHeight == 'function';
  })()
);
```

binary search tree ควรมี method ที่ชื่อ `findMaxHeight`

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    return typeof test.findMaxHeight == 'function';
  })()
);
```

binary search tree ควรมี method ที่ชื่อ `isBalanced`

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    return typeof test.isBalanced == 'function';
  })()
);
```

method `findMinHeight` ต้องคืนค่าเป็นความสูงที่ต่ำที่สุดของ tree

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.findMinHeight !== 'function') {
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
    return test.findMinHeight() == 1;
  })()
);
```

method `findMaxHeight` ต้องคืนค่าเป็นความสูงที่มากที่สุดของ tree

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.findMaxHeight !== 'function') {
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
    return test.findMaxHeight() == 5;
  })()
);
```

tree ที่ไม่มี node ควรมี height เป็น `-1`

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.findMaxHeight !== 'function') {
      return false;
    }
    return test.findMaxHeight() == -1;
  })()
);
```

method `isBalanced` ต้องคืนค่าเป็น `false` หาก tree นั้น เป็น binary search tree ที่ไม่สมดุล

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.isBalanced !== 'function') {
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
    return test.isBalanced() === false;
  })()
);
```

method `isBalanced` ต้องคืนค่าเป็น `true` หาก tree นั้น เป็น binary search tree ที่สมดุล

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.isBalanced !== 'function') {
      return false;
    }
    test.add(10);
    test.add(3);
    test.add(22);
    test.add(1);
    test.add(4);
    test.add(17);
    test.add(32);
    return test.isBalanced() === true;
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
  // Only change code below this line
  
  // Only change code above this line
  this.findMinHeight = function(root = this.root) {
    // empty tree.
    if (root === null) {
      return -1;
    }
    // leaf node.
    if (root.left === null && root.right === null) {
      return 0;
    }
    if (root.left === null) {
      return this.findMinHeight(root.right) + 1;
    }
    if (root.right === null) {
      return this.findMinHeight(root.left) + 1;
    }
    const lHeight = this.findMinHeight(root.left);
    const rHeight = this.findMinHeight(root.right);
    return Math.min(lHeight, rHeight) + 1;
  };
  this.findMaxHeight = function(root = this.root) {
    // empty tree.
    if (root === null) {
      return -1;
    }
    // leaf node.
    if (root.left === null && root.right === null) {
      return 0;
    }
    if (root.left === null) {
      return this.findMaxHeight(root.right) + 1;
    }
    if (root.right === null) {
      return this.findMaxHeight(root.left) + 1;
    }
    const lHeight = this.findMaxHeight(root.left);
    const rHeight = this.findMaxHeight(root.right);
    return Math.max(lHeight, rHeight) + 1;
  };
  this.isBalanced = function(root = this.root) {
    if (root === null) {
      return true;
    }

    if (root.left === null && root.right === null) {
      return true;
    }

    if (root.left === null) {
      return this.findMaxHeight(root.right) <= 0;
    }

    if (root.right === null) {
      return this.findMaxHeight(root.left) <= 0;
    }

    const lHeight = this.findMaxHeight(root.left);
    const rHeight = this.findMaxHeight(root.right);
    if (Math.abs(lHeight - rHeight) > 1) {
      return false;
    }
    return this.isBalanced(root.left) && this.isBalanced(root.right);
  };
}
```
