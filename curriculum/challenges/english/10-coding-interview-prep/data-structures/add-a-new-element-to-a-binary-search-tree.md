---
id: 587d8257367417b2b2512c7b
title: Add a New Element to a Binary Search Tree
challengeType: 1
forumTopicId: 301618
dashedName: add-a-new-element-to-a-binary-search-tree
---

# --description--

ชุดของแบบทดสอบต่อไปนี้จะสอนเรื่อง tree data structure ซึ่งเป็นโครงสร้างข้อมูลที่สำคัญและยืดหยุ่นมากในทางคอมพิวเตอร์ 
ชื่อของโครงสร้างแบบนี้มาจากการที่เมื่อนำโครงสร้างมาวาด จะดูเหมือนกับเป็นต้นไม้ 
โครงสร้างข้อมูลแบบนี้จะเริ่มจาก node เพียง node เดียว ซึ่งโดยทั่วไปจะเรียกว่า root ซึ่งจะแยกออกเป็น node ย่อย ซึ่งแต่ละ node ย่อยนี้ ก็จะมี node ย่อยแยกต่อๆกันได้อีก 
ปกติเวลาแสดงภาพของโครงสร้างข้อมูลนี้ จะแสดง root node ไว้ด้านบน ซึ่งถ้ามองแล้วจะเหมือนต้นไม้กลับหัว

ขั้นแรก เรามาทำความเข้าใจคำศัพท์ของโครงสร้างข้อมูลนี้กัน

- `root` node คือส่วนบนของต้นไม้  
- จุดข้อมูลในต้นไม้จะเรียกว่า `node`   
- node ที่มี node ย่อยจะเรียกว่า `parent` node
- node ย่อยของ parent จะเรียกว่า `child` node 
- `subtree` หมายถึง node ย่อยทั้งหมดของ node ใด node 
- node ย่อยอาจเรียกว่า `branch` หรือ `edge` ก็ได้
- `leaf` node เป็น node ที่ไม่มี child 

โครงสร้างข้อมูลแบบนี้เป็นโครงสร้างข้อมูลแบบ recursive 
แปลว่า child ของ node ก็จะเป็น parent ของ subtree ของตัวเองเป็นต้น 
การเป็น recursive ของโครงสร้างข้อมูลนี้เป็นสิ่งสำคัญที่ต้องเข้าใจ เมื่อออกแบบอัลกอริธึมสำหรับการทำงานของโครงสร้างข้อมูลแบบนี้

คราวนี้เรามาพูดถึงเรื่องโครงสร้างข้อมูลของ binary tree หรือ binary search tree กันบ้าง
ถึงแม้ว่าโครงสร้างข้อมูลแบบ tree จะมี branch จำนวนเท่าใดก็ได้ใน node เดียว แต่ใน binary tree แต่ละ node จะมี branch ได้เพียงสอง branch เท่านั้น
นอกจากนี้ binary search tree จะเรียงลำดับตาม subtree ของ child ดังนั้นค่าของแต่ละ node ใน subtree ด้านซ้าย (left) จะน้อยกว่าหรือเท่ากับค่าของ parent node และค่าของแต่ละ node ใน subtree ด้านขวา (right) จะมากกว่าหรือเท่ากับค่าของ parent node 
ลองดูภาพความสัมพันธ์ล่างนี้เพื่อช่วยให้เข้าใจได้ดีขึ้น:

<div style='width: 100%; display: flex; justify-content: center; align-items: center;'><img style='width: 100%; max-width: 350px; background-color: var(--gray-05);' src='https://user-images.githubusercontent.com/18563015/32136009-1e665d98-bbd6-11e7-9133-63184f9f9182.png'></div>

