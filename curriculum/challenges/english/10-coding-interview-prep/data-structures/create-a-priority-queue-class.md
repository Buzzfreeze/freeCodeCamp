---
id: 587d8255367417b2b2512c74
title: Create a Priority Queue Class
challengeType: 1
forumTopicId: 301630
dashedName: create-a-priority-queue-class
---

# --description--

ในแบบทดสอบนี้ คุณจะต้องสร้าง Priority Queue ซึ่งเป็น queue ชนิดพิเศษที่แต่ละรายการจะมีข้อมูลเพิ่มเติมที่ใช้ระบุลำดับความสำคัญของข้อมูล (ลำดับของความสำคัญจะแทนด้วยจำนวนเต็ม) 
โดยจะใช้ลำดับความสำคัญในการพิจารณาว่าข้อมูลตัวไหนจะถูก dequeue ก่อนหรือหลัง 
เช่น ถ้าข้อมูลที่มีลำดับความสำคัญสูงกว่าถูกจัด queue ไว้หลังรายการที่มีลำดับความสำคัญต่ำกว่า ข้อมูลที่มีลำดับความสำคัญสูงกว่าจะถูก dequeue ก่อนรายการอื่นๆ ทั้งหมด

เช่น สมมติว่าเรามี priority queue ที่มีข้อมูลสามตัว:

```js
[['kitten', 2], ['dog', 2], ['rabbit', 2]]
```

ค่าที่สองใน array ย่อย (ที่เป็นจำนวนเต็ม) จะเป็นค่าของลำดับความสำคัญ ถ้าเราทำการ enqueue  `['human', 1]` ที่มีลำดับความสำคัญเป็น `1` (สมมติว่าเลขน้อย แปลว่าสำคัญมากกว่า) ข้อมูลนี้มันจะเป็นข้อมูลแรกที่จะถูก dequeue โดยคอลเลกชันจะมีลักษณะดังนี้:

```js
[['human', 1], ['kitten', 2], ['dog', 2], ['rabbit', 2]]
```

เราได้เขียน `PriorityQueue` ใน code editor ให้บางส่วนแล้ว 
คุณจะต้องเพิ่ม method ตามเงื่อนไขนี้

1. method `enqueue` เพื่อการเพิ่มข้อมูลที่ระบุลำดับความสำคัญ
2. method `dequeue` เพื่อการลบและคืนค่าข้อมูลออกมา
3. method `size` ที่จะคืนค่าเป็นจำนวนข้อมูลใน queue  
4. method `front` ที่จะคืนค่าเป็น element ที่ด้านหน้าของ queue และสุดท้ายคือ 
5. method `isEmpty` ที่จะคืนค่าเป็น `true` หาก queue ว่างหรือ `false` หากมีข้อมูลใน queue

`enqueue` ต้องรับข้อมูลที่มีรูปแบบตามนี้เท่านั้น `['human', 1]` โดยที่ `1` แสดงถึงลำดับความสำคัญ 
`dequeue` และ `front` ควร ต้องคืนค่ามาเฉพาะชื่อของข้อมูล โดยไม่ต้องคืนลำดับความสำคัญมาด้วย

# --hints--

class `PriorityQueue` ควรมี method `enqueue`

```js
assert(
  (function () {
    var test = new PriorityQueue();
    return typeof test.enqueue === 'function';
  })()
);
```

class `PriorityQueue` ควรมี method `dequeue`

```js
assert(
  (function () {
    var test = new PriorityQueue();
    return typeof test.dequeue === 'function';
  })()
);
```

class `PriorityQueue` ควรมี method `size`

```js
assert(
  (function () {
    var test = new PriorityQueue();
    return typeof test.size === 'function';
  })()
);
```

class `PriorityQueue` ควรมี method `front`

```js
assert(
  (function () {
    var test = new PriorityQueue();
    return typeof test.front === 'function';
  })()
);
```

class `PriorityQueue` ควรมี method `isEmpty`

