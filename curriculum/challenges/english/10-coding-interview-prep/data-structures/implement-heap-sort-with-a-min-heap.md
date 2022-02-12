---
id: 587d825b367417b2b2512c8c
title: Implement Heap Sort with a Min Heap
challengeType: 1
forumTopicId: 301643
dashedName: implement-heap-sort-with-a-min-heap
---

# --description--

เราสามารถเพิ่มและลบ element ได้แล้ว คราวนี้มาดูวิธีการเอา heap ไปใช้จริงกันบ้าง 

โดยทั่วไปแล้วเราจะใช้ heap เพื่อสร้าง priority queue เพราะว่า queue แบบนี้จะเก็บข้อมูลที่มีค่ามากหรือน้อยที่สุดในตำแหน่งแรกเสมอ นอกจากนี้ยังใช้สำหรับการสร้างอัลกอริธึมการเรียงลำดับชื่อ heap sort ด้วย 

heap sort จะใช้ min heap ขั้นต่ำ (ตรงกันข้ามกับ max heap) โดย min heap จะเก็บ element ที่มีค่าน้อยที่สุดที่ root เสมอ

heap sort ทำงานการโดยนำข้อมูลแต่ละตัวจาก array ที่ไม่เรียงลำดับ มาเพิ่มลงในลงใน min heap แล้วดึงค่าทั้งหมดออกจาก min heap ไปยัง array ใหม่ 

ซึ่งโครงสร้างของ min heap จะทำให้ array เป็นการนำค่าเดิมมาเรียงจากน้อยไปมาก นี่เป็นหนึ่งในอัลกอริธึมการเรียงลำดับที่มีประสิทธิภาพมากที่สุดโดยมีทั้ง average case และ worst case เป็น O(nlog(n))

# --instructions--

ให้ลองทำการ heap sort โดยใช้ min heap  

คุณจะแก้โค้ด max heap ที่เราสร้างไว้ให้แล้วก็ได้ถ้าต้องการ 

ให้สร้าง `MinHeap` object โดยมี method `insert`, `remove` และ `sort` และ method `sort` ต้องคืนค่าเป็น array ของ element ทั้งหมดใน min heap ที่เรียงลำดับจากน้อยไปมาก

# --hints--

ต้องมีโครงสร้างข้อมูล MinHeap

```js
assert(
  (function () {
    var test = false;
    if (typeof MinHeap !== 'undefined') {
      test = new MinHeap();
    }
    return typeof test == 'object';
  })()
);
```

MinHeap ต้องมี method ชื่อ `insert`

```js
assert(
  (function () {
    var test = false;
    if (typeof MinHeap !== 'undefined') {
      test = new MinHeap();
    } else {
      return false;
    }
    return typeof test.insert == 'function';
  })()
);
```

MinHeap ต้องมี method ชื่อ `remove`

```js
assert(
  (function () {
    var test = false;
    if (typeof MinHeap !== 'undefined') {
      test = new MinHeap();
    } else {
      return false;
    }
    return typeof test.remove == 'function';
  })()
);
```

MinHeap ต้องมี method ชื่อ `sort`

```js
assert(
  (function () {
    var test = false;
    if (typeof MinHeap !== 'undefined') {
      test = new MinHeap();
    } else {
      return false;
    }
    return typeof test.sort == 'function';
  })()
);
```

method `sort` ต้องคืนค่าเป็น array ของ element ทั้งหมดใน min heap ที่เรียงลำดับจากน้อยไปมากแล้ว

```js
assert(
  (() => {
    if (typeof MinHeap === 'undefined') {
      return false;
    }

    const heap = new MinHeap();
    const arr = createRandomArray(25);

    for (let i of arr) {
      heap.insert(i);
    }

    const result = heap.sort();
    arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== result[i]) {
        return false;
      }
    }
    return true;
  })()
);
```

# --seed--

## --seed-contents--

```js
function isSorted(a){
  for(let i = 0; i < a.length - 1; i++)
    if(a[i] > a[i + 1])
      return false;
  return true;
}
// สร้าง array ที่มีค่าแบบสุ่ม
function createRandomArray(size = 5){
  let a = new Array(size);
  for(let i = 0; i < size; i++)
    a[i] = Math.floor(Math.random() * 100);
  
  return a;
}
const array = createRandomArray(25);

var MinHeap = function() {
  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
  
  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
};
```

# --solutions--

```js
// solution required
```
