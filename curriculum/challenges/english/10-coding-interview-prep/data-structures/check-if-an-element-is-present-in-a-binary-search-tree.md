---
id: 587d8257367417b2b2512c7c
title: Check if an Element is Present in a Binary Search Tree
challengeType: 1
forumTopicId: 301623
dashedName: check-if-an-element-is-present-in-a-binary-search-tree
---

# --description--

ตอนนี้เรามีความรู้ทั่วไปแล้วว่าแผนผังการค้นหาแบบไบนารีคืออะไร เรามาพูดถึงรายละเอียดเพิ่มเติมกันเล็กน้อย แผนผังการค้นหาแบบไบนารีจะให้เวลาลอการิทึมสำหรับการดำเนินการทั่วไปของการค้นหา การแทรก และการลบในกรณีเฉลี่ย และเวลาเชิงเส้นในกรณีที่เลวร้ายที่สุด ทำไมถึงเป็นเช่นนี้? การดำเนินการพื้นฐานแต่ละรายการต้องการให้เราค้นหารายการใน tree  (หรือในกรณีที่มีการแทรกเพื่อค้นหาตำแหน่งที่ควรแทรกเข้าไป) และเนื่องจากโครงสร้าง tree ที่  parent node แต่ละ node  จะแยกกิ่งไปทางซ้ายหรือขวาอย่างมีประสิทธิภาพ โดยไม่รวมขนาดครึ่งหนึ่ง ของ tree ที่เหลือ ทำให้การค้นหาเป็นสัดส่วนกับลอการิทึมของจำนวน node ใน tree  ซึ่งจะสร้างเวลาลอการิทึมสำหรับการดำเนินการเหล่านี้ในกรณีเฉลี่ย แล้วกรณีที่เลวร้ายที่สุดล่ะ? ลองพิจารณาสร้าง tree จากค่าต่อไปนี้ โดยเพิ่มจากซ้ายไปขวา: `10`, `12`, `17`, `25` ตามกฎของเราสำหรับแผนผังการค้นหาแบบไบนารี เราจะเพิ่ม `12` ทางด้านขวาของ `10`, `17` ทางด้านขวาของรายการนี้ และ `25` ทางด้านขวาต่อท้ายของรายการนี้ ตอนนี้ tree ของเราคล้ายกับรายการที่เชื่อมโยงกัน และการสำรวจเพื่อหา `25` จะทำให้เราต้องสำรวจรายการทั้งหมดในลักษณะเชิงเส้น ดังนั้นนี่ก็คือเวลาเชิงเส้นในกรณีที่เลวร้ายที่สุด เราจะมาดูในกรณีที่ tree ไม่สมดุลให้มากขึ้นในแบบทดสอบที่จะตามมานี้

# --instructions--

ในแบบทดสอบนี้ เราจะสร้าง utility สำหรับ tree ของเรา เขียน `isPresent` method ซึ่งรับค่าจำนวนเต็มเป็นอินพุตและ return ค่าบูลีนสำหรับการมีอยู่หรือไม่มีของค่านั้นในแผนผังการค้นหาแบบไบนารี

In this challenge, we will create a utility for our tree. Write a method `isPresent` which takes an integer value as input and returns a boolean value for the presence or absence of that value in the binary search tree.

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

แผนผังการค้นหาแบบไบนารีควรมี method ชื่อ 

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    return typeof test.isPresent == 'function';
  })()
);
```

`isPresent` method ควรตรวจสอบการมีหรือไม่มีของ element ที่เพิ่มไปยัง tree อย่างถูกต้อง

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.isPresent !== 'function') {
      return false;
    }
    test.add(4);
    test.add(7);
    test.add(411);
    test.add(452);
    return (
      test.isPresent(452) &&
      test.isPresent(411) &&
      test.isPresent(7) &&
      !test.isPresent(100)
    );
  })()
);
```

`isPresent` ควรสามารถจัดการกรณีที่ tree นั้นว่างได้

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.isPresent !== 'function') {
      return false;
    }
    return test.isPresent(5) == false;
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
var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  this.isPresent = function (value) {
    var current = this.root
    while (current) {
      if (value === current.value) {
        return true;
      }
      current = value < current.value ? current.left : current.right;
    }
    return false;
  }
}
```
