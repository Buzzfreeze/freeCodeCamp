---
id: 587d8257367417b2b2512c7e
title: Use Depth First Search in a Binary Search Tree
challengeType: 1
forumTopicId: 301719
dashedName: use-depth-first-search-in-a-binary-search-tree
---

# --description--

เรารู้วิธีค้นหาภายใน binary search tree สำหรับค่าเฉพาะ แต่ถ้าเราแค่ต้องการสำรวจ tree ทั้งหมดล่ะ หรือถ้าเราไม่มี ordered tree และเราต้องการค้นหาค่าเพียงอย่างเดียวล่ะ? ในที่นี้เราจะแนะนำ method ในการค้นหา tree บาง method ซึ่งสามารถใช้เพื่อสำรวจโครงสร้างข้อมูล tree ได้ อันดับแรกคือการค้นหาเชิงลึกก่อน (depth-first search) ใน depth-first search จะมีการสำรวจ subtree ที่กำหนดให้ลึกที่สุดก่อนที่การค้นหาจะดำเนินต่อไปใน subtree อื่น สามารถทำได้สามวิธี: In-order คือ: เริ่มการค้นหาที่ node ซ้ายสุดและสิ้นสุดที่ node ขวาสุด Pre-order คือ: สำรวจ root ทั้งหมดก่อน leaf Post-order คือ: สำรวจ leaf ทั้งหมดก่อนถึง root อย่างที่คุณอาจเดาได้คุณอาจเลือก method ค้นหาที่แตกต่างกันขึ้นอยู่กับประเภทของข้อมูลที่ tree ของคุณจัดเก็บและสิ่งที่คุณกำลังมองหา สำหรับ binary search tree การสำรวจแบบไม่เรียงลำดับจะ return node โดยจัดเรียงตามลำดับ

# --instructions--

ที่นี่เราจะสร้าง method การค้นหาทั้งสามนี้บน binary search tree ของเรา การค้นหา Depth-first search เป็นการดำเนินการแบบเรียกซ้ำโดยเนื้อแท้ซึ่งยังคงสำรวจ subtree  เพิ่มเติมต่อไปตราบใดที่มี subnode เมื่อคุณเข้าใจแนวคิดพื้นฐานนี้แล้ว คุณสามารถจัดเรียงใหม่ตามลำดับที่คุณสำรวจ node และ subtree เพื่อสร้างการค้นหาสามวิธีด้านบน ตัวอย่างเช่น ในการค้นหา post-order เราต้องการเรียกซ้ำไปจนถึง leaf node ก่อนที่เราจะเริ่มต้น return node ใดๆ ด้วยตนเอง ในขณะที่ในการค้นหา pre-order เราต้องการ return node ก่อน แล้วจึงดำเนินการเรียกซ้ำลงไปตาม tree กำหนด`inorder`, `preorder`, และ `postorder` method บน tree ของเรา แต่ละ method เหล่านี้ควร return array ของรายการที่แสดงถึงสำรวจของ tree อย่าลืม return ค่าจำนวนเต็มที่ในแต่ละ node ใน array  ไม่ใช่ตัว node เอง สุดท้ายให้ return ค่า `null` หาก tree ว่างเปล่า

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

binary search tree ควรมี method ที่เรียกว่า `inorder`

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

binary search tree ควรมี method ที่เรียกว่า `preorder`

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

binary search tree ควรมี method ที่เรียกว่า `postorder`

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

`inorder` method ควร return array ของค่าของ node ที่เป้นผลลัพธ์จากการสำรวจแบบ inorder

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

`preorder` method ควร return array ของค่าของ node ที่เป้นผลลัพธ์จากการสำรวจแบบ preorder

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

`postorder` method ควร return array ของค่าของ node ที่เป้นผลลัพธ์จากการสำรวจแบบ postorder

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

`inorder` method ควร return `null` สำหรับ tree ที่ว่างเปล่า

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

`preorder` method ควร return `null` สำหรับ tree ที่ว่างเปล่า

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

`postorder` method ควร return `null` สำหรับ tree ที่ว่างเปล่า

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
  // Only change code below this line
  
  // Only change code above this line
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
