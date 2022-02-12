---
id: 587d8250367417b2b2512c60
title: Create a Queue Class
challengeType: 1
forumTopicId: 301631
dashedName: create-a-queue-class
---

# --description--

queue ก็จะเหมือนกับ stack โดยเป็นชุดข้อมูลของ element แต่ต่างจาก stack ตรงที่ queue เป็นไปตามหลักการ FIFO (First-In First-Out) 
โดย element ที่เพิ่มไปยัง queue จะถูกเติมไปที่ส่วนท้ายของ queue และอนุญาตให้ลบเฉพาะ element ที่อยู่ด้านหน้าของ queue เท่านั้น

เราสามารถใช้ array เพื่อเป็น queue ได้ แต่เราต้องการจำกัดการควบคุม queue ของเรา เหมือนกับที่เราทำกับ stack

method หลักสองตัวของคลาส Queue คือ method enqueue และ dequeue \
โดย method enqueue จะ push element ไปที่ส่วนท้ายของ queue และ method dequeue จะลบและคืนค่า element แรกของ queue ออกมา 
และยังมี method อื่นๆ ที่มีประโยชน์ คือ method front, size และ isEmpty

# --instructions--

เขียน method ตามเงื่อนไขนี้

1. method `enqueue` ที่เติม element ไปที่ส่วนท้ายของ queue 
2. method `dequeue` ที่จะลบและคืนค่าเป็น element ด้านหน้าออกมา 
3. method `front` ที่คืนค่าเป็น element ด้านหน้าออกมา
4. method `size` ที่แสดงความยาวของ queue และ 
5. method `isEmpty` เพื่อตรวจสอบว่า queue ว่างหรือไม่

# --hints--

class `Queue` ของคุณควรมี method `enqueue`

```js
assert(
  (function () {
    var test = new Queue();
    return typeof test.enqueue === 'function';
  })()
);
```

class `Queue` ของคุณควรมี method `dequeue`

```js
assert(
  (function () {
    var test = new Queue();
    return typeof test.dequeue === 'function';
  })()
);
```

class `Queue` ของคุณควรมี method `front`

```js
assert(
  (function () {
    var test = new Queue();
    return typeof test.front === 'function';
  })()
);
```

class `Queue` ของคุณควรมี method `size`

```js
assert(
  (function () {
    var test = new Queue();
    return typeof test.size === 'function';
  })()
);
```

class `Queue` ของคุณควรมี method `isEmpty`

```js
assert(
  (function () {
    var test = new Queue();
    return typeof test.isEmpty === 'function';
  })()
);
```

method `dequeue` ควรลบและคืนค่าเป็น element แรกของ queue

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

method `front` ควรคืนค่าเป็น element แรกของ queue

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

method `size` ควรคืนค่าเป็นความยาวของ queue

```js
assert(
  (function () {
    var test = new Queue();
    test.enqueue('Smith');
    return test.size() === 1;
  })()
);
```

method `isEmpty` ควรคืนค่าเป็น `false` ถ้าหากมี element อยู่ใน queue

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
  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น


  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
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
