---
id: 587d8259367417b2b2512c84
title: Create a Trie Search Tree
challengeType: 1
forumTopicId: 301634
dashedName: create-a-trie-search-tree
---

# --description--

เมื่อคุณรู้จัก binary search tree เป็นอย่างดีแล้ว มาลองดูโครงสร้าง tree แบบอื่นกันดีกว่า tree ตัวใหม่ที่เราจะเรียนนี้เรียกว่า Trie 

Trie เป็นแผนผังการค้นหาแบบเรียงลำดับ (ordered search tree) ที่ใช้กันทั่วไปในการเก็บสตริง หรือ array ที่เชื่อมโยงแบบทั่วไปหรือชุดข้อมูลแบบไดนามิกที่คีย์เป็นสตริง  
โครงสร้างแบบนี้สามารถจัดเก็บชุดข้อมูลได้ดีมาก ถ้าเราใช้คีย์ที่มี prefix เช่น คำในพจนานุกรม 

tree แบบนี้จะไม่เหมือนกับ binary tree เพราะว่า node ไม่สัมพันธ์กับค่าจริง แต่เราจะใช้เส้นทางไปยัง node แทนการใช้คีย์ 

เช่น ถ้าเราต้องการเก็บสตริงคำว่า code ใน Trie เราจะมีสี่ node  โดยแต่ละ node จะเก็บค่าทีละหนึ่งตัวอักษร แบบนี้ `c — o — d — e` 

และถ้าเราอ่านค่าของเส้นทางไปยัง node ปลายทาง และเอาคีย์มารวมกัน เราจะได้ค่าเป็นสตริง code 

และถ้าเราอยากเพิ่มข้อมูลเป็นคำว่า coding ค่านี้จะใช้ node สาม node ด้วยกัน และก็จะแตกกิ่งที่ตัว d และเพิ่ม node ที่เป็น `i — n — g` เข้าไป

การใช้วิธีนี้จะทำให้เราเก็บข้อมูลขนาดใหญ่ได้โดยใช้พื้นที่น้อยลง และจะทำให้การค้นหาสามารถทำได้อย่างรวดเร็วมาก ยิ่งไปกว่านั้น node จะสามารถเก็บ child node จำนวนเท่าใดก็ได้ ซึ่งไม่เหมือนกับ binary tree 

คุณอาจจะเดาได้จากตัวอย่างด้านบนแล้วว่าปกติแล้วเราจะเก็บ metadata ไว้ที่ node สุดท้ายของคีย์ เพื่อให้ยังคงดึงคีย์นั้นในอ่านค่าในภายหลังได้ 

เช่น ถ้าเราจะเพิ่มคำว่า codes เข้าไปในตัวอย่างด้านบน เราจะต้องรู้ได้ด้วยว่าคีย์นี้จะสามารถสิ้นสุดที่ตัว e ของ code ได้ด้วย โดยไม่จำเป็นต้องไปสิ้นสุดที่ตัว s ของ codes 

# --instructions--

มาลองสร้าง Trie เพื่อเก็บคำกัน 

ให้สร้าง method `add` เพื่อรับคำ และเก็บไว้ใน trie data structure 

ให้สร้าง method `isWord` เพื่ออ่านค่าว่าเรามีคำนี้แล้วหรือไม่ ซึ่งจะคืนค่าเป็น boolean

ให้สร้าง method `print` เพื่อคืนค่าเป็น array ที่เป็นสตริงของคำทั้งหมดใน trie ออกมา 

ให้คุณใช้ `Node` ที่เรามีให้ในการสร้าง node เพื่อให้เราตรวจสอบโค้ดของคุณได้  
โดย node จะเป็น object ที่มี property `key` ซึ่งเป็น JavaScript Map object  
property นี้จะเก็บตัวอักษรแต่ละตัวที่เป็นคีย์ที่ถูกต้องของแต่ละ node และนอกจากนี้เรายังได้สร้าง property `end` ไว้ใน node ด้วย ซึ่งถ้า property นี้เป็น `true` จะแสดงถึงการสิ้นสุดของคำ


# --hints--

ใน Trie ต้องมี method `add`

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

ใน Trie ต้องมี method `print`

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

ใน Trie ต้องมี method `isWord`

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

method `print` ต้องคืนค่าเป็น array ที่เป็นสตริงของคำทั้งหมดใน trie ออกมา 

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

method `isWord` ต้องคืนค่าเป็น `true` ถ้ามีคำนั้นๆใน trie แต่ถ้าไม่เจอให้คืนค่าเป็น `false`

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
  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
  
  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
};
```

# --solutions--

```js
// solution required
```