```js
assert(
  (function () {
    var test = new PriorityQueue();
    return typeof test.isEmpty === 'function';
  })()
);
```

class `PriorityQueue` ควรติดตามจำนวนปัจจุบันของรายการโดยการใช้ method `size` อย่างถูกต้อง เมื่อรายการนั้นๆ ถูก enqueue หรือ dequeue

```js
assert(
  (function () {
    var test = new PriorityQueue();
    test.enqueue(['David Brown', 2]);
    test.enqueue(['Jon Snow', 1]);
    var size1 = test.size();
    test.dequeue();
    var size2 = test.size();
    test.enqueue(['A', 3]);
    test.enqueue(['B', 3]);
    test.enqueue(['C', 3]);
    return size1 === 2 && size2 === 1 && test.size() === 4;
  })()
);
```

method `front` ควรคืนค่าเป็นรายการที่อยู่ด้านหน้าของ queue เมื่อเมื่อรายการนั้นๆ ถูก enqueue หรือ dequeue อย่างถูกต้อง

```js
assert(
  (function () {
    var test = new PriorityQueue();
    test.enqueue(['David Brown', 2]);
    var front1 = test.front();
    test.enqueue(['Jon Snow', 1]);
    var front2 = test.front();
    test.dequeue();
    test.enqueue(['A', 3]);
    var front3 = test.front();
    test.enqueue(['B', 3]);
    test.enqueue(['C', 3]);
    test.dequeue();
    var front4 = test.front();
    return (
      front1 === 'David Brown' &&
      front2 === 'Jon Snow' &&
      front3 === 'David Brown' &&
      front4 === 'A'
    );
  })()
);
```

method `isEmpty` ควรคืนค่าเป็น `true` เมื่อ `queue นั้นว่างเปล่า

```js
assert(
  (function () {
    var test = new PriorityQueue();
    test.enqueue(['A', 1]);
    test.enqueue(['B', 1]);
    test.dequeue();
    var first = test.isEmpty();
    test.dequeue();
    return !first && test.isEmpty();
  })()
);
```

priority queue ควรคืนค่าเป็นรายการที่มีลำดับความสำคัญมากกว่าก่อนรายการที่มีน้อยกว่า หรือคืนค่าออกมาในแบบ first-in-first-out  

```js
assert(
  (function () {
    var test = new PriorityQueue();
    test.enqueue(['A', 5]);
    test.enqueue(['B', 5]);
    test.enqueue(['C', 5]);
    test.enqueue(['D', 3]);
    test.enqueue(['E', 1]);
    test.enqueue(['F', 7]);
    var result = [];
    result.push(test.dequeue());
    result.push(test.dequeue());
    result.push(test.dequeue());
    result.push(test.dequeue());
    result.push(test.dequeue());
    result.push(test.dequeue());
    return result.join('') === 'EDABCF';
  })()
);
```

# --seed--

## --seed-contents--

```js
function PriorityQueue () {
  this.collection = [];
  this.printCollection = function() {
    console.log(this.collection);
  };
  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น

  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
}
```

# --solutions--

```js
function PriorityQueue() {
  this.collection = [];
  this.printCollection = function () {
    console.log(this.collection);
  };
  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
  this.enqueue = function (newitem) {
    if (this.isEmpty()) {
      return this.collection.push(newitem);
    }

    this.collection = this.collection.reverse();
    var found_index = this.collection.findIndex(function (item) {
      return newitem[1] >= item[1];
    });
    if (found_index === -1) {
      this.collection.push(newitem);
    } else {
      this.collection.splice(found_index, 0, newitem);
    }
    this.collection = this.collection.reverse();
  };
  this.dequeue = function () {
    if (!this.isEmpty()) {
      return this.collection.shift()[0];
    } else {
      return "The queue is empty.";
    }
  };
  this.size = function () {
    return this.collection.length;
  };
  this.front = function () {
    return this.collection[0][0];
  };
  this.isEmpty = function () {
    return this.size() > 0 ? false : true;
  };
  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
}
```
