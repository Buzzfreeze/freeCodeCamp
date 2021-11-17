---
id: 587d8255367417b2b2512c74
title: Create a Priority Queue Class
challengeType: 1
forumTopicId: 301630
dashedName: create-a-priority-queue-class
---

# --description--

ในแบบทดสอบนี้ คุณจะต้องสร้าง Priority Queue ซึ่งเป็น queue ชนิดพิเศษที่รายการอาจมีข้อมูลเพิ่มเติมซึ่งระบุลำดับความสำคัญของพวกมันเอง นี่อาจใช้แทนจำนวนเต็มได้ ลำดับความสำคัญของรายการจะแทนที่ลำดับการจัดวางในการพิจารณาว่ารายการลำดับจะถูก dequeue หากรายการที่มีลำดับความสำคัญสูงกว่าถูกจัด queue ไว้หลังรายการที่มีลำดับความสำคัญต่ำกว่า รายการที่มีลำดับความสำคัญสูงกว่าจะถูก dequeue ก่อนรายการอื่นๆ ทั้งหมด

ตัวอย่างเช่น สมมติว่าเรามี priority queue ที่มีสามรายการ:

```js
[['kitten', 2], ['dog', 2], ['rabbit', 2]]
```

ในที่นี้ค่าที่สอง (จำนวนเต็ม) แสดงถึงลำดับความสำคัญของรายการ หากเราจัด queue  `['human', 1]` ด้วยลำดับความสำคัญ `1` (สมมติว่าลำดับความสำคัญต่ำกว่าจะได้รับลำดับความสำคัญมากกว่า) มันจะเป็นรายการแรกที่จะถูก dequeue คอลเลกชันจะมีลักษณะดังนี้:

```js
[['human', 1], ['kitten', 2], ['dog', 2], ['rabbit', 2]]
```

เราได้เริ่มเขียน `PriorityQueue` ใน code editor แล้ว คุณจะต้องเพิ่ม `enqueue` method สำหรับการเพิ่มรายการที่มีลำดับความสำคัญ `dequeue` method สำหรับการลบและ return รายการ `size` method เพื่อ return จำนวนรายการใน queue  `front` method เพื่อ return element ที่ด้านหน้าของ queue  และสุดท้ายคือ `isEmpty` method ที่จะ return `true` หาก queue ว่างหรือ `false` หากไม่ใช่

`enqueue` ควรยอมรับรายการที่มีรูปแบบที่แสดงด้านบน (`['human', 1]`) โดยที่ `1` แสดงถึงลำดับความสำคัญ `dequeue` และ `front` ควร return เฉพาะชื่อของรายการ ไม่ใช่ลำดับความสำคัญ

# --hints--

`PriorityQueue` class ควรมี `enqueue` method

```js
assert(
  (function () {
    var test = new PriorityQueue();
    return typeof test.enqueue === 'function';
  })()
);
```

`PriorityQueue` class ควรมี `dequeue` method

```js
assert(
  (function () {
    var test = new PriorityQueue();
    return typeof test.dequeue === 'function';
  })()
);
```

`PriorityQueue` class ควรมี `size` method

```js
assert(
  (function () {
    var test = new PriorityQueue();
    return typeof test.size === 'function';
  })()
);
```

`PriorityQueue` class ควรมี `front` method

```js
assert(
  (function () {
    var test = new PriorityQueue();
    return typeof test.front === 'function';
  })()
);
```

`PriorityQueue` class ควรมี `isEmpty` method

```js
assert(
  (function () {
    var test = new PriorityQueue();
    return typeof test.isEmpty === 'function';
  })()
);
```

`PriorityQueue` class ควรติดตามจำนวนปัจจุบันของรายการโดยการใช้ `size` method อย่างถูกต้อง เมื่อรายการนั้นๆ ถูก enqueue หรือ dequeue

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

`front` method ควร return รายการที่อยู่ด้านหน้าของ queue เมื่อเมื่อรายการนั้นๆ ถูก enqueue หรือ dequeue
อย่างถูกต้อง

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

`isEmpty` method ควร return `true` เมื่อ `queue นั้นว่างเปล่า

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

priority queue ควร return รายการที่มีลำดับความสำคัญมากกว่าก่อนรายการที่มีน้อยกว่า หรือ return รายการในลำดับ in first-in-first-out  

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
  // Only change code below this line

  // Only change code above this line
}
```

# --solutions--

```js
function PriorityQueue() {
  this.collection = [];
  this.printCollection = function () {
    console.log(this.collection);
  };
  // Only change code below this line
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
  // Only change code above this line
}
```