ภาพนี้จะทำให้เข้าใจได้ง่ายขึ้นมาก 
จะเห็นว่าค่าของ note ทั้งหมดที่อยู่ทางซ้ายของ 8 (root node) จะมีค่าน้อยกว่า 8 และค่าของ node ด้านขวาจะมากกว่า 8 
นอกจากนี้ จะเห็นว่า subtree แต่ละตัวก็จะใช้หลักการนี้เหมือนกัน 
เช่น child ทางซ้ายตัวแรกเป็น subtree และมีค่าเป็น 3
ซึ่ง child ตัวนี้ก็จะเป็นเป็น parent node ด้วย ซึ่งก็จะมี child node สอง node
ถ้ารู้กฎของ binary search tree เรารู้โดยไม่ต้องมองเลยก็ได้ว่า child ด้านซ้ายของ node นี้ (และ child node ย่อยๆของ node นี้) จะมีค่าน้อยกว่า 3 และ child ด้านขวาของ node นี้ (และ child node ย่อยๆของ node นี้) จะมีค่ามากกว่า 3 (แต่น้อยกว่าค่า root ของโครงสร้างด้วย) เป็นต้น

Binary search tree เป็นโครงสร้างข้อมูลที่เห็นได้บ่อย และมีประโยชน์อย่างมาก เนื่องจากจะใช้เวลาเฉลี่ยสำหรับการดำเนินการทั่วไปหลายอย่าง เช่น lookup, insert, และ delete เป็น O(log n)

# --instructions--

เราได้กำหนดโครงร่างของ binary search tree พร้อมกับฟังก์ชันที่ใช้สร้าง node ไว้ให้แล้ว 
จะเห็นว่าแต่ละ node จะมีค่าซ้าย (left) และขวา (right) ซึ่งจะเก็บค่าของ child subtree (ถ้ามี) 
ใน binary search tree ของเรา คุณจะต้องสร้าง method เพิ่มค่าใหม่ใน binary search tree 
โดยให้สร้าง method `add` เพื่อเพิ่มค่า โดยรับค่าเป็นจำนวนเต็ม เพื่อเพิ่มลงใน tree 
และเพื่อทำตามกฏของ binary search tree ค่าของ child ด้านซ้ายแต่ละ child ย่อย ควรน้อยกว่าหรือเท่ากับค่าของ parent และค่าของ child ด้านขวาและแต่ละ child ย่อยควรมากกว่าหรือเท่ากับค่าของ parent 
ต่อมา เราต้องทำให้ tree ไม่เก็บค่าซ้ำ ซึ่งถ้าเราพยายามเพิ่มค่าที่มีอยู่แล้ว method นี้ต้องคืนค่าเป็น `null` แต่ถ้าเพิ่มค่าสำเร็จ ให้คืนค่าเป็น `undefined`

**Hint:** tree เป็นโครงสร้างข้อมูลแบบ recursive!

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

binary search tree ควรมี method ชื่อ `add`

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    return typeof test.add == 'function';
  })()
);
```

method `add` ควรเพิ่ม element ตามกฎของ binary search tree

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.add !== 'function') {
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
    const expectedResult = [1, 4, 7, 8, 34, 45, 73, 87];
    const result = test.inOrder();
    return expectedResult.toString() === result.toString();
  })()
);
```

การเพิ่ม element ที่มีอยู่แล้วต้องคืนค่าเป็น `null`

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.add !== 'function') {
      return false;
    }
    test.add(4);
    return test.add(4) == null;
  })()
);
```

# --seed--

## --after-user-code--

```js
BinarySearchTree.prototype = Object.assign(
  BinarySearchTree.prototype,
  {
    inOrder() {
      if (!this.root) {
        return null;
      }
      var result = new Array();
      function traverseInOrder(node) {
        node.left && traverseInOrder(node.left);
        result.push(node.value);
        node.right && traverseInOrder(node.right);
      }
      traverseInOrder(this.root);
      return result;
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
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  this.add = function(element) {
    let current = this.root;
    if (!current) {
      this.root = new Node(element);
      return;
    } else {
      const searchTree = function(current) {
        if (current.value > element) {
          if (current.left) {
            return searchTree(current.left);
          } else {
            current.left = new Node(element);
            return;
          }
        } else if (current.value < element) {
          if (current.right) {
            return searchTree(current.right);
          } else {
            current.right = new Node(element);
            return;
          }
        } else {
          return null;
        }
      };
      return searchTree(current);
    }
  };
}
```
