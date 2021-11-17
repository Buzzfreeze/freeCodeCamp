---
id: 587d8258367417b2b2512c80
title: Delete a Leaf Node in a Binary Search Tree
challengeType: 1
forumTopicId: 301637
dashedName: delete-a-leaf-node-in-a-binary-search-tree
---

# --description--

นี่เป็นแบบทดสอบแรกจากสามข้อที่เราจะลอง operation ที่ยากขึ้นใน binary search tree: การลบทำได้ยากเนื่องจากการลบ node จะทำลายลิงก์ใน tree ลิงก์เหล่านี้ต้องได้รับการสร้างขึ้นใหม่อย่างระมัดระวังเพื่อให้แน่ใจว่า binary search tree ยังคงอยู่ สำหรับการลบบางครั้งนั้นอาจจะจำเป็นต้องจัดเรียง tree ใหม่ โดยทั่วไปคุณจะพบหนึ่งในสามกรณีต่อไปนี้เมื่อพยายามลบ node : Leaf Node: เป้าหมายที่จะลบมี child เป็นศูนย์, One Child: เป้าหมายที่จะลบมีเพียง child เดียว, Two Children: เป้าหมายที่จะลบมีสอง child node  การลบ  leaf node เป็นเรื่องง่ายเราเพียงแค่ลบออกธรรมดาๆ การลบ node ที่มี child เดียวนั้นค่อนข้างง่ายเช่นกัน เราเพียงแค่ลบ node ออกและเชื่อมโยง parent node กับ child node ของ node ที่เราลบ และการลบ node ที่มีสอง child นั้นยากกว่า เนื่องจากสิ่งนี้จะสร้าง child node สอง node ที่จำเป็นต้องเชื่อมต่อกับ parent tree อีกครั้ง เราจะดูวิธีจัดการกับกรณีนี้ในแบบทดสอบที่สาม นอกจากนี้คุณต้องคำนึงถึง edge บางกรณีเมื่อจัดการกับการลบ เกิดอะไรขึ้นถ้า tree ว่างเปล่า? เกิดอะไรขึ้นถ้า node ที่จะลบเป็น root node? เกิดอะไรขึ้นถ้ามีเพียงสอง element ใน tree? แต่ตอนนี้เรามาจัดการกับกรณีแรกที่เราลบ leaf node กัน

# --instructions--

สร้าง method บน binary tree ของเราที่เรียกว่า `remove` เราจะสร้าง logic สำหรับการดำเนินการลบของเราที่นี่ ขั้นแรก คุณจะต้องสร้างฟังก์ชันภายใน remove ซึ่งใช้ค้นหา node ที่เราพยายามจะลบใน tree ปัจจุบัน หากไม่มี node ใน tree นั้น `remove` ควร return ค่า `null` ตอนนี้ หาก node เป้าหมายเป็น leaf node ที่ไม่มี child แล้ว parent node ของมั้นควรถูกตั้งค่าเป็น `null` สิ่งนี้จะลบ node ออกจาก tree อย่างมีประสิทธิภาพ ในการทำเช่นนี้คุณจะต้องติดตาม parent ของ node ที่เราพยายามจะลบด้วย นอกจากนี้ยังเป็นประโยชน์ในการสร้างวิธีการติดตามจำนวน child ที่ node เป้าหมายมี เนื่องจากจะเป็นตัวกำหนดว่าการลบของเราอยู่ภายใต้กรณีใด เราจะจัดการกับกรณีที่สองและสามในแบบทดสอบครั้งต่อไป ขอให้โชคดี!

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

การพยายามที่จะลบ element ที่ไม่มีอยู่นั้นควร return `null`

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

ถ้า root node ไม่มี child การลบมันควรจะตั้งค่า root เป็น `null`

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

`remove` method ควรลบ leaf node จาก tree

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
  // Only change code below this line
}
```

# --solutions--

```js
// solution required
```
