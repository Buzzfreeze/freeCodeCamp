---
id: 587d825b367417b2b2512c8b
title: Remove an Element from a Max Heap
challengeType: 1
forumTopicId: 301710
dashedName: remove-an-element-from-a-max-heap
---

# --description--

ตอนนี้เราสามารถเพิ่ม element ลงใน heap ของเราแล้ว มาดูกันว่าเราจะลบ element ได้อย่างไร การลบและการแทรก element ทั้งสองวิธีต้องใช้ตรรกะที่คล้ายคลึงกัน ใน heap สูงสุดคุณมักจะต้องการลบค่าที่มากที่สุดออกไป ดังนั้นนี่จึงเกี่ยวข้องกับการแยกค่าออกจาก root ของ tree ของเรา สิ่งนี้จะทำลาย heap property ของ tree ของเรา ดังนั้นเราต้องสร้างมันขึ้นมาใหม่ในทางใดทางหนึ่ง โดยทั่วไปสำหรับ heap สูงสุด ทำได้ด้วยวิธีต่อไปนี้:

<ol>
  <li>ย้าย element สุดท้ายใน heap ไปในตำแหน่ง root</li>
  <li>ถ้าหาก child ใดๆ ของ root นั้นมากกว่า root ให้สลับ root กับ child ตัวที่มีค่ามากกว่ามัน</li>
  <li>สลับต่อไปเรื่อยๆ จน parent ทั้งหมดนั้นมีค่ามากกว่า child ทั้งสองของมัน หรือคุณทำไปจนถึงระดับสุดท้ายของ tree</li>
</ol>

# --instructions--

คำแนะนำ: เพิ่ม method ให้กับ heap สูงสุดของเราที่เรียกว่า `remove` โดยที่ method นี้ควรคืนค่าสูงสุดที่เพิ่มไปยัง heap สูงสุดแล้วลบออกจาก heap  นอกจากนี้ยังควรจัดลำดับ heap ใหม่เพื่อรักษาคุณสมบัติของ heap  หลังจากลบ element แล้ว element ที่ค่ามากที่สุดถัดไปที่เหลืออยู่ใน heap ควรกลายเป็นรูท

# --hints--

ควรมีโครงสร้างข้อมูล Max Heap

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

MaxHeap ควรมี method ที่เรียกว่า print

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

MaxHeap ควรมี method ที่เรียกว่า insert

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

MaxHeap ควรมี method ที่เรียกว่า remove

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

remove method ควรลบ element ที่มีค่ามากที่สุกออกจาก max heap ขณะที่ยังคงคุณสมบัติของ max heap ไว้

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
  // Only change code below this line

  // Only change code above this line
};
```

# --solutions--

```js
// solution required
```
