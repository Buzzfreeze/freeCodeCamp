---
id: 587d825a367417b2b2512c8a
title: Insert an Element into a Max Heap
challengeType: 1
forumTopicId: 301703
dashedName: insert-an-element-into-a-max-heap
---

# --description--

มาต่อกันที่ tree อีกรูปแบบหนึ่งคือ binary heap 

binary heap เป็น binary tree ที่มีการเรียงลำดับแค่บางส่วน ซึ่งตรงตามคุณสมบัติของ heap โดยคุณสมบัติ heap จะระบุความสัมพันธ์ระหว่าง parent node และ child node 

โดย max heap คือโครงสร้างที่ parent node ทั้งหมดมีค่ามากกว่าหรือเท่ากับ child node 
และ min heap คือโครงสร้างที่ตรงข้ามกับ max heap  

binary heap ยังเป็น binary tree ที่สมบูรณ์อีกด้วย แปลว่าทุกระดับของ tree จะมีข้อมูล และถ้าระดับสุดท้ายมีข้อมูลไม่ครบ ข้อมูลใน tree จะถูกเติมจากซ้ายไปขวา

แม้ว่า binary heap อาจถูกนำไปใช้เป็นโครงสร้างแบบ tree ที่มี node ที่มีการอ้างอิงด้านซ้ายและขวา การเรียงลำดับบางส่วนตามคุณสมบัติของ heap ช่วยให้เราสามารถแสดง heap เป็น array ได้ 

เพราะว่าเราสนใจแค่ความสัมพันธ์ระหว่าง parent และ child และจะทำให้เราคำนวณ child ของ parent และ parent ของ childe node ตัวไหนก็ได้ ได้ง่ายๆ

ลองดูตัวอย่าง  
array นี้เป็น binary min heap:

```js
[ 6, 22, 30, 37, 63, 48, 42, 76 ]
```

root node คือ element แรกที่เป็น `6` ซึ่งมี child เป็น `22` และ `30` หากเราดูที่ความสัมพันธ์ระหว่าง index ของ array ของค่าเหล่านี้ จะเห็นว่า index `i` จะมี child เป็น `2 * i + 1` และ `2 * i + 2`  
ทำให้ element ที่ index `0` เป็น parent ของสอง child ที่ index `1` และ `2` 

ถ้าเราอยากหาว่า node i มี parent เป็น element ไหน เราจะหาได้จากสมการนี้ `Math.floor((i - 1) / 2)` 
ซึ่งความสัมพันธ์นี้จะเป็นจริงเสมอ ไม่ว่า binary tree จะมีขนาดเท่าไหร่ 

ซึ่งถ้าเราข้าม element แรกใน array การคำนวนก็จะง่ายขึ้นอีก 

ลองดูตัวอย่าง:

```js
[ null, 6, 22, 30, 37, 63, 48, 42, 76 ]
```

child ทางซ้ายของ element คือ  `i * 2`

child ทางขวาของ element คือ `i * 2 + 1`

และ parent element คือ `Math.floor(i / 2)`

เมื่อคุณเข้าใจสมการแล้ว การที่เราแสดงโครงสร้างนี้ในรูปแบบ array จะมีประโยชน์มาก เพราะว่าเราสามารถระบุตำแหน่งของ node ด้วยสมการได้อย่างรวดเร็ว และจะใช้หน่วยความจำน้อยลงด้วย เพราะว่าคุณไม่ต้องทำการอ้างอิง child node

# --instructions--

เราลองจะสร้าง max heap กัน 

เริ่มต้นด้วยการสร้าง method `insert` ซึ่งจะเพิ่ม element ลงใน heap ของเรา ในระหว่างการเพิ่มข้อมูล คุณจำเป็นต้องรักษาคุณสมบัติของ heap ไว้ตลอด 

โดยคุณสมบัติของ max heap คือ root element ต้องมีค่ามากที่สุดใน tree เสมอ และ parent node ต้องมีค่ามากกว่า child เสมอ

และเราจะสามารถแปล heap เป็น array ได้โดยใช้สามขั้นตอนนี้:

<ol>
  <li>เพิ่ม element ใหม่ไปยังท้าย array</li>
  <li>ถ้า element นั้นมากกว่า parent ของ ให้สลับค่ากับ parent</li>
  <li>สลับไปเรื่อยๆ จนกว่า element ใหม่นั้นจะมีค่าน้อยกว่า parent หรือคุณสลับไปจนถึง root ของ tree แล้ว</li>
</ol>

สุดท้าย ให้เพิ่ม method `print` ซึ่งจะคืนค่าเป็น array ของรายการทั้งหมดที่เพิ่มลงใน heap 

# --hints--

ต้องมีโครงสร้างข้อมูล MaxHeap

```js
assert(
  (function () {
    var test = false;
    if (typeof MaxHeap !== 'undefined') {
      test = new MaxHeap();
    }
    return typeof test == 'object';
  })()
);
```

MaxHeap ต้องมี method ชื่อ insert

```js
assert(
  (function () {
    var test = false;
    if (typeof MaxHeap !== 'undefined') {
      test = new MaxHeap();
    } else {
      return false;
    }
    return typeof test.insert == 'function';
  })()
);
```

MaxHeap ต้องมี method ชื่อ print

```js
assert(
  (function () {
    var test = false;
    if (typeof MaxHeap !== 'undefined') {
      test = new MaxHeap();
    } else {
      return false;
    }
    return typeof test.print == 'function';
  })()
);
```

method `insert` ต้องพิ่ม element ตามคุณสมบัติของ max heap

```js
assert(
  (function () {
    var test = false;
    if (typeof MaxHeap !== 'undefined') {
      test = new MaxHeap();
    } else {
      return false;
    }
    test.insert(50);
    test.insert(100);
    test.insert(700);
    test.insert(32);
    test.insert(51);
    let result = test.print();
    return result.length == 5 ? result[0] == 700 : result[1] == 700;
  })()
);
```

# --seed--

## --seed-contents--

```js
var MaxHeap = function() {
  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
    
  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
};
```

# --solutions--

```js
var MaxHeap = function() {
    // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
    this.heap = [];
    this.parent = index => {
      return Math.floor((index - 1) / 2);
    }
    this.insert = element => {
      this.heap.push(element);
      this.heapifyUp(this.heap.length - 1);
    }
    this.heapifyUp = index => {
      let currentIndex = index,
      parentIndex = this.parent(currentIndex);
      while (currentIndex > 0 && this.heap[currentIndex] > this.heap[parentIndex]) {
        this.swap(currentIndex, parentIndex);
        currentIndex = parentIndex;
        parentIndex = this.parent(parentIndex);
      }
    }
    this.swap = (index1, index2) => {
      [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }
    this.print = () => {
      return this.heap;
    }
    // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
};
```
