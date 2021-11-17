---
id: 587d8259367417b2b2512c84
title: Create a Trie Search Tree
challengeType: 1
forumTopicId: 301634
dashedName: create-a-trie-search-tree
---

# --description--

ในที่นี้เราจะเรียนรู้ต่อจาก binary search tree และดูโครงสร้าง tree ประเภทอื่นที่เรียกว่า  Trie เป็นแผนผังการค้นหาแบบเรียงลำดับ (ordered search tree) ที่ใช้กันทั่วไปในการเก็บสตริง หรือ array ที่เชื่อมโยงแบบทั่วไปหรือชุดข้อมูลแบบไดนามิกที่คีย์เป็นสตริง พวกมันสามารถจัดเก็บชุดข้อมูลได้ดีมากเมื่อคีย์จำนวนมากจะมีคำนำหน้าทับซ้อนกัน เช่น คำทั้งหมดในพจนานุกรม ซึ่งไม่เหมือนกับ binary tree ที่  node ไม่สัมพันธ์กับค่าจริง แต่เส้นทางไปยัง node แทนคีย์เฉพาะ ตัวอย่างเช่น ถ้าเราต้องการเก็บสตริง code ใน Trie เราจะมีสี่ node  หนึ่ง node สำหรับแต่ละตัวอักษร: c — o — d — e การติดตามเส้นทางนั้นผ่าน node ทั้งหมดจะสร้าง code เป็นสตริง — เส้นทางนั้นเป็นคีย์ที่เราเก็บไว้ จากนั้นหากเราต้องการเพิ่มการเขียนโค้ดสตริง มันจะแชร์ node สาม node แรกก่อนที่จะแยกสาขาออกไปหลังจาก d ด้วยวิธีนี้สามารถจัดเก็บชุดข้อมูลขนาดใหญ่ได้อย่างกะทัดรัด นอกจากนี้การค้นหาสามารถทำได้อย่างรวดเร็วมาก เนื่องจากถูกจำกัดความยาวของสตริงที่คุณจัดเก็บอย่างมีประสิทธิภาพ ยิ่งกว่านั้น  node สามารถเก็บ child node จำนวนเท่าใดก็ได้ ซึ่งไม่เหมือนกับ binary tree  ตามที่คุณอาจเดาได้จากตัวอย่างข้างต้น โดยทั่วไปข้อมูลเมตาบางรายการจะถูกจัดเก็บที่ node ที่ยึดจุดสิ้นสุดของคีย์ เพื่อให้ยังคงดึงคีย์นั้นในการข้ามผ่านในภายหลังได้ ตัวอย่างเช่น หากเราเพิ่มโค้ดในตัวอย่างด้านบน เราจะต้องมีวิธีที่จะทราบว่าตัว e ในโค้ดแสดงถึงจุดสิ้นสุดของคีย์ที่ป้อนไว้ก่อนหน้านี้ มิฉะนั้นข้อมูลนี้จะสูญหายอย่างแน่นอนเมื่อเราเพิ่มโค้ดเข้าไปภายหลัง

# --instructions--

มาสร้าง Trie เพื่อเก็บคำกัน ซึ่งมันจะรับคำผ่าน `add` method และเก็บไว้ใน trie data structure นอกจากนี้ยังช่วยให้เราสามารถ query ว่าสตริงที่ระบุเป็นคำที่ใช้ `isWord` method หรือไม่ และเรียกค้นคำทั้งหมดที่ป้อนลงใน trie ด้วย `print` method ส่วน `isWord` ควร return ค่าบูลีนและ print ควร return array ของคำทั้งหมดเหล่านี้เป็นค่าสตริง เพื่อให้เราสามารถตรวจสอบว่ามีการใช้โครงสร้างข้อมูลนี้อย่างถูกต้องหรือไม่ เราได้จัดเตรียมโครงสร้าง `Node` สำหรับแต่ละ node ใน tree แต่ละ node จะเป็น object ที่มี `key` property ซึ่ง JavaScript Map object ซึ่งจะเก็บตัวอักษรแต่ละตัวที่เป็นคีย์ที่ถูกต้องของแต่ละ node  นอกจากนี้เรายังได้สร้าง `end` property บน node ที่สามารถตั้งค่าเป็น `true` หาก node แสดงถึงการสิ้นสุดของคำ

# --hints--

Trie ควรมี add method

```js
assert(
  (function testTrie() {
    var test = false;
    if (typeof Trie !== 'undefined') {
      test = new Trie();
    } else {
      return false;
    }
    return typeof test.add == 'function';
  })()
);
```

The Trie should have a print method.

```js
assert(
  (function testTrie() {
    var test = false;
    if (typeof Trie !== 'undefined') {
      test = new Trie();
    } else {
      return false;
    }
    return typeof test.print == 'function';
  })()
);
```

Trie ควรมี isWord method

```js
assert(
  (function testTrie() {
    var test = false;
    if (typeof Trie !== 'undefined') {
      test = new Trie();
    } else {
      return false;
    }
    return typeof test.isWord == 'function';
  })()
);
```

Print method ควร return รายการที่ถูกเพิ่มเข้าไปยัง tire ทั้งหมดเป็นสตริงใน array

```js
assert(
  (function testTrie() {
    var test = false;
    if (typeof Trie !== 'undefined') {
      test = new Trie();
    } else {
      return false;
    }
    test.add('jump');
    test.add('jumps');
    test.add('jumped');
    test.add('house');
    test.add('mouse');
    var added = test.print();
    return (
      added.indexOf('jump') != -1 &&
      added.indexOf('jumps') != -1 &&
      added.indexOf('jumped') != -1 &&
      added.indexOf('house') != -1 &&
      added.indexOf('mouse') != -1 &&
      added.length == 5
    );
  })()
);
```

isWord method ควร return แค่ค่า true หากคำต่างๆ ได้ถูกเพิ่มเข้าไปใน trie และ false สำหรับคำที่เหลือที่ไม่ได้เพิ่มเข้าไป

```js
assert(
  (function testTrie() {
    var test = false;
    if (typeof Trie !== 'undefined') {
      test = new Trie();
    } else {
      return false;
    }
    test.add('hop');
    test.add('hops');
    test.add('hopped');
    test.add('hoppy');
    test.add('hope');
    return (
      test.isWord('hop') &&
      !test.isWord('ho') &&
      test.isWord('hopped') &&
      !test.isWord('hopp') &&
      test.isWord('hoppy') &&
      !test.isWord('hoping')
    );
  })()
);
```

# --seed--

## --seed-contents--

```js
var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
var Node = function() {
  this.keys = new Map();
  this.end = false;
  this.setEnd = function() {
    this.end = true;
  };
  this.isEnd = function() {
    return this.end;
  };
};
var Trie = function() {
  // Only change code below this line
  
  // Only change code above this line
};
```

# --solutions--

```js
// solution required
```
