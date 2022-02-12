---
id: 587d8257367417b2b2512c7e
title: Use Depth First Search in a Binary Search Tree
challengeType: 1
forumTopicId: 301719
dashedName: use-depth-first-search-in-a-binary-search-tree
---

# --description--

เรารู้วิธีค้นหาภายใน binary search tree เพื่อหาค่าที่เราระบุไปแล้ว
แต่ถ้าเราแค่ต้องการสำรวจ tree ทั้งหมดล่ะ หรือถ้าเราต้องการหาค่าใน tree ที่ไม่ได้มีการเรียงลำดับข้อมูลล่ะ? 
ในที่นี้เราจะสอนวิธีในการอ่านข้อมูลใน tree ซึ่งสามารถใช้เพื่อสำรวจโครงสร้างข้อมูล tree ได้ 
อันดับแรกคือ depth-first search 
ใน depth-first search จะทำการอ่านค่าของ subtree ที่กำหนดให้ลึกที่สุด ก่อนที่การค้นหาจะดำเนินต่อไปใน subtree อื่น โดยสามารถทำได้สามวิธี: 
In-order คือ: เริ่มการค้นหาที่ node ซ้ายสุดและสิ้นสุดที่ node ขวาสุด 
Pre-order คือ: สำรวจ root ทั้งหมดก่อน leaf 
Post-order คือ: สำรวจ leaf ทั้งหมดก่อน root 
คุณอาจเลือกวิธีการค้นหาที่แตกต่างกันได้ ขึ้นอยู่กับประเภทของข้อมูลใน tree ของคุณ และสิ่งที่คุณกำลังมองหา 
สำหรับ binary search tree การใช้วิธีแบบ In-order จะคืนค่าเป็น node ที่เรียงตามลำดับ

# --instructions--

เราจะให้คุณสร้างวิธีการค้นหาทั้งสามนี้ใน binary search tree ของเรา 
การค้นหาแบบ Depth-first search เป็นการดำเนินการ recursive ซึ่งจะอ่านค่าของ subtree ไปเรื่อยๆตราบใดที่ยังมี subnode อยู่
เมื่อคุณเข้าใจพื้นฐานนี้แล้ว คุณจะเปลี่ยนลำดับการค้นหาข้อมูลใน node และ subtree เพื่อทำการค้นหาตามวิธีทั้งสามด้านบนได้ 
เช่น ในการค้นหาแบบ post-order เราต้องทำ recursion ไปจนถึง leaf node ก่อนที่เราจะเริ่มต้นคืนค่า node ออกมา 
ในขณะที่ในการค้นหาแบบ pre-order เราคืนค่าของ node ออกมาก่อน แล้วค่อยทำ recursion ลงไปใน tree ที่กำหนด
ให้สร้าง method `inorder`, `preorder`, และ `postorder` ใน tree ของเรา 
โดยทั้งสาม method นี้ต้องคืนค่าเป็น array ของเป็นเส้นทางการค้นหาข้อมูลใน tree 
อย่าลืมว่าใน array ที่คืนค่าออกมา ให้คืนค่าเป็นค่าของ node นั้น (ที่เป็นจำนวนเต็ม) ไม่ใช่ตัว node เอง 
สุดท้ายให้คืนค่าเป็น `null` ถ้าใน tree ไม่มีข้อมูล

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

binary search tree ควรมี method ที่ชื่อ `inorder`

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    return typeof test.inorder == 'function';
  })()
);
```

binary search tree ควรมี method ที่ชื่อ `preorder`

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    return typeof test.preorder == 'function';
  })()
);
```

binary search tree ควรมี method ที่ชื่อ `postorder`

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    return typeof test.postorder == 'function';
  })()
);
```

method `inorder` ต้องคืนค่าเป็น array ของเป็นเส้นทางการค้นหาข้อมูลแบบ inorder

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.inorder !== 'function') {
      return false;
    }
    test.add(7);
    test.add(1);
    test.add(9);
    test.add(0);
    test.add(3);
    test.add(8);
    test.add(10);
    test.add(2);
    test.add(5);
    test.add(4);
    test.add(6);
    return test.inorder().join('') == '012345678910';
  })()
);
```

method `preorder` ต้องคืนค่าเป็น array ของเป็นเส้นทางการค้นหาข้อมูลแบบ preorder

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.preorder !== 'function') {
      return false;
    }
    test.add(7);
    test.add(1);
    test.add(9);
    test.add(0);
    test.add(3);
    test.add(8);
    test.add(10);
    test.add(2);
    test.add(5);
    test.add(4);
    test.add(6);
    return test.preorder().join('') == '710325469810';
  })()
);
```

method `postorder` ต้องคืนค่าเป็น array ของเป็นเส้นทางการค้นหาข้อมูลแบบ postorder

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.postorder !== 'function') {
      return false;
    }
    test.add(7);
    test.add(1);
    test.add(9);
    test.add(0);
    test.add(3);
    test.add(8);
    test.add(10);
    test.add(2);
    test.add(5);
    test.add(4);
    test.add(6);
    return test.postorder().join('') == '024653181097';
  })()
);
```

method `inorder` ต้องคืนค่าเป็น `null` ถ้าใน tree ไม่มีข้อมูล

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.inorder !== 'function') {
      return false;
    }
    return test.inorder() == null;
  })()
);
```

method `preorder` ต้องคืนค่าเป็น `null` ถ้าใน tree ไม่มีข้อมูล

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.preorder !== 'function') {
      return false;
    }
    return test.preorder() == null;
  })()
);
```

method `postorder` ต้องคืนค่าเป็น `null` ถ้าใน tree ไม่มีข้อมูล

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.postorder !== 'function') {
      return false;
    }
    return test.postorder() == null;
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
  this.result = [];

  this.inorder = function(node) {
    if (!node) node = this.root;
    if (!node) return null;

    if (node.left) this.inorder(node.left);
    this.result.push(node.value);
    if (node.right) this.inorder(node.right);
    return this.result;
  };
  this.preorder = function(node) {
    if (!node) node = this.root;
    if (!node) return null;

    this.result.push(node.value);
    if (node.left) this.preorder(node.left);
    if (node.right) this.preorder(node.right);
    return this.result;
  };
  this.postorder = function(node) {
    if (!node) node = this.root;
    if (!node) return null;

    if (node.left) this.postorder(node.left);
    if (node.right) this.postorder(node.right);
    this.result.push(node.value);

    return this.result;
  };
}
```
