---
id: 587d825a367417b2b2512c8a
title: Insert an Element into a Max Heap
challengeType: 1
forumTopicId: 301703
dashedName: insert-an-element-into-a-max-heap
---

# --description--

ตอนนี้เราจะไปต่อที่โครงสร้างข้อมูล tree อื่น ซึ่งก็คือ binary heap ที่ เป็น binary tree ที่เรียงลำดับบางส่วนซึ่งตรงตามคุณสมบัติของ heap  คุณสมบัติ heap ระบุความสัมพันธ์ระหว่าง parent node และ child node คุณอาจมี heap สูงสุด ซึ่ง parent node ทั้งหมดมีค่ามากกว่าหรือเท่ากับ child node หรือ heap ขั้นต่ำ ซึ่งเป็นกรณีกลับกัน  binary heap ยังเป็น binary tree ที่สมบูรณ์อีกด้วย ซึ่งหมายความว่าทุกระดับของ tree เต็มแล้ว และหากระดับสุดท้ายเต็มบางส่วน  tree จะถูกเติมจากซ้ายไปขวา

แม้ว่า binary heap อาจถูกนำไปใช้เป็นโครงสร้างแบบ tree ที่มี node ที่มีการอ้างอิงด้านซ้ายและขวา การเรียงลำดับบางส่วนตามคุณสมบัติของ heap ช่วยให้เราสามารถแสดง heap ด้วย array ได้ ความสัมพันธ์ระหว่าง parent และ child คือสิ่งที่เราสนใจ และด้วยการคำนวณทางคณิตศาสตร์อย่างง่าย เราสามารถคำนวณ child ของ parent และ parent ของ  childe node ใดๆ

ตัวอย่าง ลองดู array นี้ที่แสดงถึง binary min heap:

```js
[ 6, 22, 30, 37, 63, 48, 42, 76 ]
```

 Root node `6` เป็น element แรก child ของมันคือ `22` และ `30` หากเราดูที่ความสัมพันธ์ระหว่างดัชนี array ของค่าเหล่านี้ สำหรับ index `i` child คือ `2 * i + 1` และ `2 * i + 2` ในทำนองเดียวกัน element ที่ index `0` เป็น parent ของสอง child นี้ที่ index `1` และ `2` โดยทั่วไปแล้วเราสามารถค้นหา parent ของ node ที่ index ใดก็ได้ดังต่อไปนี้: `Math.floor((i - 1) / 2)` รูปแบบเหล่านี้จะเป็นจริงเมื่อ binary tree สามารถมีได้ขึ้นทุกขนาด สุดท้ายเราสามารถปรับเปลี่ยนเล็กน้อยเพื่อให้การคำนวณนี้ง่ายยิ่งขึ้นโดยข้าม element แรกใน array  การทำเช่นนี้จะสร้างความสัมพันธ์ต่อไปนี้สำหรับ element ใดๆ ที่ index `i` ที่ระบุ:

The root node is the first element, `6`. Its children are `22` and `30`. If we look at the relationship between the array indices of these values, for index `i` the children are `2 * i + 1` and `2 * i + 2`. Similarly, the element at index `0` is the parent of these two children at indices `1` and `2`. More generally, we can find the parent of a node at any index with the following: `Math.floor((i - 1) / 2)`. These patterns will hold true as the binary tree grows to any size. Finally, we can make a slight adjustment to make this arithmetic even easier by skipping the first element in the array. Doing this creates the following relationship for any element at a given index `i`:

ตัวอย่าง array:
Example array representation:

```js
[ null, 6, 22, 30, 37, 63, 48, 42, 76 ]
```

Element ของ child ทางซ้าย คือ  `i * 2`

Element ของ child ทางขวา คือ `i * 2 + 1`

Element ของ parent คือ `Math.floor(i / 2)`

เมื่อคุณเรียนรู้เกี่ยวกับสมการคณิตศาสตร์แล้ว โดยการใช้การแสดง array จะมีประโยชน์มาก เนื่องจากตำแหน่งของ node สามารถระบุได้อย่างรวดเร็วด้วยสมการนี้ และการใช้หน่วยความจำจะลดลงเนื่องจากคุณไม่จำเป็นต้องรักษาการอ้างอิงไปยัง child node

# --instructions--

คำแนะนำ: เราลองจะสร้าง heap สูงสุด เริ่มต้นด้วยการสร้าง `insert` method  ซึ่งเพิ่ม element ลงใน heap ของเรา ในระหว่างการเพิ่มจำเป็นต้องรักษาคุณสมบัติของ heap อยู่เสมอ สำหรับ heap สูงสุด หมายความว่า root element ควรมีค่ามากที่สุดใน tree เสมอ และ parent node ทั้งหมดควรมากกว่า child สำหรับการนำ heap ไปใช้งาน array  โดยทั่วไปสามารถทำได้ในสามขั้นตอน:

<ol>
  <li>เพิ่ม element ใหม่ไปยังท้ายสุดของ array</li>
  <li>ถ้า element นั้นใหญ่กว่า parent ของมัน ให้สลับค่ามัน</li>
  <li>สลับไปเรื่อยๆ จนกว่า element ใหม่นั้นจะน้อยกว่า parent ของมันหรือคุณสลับไปจนถึง root ของ tree แล้ว</li>
</ol>

สุดท้าย เพิ่ม `print` method ซึ่ง return array ของรายการทั้งหมดที่เพิ่มลงใน heap 

# --hints--

ควรมีโครงสร้างข้อมูล MaxHeap

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

Insert method ควรเพิ่ม element ตามคุรสมบัติของ max heap

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
  // Only change code below this line
    
  // Only change code above this line
};
```

# --solutions--

```js
var MaxHeap = function() {
    // Only change code below this line
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
    // Only change code above this line
};
```
