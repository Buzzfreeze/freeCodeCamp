---
id: 587d8257367417b2b2512c7b
title: Add a New Element to a Binary Search Tree
challengeType: 1
forumTopicId: 301618
dashedName: add-a-new-element-to-a-binary-search-tree
---

# --description--

ชุดของแบบทดสอบต่อไปนี้จะแนะนำโครงสร้างข้อมูลแบบ tree  ซึ่งเป็นโครงสร้างข้อมูลที่สำคัญและยืดหยุ่นในวิทยาการคอมพิวเตอร์ แน่นอนชื่อของมันมาจากข้อเท็จจริงที่ว่าเมื่อนำโครงสร้างนี้มาวาดภาพมันจะดูเหมือน tree ที่เราคุ้นเคยในโลกธรรมชาติ โครงสร้างข้อมูลแบบ tree เริ่มต้นด้วย node เดียว ซึ่งโดยทั่วไปจะเรียกว่า root และจากนี้ไปแยกออกเป็น node เพิ่มเติม ซึ่งแต่ละ node อาจมี node ย่อยแยกต่อๆ กันไปอีก เรามักจะมองเห็นภาพโครงสร้างข้อมูลนี้ที่เริ่มจาก root node ที่ด้านบน ซึ่งอาจจะมองได้อีกอย่างว่าเหมือน tree กลับหัว

ขั้นแรก เรามาทำความเข้าใจคำศัพท์ทั่วไปที่เราจะพบกับ tree   root node คือส่วนบนของ tree  จุดข้อมูลในแผนผังเรียกว่า node   node ที่มีสาขาที่นำไปสู่ node อื่น ๆ จะเรียกว่า parent ของ node ที่สาขานำไปสู่ child node เรามาดูศัพท์ที่เกี่ยวข้องกับ tree อื่นๆ กันต่อ subtree หมายถึงทายาททั้งหมดของ node ใด node หนึ่ง branch อาจเรียกว่า edge และ leaf node เป็น node ที่ส่วนท้ายของ tree ที่ไม่มี child สุดท้ายโปรดทราบว่า tree เป็นโครงสร้างข้อมูลแบบเรียกซ้ำโดยเนื้อแท้ นั่นคือ child ใดๆ ของ node จะเป็น parent ของ subtree ของตัวเองเป็นต้น ลักษณะแบบเรียกซ้ำของ tree เป็นสิ่งสำคัญที่ต้องเข้าใจเมื่อออกแบบอัลกอริธึมสำหรับการทำงานของ tree ทั่วไป

ก่อนอื่น เราจะพูดถึงชนิดโดยเฉพาะของ tree อันที่จริงเราจะพูดถึง binary tree หรือ binary search tree โดยเฉพาะ มาอธิบายว่าสิ่งนี้หมายความว่าอย่างไร แม้ว่าโครงสร้างข้อมูลแบบ tree จะมี branch จำนวนเท่าใดก็ได้ใน node เดียว แต่  binary tree สามารถมีได้เพียงสอง branch เท่านั้นสำหรับทุก node  นอกจากนี้  binary search tree ยังถูกจัดลำดับตาม child subtree ดังนั้นค่าของแต่ละ node ใน subtree ทางซ้ายจะน้อยกว่าหรือเท่ากับค่าของ parent node และค่าของแต่ละ node ใน subtree ทางขวาคือ มากกว่าหรือเท่ากับค่าของ parent node ลองดูภาพความสัมพันธ์ล่างนี้เพื่อช่วยให้เข้าใจได้ดีขึ้น:

<div style='width: 100%; display: flex; justify-content: center; align-items: center;'><img style='width: 100%; max-width: 350px; background-color: var(--gray-05);' src='https://user-images.githubusercontent.com/18563015/32136009-1e665d98-bbd6-11e7-9133-63184f9f9182.png'></div>

ตอนนี้ความสัมพันธ์ที่เป็นระเบียบนี้มองเห็นได้ง่ายมาก โปรดทราบว่าทุกค่าทางด้านซ้ายของ 8 (root node) มีค่าน้อยกว่า 8 และทุกค่าทางด้านขวาจะมากกว่า 8 นอกจากนี้ ให้สังเกตว่าความสัมพันธ์นี้ใช้กับ subtree แต่ละต้นด้วย ตัวอย่างเช่น child แรกทางซ้ายคือ subtree และ 3 เป็น parent node และมี child node สอง node  - ตามกฎที่ควบคุม binary search tree เรารู้โดยไม่ต้องมองเลยก็ได้ว่า child ด้านซ้ายของ node นี้ (และ child node ใดๆ ของมัน) จะน้อยกว่า 3 และด้านขวา child (และ child node ใดๆ ของมัน) จะมากกว่า 3 (แต่น้อยกว่าค่า root ของโครงสร้างด้วย) เป็นต้น

Binary search tree เป็นโครงสร้างข้อมูลทั่วไปและมีประโยชน์อย่างมาก เนื่องจากให้เวลาลอการิทึมโดยเฉลี่ยสำหรับการดำเนินการทั่วไปหลายอย่าง เช่น lookup, insertion, และ deletion

# --instructions--

เราจะเริ่มต้นกันง่ายๆ เราได้กำหนดโครงร่างของ binary search tree ที่นี่ นอกเหนือจากฟังก์ชันเพื่อสร้าง node สำหรับ tree ของเรา สังเกตว่าแต่ละ node จะมีค่าซ้ายและขวา สิ่งเหล่านี้จะเป็น child subtree หากมีอยู่ ใน binary search tree ของเรา คุณจะสร้าง method เพิ่มค่าใหม่ให้กับ binary search tree ของเรา ควรเรียก method นั้นว่า `add` และควรยอมรับค่า integer เพื่อเพิ่มลงใน tree เพื่อรักษาค่าคงที่ของ binary search tree: ค่าใน child ด้านซ้ายแต่ละ child ควรน้อยกว่าหรือเท่ากับค่า parent และค่าใน child ด้านขวาแต่ละ child ควรมากกว่าหรือเท่ากับค่า parent ทีนี้มาทำให้ tree ของเราไม่สามารถเก็บค่าที่ซ้ำกันได้ หากเราพยายามเพิ่มค่าที่มีอยู่แล้ว method ควร return เป็น `null` แต่หากการเพิ่มสำเร็จ ควร return `undefined`

**Hint:** tree เป็นโครงสร้างข้อมูลแบบเรียกซ้ำตามธรรมชาติ!

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

add method ควรเพิ่ม element ต่างๆ ตามกฎของ binary search tree rules

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

การเพิ่ม element ซ้ำที่มีอยู่แล้วควรจะ return `null`

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
  // Only change code below this line
  
  // Only change code above this line
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
