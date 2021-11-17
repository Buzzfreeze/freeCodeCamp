---
id: 587d8250367417b2b2512c60
title: Create a Queue Class
challengeType: 1
forumTopicId: 301631
dashedName: create-a-queue-class
---

# --description--

เช่นเดียวกับ stacks  ในส่วนของ queue นั้นก็คือชุดของ element แต่ต่างจาก stacks ตรงที่  queue เป็นไปตามหลักการ FIFO (First-In First-Out) element ที่เพิ่มไปยัง queue จะถูกผลักไปที่ส่วนหางหรือส่วนท้ายของ queue และอนุญาตให้ลบเฉพาะ element ที่อยู่ด้านหน้าของ queue เท่านั้น

เราสามารถใช้ array เพื่อเป็น queue ได้ แต่เช่นเดียวกับ stacks เราต้องการจำกัดจำนวนการควบคุมที่เรามีเหนือ queueของเรา

Method หลักสอง method ของคลาส queue คือ enqueue และ dequeue method โดย enqueue method จะ push element ไปที่ส่วนท้ายของ queue และ dequeue method จะลบและ return element ที่ด้านหน้าของ queue ยังมี method อื่นๆ ที่มีประโยชน์ ได้แก่  front, size และ isEmpty methods

# --instructions--

เขียน `enqueue` method ที่ผลัก element ไปที่ส่วนท้ายของ queue `dequeue` method ที่จะลบและ return element ด้านหน้า `front` method ที่ช่วยให้เราเห็น element ด้านหน้า `size` method ที่แสดงความยาวและ `isEmpty` method เพื่อตรวจสอบว่า queue ว่างหรือไม่

# --hints--

`Queue` class ของคุณควรมี `enqueue` method

```js
assert(
  (function () {
    var test = new Queue();
    return typeof test.enqueue === 'function';
  })()
);
```

`Queue` class ของคุณควรมี `dequeue` method

```js
assert(
  (function () {
    var test = new Queue();
    return typeof test.dequeue === 'function';
  })()
);
```

`Queue` class ของคุณควรมี `front` method

```js
assert(
  (function () {
    var test = new Queue();
    return typeof test.front === 'function';
  })()
);
```

`Queue` class ของคุณควรมี `size` method

```js
assert(
  (function () {
    var test = new Queue();
    return typeof test.size === 'function';
  })()
);
```

`Queue` class ของคุณควรมี `isEmpty` method

```js
assert(
  (function () {
    var test = new Queue();
    return typeof test.isEmpty === 'function';
  })()
);
```

`dequeue` method ควรลบและ return element แรกของ queue

```js
assert(
  (function () {
    var test = new Queue();
    test.enqueue('Smith');
    test.enqueue('John');
    return test.dequeue() === 'Smith';
  })()
);
```

`front` method ควร return ค่าของ element แรกของ queue

```js
assert(
  (function () {
    var test = new Queue();
    test.enqueue('Smith');
    test.enqueue('John');
    return test.front() === 'Smith';
  })()
);
```

`size` method ควร return ความยาวของ queue

```js
assert(
  (function () {
    var test = new Queue();
    test.enqueue('Smith');
    return test.size() === 1;
  })()
);
```

`isEmpty` method ควร return `false` ถ้าหากมี element อยู่ใน queue

```js
assert(
  (function () {
    var test = new Queue();
    test.enqueue('Smith');
    return !test.isEmpty();
  })()
);
```

# --seed--

## --seed-contents--

```js
function Queue() {
  var collection = [];
  this.print = function() {
    console.log(collection);
  };
  // Only change code below this line

  // Only change code above this line
}
```

# --solutions--

```js
function Queue () { 
    var collection = [];
    this.print = function() {
        console.log(collection);
    };
    // Only change code below this line
    this.enqueue = function(item) {
        collection.push(item);
    }

    this.dequeue = function() {
        return collection.shift();
    }

    this.front = function() {
        return collection[0];
    }

    this.size = function(){
        return collection.length;
    }

    this.isEmpty = function() {
        return collection.length === 0 ? true : false;
    }
    // Only change code above this line
}
```
