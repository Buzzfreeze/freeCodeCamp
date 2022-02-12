---
id: 587d8258367417b2b2512c80
title: Delete a Leaf Node in a Binary Search Tree
challengeType: 1
forumTopicId: 301637
dashedName: delete-a-leaf-node-in-a-binary-search-tree
---

# --description--

เราจะมีแบบทดสอบเรื่อง binary search tree สามแบบทดสอบที่จะค่อนข้างยาก คือการทำการลบ node

การลบ node ยากเพราะว่าจะเป็นการทำให้การเชื่อมต่อระหว่าง node หายไป เพราะฉะนั้นเราจึงต้องระวังมากๆในการจัดการการเชื่อมต่อของ node ใหม่หลังจากทำการลบข้อมูล 

ปกติในการลบ node จะมีแค่ 3 กรณีคือ

1. Leaf Node ที่จะลบไม่มี child 
2. Leaf Node ที่จะลบมี child ตัวเดียว
3. Leaf Node ที่จะลบมี child สองตัว  
 
การลบ leaf node ที่ไม่มี child น่ะไม่ยาก เราก็แค่ลบ node นั้นออก และการลบ node ที่มี child เดียวก็ค่อนข้างง่ายเหมือนกัน เราแค่ลบ node ออกและเชื่อม parent node กับ child node ของ node ที่เราลบออกไป ที่ยากคือการลบ node ที่มี child สองตัว  
เพราะว่าการลบ node ที่มี child สองตัวจะทำให้เราต้องเอา child node ทั้งสองตัวไปเชื่อมกับ parent tree ใหม่ 

เราจะดูวิธีจัดการกับกรณีนี้ในแบบทดสอบที่สาม นอกจากนี้คุณต้องคำนึงถึง edge case เมื่อทำการลบด้วย เช่น จะเกิดอะไรขึ้นถ้า tree ไม่มีข้อมูล? จะเกิดอะไรขึ้นถ้า node ที่จะลบเป็น root node? จะเกิดอะไรขึ้นถ้าใน tree มี element แค่สองตัว? 

เรามาเริ่มจากส่วนที่ง่ายที่สุดกันก่อน ก็คือการลบ leaf node ที่ไม่มี child

# --instructions--

ให้ method ชื่อ `remove` ใน binary tree ของเรา ซึ่งเราเขียน logic การลบ node ที่นี่ 

ขั้นแรก คุณจะต้องสร้างฟังก์ชันภายใน remove ซึ่งใช้ค้นหา node ที่เราจะลบใน tree ปัจจุบัน ถ้าไม่มี node ใน tree นั้น `remove` ต้องคืนค่าเป็น `null`  
ตอนนี้ถ้า node ที่จะลบเป็น leaf node ที่ไม่มี child ให้เปลี่ยนการอ้างอิงของ parent node เป็น `null` การทำแบบนี้จะเป็นการลบ node ออกจาก tree  

ถ้าจะใช้วิธีนี้ คุณต้องรู้ด้วยว่า parent ของ node ที่เราจะลบคือ node ไหน ถ้าคุณทำแบบนี้คุณจะได้ประโยชน์อีกอย่างคือ คุณจะรู้ว่า node ที่จะลบมี child กี่ตัว 

เราจะจัดการกับกรณีที่สองกับสามในแบบทดสอบถัดไป ขอให้โชคดี!

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
  // แก้ไขโค้ดใต้บรรทัดนี้
}
```

# --solutions--

```js
// solution required
```
