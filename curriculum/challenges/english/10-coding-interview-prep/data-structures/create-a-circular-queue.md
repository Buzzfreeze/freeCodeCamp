---
id: 587d8255367417b2b2512c75
title: Create a Circular Queue
challengeType: 1
forumTopicId: 301625
dashedName: create-a-circular-queue
---

# --description--

ในแบบทดสอบนี้ คุณจะต้องสร้าง Circular Queue ซึ่งก็คือ queue ที่เขียนไปยังจุดสิ้นสุดของคอลเล็กชัน จากนั้นจึงเริ่มเขียนทับตัวเองที่จุดเริ่มต้นของคอลเล็กชัน โครงสร้างข้อมูลประเภทนี้มีประโยชน์ในบางสถานการณ์ ตัวอย่างเช่น สามารถใช้ circular queue สำหรับการสตรีมสื่อ เมื่อ queue เต็มข้อมูลสื่อใหม่จะเขียนทับข้อมูลเก่า

วิธีการที่ดีที่จะแสดงให้เข้าใจถึงแนวคิดนี้ด้วยการสร้าง array ที่มีความยาว `5`:

```js
[null, null, null, null, null]
 ^Read @ 0
 ^Write @ 0
```

ตรงนี้ทั้ง read และ write จะอยู่ที่ตำแหน่ง `0` แล้วทีนี้ queue ได้บันทึก 3 ค่าใหม่ คือ `a`, `b`, และ `c` ทำให้ queue ของเราจะหน้าตาเป็นแบบนี้:

```js
[a, b, c, null, null]
 ^Read @ 0
          ^Write @ 3
```

เมื่อ read head ได้ทำการอ่าน มันสามารถลบค่าต่างๆ หรือเก็บมันไว้:

```js
[null, null, null, null, null]
                   ^Read @ 3
                   ^Write @ 3
```

ทีนี้เราเขียนค่า `d`, `e`, และ `f` ไปยัง queue เมื่อเราเขียนไปที่ตำแหน่งสิ้นสุดของ array แล้ว มันจึงวนกลับมายังจุดเริ่มต้นใหม่

```js
[f, null, null, d, e]
                ^Read @ 3
    ^Write @ 1
```

วิธีการนี้ต้องจำนวนการหน่วยความจำที่คงที่แต่อนุญาตให้ประมวลผลไฟล์ที่มีขนาดใหญ่กว่ามากได้

# --instructions--


ในแบบทดสอบนี้ เราจะใช้ circular queue  ซึ่งควรมี method `enqueue` และ `dequeue` ซึ่งช่วยให้คุณอ่านและเขียนไปยัง queue ได้ คลาสเองควรยอมรับ argument จำนวนเต็มซึ่งคุณสามารถใช้เพื่อระบุขนาดของ queue เมื่อสร้าง เราได้เขียนเวอร์ชันเริ่มต้นของคลาสนี้ให้คุณใน code editor แล้ว

เมื่อคุณ enqueue รายการใน queue ตัวชี้การเขียนควรเลื่อนไปข้างหน้าและวนกลับมาที่จุดเริ่มต้นเมื่อถึงจุดสิ้นสุดของ queue `enqueue` method ควร return รายการที่คุณ enqueue หากทำสำเร็จ มิฉะนั้นจะ return `null`

ในทำนองเดียวกัน ตัวชี้การอ่านควรเลื่อนไปข้างหน้าเมื่อคุณ dequeue รายการ เมื่อคุณ dequeue รายการควร return รายการนั้น หากคุณไม่สามารถ dequeue รายการได้ คุณควร return "null"

ไม่ควรอนุญาตให้ตัวชี้การเขียนเลื่อนผ่านตัวชี้การอ่าน (คลาสของเราจะไม่อนุญาตให้คุณเขียนทับข้อมูลที่ยังไม่ได้อ่าน) และตัวชี้การอ่านไม่ควรเลื่อนข้ามผ่านข้อมูลที่คุณเขียน

# --hints--

`enqueue` method ควรเพิ่มรายการต่างๆ ไป circular queue

```js
assert(
  (function () {
    var test = new CircularQueue(3);
    test.enqueue(17);
    test.enqueue(32);
    test.enqueue(591);
    var print = test.print();
    return print[0] === 17 && print[1] === 32 && print[2] === 591;
  })()
);
```

คุณไม่ควร enqueue รายการต่างๆ ผ่านตัวชี้การอ่าน

```js
assert(
  (function () {
    var test = new CircularQueue(3);
    test.enqueue(17);
    test.enqueue(32);
    test.enqueue(591);
    test.enqueue(13);
    test.enqueue(25);
    test.enqueue(59);
    var print = test.print();
    return print[0] === 17 && print[1] === 32 && print[2] === 591;
  })()
);
```

`dequeue` method ควร dequeue รายการต่างๆ จาก queue

```js
assert(
  (function () {
    var test = new CircularQueue(3);
    test.enqueue(17);
    test.enqueue(32);
    test.enqueue(591);
    return (
      test.dequeue() === 17 && test.dequeue() === 32 && test.dequeue() === 591
    );
  })()
);
```

หลังจากได้ dequeue รายการไปแล้ว ตำแหน่งของรายการนั้นใน queue ควรถูกกำหนดใหม่เป็น `null`

```js
assert(
  (function () {
    var test = new CircularQueue(3);
    test.enqueue(17);
    test.enqueue(32);
    test.enqueue(672);
    test.dequeue();
    test.dequeue();
    var print = test.print();
    return print[0] === null && print[1] === null && print[2] === 672;
  })()
);
```

การพยายาม dequeue ผ่านตัวชี้การเขียนควร return `null` และ ไม่ควรนำหน้าไปก่อนตัวชี้การเขียน

```js
assert(
  (function () {
    var test = new CircularQueue(3);
    test.enqueue(17);
    test.enqueue(32);
    test.enqueue(591);
    return (
      test.dequeue() === 17 &&
      test.dequeue() === 32 &&
      test.dequeue() === 591 &&
      test.dequeue() === null &&
      test.dequeue() === null &&
      test.dequeue() === null &&
      test.dequeue() === null &&
      test.enqueue(100) === 100 &&
      test.dequeue() === 100
    );
  })()
);
```

# --seed--

## --seed-contents--

```js
class CircularQueue {
  constructor(size) {

    this.queue = [];
    this.read = 0;
    this.write = 0;
    this.max = size - 1;

    while (size > 0) {
      this.queue.push(null);
      size--;
    }
  }

  print() {
    return this.queue;
  }

  enqueue(item) {
    // Only change code below this line

    // Only change code above this line
  }

  dequeue() {
    // Only change code below this line

    // Only change code above this line
  }
}
```

# --solutions--

```js
class CircularQueue {
  constructor(size) {
    this.queue = [];
    this.read = 0;
    this.write = 0;
    this.max = size - 1;

    while (size > 0) {
      this.queue.push(null);
      size--;
    }
  }

  print() {
    return this.queue;
  }

  enqueue(item) {
    // Only change code below this line
    console.log(this.write, this.max);
    if (this.queue[this.write] === null) {
      this.queue[this.write++] = item;

      if (this.write > this.max) {
        this.write = 0;
      }
      return item;
    }
    return null;
    // Only change code above this line
  }

  dequeue() {
    // Only change code below this line
    if (this.queue[this.read] !== null) {
      let item = this.queue[this.read];
      this.queue[this.read++] = null;
      if (this.read > this.max) {
        this.read = 0;
      }
      return item;
    }
    return null;
    // Only change code above this line
  }
}
```
