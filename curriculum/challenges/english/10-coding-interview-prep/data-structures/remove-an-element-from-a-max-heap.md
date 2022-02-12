---
id: 587d825b367417b2b2512c8b
title: Remove an Element from a Max Heap
challengeType: 1
forumTopicId: 301710
dashedName: remove-an-element-from-a-max-heap
---

# --description--

เราเพิ่ม element ลงใน heap เป็นแล้ว คราวนี้มาดูวิธีการลบ element บ้างดีกว่า 

การลบและการเพิ่ม element ก็มี logic คล้ายๆกัน  
โดยใน max heap คุณมักจะต้องการลบค่าที่มากที่สุดออก ซึ่งก็เท่ากับว่าเป็นการลบ root ของ tree ออก ซึ่งการลบ root ออกแบบนี้จะเป็นการทำให้คุณสมบัติของ heap หายไป ทำให้เราต้องสร้างคุณสมบัติของ heap ขึ้นมากใหม่  

โดยทั่วไปเราจะใช้วิธ๊นี้ใน max heap:

<ol>
  <li>ย้าย element สุดท้ายใน heap ไปไว้ที่ root</li>
  <li>ถ้ามี child ตัวไหนมีค่ามากกว่า root ให้สลับ root กับ child ตัวนั้น</li>
  <li>สลับต่อไปเรื่อยๆ จน parent ทั้งหมดนั้นมีค่ามากกว่า child ทั้งสองตัว หรือคุณทำไปจนถึงระดับล่างสุดของ tree</li>
</ol>

# --instructions--

ให้เพิ่ม method `remove` ให้กับ heap ของเรา โดยที่ method นี้ควรคืนค่าสูงสุดใน max heap ออกมา แล้วลบค่านั้นออกจาก heap ด้วย 

นอกจากนี้ยังต้องจัดลำดับ heap ใหม่เพื่อรักษาคุณสมบัติของ heap  หลังจากลบ element แล้ว และ element ตัวที่มีค่ามากที่สุดที่เหลืออยู่ใน heap ต้องกลายเป็น root

# --hints--

ต้องมีโครงสร้างข้อมูล Max Heap

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

ต้องมี method `print` ใน MaxHeap

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

ต้องมี method `insert` ใน MaxHeap

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

ต้องมี method `remove` ใน MaxHeap

```js
assert(
  (function () {
    var test = false;
    if (typeof MaxHeap !== 'undefined') {
      test = new MaxHeap();
    } else {
      return false;
    }
    return typeof test.remove == 'function';
  })()
);
```

method `remove` ต้องลบ element ที่มีค่ามากที่สุดออกจาก max heap ในขณะที่ยังคงคุณสมบัติของ max heap ไว้

```js
assert(
  (function () {
    var test = false;
    if (typeof MaxHeap !== 'undefined') {
      test = new MaxHeap();
    } else {
      return false;
    }
    test.insert(30);
    test.insert(300);
    test.insert(500);
    test.insert(10);
    let result = [];
    result.push(test.remove());
    result.push(test.remove());
    result.push(test.remove());
    result.push(test.remove());
    return result.join('') == '5003003010';
  })()
);
```

# --seed--

## --seed-contents--

```js
var MaxHeap = function () {
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
  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น

  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
};
```

# --solutions--

```js
// solution required
```
